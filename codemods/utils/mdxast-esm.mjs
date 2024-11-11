import { unified } from 'unified11';
import remarkParse from 'remark-parse10';
import remarkFrontmatter from 'remark-frontmatter5';
import remarkMdx from 'remark-mdx2.3';
import remarkStringify from 'remark-stringify10';

export const createAST = (mdxText) => {
  const mdxAst = unified()
    .use(remarkParse)
    .use(remarkStringify, {
      bullet: '*',
      fences: true,
      listItemIndent: '1',
    })
    .use(remarkMdx)
    .use(remarkFrontmatter, ['yaml'])
    .parse(mdxText);

  return mdxAst;
};
