const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { write } = require('to-vfile');
const glob = require('glob').sync;

const toVFile = require('../../utils/migrate/to-vfile');
const convertFile = require('../migrate/convert-file');
const runCodemod = require('../codemod/run');
const codemods = require('../../../codemods');

/**
 * Given the filepath to a HTML file, this will fetch information about
 * the document (including the page content).
 *
 * @param {string} filepath
 * @returns {{type: string, title: string, body: string}}
 */
const getMDX = (dirpath) => async (filepath) => {
  try {
    const html = fs.readFileSync(path.join(dirpath, filepath), 'utf8');
    const { document } = new JSDOM(html).window;

    const swiftypeType = document.querySelector('meta[name="document_type"]')
      .attributes.content.value;
    const type =
      swiftypeType == 'term_page_landing_page' ? 'landing_page' : 'page';

    const titleNode =
      swiftypeType == 'term_page_landing_page'
        ? document.querySelector('h1.text-center')
        : document.getElementById('page-title');

    // grab the relevant information from the HTML
    const title = titleNode.textContent;
    const body = document.querySelector('[data-swiftype-name=body]').outerHTML;

    // convert the page into a "v-file" to be used by our utils (URL ignored)
    const doc = {
      type,
      title,
      body,
      docUrl: 'https://google.com',
    };
    const file = toVFile(doc, {
      baseDir: 'src/i18n/content/jp',
      data: { dummy: false },
      dirname: path.dirname(filepath),
      filename: path.basename(filepath).replace('.html', ''),
    });

    // convert to MDX
    // TODO: add redirects and other frontmatter
    // TODO: figure out how to get images
    convertFile(file);
    await runCodemod(file, { codemods });

    await write(file, 'utf-8');

    return file;
    // save the file
    // TODO: determine if we need to add the page to the navigation
  } catch (error) {
    console.log(`[!] Unable to fetch & process ${filepath}`);
    console.error(error);
  }
};

const getFilesToTranslate = (directoryPath) => {
  // grab all files in the directory, including nested files
  const allFiles = glob(directoryPath + '/**/*');
  
  // filter to only html
  const htmlFiles = allFiles.filter((fileName) => {
    const extension = path.extname(fileName);
    return extension === '.html';
  });

  // strip out the directoryPath portion of the path
  const files = htmlFiles.map((file) => {
    return file.replace(directoryPath, '');
  });

  return files;
}

/**
 * Given a directory, this will create MDX files for JP pages, given a directory
 * of HTML translated pages.
 *
 * @example node scripts/utils/migrate/add-jp-content.js ~/Desktop/jaJP/
 */
const main = async () => {
  const dirpath = process.argv[2];

  const files = getFilesToTranslate(dirpath);
  console.log(files);

  // NOTE: Uncomment to run for all files
  // files.forEach(async (filePath) => {
  //   console.log(`Converting: ${filePath}'`);
  //   await getMDX(dirpath)(filePath);
  // });

  // NOTE: for testing, please remove next
  const mdx = await getMDX(dirpath)('/docs/apm.html');
  // const mdx = getMDX(
  // path.join(
  // dirpath,
  // '/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems.html'
  // )
  // );

  // console.log(mdx);
};

main();
