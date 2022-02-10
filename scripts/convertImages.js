const fs = require('fs');
const path = require('path');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const visit = require('unist-util-visit');
const u = require('unist-builder');
// const compile = require('@mdx-js/mdx');
// const rehypeParse = require('rehype-parse');
// const remark2rehype = require('remark-rehype');
const frontmatter = require('remark-frontmatter');
const remarkStringify = require('remark-stringify');
const { log } = require('console');

const filePath = path.join(
  process.cwd(),
  'src/content/docs/accounts/original-accounts-billing/original-users-roles/user-migration.mdx'
);

const images = () => {
  const absoluteUrlPattern = /^(https?:)?\//;
  const relativePathPattern = /\.\.?\/images/;

  // return transformer;
  return (tree, file) => {
    visit(tree, 'image', (node, index, parent) => {
      // Maybe reference https://github.com/remcohaszing/remark-mdx-images
      // for hints on what we need to do
      // log(node);

      let { alt = null, title, url } = node;

      if (absoluteUrlPattern.test(url)) {
        return;
      }

      if (relativePathPattern.test(url)) {
        // node.url = node.url.replace('./', '');
        node = u(
          'mdxBlockElement',
          {
            name: 'img',
            attributes: [
              {
                type: 'mdxAttribute',
                name: 'src',
                value: {
                  type: 'mdxValueExpression',
                  value: 'migratePage1',
                },
              },
            ],
            position: node.position,
          },
          []
        );
        return node;
      }
    });
    // visit(tree, 'mdxBlockElement', (node) => {
    //   // Maybe reference https://github.com/remcohaszing/remark-mdx-images
    //   // for hints on what we need to do
    //   log(node);

    //   node.url = 'images/stuff';

    //   return node;
    // });
  };
};

const mdxFile = fs.readFileSync(path.join(filePath));

const processor = unified()
  .use(remarkParse)
  .use(images)
  .use(remarkStringify, {
    bullet: '*',
    fences: true,
    listItemIndent: '1',
  })
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(frontmatter, ['yaml']);
const main = async () => {
  const { contents } = await processor.process(mdxFile);

  fs.writeFileSync(path.join(process.cwd(), 'newMdx.mdx'), contents, 'utf-8');
};

main();
