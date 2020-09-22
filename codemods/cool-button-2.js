module.exports = ({ types: _t }) => {
  return {
    visitor: {
      JSXIdentifier(path) {
        if (path.node.name === 'CoolButton') {
          path.node.name = 'CoolButton2';
        }
      },
    },
  };
};
