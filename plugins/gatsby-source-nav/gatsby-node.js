const { getTitle } = require('../../src/utils/releaseNotes');
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
    posts.map((post) => ({
      title: getTitle(post.frontmatter),
      url: post.fields.slug,
      pages: [],
    }));

  const filterBySubject = (subject, posts) =>
    posts.filter((post) => post.frontmatter.subject === subject);

  return {
    id: createNodeId('release-notes'),
    title: 'Release Notes',
    pages: [{ title: 'Overview', url: '/docs/release-notes' }].concat(
         // Map through each unique subject to build its navigation structure
      subjects.map(subject => {
        // Find the landing page for the current subject (assuming it has no category in frontmatter)
        const subjectLandingPage = landingPages.find(
          (page) => page.frontmatter.subject === subject && !page.frontmatter.category
        );

        // Filter posts that belong to the current subject
        const postsForCurrentSubject = posts.filter(post => post.frontmatter.subject === subject);

        // Separate uncategorized posts (no 'category' in frontmatter)
        const uncategorizedPosts = postsForCurrentSubject.filter(
          (post) => !post.frontmatter.category
        );

        // Separate categorized posts (have 'category' in frontmatter)
        const categorizedPosts = postsForCurrentSubject.filter(
          (post) => post.frontmatter.category
        );

        // Get unique and sorted categories ONLY from categorized posts for this subject
        const uniqueCategoriesForSubject = [...new Set(categorizedPosts.map(p => p.frontmatter.category))]
          .filter(Boolean) // Ensure no null/undefined categories
          .sort((a, b) => a.toLowerCase().replace(/\W/, '').localeCompare(b.toLowerCase().replace(/\W/, '')));

        return {
          title: subject,
          url: subjectLandingPage && subjectLandingPage.fields.slug,
          pages: [
            // Overview page for the specific subject
            {
              title: subject + ' overview',
              url: subjectLandingPage && subjectLandingPage.fields.slug,
            },
          ]
          .concat(
            // Add uncategorized posts directly under the subject overview, limited to 10
            formatReleaseNotePosts(uncategorizedPosts).slice(0, 10)
          )
          .concat(
            // Map through each actual category within the current subject
            uniqueCategoriesForSubject.map(category => {
              // Find a landing page for the current category (optional: if you have category-specific index.mdx files)
              const categoryLandingPage = landingPages.find(
                (page) => page.frontmatter.subject === subject && page.frontmatter.category === category
              );

              // Filter posts that belong to the current subject and specific category
              const filteredPostsForCategory = categorizedPosts.filter(
                (post) => post.frontmatter.category === category
              );

              return {
                title: category,
                url: categoryLandingPage && categoryLandingPage.fields.slug, // URL for category landing page, if it exists
                // Limit to the latest 10 posts within each category
                pages: formatReleaseNotePosts(filteredPostsForCategory).slice(0, 10),
              };
            })
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
