const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const format = require('date-fns/format');
const parseISO = require('date-fns/parseISO');
const unified = require('unified');
const parse = require('rehype-parse');
const addAbsoluteImagePath = require('../../rehype-plugins/utils/addAbsoluteImagePath');
const rehypeStringify = require('rehype-stringify');
const removeImports = require('remark-mdx-remove-imports');
const removeExports = require('remark-mdx-remove-exports');

// NOTE: remove-imports and remove-exports are now depreciated

const whatsNewQuery = async (graphql) => {
  const query = `
  {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(filter: {fields: {slug: {regex: "/whats-new/"}}}) {
      nodes {
        frontmatter {
          title
          releaseDate
          getStartedLink
          learnMoreLink
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
  const { title, releaseDate, summary } = frontmatter;

  const parsedHtml = htmlParser.runSync(htmlAst);

  // time is necessary for RSS validity
  const date = parseISO(releaseDate);
  const pubDate = `${format(date, 'EE, dd LLL yyyy')} 00:00:00 +0000`;
  const link = new URL(slug, siteMetadata.siteUrl).href;
  const id = Buffer.from(`${releaseDate}-${title}`).toString('base64');

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

const generateFeed = (publicDir, siteMetadata, reporter, whatsNewNodes) => {
  const title = `What's new in New Relic`;

  const feedPath = path.join('whats-new', 'feed.xml');

  // https://github.com/dylang/node-rss#feedoptions
  const feedOptions = {
    title,
    feed_url: new URL(feedPath, siteMetadata.siteUrl).href,
    site_url: siteMetadata.siteUrl,
  };

  reporter.info(`\t${feedOptions.feed_url}`);

  const feed = new RSS(feedOptions);

  whatsNewNodes.nodes.map((node) => {
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
    reporter.info(`Generating XML for what's new RSS feed`);
    const { site, allMarkdownRemark } = await whatsNewQuery(graphql);

    generateFeed(publicDir, site.siteMetadata, reporter, allMarkdownRemark);

    reporter.info('\tDone!');
  } catch (error) {
    reporter.panicOnBuild(
      `Unable to create what's new RSS feed: ${error}`,
      error
    );
  }
};
