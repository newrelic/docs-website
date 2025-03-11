const fs = require('fs');
const path = require('path');
const glob = require('glob');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const visit = require('unist-util-visit');
const SKIP = require('unist-util-visit');
const frontmatter = require('remark-frontmatter');
const remarkStringify = require('remark-stringify');
const fencedCodeBlock = require('./actions/utils/fencedCodeBlock');

/**
 * 1. Parse file.
 * 2 if import,
 *  - add to import array as an object with attributes as keys
 *  - delete import from file
 * 3. check if <img> OR component with img tag in an attribute (mdxValueExpresssion ex: techtile, collpaser)
 * - pull the info from it's matching import statement
 *  to replace its 'src' attribute
 **/

let allImports = {};

const convertImages = () => (tree) => {
  visit(
    tree,
    (node) => ['import'].includes(node.type),
    (node, index, parent) => {
      const importData = node.value.split(' ');

      const importConst = importData[1];
      const importPath = importData[3]
        .replace(/"|'/g, '')
        .replace('images/', '/images/');

      allImports[importConst] = importPath;
      parent.children.splice(index, 1);
      // Skipping the removed node to avoid bugs caused by changing the tree while traversing it.
      return [SKIP, index];
    }
  );

  visit(
    tree,
    (node) =>
      node.attributes?.some(
        // some components have images embeded in their attributes
        // ex: techtile icons, collapser titles
        (attr) => attr?.value?.type === 'mdxValueExpression'
      ),
    (node) => {
      const newAttributes = node.attributes.map((attr) => {
        if (
          attr.value.type === 'mdxValueExpression' &&
          attr.value.value.includes('src={')
        ) {
          let attribute = attr.value.value;
          // some collapsers have multiple images in a single title
          // ex: src/i18n/content/pt/docs/infrastructure/host-integrations/installation/install-infrastructure-host-integrations.mdx
          const oldSrcs = Array.from(attribute.matchAll(/src=\{(.*?)\}/g));
          oldSrcs.forEach((src) => {
            const oldSrc = src[1];
            attribute = attribute.replace(
              /src=\{.*?\}/,
              `src="${allImports[oldSrc]}"`
            );
            console.log(
              `🧱${node.name.toUpperCase()}: replacing ${oldSrc} with ${
                allImports[oldSrc]
              }`
            );
            return src;
          });
          attr.value.value = attribute;

          return attr;
        }
        return attr;
      });
      node.attributes = newAttributes;
    }
  );

  visit(
    tree,
    (node) => ['img'].includes(node.name),
    (node) => {
      const newAttributes = node.attributes.map((attr) => {
        if (attr.name === 'src' && attr.value.type === 'mdxValueExpression') {
          const attribute = attr.value.value;
          attr.value = allImports[attribute];
          console.log(
            `🌠IMG: replacing ${attribute} with ${allImports[attribute]}`
          );
          return attr;
        }
        return attr;
      });
      node.attributes = newAttributes;
    }
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
    filePaths = glob.sync('src/install/**/*.mdx');
  }

  const allResults = await Promise.all(
    filePaths.map(async (filePath) => {
      allImports = {};
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const { contents } = await processor.process(fileData);
      fs.writeFileSync(filePath, contents, 'utf-8');
    })
  );

  console.log(`Applied codemod to ${filePaths?.length} files`);
  return allResults;
};

runConvertImages();
