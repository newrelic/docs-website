/* eslint-disable no-console */
const fs = require('fs');
const yaml = require('js-yaml');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const frontmatter = require('remark-frontmatter');
const remarkStringify = require('remark-stringify');
const fencedCodeBlock = require('../codemods/fencedCodeBlock');
const getFilesRecursively = require('./utils/getFilesRecursively');

const convertFrontmatter = () => {
  const transformer = (tree) => {
    if (tree?.children[0]?.type === 'yaml') {
      const frontmatterObj = yaml.load(tree.children[0].value);
      frontmatterObj.translation = { machine: ['jp', 'kr'] };
      if (frontmatterObj.translate) {
        frontmatterObj.translation.human = frontmatterObj.translate;
        frontmatterObj.translation.machine = frontmatterObj.translation.machine.filter(
          (locale) => !frontmatterObj.translation.human.includes(locale)
        );
        delete frontmatterObj.translate;
        if (frontmatterObj.translation.machine.length === 0) {
          delete frontmatterObj.translation.machine;
        }
      }
      const frontmatterStr = yaml
        .dump(frontmatterObj, { lineWidth: -1 })
        .trim();
      tree.children[0].value = frontmatterStr;
      return tree;
    }
  };

  return transformer;
};
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
  .use(convertFrontmatter);

const getAllFrontmatter = (path) => {
  const files = getFilesRecursively(path);

  files.forEach(async (filepath) => {
    try {
      const fileData = fs.readFileSync(filepath, 'utf8');
      const { contents } = await processor.process(fileData);
      fs.writeFileSync(filepath, contents, 'utf-8');
    } catch (err) {
      console.log(err.reason, `\n \x1b[31m${filepath}\x1b[0m \n`);
    }
  });
};

getAllFrontmatter('src/content/docs');
