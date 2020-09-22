const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');

const transformJSX = (jsx, plugins) => {
  const ast = parse(jsx, {
    plugins: ['jsx'],
  });

  const visitors = plugins.map((plugin) => plugin({ types }).visitor);
  const visitor = traverse.visitors.merge(visitors);

  traverse(ast, visitor);

  return generate(ast).code.replace(/;$/, '');
};

module.exports = transformJSX;
