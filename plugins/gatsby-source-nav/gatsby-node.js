const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Nav @dontInfer {
      id: ID!
      title(locale: String = "en"): String
      filterable: Boolean!
      url: String
      pages: [NavItem!]!
    }
    type NavItem @dontInfer {
      id: ID!
      title(locale: String = "en"): String!
      icon: String
      label: String
      url: String
      pages: [NavItem!]!
    }
  `);
};

exports.createResolvers = ({ createResolvers, createNodeId }) => {
  createResolvers({
    Query: {
      nav: {
        type: 'Nav',
        args: {
          slug: 'String!',
        },
        resolve: async (_source, args, context) => {
          const { slug } = args;
          const { nodeModel } = context;

          const { entries } = await nodeModel.findAll({ type: 'Locale' });

          // Convert GatsbyIterable to array to use array methods it doesn't support
          const locales = Array.from(entries)
            .filter(({ isDefault }) => !isDefault)
            .map(({ locale }) => locale);
          const utils = {
            args,
            nodeModel,
            createNodeId,
            locales,
          };

          switch (true) {
            case slug.startsWith('/docs/agile-handbook') ||
              slug.startsWith('/docs/style-guide'):
              return createSubNav(utils);

            default:
              return createNav(utils);
          }
        },
      },
    },
    Nav: {
      filterable: {
        resolve: (source) =>
          hasOwnProperty(source, 'filterable') ? source.filterable : true,
      },
      url: {
        resolve: (source) => source.url || source.path,
      },
      title: {
        resolve: findTranslatedTitle,
      },
    },
    NavItem: {
      title: {
        resolve: findTranslatedTitle,
      },
      url: {
        resolve: (source) => source.url || source.path,
      },
      pages: {
        resolve: (source) => source.pages || [],
      },
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (!page.context.slug) {
    page.context.slug = page.path;

    createPage(page);
  }
};

const createWhatsNewNav = async ({ createNodeId, nodeModel }) => {
  const { entries } = await nodeModel.findAll({
    type: 'MarkdownRemark',
    query: {
      filter: {
        fileAbsolutePath: {
          regex: '/src/content/whats-new/',
        },
      },
      limit: 10,
      sort: {
        fields: ['frontmatter.releaseDate', 'frontmatter.title'],
        order: ['DESC', 'ASC'],
      },
    },
  });

  const posts = Array.from(entries);
  const navItems = formatPosts(posts);

  return {
    id: createNodeId('whats-new'),
    title: "What's new",
    pages: [{ title: 'Overview', url: '/whats-new' }].concat(navItems),
  };
};

const createReleaseNotesNav = async ({ createNodeId, nodeModel }) => {
  const [
    { entries: releaseNoteEntries },
    { entries: landingPagesEntries },
  ] = await Promise.all([
    nodeModel.findAll({
      type: 'Mdx',
      query: {
        filter: {
          fileAbsolutePath: {
            regex: '/src/content/docs/release-notes/.*(?<!index).mdx/',
          },
        },
        sort: {
          fields: ['frontmatter.releaseDate', 'slug'],
          order: ['DESC', 'DESC'],
        },
      },
    }),

    nodeModel.findAll({
      type: 'Mdx',
      query: {
        filter: {
          fileAbsolutePath: {
            regex: '/src/content/docs/release-notes/.*/index.mdx$/',
          },
        },
      },
    }),
  ]);

  // Convert GatsbyIterable to array to use array methods it doesn't support
  const posts = Array.from(releaseNoteEntries);
  const landingPages = Array.from(landingPagesEntries);

  const subjects = posts
    .reduce((acc, curr) => [...new Set([...acc, curr.frontmatter.subject])], [])
    .filter(Boolean)
    .sort((a, b) =>
      a
        .toLowerCase()
        .replace(/\W/, '')
        .localeCompare(b.toLowerCase().replace(/\W/, ''))
    );

  const formatReleaseNotePosts = (posts) =>
    posts.map((post) => {
      const derivedTitle = post.frontmatter.version
        ? `${post.frontmatter.subject} v${post.frontmatter.version}`
        : post.frontmatter.subject;

      return {
        title: post.frontmatter.title ? post.frontmatter.title : derivedTitle,
        url: post.fields.slug,
        pages: [],
      };
    });

  const filterBySubject = (subject, posts) =>
    posts.filter((post) => post.frontmatter.subject === subject);

  return {
    id: createNodeId('release-notes'),
    title: 'Release Notes',
    pages: [{ title: 'Overview', url: '/docs/release-notes' }].concat(
      subjects.map((subject) => {
        const landingPage = landingPages.find(
          (page) => page.frontmatter.subject === subject
        );

        return {
          title: subject,
          url: landingPage && landingPage.fields.slug,
          pages: [
            {
              title: subject + ' overview',
              url: landingPage && landingPage.fields.slug,
            },
          ].concat(
            formatReleaseNotePosts(filterBySubject(subject, posts)).slice(0, 10)
          ),
        };
      })
    ),
  };
};

const createSubNav = async ({ args, createNodeId, nodeModel, locales }) => {
  let { slug } = args;
  slug = slug
    .replace(/\/table-of-contents$/, '')
    .replace(new RegExp(`^\\/(${locales.join('|')})(?=\\/)`), '');
  const { entries } = await nodeModel.findAll({ type: 'NavYaml' });

  const allNavYamlNodes = Array.from(entries)
    .filter((node) => !node.rootNav)
    .sort((a, b) => a.title.localeCompare(b.title));

  const nav =
    allNavYamlNodes.find((nav) => findPage(nav, slug)) ||
    allNavYamlNodes.find((nav) => slug.includes(nav.path));

  if (!nav) {
    return null;
  }

  return {
    ...nav,
    id: createNodeId(nav.title),
  };
};

const formatPosts = (posts) =>
  posts.map((post) => ({
    title: post.frontmatter.title,
    url: post.fields.slug,
  }));

const createNav = async ({ createNodeId, nodeModel }) => {
  const { entries } = await nodeModel.findAll({ type: 'NavYaml' });

  const allNavYamlNodes = Array.from(entries).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const nav = allNavYamlNodes.find((nav) => findPage(nav, '/'));

  const whatsNewIndex = nav.pages.findIndex(
    (item) => item.title === `What's new?`
  );
  const releaseNotesIndex = nav.pages.findIndex(
    (item) => item.title === `Release notes`
  );
  const whatsNewNav = await createWhatsNewNav({ createNodeId, nodeModel });
  const releaseNotesNav = await createReleaseNotesNav({
    createNodeId,
    nodeModel,
  });

  const rootNavPages = [...nav.pages];
  rootNavPages[whatsNewIndex] = {
    ...rootNavPages[whatsNewIndex],
    pages: whatsNewNav.pages,
  };
  rootNavPages[releaseNotesIndex] = {
    ...rootNavPages[releaseNotesIndex],
    pages: releaseNotesNav.pages,
  };

  return {
    ...nav,
    pages: [...rootNavPages],
    id: createNodeId(nav.title),
  };
};

const findTranslatedTitle = async (source, args, { nodeModel }) => {
  if (args.locale === 'en') {
    return source.title;
  }

  const item = await nodeModel.findOne({
    type: 'TranslatedNavJson',
    query: {
      filter: {
        locale: { eq: args.locale },
        englishTitle: { eq: source.title },
      },
    },
  });

  return item ? item.title : source.title;
};

const findPage = (page, path) => {
  if (page.path === path) {
    return page;
  }

  if (page.pages == null || page.pages.length === 0) {
    return null;
  }

  return page.pages.find((child) => findPage(child, path));
};
