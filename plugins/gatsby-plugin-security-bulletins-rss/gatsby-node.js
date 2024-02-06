const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const format = require('date-fns/format');
const html = require('rehype-stringify');
const unified = require('unified');
const toHast = require('mdast-util-to-hast');
const removeImports = require('remark-mdx-remove-imports');
const removeExports = require('remark-mdx-remove-exports');
const jsxImagesToChildren = require('../utils/jsxImagesToChildren');
const handlers = require('../utils/handlers');

const htmlGenerator = unified()
  .use(jsxImagesToChildren)
  .use(removeImports)
  .use(removeExports)
  .use(html);

const securityBulletinsQuery = async (graphql) => {
  const query = `
    {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      securityBulletinFileNodes: allMdx(
        filter: {fileAbsolutePath: {regex: "/src/content/docs/security/.*/security-bulletins/.*(?<!index).mdx/"}}
      ) {
        nodes {
          frontmatter {
            title
            metaDescription
            releaseDate
          }
          slug
          mdxAST
        }
      }
      allImageSharp {
        nodes {
          parent {
            ... on File {
              relativePath
            }
          }
          original {
            src
          }
        }
      }
    }
    `;

  const { data } = await graphql(query);

  return data;
};

const getFeedItem = (node, siteMetadata, imageHashMap) => {
  const { frontmatter, slug, mdxAST } = node;
  const { title, metaDescription, releaseDate } = frontmatter;

  const transformedAST = htmlGenerator.runSync(mdxAST);
  const html = htmlGenerator.stringify(
    toHast(transformedAST, {
      handlers: {
        image: (h, node, parent) =>
          handlers.image(h, node, parent, imageHashMap),
      },
    })
  );

  // time is necessary for RSS validity
  const date = new Date(releaseDate);
  const pubDate = `${format(date, 'EE, dd LLL yyyy')} 00:00:00 +0000`;
  const link = new URL(slug, siteMetadata.siteUrl).href;
  const id = Buffer.from(`${title}`).toString('base64');

  return {
    guid: id,
    title,
    custom_elements: [
      { link },
      { pubDate },
      { 'content:encoded': html },
      { description: metaDescription || `Published: ${pubDate}.` },
    ],
  };
};

const generateFeed = (
  publicDir,
  siteMetadata,
  reporter,
  bulletinNodes,
  imageHashMap
) => {
  const title = `New Relic security bulletins`;
  const inferredBulletinsPath = bulletinNodes.nodes[0].slug
    .split('/')
    .slice(0, -1)
    .join('/');

  const feedPath = path.join(inferredBulletinsPath, 'feed.xml');

  // https://github.com/dylang/node-rss#feedoptions
  const feedOptions = {
    title,
    feed_url: new URL(feedPath, siteMetadata.siteUrl).href,
    site_url: siteMetadata.siteUrl,
  };

  reporter.info(`\t${feedOptions.feed_url}`);

  const feed = new RSS(feedOptions);

  bulletinNodes.nodes.map((node) => {
    feed.item(getFeedItem(node, siteMetadata, imageHashMap));
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
    reporter.info(`Generating XML for security bulletins RSS feed`);
    const {
      site,
      securityBulletinFileNodes,
      allImageSharp,
    } = await securityBulletinsQuery(graphql);

    const imageHashMap = allImageSharp.nodes.reduce(
      (acc, { original, parent }) => ({
        ...acc,
        [parent.relativePath]: original?.src || null,
      }),
      {}
    );

    generateFeed(
      publicDir,
      site.siteMetadata,
      reporter,
      securityBulletinFileNodes,
      imageHashMap
    );

    reporter.info('\tDone!');
  } catch (error) {
    reporter.panicOnBuild(
      `Unable to create security bulletins RSS feed: ${error}`,
      error
    );
  }
};
