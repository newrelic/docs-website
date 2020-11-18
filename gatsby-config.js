const indentedCodeBlock = require('./codemods/indentedCodeBlock');

const siteUrl = 'https://docs.newrelic.com';

module.exports = {
  siteMetadata: {
    title: 'New Relic Documentation',
    titleTemplate: '%s | New Relic Documentation',
    description: 'New Relic Documentation',
    author: 'New Relic',
    repository: 'https://github.com/newrelic/docs-website',
    siteUrl: siteUrl,
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
          maxWidth: '1700px',
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
    'gatsby-remark-images',
    'gatsby-transformer-remark',
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
              fit: 'inside',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data-dictionary',
        path: `${__dirname}/src/data-dictionary`,
      },
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl,
        graphQLQuery: `
        {
          allMarkdownRemark(filter: {frontmatter: {type: {eq: "attribute"}}}) {
            edges {
              node {
                rawMarkdownBody
                frontmatter {
                  type
                  events
                  name
                  units
                }
              }
            }
          }
        }
      `,
        serializeFeed: (results) =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            name: node.frontmatter.name,
            events: node.frontmatter.events,
            units: node.frontmatter.units,
            definition: node.rawMarkdownBody.trim(),
          })),
        feedFilename: 'attribute-definitions',
        nodesPerFeedFile: Infinity,
      },
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl,
        graphQLQuery: `
        {
          allMarkdownRemark(filter: {frontmatter: {type: {eq: "event"}}}) {
            edges {
              node {
                rawMarkdownBody
                frontmatter {
                  name
                  dataSources
                }
              }
            }
          }
        }
      `,
        serializeFeed: (results) =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            name: node.frontmatter.name,
            dataSources: node.frontmatter.dataSources,
            definition: node.rawMarkdownBody.trim(),
          })),
        feedFilename: 'event-definitions',
        nodesPerFeedFile: Infinity,
      },
    },
  ],
};
