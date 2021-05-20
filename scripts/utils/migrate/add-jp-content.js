const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { write } = require('to-vfile');
const glob = require('glob').sync;
const frontmatter = require('@github-docs/frontmatter');
const yaml = require('js-yaml');

const toVFile = require('../../utils/migrate/to-vfile');
const convertFile = require('../migrate/convert-file');
const runCodemod = require('../codemod/run');
const codemods = require('../../../codemods');
const jpLinkCodemod = require('./codemod-update-jp-url');
const jpImageCodemod = require('./codemod-update-jp-images');

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

    const page_types_map = {
      'term_page_landing_page' : 'landing_page',
      'troubleshooting_doc' : 'troubleshooting_doc'
    }

    // const type =
    //   swiftypeType == 'term_page_landing_page' ? 'landing_page' : 'page';

    const type = page_types_map[swiftypeType] || 'page';

    const titleNode =
      swiftypeType == 'term_page_landing_page'
        ? document.querySelector('h1.text-center')
        : document.getElementById('page-title');

    // grab the relevant information from the HTML
    const title = titleNode.textContent;
    const body = document.querySelector('[data-swiftype-name=body]').outerHTML;

    // modify path for landing pages
    // Example: /docs/agents/c-sdk.mdx -> /docs/agents/c-sdk/index.mdx
    const pathParts = filepath.split('.');
    const pathToUse =
      (swiftypeType === 'term_page_landing_page')
        ? path.join(pathParts[0], '/index.' + pathParts[1])
        : filepath;

    const englishDirPath = process.cwd() + '/src/content';
    const englishPath = path.join(
      englishDirPath,
      pathToUse.replace('.html', '.mdx')
    );
    // console.log(englishPath);

    // if(fs.existsSync(englishPath)){
    //   const fileContent = fs.readFileSync(englishPath, 'utf-8');
    //   const fm = frontmatter(fileContent);
    //   const tags = fm.data['tags'] || [];
    //   const metaDescription = fm.data['metaDescription'];

    //   console.log(`Updated frontmatter for: ${englishPath}`);
    // } else {
    //   console.log(`English file was not found for: ${englishPath}`)
    // }

    const tempDirectory = path.join(process.cwd(), 'temp');
    fs.mkdirSync(tempDirectory, { recursive: true });
    
    // if english mdx file exists, proceed as normal
    if(fs.existsSync(englishPath)){
      const fileContent = fs.readFileSync(englishPath, 'utf-8');
      const fm = frontmatter(fileContent);
      const tags = fm.data['tags'] || [];
      const metaDescription = fm.data['metaDescription'];

      // convert the page into a "v-file" to be used by our utils (URL ignored)
      const doc = {
        type,
        title,
        body,
        topics: tags,
        docUrl: 'https://google.com',
        metaDescription
      };
      const file = toVFile(doc, {
        baseDir: 'src/i18n/content/jp',
        data: { dummy: false },
        dirname: path.dirname(pathToUse),
        filename: path.basename(pathToUse).replace('.html', ''),
      });

      convertFile(file);
      await runCodemod(file, {
        codemods: [...codemods, jpLinkCodemod, jpImageCodemod],
      });

      await write(file, 'utf-8');

      return file; 
    } else { // else, dont get frontmatter. write to temp directory for manual intervention.
      // convert the page into a "v-file" to be used by our utils (URL ignored)
      const doc = {
        type,
        title,
        body,
        topics: [],
        docUrl: 'https://google.com'
      };
      const file = toVFile(doc, {
        baseDir: 'src/i18n/content/jp',
        data: { dummy: false },
        dirname: path.dirname(pathToUse),
        filename: path.basename(pathToUse).replace('.html', ''),
      });

      convertFile(file);
      await runCodemod(file, {
        codemods: [...codemods, jpLinkCodemod, jpImageCodemod],
      });

      file.path = path.join(tempDirectory, path.basename(englishPath))
      console.log(`Writing: ${file.path}`);
      await write(file, 'utf-8');
      return file; 
    }
  } catch (error) {
    console.log(`[!] Unable to fetch & process ${filepath}`);
    console.error(error);
  }
};

const getFilesToTranslate = (directoryPath) => {
  // grab all files in the directory, including nested files
  const htmlFiles = glob(directoryPath + '/**/*.html');

  // strip out the directoryPath portion of the path
  const files = htmlFiles.map((file) => {
    return file.replace(directoryPath, '');
  });

  return files;
};

