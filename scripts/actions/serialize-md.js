const handlers = require('./utils/handlers');
const fencedCodeBlock = require('../../codemods/fencedCodeBlock');
const unified = require('unified');
const toMDAST = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const remark2rehype = require('remark-rehype');
const addClasses = require('rehype-add-classes');
const html = require('rehype-stringify');
const format = require('rehype-format');
const customHeadingIds = require('../../plugins/gatsby-remark-custom-heading-ids/utils/visitor');

const processor = unified()
  .use(toMDAST)
  .use(frontmatter, ['yaml'])
  .use(fencedCodeBlock)
  .use(customHeadingIds)
  .use(remark2rehype, {
    handlers: {
      yaml: handlers.frontmatter.serialize,
    },
  })
  .use(format)
  .use(html)
  .use(addClasses, {
    // adds notranslate class to <code> elements
    code: 'notranslate',
  });

const serializeMD = async (md) => {
  const { contents } = await processor.process(md);

  return contents;
};

module.exports = serializeMD;
