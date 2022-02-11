const preferDefault = (m) => (m && m.default) || m;
const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const format = require('date-fns/format');
const unified = require('unified');
const toHast = require('mdast-util-to-hast');
const html = require('rehype-stringify');
const removeImports = require('remark-mdx-remove-imports');
const removeExports = require('remark-mdx-remove-exports');
const parseISO = preferDefault(require('date-fns/parseISO'));

// NOTE: remove-imports and remove-exports are now depreciated
const htmlGenerator = unified().use(removeImports).use(removeExports).use(html);

const releaseNotesQuery = async (graphql) => {
  const query = `
    {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      landingPages: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/docs/release-notes/.*/index.mdx$/" }
        }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            subject
          }
        }
      }
      allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "/src/content/docs/release-notes/.*(?<!index).mdx/"
          }
        }
      ) {
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
  const { frontmatter, slug, mdxAST } = node;
  const { releaseDate, subject, version } = frontmatter;

  const transformedAST = htmlGenerator.runSync(mdxAST);
  const html = htmlGenerator.stringify(toHast(transformedAST));

  // time is necessary for RSS validity
  const date = parseISO(releaseDate);
  const pubDate = `${format(date, 'EE, dd LLL yyyy')} 00:00:00 +0000`;
  const link = new URL(slug, siteMetadata.siteUrl).href;
  const id = Buffer.from(`${subject}-${version}`).toString('base64');

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

const generateFeed = (publicDir, siteMetadata, reporter, landingPages) => (
  group
) => {
  const title = `${group.fieldValue} release notes`;
  const landingPage = landingPages.find(
    (page) => page.frontmatter.subject === group.fieldValue
  );

  if (!landingPage) {
    reporter.info(
      `\tNo landing page found for '${group.fieldValue}'. Skipping...`
    );
    return;
  }

  const feedPath = path.join(landingPage.fields.slug, 'feed.xml');

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
    reporter.info('Generating XML for release notes RSS feeds');
    const {
      site,
      landingPages: { nodes: landingPages },
      allMdx,
    } = await releaseNotesQuery(graphql);

    allMdx.group.forEach(
      generateFeed(publicDir, site.siteMetadata, reporter, landingPages)
    );

    reporter.info('\tDone!');
  } catch (error) {
    reporter.panicOnBuild(
      `Unable to create release note RSS feed: ${error}`,
      error
    );
  }
};
