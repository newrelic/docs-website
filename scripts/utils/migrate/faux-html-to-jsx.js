// htmltojsx fails us when we are transforming content with already transformed
// markdown (like the table). This module seeks to be a VERY lightweight, albeit
// incomplete implementation of that module. This module DOES NOT handle every
// edge case and only seeks to transform tags/attributes that we know about.

const MAPPED_ATTRIBUTES = {
  class: 'className',
  colspan: 'colSpan',
  id: 'id',
  rowspan: 'rowSpan',
  style: 'style',
  width: 'width',
};

const DEPRECATED_ATTRIBUTES = {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
  table: ['align', 'border', 'cellspacing', 'cellpadding', 'height'],
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
  th: ['scope', 'valign'],
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
  td: ['align'],
};

const DIGITS_ONLY = /^\d+$/;

const quote = (str) => `"${str}"`;
const jsxExpression = (value) => `{${value}}`;

const TRANSFORMS = {
  colspan: jsxExpression,
  rowspan: jsxExpression,
  style: (value) => {
    const styles = value.split(';').reduce((styles, style) => {
      const idx = style.indexOf(':');
      const key = style.substr(0, idx).toLowerCase();
      const value = style.substr(idx + 1).trim();

      return key === '' ? styles : { ...styles, [toJSXKey(key)]: value };
    }, {});

    return jsxExpression(toJSXObject(styles));
  },
  width: (value) =>
    DIGITS_ONLY.test(value) ? jsxExpression(value) : quote(value),
};

const DEFAULT_TRANSFORM = quote;

const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

const kebabToCamelCase = (str) => {
  return str.replace(/-(.)/g, (match, chr) => chr.toUpperCase());
};

const toJSXKey = (key) =>
  /^-ms-/.test(key)
    ? kebabToCamelCase(key.substring(1).trim())
    : kebabToCamelCase(key.trim());

const toJSXValue = (value) =>
  typeof value === 'number' ? value : quote(value);

const toJSXObject = (obj) => {
  const objectString = Object.entries(obj)
    .map(([key, value]) => [key, toJSXValue(value)].join(': '))
    .join(', ');

  return `{ ${objectString} }`;
};

const htmlToJSXAttributes = (element, file) => {
  const attributes = Array.from(element.attributes).filter((attr) => {
    const deprecatedAttrs =
      DEPRECATED_ATTRIBUTES[element.nodeName.toLowerCase()] || [];

    return !deprecatedAttrs.includes(attr.name);
  });

  const unhandledAttributes = attributes
    .filter((attr) => !hasOwnProperty(MAPPED_ATTRIBUTES, attr.name))
    .map((attr) => `'${attr.name}'`);

  if (unhandledAttributes.length > 0) {
    file.message(
      `The following attributes are set on the element '${element.nodeName.toLowerCase()}' and will be discarded: ${unhandledAttributes.join(
        ', '
      )}`,
      null,
      'faux-html-to-jsx'
    );
  }

  return attributes
    .filter((attr) => hasOwnProperty(MAPPED_ATTRIBUTES, attr.name))
    .map((attr) => {
      const transform = TRANSFORMS[attr.name] || DEFAULT_TRANSFORM;
      const name = MAPPED_ATTRIBUTES[attr.name] || attr.name;

      return [name, transform(attr.value)].join('=');
    })
    .join(' ');
};

const toJSX = (element, content, file) => {
  const tag = element.nodeName.toLowerCase();
  const openingTag = `<${[tag, htmlToJSXAttributes(element, file)]
    .filter(Boolean)
    .join(' ')}>`;

  const closingTag = `</${tag}>`;

  return [openingTag, content, closingTag].join('\n');
};

module.exports = toJSX;
