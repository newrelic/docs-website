/* eslint-disable no-console */
const {
  frontmatter,
  validateFreshnessDate,
  validateReleaseDate,
} = require('./frontmatter');
const { verifyImageImports } = require('./image-import-utils.js');
const mdx = require('@mdx-js/mdx');
const fs = require('fs');
const cliProgress = require('cli-progress');
const colors = require('ansi-colors');
const unified = require('unified');
const visit = require('unist-util-visit');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const remarkStringify = require('remark-stringify');
const remarkFrontmatter = require('remark-frontmatter');

const progressBar = new cliProgress.SingleBar(
  {
    format:
      // eslint-disable-next-line prefer-template
      'MDX verification progress |' +
      colors.cyan('{bar}') +
      '| {percentage}% || {value} of {total} Files',
    forceRedraw: true,
  },
  cliProgress.Presets.rect
);

const mdxErrors = [];

const createAST = (mdxText) => {
  const mdxAst = unified()
    .use(remarkParse)
    .use(remarkStringify, {
      bullet: '*',
      fences: true,
      listItemIndent: '1',
    })
    .use(remarkMdx)
    .use(remarkMdxjs)
    .use(remarkFrontmatter, ['yaml'])
    .parse(mdxText);

  return mdxAst;
};

const verifyStepsChildren = (mdxAST) => {
  let hasNonStepChild = false;
  let nodeInfo;
  visit(mdxAST, (node) => {
    if (node.name !== 'Steps') {
      return;
    }
    hasNonStepChild = node?.children?.some((el) => el.name !== 'Step');
    nodeInfo = node.position.start;
  });
  return { hasNonStepChild, nodeInfo };
};

const readFile = async (filePath) => {
  let failed = false;

  const mdxText = fs.readFileSync(filePath, 'utf8');
  try {
    const jsx = mdx.sync(mdxText);
    const mdxAst = createAST(mdxText);
    const { hasNonStepChild, nodeInfo } = verifyStepsChildren(mdxAst);
    if (hasNonStepChild) {
      const customError = {
        reason:
          '<Steps> component must only contain <Step> components as immediate children',
        ...nodeInfo,
      };
      throw customError;
    }
  } catch (exception) {
    mdxErrors.push(`\x1b[35m MDX error:\x1b[0m ${filePath} \n
        \x1b[31m${exception.reason}\x1b[0m
      line: ${exception.line}
      column: ${exception.column}`);

    failed = true;
  }
  const excludeFromFreshnessRegex = [
    'src/content/docs/release-notes/',
    'src/content/eol/',
    'src/content/whats-new/',
    'src/content/docs/style-guide/',
    'src/content/docs/security/new-relic-security/security-bulletins/',
    'src/i18n/content/',
    'src/install/',
  ];
  const shouldValidateFreshnessDate = !excludeFromFreshnessRegex.some(
    (excludedPath) => filePath.includes(excludedPath)
  );

  const includeInReleaseDateRegex = /src\/(?!i18n).*(\/security-bulletins\/|\/release-notes\/|\/whats-new\/).*(?<!index)(.mdx|.md)/;

  const shouldValidateReleaseDate = includeInReleaseDateRegex.test(filePath);

  const { error } = frontmatter(mdxText);

  if (error != null) {
    mdxErrors.push(`\x1b[35m Frontmatter error:\x1b[0m ${filePath} \n
        \x1b[31m${error.reason}\x1b[0m
      ${error.mark.snippet}`);
    failed = true;
  } else if (shouldValidateFreshnessDate) {
    const error = validateFreshnessDate(mdxText);
    if (error) {
      mdxErrors.push(`\x1b[35m Frontmatter field error:\x1b[0m ${filePath} \n
          \x1b[31m${error.message}\x1b[0m`);
      failed = true;
    }
  } else if (shouldValidateReleaseDate) {
    const error = validateReleaseDate(mdxText);
    if (error) {
      mdxErrors.push(`\x1b[35m Frontmatter field error:\x1b[0m ${filePath} \n
          \x1b[31m${error.message}\x1b[0m`);
      failed = true;
    }
  }

  return failed ? filePath : null;
};

const verifyMDX = async (filePaths) => {
  console.log(
    `\n\n🔍\x1b[92mReading MDX files. This may take a few moments... \n\x1b[0m`
  );
  progressBar.start(filePaths.length, 1);

  const allResults = await Promise.all(
    filePaths.map((path, i) => {
      progressBar.update(i + 1);
      return readFile(path);
    })
  );
  await progressBar.stop();

  const results = allResults.filter(Boolean);

  console.log(`\n\n\x1b[35mFailed MDX file count:\x1b[0m ${results.length}`);
  console.log(results);

  if (mdxErrors.length > 0) {
    console.log(`\n\n❌ \x1b[33mFound ${mdxErrors.length} MDX errors\x1b[0m`);
    mdxErrors.forEach((error, i) =>
      console.error(`\n\n\x1b[35mError ${i + 1}:\x1b[0m ${error}`)
    );
    process.exitCode = 1;
  } else {
    console.log('\n\n🎉 No MDX issues found');
  }
};

const verifyImages = (filePaths) => {
  const imageErrors = verifyImageImports(filePaths);

  if (imageErrors.length > 0) {
    console.error(
      `\n\n❌\x1b[33mFound ${imageErrors.length} image import errors\x1b[0m`
    );
    imageErrors.forEach((error, i) =>
      console.error(`\n\n\x1b[35mError ${i + 1}:\x1b[0m ${error}`)
    );
    console.error('\n\n-------------------------- ');
    process.exitCode = 1;
  } else {
    console.log('\n\n🎉 No image import issues found');
  }
};

module.exports = { verifyImages, verifyMDX };
