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
            ? [`${__dirname}/src/i18n/content/*`]
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
    // 'gatsby-plugin-generate-doc-json',
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
                downloadLink
                version
                features
                bugs
                security
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
              downloadLink: frontmatter.downloadLink,
              version: frontmatter.version,
              features: frontmatter.features,
              bugs: frontmatter.bugs,
              security: frontmatter.security,
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
            'gradle',
            'groovy',
            'ini',
            'kotlin',
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
        signup: {
          environment: process.env.ENVIRONMENT || 'staging',
          signupUrl:
            process.env.SIGNUP_URL ||
            'https://signup-receiver.staging-service.newrelic.com',
          reCaptchaToken:
            process.env.RECAPTCHA_TOKEN ||
            '6LdZ0xcgAAAAAPxQTpvn9B4qzTRhRM8llwvt41dX',
        },
        newRelicRequestingServicesHeader: 'docs-website',
      },
    },
  ],
};
