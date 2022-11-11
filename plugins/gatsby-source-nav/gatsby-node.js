const preferDefault = (m) => (m && m.default) || m;
const parseISO = preferDefault(require('date-fns/parseISO'));

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Nav implements Node {
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
      url: String
      pages: [NavItem!]!
    }
  `);
};

exports.createResolvers = ({ createResolvers, cache }) => {
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

          let navCacheKey = `source-nav-cache-query-`;
          let navUrlFilter;
          switch (true) {
            case slug.startsWith('/docs/agile-handbook'):
              navCacheKey += `handbook`;
              navUrlFilter = '/docs/agile-handbook';
              break;
            case slug.startsWith('/docs/style-guide'):
              navCacheKey += `style`;
              navUrlFilter = '/docs/style-guide';
              break;
            default:
              navCacheKey += `master`;
              navUrlFilter = '/';
              break;
          }

          let nav = await cache.get(navCacheKey);
          if (!nav) {
            nav = await nodeModel.findOne({
              type: 'Nav',
              query: {
                filter: {
                  url: { eq: navUrlFilter },
                },
              },
            });
            cache.set(navCacheKey, nav);
          }
          return nav;
        },
      },
    },
    Nav: {
      title: {
        resolve: findTranslatedTitle,
      },
    },
    NavItem: {
      title: {
        resolve: findTranslatedTitle,
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

exports.sourceNodes = async ({
  actions,
  cache,
  getNodesByType,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions;
  const rootNavCacheKey = `source-nav-cache-master`;
  const styleNavCacheKey = `source-nav-cache-style`;
  const handbookNavCacheKey = `source-nav-cache-handbook`;

  reporter.info(`source-nav's sourceNodes called now!`);

  let navToRuleThemAll = await cache.get(rootNavCacheKey);
  let styleGuideNav;
  let agileHandbookNav;
  if (navToRuleThemAll) {
    reporter.info(`source-nav's single nav was found in cache!`);
    styleGuideNav = await cache.get(styleNavCacheKey);
    agileHandbookNav = await cache.get(handbookNavCacheKey);
  } else {
    reporter.info(`source-nav's nav wasn't cached! Creating new nav nodes.`);
    const data = await getNodesByType(`NavYaml`);
    const rootNavData = data.find((navYaml) => navYaml.path === '/');
    const styleNavData = data.find(
      (navYaml) => navYaml.path === '/docs/style-guide'
    );
    const handbookNavData = data.find(
      (navYaml) => navYaml.path === '/docs/agile-handbook'
    );

    const rootNavSubPages = await createNavItemsHelper(
      createNodeId,
      rootNavData.pages
    );

    // Release Notes
    const releaseNoteNodes = await createReleaseNotesNav({
      createNodeId,
      getNodesByType,
    });
    rootNavSubPages.push(releaseNoteNodes);

    // What's New
    const whatsNewNodes = await createWhatsNewNav({
      createNodeId,
      getNodesByType,
    });
    rootNavSubPages.push(whatsNewNodes);

    const rootNodeData = {
      title: rootNavData.title,
      filterable: rootNavData.filterable || true,
      url: rootNavData.path || '/',
      pages: rootNavSubPages,
    };
    navToRuleThemAll = {
      ...rootNodeData,
      id: createNodeId(rootNavData.title),
      parent: null,
      children: [],
      internal: {
        type: `Nav`,
        contentDigest: createContentDigest(rootNodeData),
      },
    };

    // Style Guide
    styleGuideNav = await createNavNode(
      createNodeId,
      createContentDigest,
      styleNavData
    );

    // Agile Handbook
    agileHandbookNav = await createNavNode(
      createNodeId,
      createContentDigest,
      handbookNavData
    );

    reporter.info(`source-nav is caching the result of Node creation...`);
    cache.set(rootNavCacheKey, navToRuleThemAll);
    cache.set(styleNavCacheKey, styleGuideNav);
    cache.set(handbookNavCacheKey, agileHandbookNav);
  }

  createNode(navToRuleThemAll);
  createNode(styleGuideNav);
  createNode(agileHandbookNav);
};

const createNavNode = async (createNodeId, createContentDigest, navYaml) => {
  const subPages = await createNavItemsHelper(createNodeId, navYaml.pages);
  const nodeData = {
    title: navYaml.title,
    filterable: navYaml.filterable || true,
    url: navYaml.path,
    pages: subPages,
  };
  return {
    ...nodeData,
    id: createNodeId(navYaml.title),
    parent: null,
    children: [],
    internal: {
      type: `Nav`,
      contentDigest: createContentDigest(nodeData),
    },
  };
};

