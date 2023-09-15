import { u } from 'unist-builder';

export const mdxAttribute = (name, value) => u('mdxAttribute', { name, value });
export const mdxValueExpression = (value) => u('mdxValueExpression', value);
export const mdxBlockExpression = (value) => u('mdxBlockExpression', value);
export const mdxSpanExpression = (value) => u('mdxSpanExpression', value);

export const mdxSpanElement = (name, attributes = [], children = []) =>
  u('mdxSpanElement', { attributes, name }, children);

export const mdxBlockElement = (name, attributes = [], children = []) =>
  u('mdxBlockElement', { attributes, name }, children);

export const mdxImport = (expression, path) =>
  u('import', `import ${expression} from '${path}'`);
