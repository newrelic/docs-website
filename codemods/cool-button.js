module.exports = ({ types: _t }) => {
  return {
    visitor: {
      JSXIdentifier(path) {
        if (path.node.name === 'Button') {
          path.node.name = 'CoolButton';
        }
      },
    },
  };
};
