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
const slugify = require('./utils/slugify');

const addImportToSet = (imports, importName, nodeUrl) => {
  const importString = `import ${importName} from '${nodeUrl}'`;
  imports.add(importString);
};

const generateStyleObjectString = (obj) => {
  return `{${Object.entries(obj)
    .map((item) => ` ${item[0]}: '${item[1]}'`)
    .join(',')}}`;
};

const generateRestOfAttributes = (node) => {
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

  return restOfAttributes;
};

const convertImages = () => {
  const absoluteUrlPattern = /^(https?:)?\//;
  const relativePathPattern = /\.\.?\/images/;
  const startsWithNumberPattern = /^\d/;
  const startsWithNonAlpha = /^[^A-Z, ^a-z]/;

  // return transformer;
  return (tree, file) => {
    const imports = new Set();
    const existingImports = new Set();
    visit(
      tree,
      (node) =>
        ['image', 'import', 'mdxBlockElement', 'mdxSpanElement'].includes(
          node.type
        ),
      (node, index, parent) => {
        // if a node an import type, we want to replace the relative
        // URL to an absolute URL. Then, add that nodeURL to existing
        // imports that already exist in the .mdx file.
        if (node.type === 'import') {
          node.value = node.value.replace('./images/', 'images/');
          const nodeValueUrl = node.value.split(' ');
          existingImports.add(
            nodeValueUrl[nodeValueUrl.length - 1].normalize()
          );
        }

        // If we are looking at an img node, we want to check
        // weather the src attribute contains a relative path.
        if (node.type === 'mdxBlockElement' && node.name === 'img') {
          const shouldUpdate = Boolean(
            node.attributes.find(
              (child) =>
                child.name === 'src' &&
                relativePathPattern.test(child.value.value)
            )
          );

          // Update the relative path URL to an absolute path
          if (shouldUpdate) {
            node.attributes.reduce(async (accum, curr) => {
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
        // markdown images
        if (node.type === 'image') {
          const { url, alt } = node;

          // early return if absolute path
          if (absoluteUrlPattern.test(url)) {
            return;
          }

          // grab the import name
          if (relativePathPattern.test(url)) {
            let importName = camelCase(
              url
                .replace('./images/', '')
                .replace(/\.(png|jpg|jpeg|svg|gif)/i, '')
                .replaceAll('%', 'img')
            );

            // use alt text if importName starts with numbers
            // or non-alphabetical characters
            if (
              startsWithNumberPattern.test(importName) ||
              startsWithNonAlpha.test(importName)
            ) {
              importName = startsWithNonAlpha.test(alt)
                ? camelCase(
                    slugify(
                      `img-${imports.size + existingImports.size}`.concat(alt)
                    )
                  )
                : camelCase(slugify(alt));
            }

            const nodeUrl = url.replace('./images/', 'images/');

            // This ensures we do not add duplicate imports at the top of
            // the mdx file
            if (
              !existingImports.has(`'${nodeUrl}'`.normalize()) &&
              !existingImports.has(`'${nodeUrl}';`.normalize())
            ) {
              addImportToSet(imports, importName, nodeUrl.replaceAll('%', '_'));
            }

            const attributes = [];

            // If we're inside an ImageSizing component, get style props off it,
            // add them to img tag, and replace ImageSizing parent with img element
            if (parent.name === 'ImageSizing') {
              const styleAttributeNode = {
                type: 'mdxAttribute',
                name: 'style',
                value: {
                  type: 'mdxValueExpression',
                  value: null,
                },
              };

              const style = {};

              parent.attributes.forEach(({ name, value }) => {
                style[name] = value;
              });

              styleAttributeNode.value.value = generateStyleObjectString(style);
              attributes.push(styleAttributeNode);
            }

            const restOfAttributes = generateRestOfAttributes(node);

            attributes.push(...restOfAttributes);

            const updatedSrcNode = {
              type: 'mdxAttribute',
              name: 'src',
              value: {
                type: 'mdxValueExpression',
                value: importName,
              },
            };
            attributes.push(updatedSrcNode);

            node = u(
              parent.name === 'ImageSizing' || parent.type === 'heading'
                ? 'mdxSpanElement'
                : 'mdxBlockElement',
              {
                name: 'img',
                attributes: attributes,
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
      if (imports.size > 0) {
        const [head, ...tail] = node.children;
        const importNode = u('paragraph', {
          type: 'text',
          value: [...imports].join('\n\n'),
        });
        node.children = [head, importNode, ...tail];
      }
    });
    visit(
      tree,
      (node) => node.name === 'ImageSizing',
      (node, index, parent) => {
        parent.children.splice(index, 1, ...node.children);
      }
    );
  };
};
// Use to look through AST
// const filePath = path.join(
//   process.cwd(),
//   'src/content/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent.mdx'
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
    filePaths = glob.sync(
      `${__dirname}/../src{/content/**/*.mdx,/i18n/content/**/*.mdx}`
    );
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
