const handlers = require('../../codemods/serialize/components-to-html');
const indentedCodeBlock = require('../../codemods/indentedCodeBlock');
const unified = require('unified');
const toMDAST = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const format = require('rehype-format');
const vfileGlob = require('vfile-glob');
const vfile = require('vfile');
const { writeSync } = require('to-vfile');
const path = require('path');
const all = require('mdast-util-to-hast/lib/all');

const TEST_DIR = 'src/html-test';

const mdxToHTML = (h, node) => {
  const handler = handlers[node.name];

  return handler ? handler.serialize(h, node) : all(h, node);
};

const processor = unified()
  .use(toMDAST)
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(frontmatter, ['yaml'])
  .use(indentedCodeBlock)
  .use(toMDAST)
  .use(remarkMdx)
  .use(remark2rehype, {
    handlers: {
      mdxSpanElement: mdxToHTML,
      mdxBlockElement: mdxToHTML,
    },
  })
  .use(format)
  .use(html);

// const run = async (file) => {
//   const processor = createProcessor({
//     codemods: [componentsToData],
//   });

//   try {
//     await processor.process(file);
//   } catch (e) {
//     file.fail(`${e.message}\n${e.stack}`);
//   }
// };

// vfileGlob('./src/content/**/*.mdx').subscribe(async (file) => {
//   await run(file);
//   writeSync(
//     vfile({
//       contents: file.contents,
//       path: path.join(
//         __dirname,
//         TEST_DIR,
//         file.path.split('.').slice(0, -1).join('.')
//       ),
//       extname: '.html',
//     }),
//     'utf-8'
//   );
// });

module.exports = processor;
