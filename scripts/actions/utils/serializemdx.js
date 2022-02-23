const fs = require('fs');
const serializeMDX = require('../serialize-mdx');
const path = require('path');

const filePath =
  '../../../src/content/docs/apm/apm-ui-pages/monitoring/apm-summary-page-view-transaction-apdex-usage-data.mdx';

const main = async () => {
  const mdx = fs.readFileSync(filePath);
  const html = await serializeMDX(mdx);
  console.log(html);
};

main(); // .then((res) => console.log(res));