const createNavItemsHelper = async (createNodeId, pages) => {
  const pagesAsNavItemNodes = [];
  if (pages && pages.length !== 0) {
    pages.forEach(async (page) => {
      const subPages = await createNavItemsHelper(createNodeId, page.pages);
      const newNavItemData = {
        id: createNodeId(page.title),
        title: page.title,
        icon: page.icon,
        url: page.path,
        pages: subPages || [],
      };
      pagesAsNavItemNodes.push(newNavItemData);
    });
  }
  return pagesAsNavItemNodes;
};

const createWhatsNewNav = async ({ createNodeId, getNodesByType }) => {
  const posts = getNodesByType(`MarkdownRemark`)
    .filter((element) =>
      /src\/content\/whats-new/.test(element.fileAbsolutePath)
    )
    .sort((leftNode, rightNode) => {
      const releaseDateComparison = leftNode.frontmatter.releaseDate.localeCompare(
        rightNode.frontmatter.releaseDate
      );
      if (releaseDateComparison === 0) {
        return rightNode.frontmatter.title.localeCompare(
          leftNode.frontmatter.title
        );
      } else {
        return releaseDateComparison;
      }
    });

  const currentYear = new Date().getFullYear();
  const postsByYear = groupBy(posts, (post) => parseDate(post).getFullYear());
  const thisYearsPosts = postsByYear.get(currentYear) || [];

  const postsByMonth = groupBy(thisYearsPosts, (post) =>
    parseDate(post).toLocaleString('default', { month: 'long' })
  );

  const previousYearsPosts = Array.from(postsByYear.entries()).filter(
    ([year]) => year < currentYear
  );

  const navItems = Array.from(postsByMonth.entries())
    .concat(previousYearsPosts)
    .map(([key, posts]) => ({
      id: createNodeId(key),
      title: key,
      pages: formatPosts(posts),
    }))
    .filter(({ pages }) => pages.length);

  return {
    id: createNodeId('whats-new'),
    title: "What's new",
    pages: [
      {
        id: createNodeId('Overview'),
        title: 'Overview',
        url: '/whats-new',
        pages: [],
      },
    ].concat(navItems),
  };
};

const createReleaseNotesNav = async ({ createNodeId, getNodesByType }) => {
  const allMdxNodes = getNodesByType(`Mdx`);
  const releaseNoteRegex = /src\/content\/docs\/release-notes\/.*(?<!index).mdx/;
  const landingPageRegex = /src\/content\/docs\/release-notes\/.*\/index.mdx$/;
  const posts = [];
  const landingPages = [];
  allMdxNodes.forEach((element) => {
    if (releaseNoteRegex.test(element.fileAbsolutePath)) {
      posts.push(element);
    } else if (landingPageRegex.test(element.fileAbsolutePath)) {
      landingPages.push(element);
    }
  });

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

      const title = post.frontmatter.title
        ? post.frontmatter.title
        : derivedTitle;
      return {
        id: createNodeId(title),
        title: title,
        url: post.fields.slug,
        pages: [],
      };
    });

  const filterBySubject = (subject, posts) =>
    posts.filter((post) => post.frontmatter.subject === subject);

  return {
    id: createNodeId('release-notes'),
    title: 'Release Notes',
    pages: [
      {
        id: createNodeId('Overview'),
        title: 'Overview',
        url: '/docs/release-notes',
        pages: [],
      },
    ].concat(
      subjects.map((subject) => {
        const landingPage = landingPages.find(
          (page) => page.frontmatter.subject === subject
        );

        return {
          id: createNodeId(subject),
          title: subject,
          url: landingPage && landingPage.fields.slug,
          pages: formatReleaseNotePosts(filterBySubject(subject, posts)),
        };
      })
    ),
  };
};

const parseDate = (post) => parseISO(post.frontmatter.releaseDate);

const formatPosts = (posts) =>
  posts.map((post) => ({
    title: post.frontmatter.title,
    url: post.fields.slug,
    pages: [],
  }));

const groupBy = (arr, fn) =>
  arr.reduce((map, item) => {
    const key = fn(item);

    return map.set(key, [...(map.get(key) || []), item]);
  }, new Map());

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
