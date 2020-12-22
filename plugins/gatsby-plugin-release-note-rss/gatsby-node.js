const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const format = require('date-fns/format');
const parseISO = require('date-fns/parseISO');
const unified = require('unified');
const toHast = require('mdast-util-to-hast');
const html = require('rehype-stringify');
const removeImports = require('remark-mdx-remove-imports');
const removeExports = require('remark-mdx-remove-exports');

// NOTE: remove-imports and remove-exports are now depreciated
const htmlGenerator = unified().use(html).use(removeImports).use(removeExports);

const releaseNotesQuery = async (graphql) => {
  const query = `
    {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      allMdx(filter: {fileAbsolutePath: {regex: "/docs/release-notes/"}}) {
        group(field: frontmatter___subject) {
          nodes {
            frontmatter {
              subject
              version
              releaseDate
            }
            slug
            id
            mdxAST
          }
          fieldValue
        }
      }
    }
  `;

  const { data } = await graphql(query);

  return data;
};

// converts graphQL response (node) into a consumable format for RSS
const getFeedItem = (node, siteMetadata) => {
  const { frontmatter, slug, id, mdxAST } = node;
  const { releaseDate, subject, version } = frontmatter;

  const html = htmlGenerator.stringify(toHast(mdxAST));

  // time is necessary for RSS validity
  const date = parseISO(releaseDate);
  const pubDate = `${format(date, 'EE, dd LLL yyyy')} 00:00:00 +0000`;
  const link = new URL(slug, siteMetadata.siteUrl).href;

  return {
    guid: id,
    title: `${subject} ${version}`,
    custom_elements: [
      { link },
      { pubDate },
      { 'content:encoded': html },
      { description: `ReleasedOn: ${pubDate}.` },
    ],
  };
};

const generateFeed = (publicDir, siteMetadata, reporter) => async (group) => {
  const title = `${group.fieldValue} release notes`;
  const feedPath = path.join(path.dirname(group.nodes[0].slug), 'feed.xml');

  // https://github.com/dylang/node-rss#feedoptions
  const feedOptions = {
    title,
    feed_url: new URL(feedPath, siteMetadata.siteUrl).href,
    site_url: siteMetadata.siteUrl,
  };

  reporter.info(`\t${feedOptions.feed_url}`);

  const feed = group.nodes.reduce((rss, node) => {
    rss.item(getFeedItem(node, siteMetadata));
    return rss;
  }, new RSS(feedOptions));

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
    reporter.info('Generating XML feeds for RSS');
    const { site, allMdx } = await releaseNotesQuery(graphql);

    await allMdx.group.forEach(
      generateFeed(publicDir, site.siteMetadata, reporter)
    );

    reporter.info('\tDone!');
  } catch (error) {
    reporter.panicOnBuild(`Unable to create RSS feed: ${error}`);
  }
};
