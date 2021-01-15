const { set, omit } = require('lodash');

const serializeComponent = (node) => {
  set(node, 'data.hName', 'div');
  set(node, 'data.hProperties.data-component', node.name);
  const stringifiedProps = Buffer.from(
    JSON.stringify(
      node.attributes.map((attribute) => {
        return omit(attribute, ['position']);
      })
    )
  ).toString('base64');
  set(node, 'data.hProperties.data-prop', stringifiedProps);
};

module.exports = serializeComponent;
