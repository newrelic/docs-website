const fs = require('fs');
const path = require('path');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const visit = require('unist-util-visit');
const u = require('unist-builder');
const camelCase = require('camelcase');
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
    const imports = [];
    visit(tree, 'image', (node, index, parent) => {
      // Maybe reference https://github.com/remcohaszing/remark-mdx-images
      // for hints on what we need to do

      let { alt = null, title, url } = node;

      if (absoluteUrlPattern.test(url)) {
        return;
      }

      if (relativePathPattern.test(url)) {
        const importName = camelCase(
          node.url.replace('./images/', '').replace(/\.(png|jpg)/i, '')
        );
        const importString = `import ${importName} from '${node.url.replace(
          './',
          ''
        )}'`;
        imports.push(importString);
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
                  value: importName,
                },
              },
            ],
            position: node.position,
          },
          []
        );

        parent.children.splice(index, 1, node);
      }
    });
    visit(tree, 'root', (node) => {
      const [head, ...tail] = node.children;
      const importNode = u('paragraph', {
        type: 'text',
        value: imports.join('\n\n'),
      });
      node.children = [head, importNode, ...tail];
    });
  };
};

const mdxFile = fs.readFileSync(path.join(filePath));

// const mdxAst = unified()
//   .use(remarkParse)
//   .use(frontmatter, ['yaml'])
//   .parse(mdxFile);

// fs.writeFileSync(
//   path.join(process.cwd(), 'mdxAst.json'),
//   JSON.stringify(mdxAst, null, 2),
//   'utf-8'
// );

const processor = unified()
  .use(remarkParse)
  .use(remarkStringify, {
    bullet: '*',
    fences: true,
    listItemIndent: '1',
  })
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(frontmatter, ['yaml'])
  .use(images);
const main = async () => {
  const { contents } = await processor.process(mdxFile);
  fs.writeFileSync(path.join(process.cwd(), 'newMdx.mdx'), contents, 'utf-8');
};

main();
