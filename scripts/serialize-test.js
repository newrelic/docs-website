const serializeMDX = require('./actions/serialize-mdx');
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

const run = async (file) => {
  console.log(`Transforming ${file}`);
  const mdx = fs.readFileSync(file);
  const html = await serializeMDX(mdx);
  const filepath = path.join(
    rootDir,
    `${path.basename(file, path.extname(file))}.html`
  );

  console.log(`Writing to ${filepath}`);
  fs.writeFileSync(filepath, html);
  console.log('Done');
};

run(process.argv[2]);
