const fetchJpDocs = require('./fetch-jp-docs');

// paths of pages that are missing JP content (assumes landing page format)
const PATHS = [
  '/src/content/docs/agents/c-sdk/index.mdx',
  '/src/content/docs/agents/net-agent/net-agent-api/index.mdx',
  '/src/content/docs/agents/php-agent/php-agent-api/index.mdx',
  '/src/content/docs/agents/python-agent/python-agent-api/index.mdx',
  '/src/content/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api/index.mdx',
  '/src/content/docs/mobile-monitoring/new-relic-mobile-ios/ios-sdk-api/index.mdx',
  '/src/content/docs/using-new-relic/welcome-new-relic/index.mdx',
];

const getSlug = (path) =>
  path
    .replace('/src/content', '')
    .replace('/index.mdx', '')
    .replace('.mdx', '');

const main = async () => {
  // convert the paths to a format our script expects
  const pages = PATHS.map((path) => ({
    docUrl: `https://docs.newrelic.com${getSlug(path)}`,
    type: 'landing_page',
    japaneseVersionExists: 'yes',
  }));

  // TODO: fix this
  const docs = await fetchJpDocs(pages);
  console.log(docs);

  // TODO: save JP content to a new MDX file
};

main();
