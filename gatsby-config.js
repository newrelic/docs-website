const fs = require('fs');
const path = require('path');
const indentedCodeBlock = require('./codemods/indentedCodeBlock');

const siteUrl = 'https://docs.newrelic.com';

const dataDictionaryPath = `${__dirname}/src/data-dictionary`;

module.exports = {
  flags: {
    DEV_SSR: true,
    LAZY_IMAGES: true,
    QUERY_ON_DEMAND: true,
  },
  siteMetadata: {
    title: 'New Relic Documentation',
    titleTemplate: '%s | New Relic Documentation',
    description: 'New Relic Documentation',
    author: 'New Relic',
    repository: 'https://github.com/newrelic/docs-website',
    siteUrl,
    branch: 'develop',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        layout: {
          contentPadding: '2rem',
          maxWidth: '1600px',
        },
        prism: {
          languages: [
            'xml',
            'xml-doc',
            'c',
            'go',
            'java',
            'php',
            'phpdoc',
            'csharp',
            'python',
          ],
        },
        // This option is set to disallow to prevent crawling of the site during preview
        // mode
        robots: {
          host: 'https://docs-preview.newrelic.com',
          sitemap: 'https://docs-preview.newrelic.com/sitemap.xml',
          policy: [{ userAgent: '*', disallow: '/' }],
        },
        newrelic: {
          configs: {
            development: {
              instrumentationType: 'proAndSPA',
              accountId: '10175106',
              trustKey: '1',
              agentID: '23865145',
              licenseKey: '528f970912',
              applicationID: '23865145',
              beacon: 'staging-bam.nr-data.net',
              errorBeacon: 'staging-bam.nr-data.net',
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'New Relic Documentation',
        short_name: 'New Relic Documentation',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data-dictionary',
        path: dataDictionaryPath,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
              linkImagesToOriginal: false,
            },
          },
          // Gifs are not supported via gatsby-remark-images (https://github.com/gatsbyjs/gatsby/issues/7317).
          // It is recommended to therefore use this plugin to copy files with a
          // .gif extension to the public folder.
          //
          // Source: https://github.com/gatsbyjs/gatsby/issues/7317#issuecomment-412984851
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-videos',
          {
            resolve: 'gatsby-remark-gifs',
            options: {
              maxWidth: 850,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // Include our patch for handling indented code blocks to ensure the
        // fence does not get rendered as part of the block. There is an open
        // issue in the MDX project about this:
        // https://github.com/mdx-js/mdx/issues/1283
        //
        // If this is addressed in MDX v2, we can safely remove this.
        remarkPlugins: [indentedCodeBlock],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxHeight: 400,
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              enableCustomId: true,
              icon: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/nav/`,
      },
    },
    {
      resolve: 'gatsby-plugin-generate-json',
      options: {
        query: `
        {
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
              html
            }
          }
        }
        `,
        path: '/api/nr1/content/nr1-announcements.json',
        serialize: ({ data }) => {
          const ids = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'src/data/whats-new-ids.json'))
          );

          return {
            announcements: data.allMarkdownRemark.nodes.map(
              ({ frontmatter, html, fields }) => ({
                docsID: ids[fields.slug],
                title: frontmatter.title,
                summary: frontmatter.summary,
                releaseDateTime: frontmatter.releaseDate,
                learnMoreLink: frontmatter.learnMoreLink,
                getStartedLink: frontmatter.getStartedLink,
                body: html,
                docUrl: new URL(fields.slug, siteUrl).href,
              })
            ),
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-generate-json',
      options: {
        path: '/api/nr1/content/nr1-announcements/ids.json',
        serialize: () => {
          const ids = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'src/data/whats-new-ids.json'))
          );

          return {
            announcements: Object.values(ids).map((id) => ({
              docsID: id,
            })),
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl,
        graphQLQuery: `
        {
          allDataDictionaryEvent {
            edges {
              node {
                name
                definition {
                  rawMarkdownBody
                }
                dataSources
                childrenDataDictionaryAttribute {
                  name
                  definition {
                    rawMarkdownBody
                  }
                  units
                }
              }
            }
          }
        }
      `,
        serializeFeed: ({ data }) =>
          data.allDataDictionaryEvent.edges.map(({ node }) => ({
            name: node.name,
            definition:
              node.definition && node.definition.rawMarkdownBody.trim(),
            dataSources: node.dataSources,
            attributes: node.childrenDataDictionaryAttribute.map(
              (attribute) => ({
                name: attribute.name,
                definition: attribute.definition.rawMarkdownBody.trim(),
                units: attribute.units,
              })
            ),
          })),
        feedFilename: 'data-dictionary',
        nodesPerFeedFile: Infinity,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allMdx(filter: {frontmatter: {releaseDateTime: {ne: null}}}) {
                  nodes {
                    id
                    slug
                    frontmatter {
                      releaseDateTime
                      title
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map(({ frontmatter, slug, id }) => ({
                title,
                custom_elements: [
                  { guid: id },
                  { link: new URL(slug, site.siteMetadata.siteUrl).href },
                  { pubDate: frontmatter.releaseDateTime },
                  { 'content:encoded': null }, // TODO: get raw HTML for this?
                  {
                    description: `Released on: ${frontmatter.releaseDateTime}.`,
                  },
                ],
              })),
            output: '/rss.xml',
            title: 'Release Notes RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-data-dictionary',
      options: {
        path: dataDictionaryPath,
      },
    },
    'gatsby-source-nav',
    {
      resolve: 'gatsby-plugin-auto-index-pages',
      options: {
        skippedDirectories: ['', 'whats-new', 'docs/release-notes'],
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
};
