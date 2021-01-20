const deserializeJSValue = (value) => JSON.parse(Buffer.from(value, 'base64'));
const all = require('hast-util-to-mdast/lib/all');
const { mdxAttribute } = require('../../../codemods/utils/mdxast-builder');

const deserializeAttributeValue = (node) => {
  if (node.type === 'text') {
    return node.value;
  }

  throw new Error('Unable to deserialize attribute');
};

const deserializeComponent = (h, node) => {
  const { dataComponent, dataProps } = node.properties;
  const props = deserializeJSValue(dataProps);
  const childrenProp = node.children.find(
    (child) => child.properties.dataProp === 'children'
  );

  const attributes = node.children
    .filter((child) => child.properties.dataProp !== 'children')
    .reduce((attributes, node) => {
      const { dataProp: name } = node.properties;
      const value = deserializeAttributeValue(node.children[0]);
      const idx = attributes.findIndex((attr) => attr.name === name);

      return idx === -1
        ? [...attributes, mdxAttribute(name, value)]
        : [
            ...attributes.slice(0, idx),
            mdxAttribute(name, value),
            ...attributes.slice(idx + 1),
          ];
    }, props);

  return h(
    node,
    'mdxBlockElement',
    { name: dataComponent, attributes },
    all(h, childrenProp)
  );
};

module.exports = { deserializeComponent, deserializeJSValue };
