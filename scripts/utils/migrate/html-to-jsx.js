// htmltojsx fails us when we are transforming content with already transformed
// markdown (like the table). This module seeks to be a VERY lightweight, albeit
// incomplete implementation of that module. This module DOES NOT handle every
// edge case and only seeks to transform tags/attributes that we know about.

const quote = (str) => `"${str}"`;
const jsxExpression = (value) => `{${value}}`;

const kebabToCamelCase = (str) => {
  return str.replace(/-(.)/g, (match, chr) => chr.toUpperCase());
};

const DIGITS_ONLY = /^\d+$/;

const MAPPED_ATTRIBUTES = {
  class: 'className',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
};

const TRANSFORMS = {
  colspan: jsxExpression,
  rowspan: jsxExpression,
  style: (value) => {
    const styles = value.split(';').reduce((styles, style) => {
      const idx = style.indexOf(':');
      const key = style.substr(0, idx).trim().toLowerCase();
      // don't capitalize -ms- prefix
      const jsxKey = /^-ms-/.test(key)
        ? kebabToCamelCase(key.substring(1))
        : kebabToCamelCase(key);
      const value = style.substr(idx + 1).trim();

      return jsxKey === ''
        ? styles
        : {
            ...styles,
            [jsxKey]: value,
          };
    }, {});

    const objectString = Object.entries(styles)
      .map(([key, value]) =>
        [key, typeof value === 'number' ? value : quote(value)].join(': ')
      )
      .join(', ');

    return jsxExpression(`{ ${objectString} }`);
  },
  width: (value) =>
    DIGITS_ONLY.test(value) ? jsxExpression(value) : quote(value),
};

const DEFAULT_TRANSFORM = quote;

const STRIP_ATTRIBUTES = [
  // deprecated
  'valign',
];

const htmlToJSXAttributes = (element) => {
  return Array.from(element.attributes)
    .filter((attr) => !STRIP_ATTRIBUTES.includes(attr.name))
    .map((attr) => {
      const transform = TRANSFORMS[attr.name] || DEFAULT_TRANSFORM;
      const name = MAPPED_ATTRIBUTES[attr.name] || attr.name;

      return [name, transform(attr.value)].join('=');
    })
    .join(' ');
};

const toJSX = (element, content) => {
  const tag = element.nodeName.toLowerCase();
  const openingTag = `<${[tag, htmlToJSXAttributes(element)]
    .filter(Boolean)
    .join(' ')}>`;

  const closingTag = `</${tag}>`;

  return [openingTag, content, closingTag].join('\n');
};

module.exports = toJSX;
