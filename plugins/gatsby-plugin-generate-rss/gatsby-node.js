const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const format = require('date-fns/format');
const parseISO = require('date-fns/parseISO');

/*
NOTE: this currently assumes all feed items use the same query and
can use the same serialization function (release ntoes). We can move
this into pluginOptions if we would like to enable additional
customization.

Example Usage

options: {
  feeds: [
    {
      title: "Go Agent Release Notes",
      path: "go-agent.xml",
      regex: "/release-notes/go-agent/",
    },
    // ...more feeds go here
  ]
}
*/

const getSiteMetadata = async (graphql) => {
  const query = `
    {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `;

  const data = await graphql(query);
  return data.site.siteMetadata;
};

// converts graphQL response (node) into a consumable format for RSS
const getFeedItem = (node, siteMetadata) => {
  const { frontmatter, slug, id, html } = node;
  const { releaseDate, subject, version } = frontmatter;

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

const generateFeed = (graphql, publicDir, siteMetadata) => async (options) => {
  const query = `
    {
      allMdx(filter: {fileAbsolutePath: {regex: "${options.regex}"}}) {
        nodes {
          id
          slug
          html
          frontmatter {
            releaseDate
            subject
            version
          }
        }
      }
    }
  `;

  // https://github.com/dylang/node-rss#feedoptions
  const feedOptions = {
    title: siteMetadata.title,
    feed_url: new URL(options.path, siteMetadata.siteUrl).href,
    site_url: siteMetadata.siteUrl,
  };

  console.log(`\t[*] ${feedOptions.feed_url}`);

  const data = await graphql(query);

  const feed = data.allMdx.nodes.reduce((rss, node) => {
    rss.item(getFeedItem(node, siteMetadata));
    return rss;
  }, new RSS(feedOptions));

  const filepath = path.join(publicDir, options.path);
  const dir = path.dirname(filepath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filepath, feed.xml());
};

exports.onPostBuild = async ({ graphql, store }, { feeds }) => {
  const { program } = store.getState();
  const publicDir = path.join(program.directory, 'public');

  try {
    console.log('[*] Generating XML feeds for RSS');
    const siteMetadata = await getSiteMetadata(graphql);

    await feeds.forEach(generateFeed(graphql, publicDir, siteMetadata));
    console.log('\t[*] Done!');
  } catch (error) {
    console.error(`[!] Unable to create RSS feed: ${error}`);
  }
};
