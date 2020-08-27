const { read, write } = require('to-vfile');
const remark = require('remark');
const mdx = require('remark-mdx');
const yaml = require('js-yaml');

(async () => {
  const path = './test.mdx';
  const file = await read(path);
  const contents = await remark()
    .use(mdx)
    .use(() => (tree) => {
      const doc = yaml.safeLoad(tree.children[1].children[0].value);
      console.log(tree);
      console.log(doc);
    })
    .process(file);
  await write({
    path,
    contents,
  });
})();
