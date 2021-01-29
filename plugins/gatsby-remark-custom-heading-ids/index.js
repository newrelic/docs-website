const visitor = require('./utils/visitor');

module.exports = ({ markdownAST }, pluginOptions) => {
  visitor(pluginOptions)(markdownAST);

  return markdownAST;
};
