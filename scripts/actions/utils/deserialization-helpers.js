const deserializeJSValue = (value) => JSON.parse(Buffer.from(value, 'base64'));
const all = require('hast-util-to-mdast/lib/all');

const deserializeComponent = (h, node) => {
  const { dataComponent, dataProps } = node.properties;
  const attributes = deserializeJSValue(dataProps);
  const childrenProp = node.children.find(
    (child) => child.properties.dataProp === 'children'
  );

  return h(
    node,
    'mdxBlockElement',
    { name: dataComponent, attributes },
    all(h, childrenProp)
  );
};

module.exports = { deserializeComponent, deserializeJSValue };
