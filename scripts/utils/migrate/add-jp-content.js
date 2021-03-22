const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

/**
 * Given the filepath to a HTML file, this will fetch information about
 * the document (including the page content).
 *
 * @param {string} filepath
 * @returns {{type: string, title: string, body: string}}
 */
const getMDX = (filepath) => {
  try {
    const html = fs.readFileSync(filepath, 'utf8');
    const { document } = new JSDOM(html).window;

    const type = document.querySelector('meta[name="document_type"]').attributes
      .content.value;

    const titleNode =
      type == 'term_page_landing_page'
        ? document.querySelector('h1.text-center')
        : document.getElementById('page-title');

    const title = titleNode.textContent;
    const body = document.querySelector('[data-swiftype-name=body]').outerHTML;

    return { type, title, body };
  } catch (error) {
    console.log(`[!] Unable to fetch & process ${filepath}`);
    console.error(error);
  }
};
/**
 * Given a directory, this will create MDX files for JP pages, given a directory
 * of HTML translated pages.
 *
 * @example node scripts/utils/migrate/add-jp-content.js ~/Desktop/jaJP/
 */
const main = () => {
  const dirpath = process.argv[2];

  // NOTE: for testing, please remove next
  const mdx = getMDX(path.join(dirpath, '/docs/apm.html'));
  // const mdx = getMDX(
  // path.join(
  // dirpath,
  // '/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems.html'
  // )
  // );

  console.log(mdx);
};

main();
