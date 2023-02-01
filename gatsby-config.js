const fs = require('fs');
const path = require('path');
const parse = require('rehype-parse');
const unified = require('unified');
const rehypeStringify = require('rehype-stringify');
const addAbsoluteImagePath = require('./rehype-plugins/utils/addAbsoluteImagePath');
const getAgentName = require('./src/utils/getAgentName');

const dataDictionaryPath = `${__dirname}/src/data-dictionary`;
const siteUrl = 'https://docs.newrelic.com';
const additionalLocales = ['jp', 'kr'];
const allFolders = fs
  .readdirSync(`${__dirname}/src/content/docs`)
  .filter((folder) => !folder.startsWith('.'));
const doNotIgnoreFolders =
  process.env.BUILD_FOLDERS && process.env.BUILD_FOLDERS.split(',');
const ignoreFolders = process.env.BUILD_FOLDERS
  ? allFolders
      .filter(
        (folder) =>
          !doNotIgnoreFolders.includes(folder) && folder !== 'release-notes'
      )
      .map((folder) => `${__dirname}/src/content/docs/${folder}/*`)
  : [];

const autoLinkHeaders = {
  resolve: 'gatsby-remark-autolink-headers',
  options: {
    icon:
      '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
  },
};

module.exports = {
  trailingSlash: 'always',
  flags: {
    DEV_SSR: true,
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
        ignore: ignoreFolders,
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
        ignore:
          process.env.BUILD_I18N === 'false'
            ? [
                `${__dirname}/src/i18n/content/jp/docs/accounts`,
                `${__dirname}/src/i18n/content/jp/docs/alerts-applied-intelligence`,
                `${__dirname}/src/i18n/content/jp/docs/apis`,
                `${__dirname}/src/i18n/content/jp/docs/apm`,
                `${__dirname}/src/i18n/content/jp/docs/browser`,
                `${__dirname}/src/i18n/content/jp/docs/change-tracking`,
                `${__dirname}/src/i18n/content/jp/docs/codestream`,
                `${__dirname}/src/i18n/content/jp/docs/data-apis`,
                `${__dirname}/src/i18n/content/jp/docs/distributed-tracing`,
                `${__dirname}/src/i18n/content/jp/docs/errors-inbox`,
                `${__dirname}/src/i18n/content/jp/docs/infrastructure`,
                `${__dirname}/src/i18n/content/jp/docs/instrumentation-editor-instrument-net-ui.mdx`,
                `${__dirname}/src/i18n/content/jp/docs/kubernetes-pixie`,
                `${__dirname}/src/i18n/content/jp/docs/logs`,
                `${__dirname}/src/i18n/content/jp/docs/mlops`,
                `${__dirname}/src/i18n/content/jp/docs/mobile-apps`,
                `${__dirname}/src/i18n/content/jp/docs/mobile-crash-rest-api-v1.mdx`,
                `${__dirname}/src/i18n/content/jp/docs/mobile-monitoring`,
                `${__dirname}/src/i18n/content/jp/docs/more-integrations`,
                `${__dirname}/src/i18n/content/jp/docs/nerdgraph-anomaly-detector-configurations-api-tutorial.mdx`,
                `${__dirname}/src/i18n/content/jp/docs/network-performance-monitoring`,
                `${__dirname}/src/i18n/content/jp/docs/new-relic-partnerships`,
                `${__dirname}/src/i18n/content/jp/docs/query-your-data`,
                `${__dirname}/src/i18n/content/jp/docs/security`,
                `${__dirname}/src/i18n/content/jp/docs/serverless-function-monitoring`,
                `${__dirname}/src/i18n/content/jp/docs/service-level-management`,
                `${__dirname}/src/i18n/content/jp/docs/synthetics`,
                `${__dirname}/src/i18n/content/jp/docs/vulnerability-management`,
                `${__dirname}/src/i18n/content/kr/docs/accounts`,
                `${__dirname}/src/i18n/content/kr/docs/alerts-applied-intelligence`,
                `${__dirname}/src/i18n/content/kr/docs/apis`,
                `${__dirname}/src/i18n/content/kr/docs/apm`,
                `${__dirname}/src/i18n/content/kr/docs/browser`,
                `${__dirname}/src/i18n/content/kr/docs/change-tracking`,
                `${__dirname}/src/i18n/content/kr/docs/codestream`,
                `${__dirname}/src/i18n/content/kr/docs/data-apis`,
                `${__dirname}/src/i18n/content/kr/docs/distributed-tracing`,
                `${__dirname}/src/i18n/content/kr/docs/errors-inbox`,
                `${__dirname}/src/i18n/content/kr/docs/infrastructure`,
                `${__dirname}/src/i18n/content/kr/docs/instrumentation-editor-instrument-net-ui.mdx`,
                `${__dirname}/src/i18n/content/kr/docs/kubernetes-pixie`,
                `${__dirname}/src/i18n/content/kr/docs/logs`,
                `${__dirname}/src/i18n/content/kr/docs/mlops`,
                `${__dirname}/src/i18n/content/kr/docs/mobile-apps`,
                `${__dirname}/src/i18n/content/kr/docs/mobile-crash-rest-api-v1.mdx`,
                `${__dirname}/src/i18n/content/kr/docs/mobile-monitoring`,
                `${__dirname}/src/i18n/content/kr/docs/more-integrations`,
                `${__dirname}/src/i18n/content/kr/docs/nerdgraph-anomaly-detector-configurations-api-tutorial.mdx`,
                `${__dirname}/src/i18n/content/kr/docs/network-performance-monitoring`,
                `${__dirname}/src/i18n/content/kr/docs/new-relic-partnerships`,
                `${__dirname}/src/i18n/content/kr/docs/query-your-data`,
                `${__dirname}/src/i18n/content/kr/docs/security`,
                `${__dirname}/src/i18n/content/kr/docs/serverless-function-monitoring`,
                `${__dirname}/src/i18n/content/kr/docs/service-level-management`,
                `${__dirname}/src/i18n/content/kr/docs/synthetics`,
                `${__dirname}/src/i18n/content/kr/docs/vulnerability-management`,
              ]
            : [],
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'install-docs',
        path: `${__dirname}/src/install/`,
      },
    },
    'gatsby-transformer-xml',
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
    `gatsby-transformer-plaintext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/nav/generatedNav.yml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/nav/style-guide.yml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/install/config/`,
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
    'gatsby-source-install-config',
    'gatsby-plugin-meta-redirect',
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        allPageHeaders: [
          'Referrer-Policy: no-referrer-when-downgrade',
          'Content-Security-Policy: frame-ancestors *.newrelic.com',
          'Cache-Control: no-cache',
        ],
      },
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-typegen/
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        oneTrustID: 'e66f9ef1-3a12-4043-b7c0-1a2ea66f6d41',
        layout: {
          contentPadding: '1.5rem',
          maxWidth: '1600px',
          component: require.resolve('./src/layouts'),
          mobileBreakpoint: '760px',
          sidebarWidth: '340px',
        },
        i18n: {
          translationsPath: `${__dirname}/src/i18n/translations`,
          additionalLocales,
        },
        prism: {
          languages: [
            'css',
            'js',
            'aspnet',
            'batch',
            'csv',
            'cmake',
            'dax',
            'diff',
            'django',
            'jinja2',
            'docker',
            'dockerfile',
            'elixir',
            'erlang',
            'gettext',
            'ini',
            'pascal',
            'parser',
            'nginx',
            'n1ql',
            'monkey',
            'mongodb',
            'liquid',
            'json5',
            'jsdoc',
            'mustache',
            'powershell',
            'promql',
            'properties',
            'protobuf',
            'puppet',
            'jsx',
            'regex',
            'ruby',
            'scala',
            'shell',
            'swift',
            'systemd',
            'toml',
            'velocity',
            'vim',
            'php',
            'phpdoc',
            'xml',
            'xml-doc',
            'csharp',
            'md',
            'java',
            'razor',
          ],
        },
        newrelic: {
          config: {
            instrumentationType: 'proAndSPA',
            accountId: '10956800',
            trustKey: '1',
            agentID:
              process.env.ENVIRONMENT === 'production'
                ? '35094662'
                : '35094418',
            licenseKey: 'NRJS-649173eb1a7b28cd6ab',
            applicationID:
              process.env.ENVIRONMENT === 'production'
                ? '35094662'
                : '35094418',
            beacon: 'staging-bam-cell.nr-data.net',
            errorBeacon: 'staging-bam-cell.nr-data.net',
          },
        },
        tessen: {
          tessenVersion: '1.14.0',
          product: 'DOC',
          subproduct: 'TDOC',
          segmentWriteKey: 'AEfP8c1VSuFxhMdk3jYFQrYQV9sHbUXx',
          trackPageViews: true,
          pageView: {
            eventName: 'pageView',
            category: 'DocPageView',
            getProperties: ({ location, env }) => ({
              path: location.pathname,
              env: env === 'production' ? 'prod' : env,
            }),
          },
        },
        shouldUpdateScroll: {
          routes: ['/attribute-dictionary'],
        },
        feedback: {
          environment: process.env.ENVIRONMENT || 'staging',
          reCaptchaToken:
            process.env.FEEDBACK_RECAPTCHA_TOKEN ||
            '6Lfn8wUiAAAAANBY-ZtKg4V9b4rdGZtJuAng62jo',
        },
        newRelicRequestingServicesHeader: 'docs-website',
      },
    },
  ],
};
