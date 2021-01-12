const fetch = require('node-fetch');

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

const url = process.argv[2];

const fetchFiles = async (url) => {
  const res = await fetch(url);
  const files = await res.json();

  const fileNames = files
    .map((file) => file.filename)
    .filter((filename) => filename.slice(-3) === 'mdx');

  console.log(fileNames);
};

fetchFiles(url);
