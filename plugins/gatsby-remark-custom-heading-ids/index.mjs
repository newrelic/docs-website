import visitor from './utils/visitor.mjs';

export default ({ markdownAST }, pluginOptions) => {
  visitor(pluginOptions)(markdownAST);

  return markdownAST;
};
