const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const format = require('date-fns/format');
const parseISO = require('date-fns/parseISO');
const unified = require('unified');
const parse = require('rehype-parse');
const addAbsoluteImagePath = require('../../rehype-plugins/utils/addAbsoluteImagePath');
const rehypeStringify = require('rehype-stringify');

const eolQuery = async (graphql) => {
  const query = `
  {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(filter: {fields: {slug: {regex: "/^/eol/"}}}) {
      nodes {
        frontmatter {
          title
          publishDate
          eolEffectiveDate
          summary
        }
        fields {
          slug
        }
        htmlAst
      }
    }
  }
  `;

  const { data } = await graphql(query);

  return data;
};

const htmlParser = unified()
  .use(parse)
  .use(addAbsoluteImagePath)
  .use(rehypeStringify);

const getFeedItem = (node, siteMetadata) => {
  const {
    frontmatter,
    fields: { slug },
    htmlAst,
  } = node;
  const { title, publishDate, summary } = frontmatter;

  const parsedHtml = htmlParser.runSync(htmlAst);

  // time is necessary for RSS validity
  const date = parseISO(publishDate);
  const pubDate = `${format(date, 'EE, dd LLL yyyy')} 00:00:00 +0000`;
  const link = new URL(slug, siteMetadata.siteUrl).href;
  const id = Buffer.from(`${publishDate}-${title}`).toString('base64');

  return {
    guid: id,
    title,
    custom_elements: [
      { link },
      { pubDate },
      { 'content:encoded': htmlParser.stringify(parsedHtml) },
      { description: summary ? summary : `ReleasedOn: ${pubDate}.` },
    ],
  };
};

const generateFeed = (publicDir, siteMetadata, reporter, eolNodes) => {
  const title = `New Relic EOL`;

  let feedPath = path.join('eol', 'feed.xml');
  const buildLang = process.env.BUILD_LANG;

  // generate the XML at `<lang>/eol/feed.xml` for the i18n sites,
  // otherwise they'll 404.
  if (buildLang !== 'en') {
    feedPath = path.join(buildLang, feedPath);
  }

  // https://github.com/dylang/node-rss#feedoptions
  const feedOptions = {
    title,
    feed_url: new URL(feedPath, siteMetadata.siteUrl).href,
    site_url: siteMetadata.siteUrl,
  };

  reporter.info(`\t${feedOptions.feed_url}`);

  const feed = new RSS(feedOptions);

  eolNodes.nodes.map((node) => {
    feed.item(getFeedItem(node, siteMetadata));
  });

  const filepath = path.join(publicDir, feedPath);
  const dir = path.dirname(filepath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filepath, feed.xml());
};

exports.onPostBuild = async ({ graphql, store, reporter }) => {
  const { program } = store.getState();
  const publicDir = path.join(program.directory, 'public');

  try {
    reporter.info(`Generating XML for EOL RSS feed`);
    const { site, allMarkdownRemark } = await eolQuery(graphql);

    generateFeed(publicDir, site.siteMetadata, reporter, allMarkdownRemark);

    reporter.info('\tDone!');
  } catch (error) {
    reporter.panicOnBuild(`Unable to create EOL RSS feed: ${error}`, error);
  }
};
