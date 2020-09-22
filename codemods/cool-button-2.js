module.exports = ({ types: t }) => {
  return {
    visitor: {
      JSXIdentifier(path) {
        if (t.isJSXIdentifier(path.node, { name: 'CoolButton' })) {
          path.replaceWith(t.jsxIdentifier('CoolButton2'));
        }
      },
    },
  };
};
