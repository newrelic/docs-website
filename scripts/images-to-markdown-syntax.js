const fs = require('fs');
const path = require('path');
const glob = require('glob');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const visit = require('unist-util-visit');
const SKIP = require('unist-util-visit');
const u = require('unist-builder');
const frontmatter = require('remark-frontmatter');
const remarkStringify = require('remark-stringify');
const fencedCodeBlock = require('./actions/utils/fencedCodeBlock');

/**
 * 1. Parse file.
 * 2 if import,
 *  - add to import array as an object with attributes as keys
 *  - delete import from file
 * 3. if <img>
 *  - restructure to markdown syntax
 *  - pull the info from it's mating import statement
 **/

// TODO: confirm if whitespace changes are okay. they seem to be improving syntax highlighting

const allImports = {};

const convertImages = () => (tree) => {
  visit(
    tree,
    (node) => ['import'].includes(node.type),
    (node, index, parent) => {
      const importData = node.value.split(' ');

      const importConst = importData[1];
      const importPath = importData[3]
        .replace(/"|'/g, '')
        .replace('images/', '');
      const imgSrc = `https://docs-website-images.s3.us-east-2.amazonaws.com/${importPath}`;
      allImports[importConst] = imgSrc;

      parent.children.splice(index, 1);
      // Skipping the removed node to avoid bugs caused by changing the tree while traversing it.
      return [SKIP, index];
    }
  );
  visit(
    tree,
    (node) => ['img'].includes(node.name),
    (node, index, parent) => {
      const imgAttributes = {
        src: node.attributes.filter((attr) => attr.name === 'src')[0].value
          .value,
        title: node.attributes.filter((attr) => attr.name === 'title')[0].value,
        alt: node.attributes.filter((attr) => attr.name === 'alt')[0].value,
      };

      node = u('image', {
        title: imgAttributes.title,
        url: allImports[imgAttributes.src],
        alt: imgAttributes.alt,
        position: node.position,
      });
      parent.children.splice(index, 1, node);
      console.log(typeof imgAttributes.title);
      return index;
      //   parent.children.splice(index, 1, node);
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
    filePaths = glob.sync('src/content/docs/mlops/**/*.mdx');
  }

  console.log(`Applying codemod to ${filePaths?.length} files:`);

  const allResults = await Promise.all(
    filePaths.map(async (filePath) => {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const { contents } = await processor.process(fileData);
      fs.writeFileSync(filePath, contents, 'utf-8');
    })
  );

  return allResults;
};

runConvertImages();
