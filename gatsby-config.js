const fs = require('fs');
const path = require('path');
const parse = require('rehype-parse');
const unified = require('unified');
const rehypeStringify = require('rehype-stringify');
const addAbsoluteImagePath = require('./rehype-plugins/utils/addAbsoluteImagePath');
const { assetPrefix } = require('./env');

const { LOCALES } = require('./scripts/actions/utils/constants');

const siteUrl = 'https://docs.newrelic.com';
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
const allI18nFolders = fs
  .readdirSync(`${__dirname}/src/i18n/content`)
  .filter((folder) => !folder.startsWith('.'));

const ignoreI18nFolders = () => {
  if (process.env.BUILD_LANG) {
    return allI18nFolders
      .map((folder) => {
        if (folder !== process.env.BUILD_LANG) {
          return `${__dirname}/src/i18n/content/${folder}`;
        }
        return null;
      })
      .filter(Boolean);
  }
  return [];
};

module.exports = {
  trailingSlash: 'always',
  flags: {
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  assetPrefix: assetPrefix(),
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
    `gatsby-plugin-netlify`,
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
        icon: 'static/images/favicon.png', // This path is relative to the root of the site.
      },
    },
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
        name: 'translated-content',
        path: `${__dirname}/src/i18n/content`,
        ignore: ignoreI18nFolders(),
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
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [
          require('rehype-katex'),
          [require('./rehype-plugins/gatsby-inline-images'), { spacing: '0.5rem' }],
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
          {
            resolve: require.resolve(
              './plugins/gatsby-remark-autolink-headers-custom'
            ),
          },
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
          {
            resolve: require.resolve('./plugins/fix-remark-path-prefix-plugin'),
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
    'gatsby-plugin-release-note-rss',
    'gatsby-plugin-whats-new-rss',
    'gatsby-plugin-security-bulletins-rss',
    'gatsby-plugin-eol-rss',
    'gatsby-source-nav',
    'gatsby-source-install-config',
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
        sitemap: process.env.ENVIRONMENT === 'production',
        robots: {
          siteUrl,
          resolveEnv: () => process.env.ENVIRONMENT || 'development',
          env: {
            staging: {
              host: 'https://docs-dev.newrelic.com',
              policy: [{ userAgent: '*', disallow: ['/'] }],
            },
            development: {
              policy: [{ userAgent: '*', disallow: ['/'] }],
            },
            production: {
              policy: [{ userAgent: '*', allow: '/' }],
            },
          },
        },
        layout: {
          contentPadding: '5rem',
          maxWidth: '1600px',
          component: require.resolve('./src/layouts'),
          mobileBreakpoint: '760px',
          sidebarWidth: '340px',
        },
        i18n: {
          translationsPath: `${__dirname}/src/i18n/translations`,
          additionalLocales: LOCALES,
        },
        prism: {
          languages: [
            'css',
            'js',
            'aspnet',
            'batch',
            'csv',
            'cmake',
            'dart',
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
            'hcl',
          ],
        },
        newrelic: {
          config: process.env.ENVIRONMENT === 'production' && {
            instrumentationType: 'proAndSPA',
            accountId: '10956800',
            trustKey: '1',
            agentID: '35094662',
            licenseKey: 'NRJS-649173eb1a7b28cd6ab',
            applicationID: '35094662',
            beacon: 'staging-bam-cell.nr-data.net',
            errorBeacon: 'staging-bam-cell.nr-data.net',
            settings: {
              session_replay: {
                enabled: true,
                block_selector: '',
                mask_text_selector: '*',
                sampling_rate: 50.0,
                error_sampling_rate: 100.0,
                mask_all_inputs: true,
                collect_fonts: true,
                inline_images: false,
                inline_stylesheet: true,
                fix_stylesheets:true,
                mask_input_options: {},
              },
              distributed_tracing: { enabled: true },
              privacy: { cookies_enabled: true },
              ajax: {
                deny_list: [
                  'staging-bam-cell.nr-data.net',
                  'docs.newrelic.com',
                ],
              },
            },
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
            '6LeGFt8UAAAAANfnpE8si2Z6NnAqYKnPAYgMpStu',
        },
        newRelicRequestingServicesHeader: 'docs-website',
        // Segment analytics commented out to avoid costs and unnecessary data collection
        // Uncomment if Segment tracking is needed again
        /* segment: {
          segmentWriteKey: 'noviNOFjASOSPcSEAkwoRxOt0Y1719KD',
          section: 'docs',
          platform: 'docs_pages',
        }, */
      },
    },
  ],
};
