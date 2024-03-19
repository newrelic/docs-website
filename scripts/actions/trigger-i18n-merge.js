const { Command } = require('commander');
const core = require('@actions/core');
const github = require('@actions/github');
const { fetchPaginatedGHResults } = require('./utils/github-api-helpers');
const { LOCALES } = require('../actions/utils/constants');

const getCommandLineOptions = () => {
  // Sets up commander to use input arguments for this script from the CLI or GitHub Actions - CM
  const program = new Command();
  program
    .option('-l, --locale <locale>', 'Specify which locale to update with main')
    .option('-u, --url <url>', 'url to PR of file changes');

  program.parse(process.argv);
  return program.opts();
};

const getSitesToBuild = (files) => {
  const sites = new Set();
  files.forEach((file) => {
    if (
      file.status === 'added' &&
      !LOCALES.every((locale) => file.raw_url.includes(`/docs/${locale}/`))
    ) {
      LOCALES.forEach((locale) => sites.add(locale));
    } else if (file.status === 'modified' || file.status === 'added') {
      LOCALES.forEach((locale) => {
        if (file.raw_url.includes(`/docs/${locale}/`)) {
          sites.add(locale);
        }
      });
    }
  });
  return Array.from(sites);
};

/** Entrypoint. */
const main = async () => {
  // These come from the CLI input when using the script
  const options = getCommandLineOptions();
  const locale = options.locale || null;
  const url = options.url || null;
  const octokit = github.getOctokit(process.env.GITHUB_TOKEN);
  const repo = github.context.repo;

  if (locale) {
    try {
      await octokit.rest.repos.merge({
        owner: repo.owner,
        repo: repo.repo,
        base: `main-${locale}`,
        head: process.env.SOURCE_REF,
        commit_message: `Merged main into main-${locale}`,
      });
    } catch (e) {
      core.setFailed(e.message);
    }
  }

  if (url) {
    const prFileData = await fetchPaginatedGHResults(
      url,
      process.env.GITHUB_TOKEN
    );

    const sitesToBuild = getSitesToBuild(prFileData);

    for (const locale of LOCALES) {
      if (sitesToBuild.includes(locale)) {
        try {
          await octokit.rest.repos.merge({
            owner: repo.owner,
            repo: repo.repo,
            base: `main-${locale}`,
            head: process.env.SOURCE_REF,
            commit_message: `Merged main into main-${locale}`,
          });
        } catch (e) {
          core.setFailed(e.message);
        }
      }
    }
  }

  process.exit(0);
};

if (require.main === module) {
  main();
}
