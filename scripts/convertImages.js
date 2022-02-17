const fs = require('fs');
const path = require('path');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const visit = require('unist-util-visit');
const u = require('unist-builder');
const camelCase = require('camelcase');
const frontmatter = require('remark-frontmatter');
const remarkStringify = require('remark-stringify');

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
    visit(
      tree,
      (node) => ['image', 'import'].includes(node.type),
      (node, index, parent) => {
        if (node.type === 'import') {
          node.value = node.value.replace('./images/', 'images/');
        }
        if (node.type === 'image') {
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
        }
      }
    );
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
//   .use(remarkMdxjs)
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
  fs.writeFileSync(filePath, contents, 'utf-8');
};

main();
