module.exports = async ({ markdownAST }, pluginOptions) => {
  const visitor = await import('./utils/visitor.mjs');

  visitor(pluginOptions)(markdownAST);

  return markdownAST;
};
