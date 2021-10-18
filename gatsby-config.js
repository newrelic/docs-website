const fs = require('fs');
const path = require('path');
const parse = require('rehype-parse');
const unified = require('unified');
const rehypeStringify = require('rehype-stringify');
const addAbsoluteImagePath = require('./rehype-plugins/utils/addAbsoluteImagePath');
const getAgentName = require('./src/utils/getAgentName');

const dataDictionaryPath = `${__dirname}/src/data-dictionary`;
const siteUrl = 'https://docs.newrelic.com';
const additionalLocales = ['jp'];
const quote = (str) => `"${str}"`;

const autoLinkHeaders = {
  resolve: 'gatsby-remark-autolink-headers',
  options: {
    icon:
      '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
  },
};

module.exports = {
  flags: {
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: 'New Relic Documentation',
    titleTemplate: '%s | New Relic Documentation',
    description: 'New Relic Documentation',
    author: 'New Relic',
    repository: 'https://github.com/newrelic/docs-website',
    siteUrl,
    branch: 'develop',
    contributingUrl:
      'https://docs.newrelic.com/docs/style-guide/writing-guidelines/create-edit-content/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        oneTrustID: 'e66f9ef1-3a12-4043-b7c0-1a2ea66f6d41',
        forceTrailingSlashes: true,
        layout: {
          contentPadding: '2rem',
          maxWidth: '1600px',
          component: require.resolve('./src/layouts'),
          mobileBreakpoint: '760px',
        },
        i18n: {
          translationsPath: `${__dirname}/src/i18n/translations`,
          additionalLocales,
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
        splitio: {
          // Mocked features only used when in localhost mode
          // https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#localhost-mode
          features: {
            free_account_button_color: {
              treatment: 'off',
            },
          },
          core: {
            authorizationKey: process.env.SPLITIO_AUTH_KEY || 'localhost',
          },
          debug: false,
        },
        relatedResources: {
          swiftype: {
            resultsPath: `${__dirname}/src/data/swiftype-resources.json`,
            engineKey: 'Ad9HfGjDw4GRkcmJjUut',
            refetch: Boolean(process.env.BUILD_RELATED_CONTENT),
            limit: 3,
            filter: ({ node }) => {
              if (node.internal.type !== 'Mdx') {
                return false;
              }

              const includedTypes = ['apiDoc', 'troubleshooting'];
              const excludedFolders = [
                'src/content/docs/release-notes',
                'src/content/whats-new',
              ];

              const {
                frontmatter,
                fields: { fileRelativePath },
              } = node;

              if (
                excludedFolders.some((path) => fileRelativePath.includes(path))
              ) {
                return false;
              }

              return (
                frontmatter.type == null ||
                includedTypes.includes(frontmatter.type)
              );
            },
            getParams: ({ node, slug }) => {
              const { tags, title } = node.frontmatter;

              const locale = slug && slug.split('/')[0];
              const postfix = additionalLocales.includes(locale)
                ? `-${locale}`
                : '';

              return {
                q: tags ? tags.map(quote).join(' OR ') : title,
                search_fields: {
                  page: [
                    'tags^10',
                    'quick_start_name^8',
                    'body^5',
                    'title^1.5',
                    '*',
                  ],
                },
                filters: {
                  page: {
                    type: [
                      `docs${postfix}`,
                      `developer${postfix}`,
                      `opensource${postfix}`,
                      `quick_starts${postfix}`,
                    ],
                    document_type: [
                      '!views_page_menu',
                      '!term_page_api_menu',
                      '!term_page_landing_page',
                    ],
                  },
                },
              };
            },
          },
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
            production: {
              instrumentationType: 'proAndSPA',
              accountId: '10175106',
              trustKey: '1',
              agentID: '29883416',
              licenseKey: '23448da482',
              applicationID: '29883416',
              beacon: 'staging-bam-cell.nr-data.net',
              errorBeacon: 'staging-bam-cell.nr-data.net',
            },
          },
        },
        tessen: {
          tessenVersion: '1.14.0',
          product: 'DOC',
          subproduct: 'TDOC',
          segmentWriteKey: 'AEfP8c1VSuFxhMdk3jYFQrYQV9sHbUXx',
          trackPageViews: true,
          pageView: {
            name: 'pageView',
            category: 'DocPageView',
            getProperties: ({ location, env }) => ({
              path: location.pathname,
              env: env === 'production' ? 'prod' : env,
            }),
          },
        },
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
    //
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'translated-content',
        path: `${__dirname}/src/i18n/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'translated-nav',
        path: `${__dirname}/src/i18n/nav`,
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        // If we need to source json files other than the i18n/nav, we should
        // consider making this dynamic. See the docs for ways to do this.
        //
        // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-json
        typeName: 'TranslatedNavJson',
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
              linkImagesToOriginal: true,
              backgroundColor: 'transparent',
              disableBgImageOnAlpha: true,
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
          autoLinkHeaders,
          // This MUST come after `gatsby-remark-autolink-headers` to ensure the
          // link created for the icon has the proper id
          'gatsby-remark-custom-heading-ids',
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
        remarkPlugins: [],
        rehypePlugins: [
          require('./rehype-plugins/image-sizing'),
          [
            require('./rehype-plugins/gatsby-inline-images'),
            { spacing: '0.5rem' },
          ],
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: true,
              backgroundColor: 'transparent',
              disableBgImageOnAlpha: true,
            },
          },
          autoLinkHeaders,
          // This MUST come after `gatsby-remark-autolink-headers` to ensure the
          // link created for the icon has the proper id.
          //
          // This also uses the `require.resolve` syntax because
          // `gatsby-plugin-mdx` is unable to resolve local plugins.
          // https://github.com/gatsbyjs/gatsby/issues/23194
          {
            resolve: require.resolve(
              './plugins/gatsby-remark-custom-heading-ids'
            ),
          },
          {
            resolve: require.resolve('./plugins/gatsby-remark-mdx-v2-images'),
          },
          // Gifs are not supported via gatsby-remark-images (https://github.com/gatsbyjs/gatsby/issues/7317).
          // It is recommended to therefore use this plugin to copy files with a
          // .gif extension to the public folder.
          //
          // Source: https://github.com/gatsbyjs/gatsby/issues/7317#issuecomment-412984851
          'gatsby-remark-copy-linked-files',
          {
            resolve: require.resolve('./plugins/gatsby-remark-gifs'),
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: require.resolve(
              './plugins/gatsby-remark-mdx-v2-fenced-code-blocks'
            ),
          },
          {
            resolve: require.resolve(
              './plugins/gatsby-remark-remove-button-paragraphs'
            ),
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
    'gatsby-plugin-generate-doc-json',
    // Comment in below to run a build that checks links
    // 'gatsby-plugin-check-links',
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
                isFeatured
              }
              fields {
                slug
              }
              htmlAst
            }
          }
        }
        `,
        path: '/api/nr1/content/nr1-announcements.json',
        serialize: ({ data }) => {
          const ids = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'src/data/whats-new-ids.json'))
          );

          const htmlParser = unified()
            .use(parse)
            .use(addAbsoluteImagePath)
            .use(rehypeStringify);

          return {
            announcements: data.allMarkdownRemark.nodes.map(
              ({ frontmatter, htmlAst, fields }) => {
                const parsedHtml = htmlParser.runSync(htmlAst);
                return {
                  docsID: ids[fields.slug],
                  title: frontmatter.title,
                  summary: frontmatter.summary,
                  releaseDateTime: frontmatter.releaseDate,
                  learnMoreLink: frontmatter.learnMoreLink,
                  getStartedLink: frontmatter.getStartedLink,
                  body: htmlParser.stringify(parsedHtml),
                  docUrl: new URL(fields.slug, siteUrl).href,
                  isFeatured: frontmatter.isFeatured,
                };
              }
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
      resolve: `gatsby-plugin-generate-json`,
      options: {
        query: `
        {
          allMdx(filter: {fields: {slug: {regex: "/docs/release-notes/"}}}) {
            nodes {
              frontmatter {
                subject
                releaseDate(fromNow: false)
                version
              }
              excerpt(pruneLength: 5000)
            }
          }
        }
        `,
        path: '/api/agent-release-notes.json',
        serialize: ({ data }) =>
          data.allMdx.nodes
            .map(({ frontmatter, excerpt }) => ({
              agent: getAgentName(frontmatter.subject),
              date: frontmatter.releaseDate,
              version: frontmatter.version,
              description: excerpt,
            }))
            .filter(({ date, agent }) => Boolean(date && agent)),
      },
    },
    'gatsby-plugin-release-note-rss',
    'gatsby-plugin-whats-new-rss',
    'gatsby-plugin-security-bulletins-rss',
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
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        allPageHeaders: ['Referrer-Policy: no-referrer-when-downgrade'],
      },
    },
  ],
};