const getPathsFromNavPage = (navPage) => {
  const paths = navPage.path ? [navPage.path] : [];
  if (!navPage.pages) {
    return paths;
  }
  for (const p of navPage.pages) {
    paths.push(...getPathsFromNavPage(p));
  }
  return paths;
};

const checkPathAgainstNav = (filePaths) => {
  // 1. grab all nav docs
  // 2. get all paths out of all docs, combine into one array/set/map
  // 3. see if filePath is in the structure

  // const paths = [];
  const navDocs = glob('./src/nav/*');

  const paths = [];

  for (const navDocPath of navDocs) {
    const navPage = yaml.load(fs.readFileSync(navDocPath, 'utf-8'));
    const docPaths = getPathsFromNavPage(navPage);

    paths.push(...docPaths);
  }

  const pathSet = new Set(paths);

  // /docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx
  const a = filePaths
    .map((filePath) => ({
      filePath: filePath,
      isInNav: pathSet.has(filePath),
    }))
    .filter(({ isInNav }) => !isInNav);

  // [ { filePath, isInNav },  ]

  return a.map(({ filePath }) => filePath);
};

/**
 * Given a directory, this will create MDX files for JP pages, given a directory
 * of HTML translated pages.
 *
 * @example node scripts/utils/migrate/add-jp-content.js ~/Desktop/jaJP/
 */
const main = async () => {
  /*
    1. Grab all files.
    2. If page type is 'views_page_menu' or 'terms_page_api_menu', we don't need to migrate it.
    3. If page type is 'term_page_landing_page', we need to modify the path. Example: /docs/agents/c-sdk.mdx -> /docs/agents/c-sdk/index.mdx.
    4. Grab and add tags.
    5. Convert html to mdx.
    6. Write out file.
  */

  const dirpath = process.argv[2];
  const filePaths = getFilesToTranslate(dirpath);

  let counter = 0;
  for (const file of filePaths) {
    const html = fs.readFileSync(path.join(dirpath, file), 'utf8');
    const { document } = new JSDOM(html).window;

    const swiftypeType = document.querySelector('meta[name="document_type"]')
      .attributes.content.value;

    if (
      swiftypeType === 'views_page_menu' ||
      swiftypeType === 'terms_page_api_menu'
    ) {
      // ignore these files
    } else {
      // console.log(`Converting: ${file}`);
      await getMDX(dirpath)(file);
      // console.log(`Finished converting: ${file}`);
      counter += 1;
    }
  }
  console.log(`Converted ${counter} files`);

  // console.log(filePaths);
  // console.log(notInNav);

  // const temp = filePaths
  //   .filter((path) => notInNav.includes(path.replace('.html', '')))
  //   .filter((filePath) => {
  //     const html = fs.readFileSync(path.join(dirpath, filePath), 'utf8');
  //     const { document } = new JSDOM(html).window;

  //     const swiftypeType = document.querySelector('meta[name="document_type"]')
  //       .attributes.content.value;

  //     return swiftypeType !== 'views_page_menu';
  //   });

  // console.log(temp);

  // sdfasdfasf

  // const counter = {
  //   'term_page_api_menu' : 0,
  //   'views_page_menu' : 0,
  //   'term_page_landing_page' : 0,
  //   'page' : 0
  // }

  // for (const file of filePaths){
  //   // console.log(`Converting: ${file}'`);
  //   // await getMDX(dirpath)(file);

  //   const html = fs.readFileSync(path.join(dirpath, file), 'utf8');
  //   const { document } = new JSDOM(html).window;

  //   const swiftypeType = document.querySelector('meta[name="document_type"]')
  //     .attributes.content.value;

  //   const englishDirPath = process.cwd() + '/src/content';
  //   const englishPath = path.join(englishDirPath, file.replace('.html', '.mdx'));

  //   if(fs.existsSync(englishPath)){
  //   } else {
  //     const html = fs.readFileSync(path.join(dirpath, file), 'utf8');
  //     const { document } = new JSDOM(html).window;

  //     const swiftypeType = document.querySelector('meta[name="document_type"]').attributes.content.value;

  //     counter[swiftypeType] += 1;

  //     const mdx = await getMDX(dirpath)('/docs/agents/c-sdk.html');
  //   }
  // }

  //console.table(counter);
  // // NOTE: for testing, please remove next
  // // const mdx = await getMDX(dirpath)('/docs/apm.html');
  // const mdx = await getMDX(dirpath)('/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph.html');
  // const mdx = getMDX(dirpath)('/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems.html');

  // // console.log(mdx);
};

main();
