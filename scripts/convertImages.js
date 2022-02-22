const fs = require('fs');
const path = require('path');
const glob = require('glob');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const visit = require('unist-util-visit');
const u = require('unist-builder');
const camelCase = require('camelcase');
const frontmatter = require('remark-frontmatter');
const remarkStringify = require('remark-stringify');
const fencedCodeBlock = require('../codemods/fencedCodeBlock');

const convertImages = () => {
  const absoluteUrlPattern = /^(https?:)?\//;
  const relativePathPattern = /\.\.?\/images/;
  const startsWithNumberPattern = /^\d/;

  // return transformer;
  return (tree, file) => {
    const imports = [];
    visit(
      tree,
      (node) => ['image', 'import', 'mdxBlockElement'].includes(node.type),
      (node, index, parent) => {
        if (node.type === 'import') {
          node.value = node.value.replace('./images/', 'images/');
        }
        if (node.type === 'mdxBlockElement' && node.name === 'img') {
          const shouldUpdate = Boolean(
            node.attributes.find(
              (child) =>
                child.name === 'src' &&
                relativePathPattern.test(child.value.value)
            )
          );
          if (shouldUpdate) {
            node.attributes.reduce((accum, curr) => {
              if (curr.name === 'src') {
                curr.value.value = curr.value.value.replace(
                  './images/',
                  'images/'
                );
              }
              return [...accum, curr];
            }, []);
          }
        }
        if (node.type === 'image') {
          const { url, alt } = node;

          if (absoluteUrlPattern.test(url)) {
            return;
          }

          if (relativePathPattern.test(url)) {
            let importName = camelCase(
              node.url
                .replace('./images/', '')
                .replace(/\.(png|jpg|jpeg|svg|gif)/i, '')
            );
            if (startsWithNumberPattern.test(importName)) {
              importName = camelCase(alt);
            }
            const importString = `import ${importName} from '${node.url.replace(
              './',
              ''
            )}'`;
            imports.push(importString);

            const restOfAttributes = Object.entries(node).reduce(
              (accum, [key, value]) => {
                let attributeNodeObj = {};
                if (['title', 'alt'].includes(key) && value) {
                  attributeNodeObj = {
                    type: 'mdxAttribute',
                    name: key,
                    value,
                  };
                }
                return Object.keys(attributeNodeObj).length > 0
                  ? [...accum, attributeNodeObj]
                  : [...accum];
              },
              []
            );
            const updatedSrcNode = {
              type: 'mdxAttribute',
              name: 'src',
              value: {
                type: 'mdxValueExpression',
                value: importName,
              },
            };
            node = u(
              'mdxBlockElement',
              {
                name: 'img',
                attributes: [updatedSrcNode, ...restOfAttributes],
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
      if (imports.length > 0) {
        const [head, ...tail] = node.children;
        const importNode = u('paragraph', {
          type: 'text',
          value: imports.join('\n\n'),
        });
        node.children = [head, importNode, ...tail];
      }
    });
  };
};

// const filePath = path.join(
//   process.cwd(),
//   'src/content/docs/apm/agents/c-sdk/get-started/introduction-c-sdk.mdx'
// );

// const mdxFile = fs.readFileSync(path.join(filePath));

// const mdxAst = unified()
//   .use(remarkParse)
//   .use(remarkStringify, {
//     bullet: '*',
//     fences: true,
//     listItemIndent: '1',
//   })
//   .use(remarkMdx)
//   .use(remarkMdxjs)
//   .use(frontmatter, ['yaml'])
//   .use(convertImages)
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
  .use(fencedCodeBlock)
  .use(convertImages);

const main = async () => {
  let filePaths = process.argv.slice(2);
  if (filePaths.length === 1) {
    filePaths = glob.sync(path.join(process.cwd(), filePaths[0], '**/*.mdx'));
  }

  if (filePaths.length === 0) {
    filePaths = glob.sync(`${__dirname}/../src/content/**/*.mdx`);
  }

  const allResults = await Promise.all(
    filePaths.map(async (filePath) => {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const { contents } = await processor.process(fileData);
      fs.writeFileSync(filePath, contents, 'utf-8');
    })
  );

  const results = allResults.filter(Boolean);

  console.log(results);
  console.log(`Failed file count: ${results.length}`);
};

main();
