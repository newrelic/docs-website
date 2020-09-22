const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const transformJSX = (jsx, visitors) => {
  const ast = parse(jsx, {
    plugins: ['jsx'],
  });

  traverse(ast, visitors);

  return generate(ast).code.replace(/;$/, '');
};

module.exports = transformJSX;
