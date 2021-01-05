const fs = require('fs');
const path = require('path');
const unified = require('unified');
const toHast = require('mdast-util-to-hast');
const html = require('rehype-stringify');
const removeImports = require('remark-mdx-remove-imports');
const removeExports = require('remark-mdx-remove-exports');

const htmlGenerator = unified().use(removeImports).use(removeExports).use(html);

exports.onPostBuild = async ({ graphql, store }) => {
  const { program } = store.getState();

  const query = `query {
    allMdx(filter: {fileAbsolutePath: {regex: "/src/content/docs/"}}) {
      nodes {
        mdxAST
        slug
      }
    }
  }`;

  try {
    const { data } = await graphql(query);

    data.allMdx.nodes.forEach((node) => {
      const { slug, mdxAST } = node;

      const filepath = path.join(program.directory, 'public', `${slug}.json`);

      const transformedAST = htmlGenerator.runSync(mdxAST);
      const html = htmlGenerator.stringify(toHast(transformedAST));
      const result = { body: html };

      fs.writeFileSync(filepath, JSON.stringify(result));
    });
  } catch (error) {
    console.error(`Unable to fetch data for JSON: ${error}`);
  }
};
