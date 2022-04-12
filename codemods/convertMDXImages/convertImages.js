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
const fencedCodeBlock = require('../fencedCodeBlock');
const slugify = require('../../scripts/utils/slugify');
const {
  addImportToSet,
  generateRestOfAttributes,
  createImportName,
  createStylingAttribute,
  createClassAttribute,
  createUpdatedSrcNode,
} = require('./helpers');

/**
 * Function handles:
 * 1) Replacing existing import statements with aliased images path
 * 2) Converts MDX Image URLs to img tags, along with adding necessary
 *    imports added to the top of the mdx file, below the yaml. If an
 *    image already exists at the top of the file, the converted img tag
 *    will reuse existing import.
 * 3) When a new image tag is created, it handles making it inline if the parent
 *    of the img tag is a header, or similar inline components.
 * 4) If an image tag contains parent "ImageSizing", we transfer the properties from
 *    ImageSizing and add it to the image tag, then removing the parent.
 */
const convertImages = () => {
  const absoluteUrlPattern = /^(https?:)?\//;
  const relativePathPattern = /\.\.?\/images/;
  const startsWithNumberPattern = /^\d/;
  const startsWithNonAlpha = /^[^A-Z, ^a-z]/;

  // return transformer;
  return (tree, _) => {
    // Set<string>
    const imports = new Set();

    // Set<string, string>
    const existingImports = new Map();
    visit(
      tree,
      (node) =>
        ['image', 'import', 'mdxBlockElement', 'mdxSpanElement'].includes(
          node.type
        ),
      (node, index, parent) => {
        // if a node is an import type, we want to replace the relative
        // URL to an absolute URL. Then, add that nodeURL to existing
        // imports that already exist in the .mdx file.
        if (node.type === 'import') {
          node.value = node.value.replace('./images/', 'images/');
          const nodeValueUrl = node.value.split(' ');

          // adds mapping from imageURL -> imageName
          existingImports.set(
            nodeValueUrl[nodeValueUrl.length - 1].normalize(),
            nodeValueUrl[1]
          );
        }

        // If we are looking at an img node, we want to check
        // whether the src attribute contains a relative path.
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
            let importName = createImportName(url);

            // use alt text if importName starts with numbers
            // or non-alphabetical characters
            if (
              startsWithNumberPattern.test(importName) ||
              startsWithNonAlpha.test(importName)
            ) {
              importName = camelCase(
                slugify(
                  `img-${imports.size + existingImports.size}`.concat(alt)
                )
              );
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

            // If existingImports has an image URL mapped to an imageName,
            // we can reuse that as the import name to help miss-naming imports
            else {
              importName =
                existingImports.get(`'${nodeUrl}'`.normalize()) ||
                existingImports.get(`'${nodeUrl}';`.normalize());
            }

            const attributes = [];

            // If we're inside an ImageSizing component, get style props off it,
            // add them to img tag, and replace ImageSizing parent with img element
            if (parent.name === 'ImageSizing') {
              const styleAttributeNode = createStylingAttribute(parent);
              const classAttributeNode = createClassAttribute();
              attributes.push(styleAttributeNode);
              attributes.push(classAttributeNode);
            }

            const restOfAttributes = generateRestOfAttributes(node);

            attributes.push(...restOfAttributes);

            const updatedSrcNode = createUpdatedSrcNode(importName);
            attributes.push(updatedSrcNode);

            const mdxElement =
              parent.name === 'ImageSizing' || parent.type === 'heading'
                ? 'mdxSpanElement'
                : 'mdxBlockElement';

            node = u(
              mdxElement,
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

    // visit the tree and add image imports to top of the file.
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

    // Once imports are added and MDX Images have been converted,
    // remove the parent of the new img tag as it is not needed.
    visit(
      tree,
      (node) => node.name === 'ImageSizing',
      (node, index, parent) => {
        parent.children.splice(index, 1, ...node.children);
      }
    );
  };
};

/**
 * Function constructs an AST from a given path that points to an mdx file.
 * Outputs a json file at the root of directory named 'mdxAst.json'
 */
// eslint-disable-next-line no-unused-vars
const createAST = () => {
  const filePath = path.join(
    process.cwd(),
    'src/content/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent.mdx'
  );

  const mdxFile = fs.readFileSync(path.join(filePath));

  const mdxAst = unified()
    .use(remarkParse)
    .use(remarkStringify, {
      bullet: '*',
      fences: true,
      listItemIndent: '1',
    })
    .use(remarkMdx)
    .use(remarkMdxjs)
    .use(frontmatter, ['yaml'])
    .use(convertImages)
    .parse(mdxFile);

  fs.writeFileSync(
    path.join(process.cwd(), 'mdxAst.json'),
    JSON.stringify(mdxAst, null, 2),
    'utf-8'
  );
};

/**
 * Main function to run convertImages. Can accept command line argument
 * that has the path to an mdx file. Otherwise, convertImages gets ran
 * on every mdx file.
 * @returns {Array} - Resolved results from Promise
 */
const runConvertImages = async (paths = []) => {
  let filePaths = [];
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

  if (paths.length === 1) {
    filePaths = glob.sync(path.join(process.cwd(), paths[0]));
  }

  if (paths.length === 0) {
    filePaths = glob.sync(
      path.join(
        __dirname,
        '../../src{/content/**/*.mdx,/i18n/content/**/*.mdx}'
      )
    );
  }

  console.log('Applying codemod to the following files:', filePaths);

  const allResults = await Promise.all(
    filePaths.map(async (filePath) => {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const { contents } = await processor.process(fileData);
      fs.writeFileSync(filePath, contents, 'utf-8');
    })
  );

  return allResults;
};

module.exports = { runConvertImages };
