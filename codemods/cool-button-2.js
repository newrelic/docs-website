module.exports = ({ types: t }) => {
  return {
    visitor: {
      JSXIdentifier(path) {
        if (t.isJSXIdentifier(path.node, { name: 'CoolButton' })) {
          path.node.name = 'CoolButton2';
        }
      },
    },
  };
};
