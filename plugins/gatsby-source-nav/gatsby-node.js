const parseISO = require('date-fns/parseISO');
const startOfMonth = require('date-fns/startOfMonth');
const sub = require('date-fns/sub');
const isAfter = require('date-fns/isAfter');
const isBefore = require('date-fns/isBefore');

const RECENT_POSTS_COUNT = 5;

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Nav {
      id: ID!
      title: String
      pages: [NavItem!]!
    }

    type NavItem @dontInfer {
      id: ID!
      title: String!
      icon: String
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
          const utils = { args, nodeModel: context.nodeModel, createNodeId };

          switch (true) {
            case slug === '/':
              return createRootNav(utils);

            case slug.startsWith('/whats-new'):
              return createWhatsNewNav(utils);

            default:
              return createNav(utils);
          }
        },
      },
    },
    NavItem: {
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

const createRootNav = async ({ createNodeId, nodeModel }) => ({
  id: createNodeId('root'),
  pages: await nodeModel.runQuery({
    type: 'NavYaml',
    query: {
      filter: {
        rootNav: true,
      },
      sort: {
        fields: ['title'],
        order: ['ASC'],
      },
    },
  }),
});

const createWhatsNewNav = async ({ createNodeId, nodeModel }) => {
  const posts = await nodeModel.runQuery({
    type: 'MarkdownRemark',
    query: {
      filter: {
        fileAbsolutePath: {
          regex: '/src/content/whats-new/',
        },
      },
      sort: {
        fields: ['frontmatter.releaseDate', 'frontmatter.title'],
        order: ['DESC', 'ASC'],
      },
    },
  });

  const recentPosts = posts.slice(0, RECENT_POSTS_COUNT);
  const remainingPosts = posts.slice(RECENT_POSTS_COUNT);
  const now = new Date();
  const firstOfMonth = startOfMonth(now);
  const lastMonth = sub(firstOfMonth, { months: 1 });

  const thisMonthsPosts = remainingPosts.filter((post) =>
    isAfter(parseDate(post), firstOfMonth)
  );

  const lastMonthsPosts = remainingPosts.filter(
    (post) =>
      isAfter(parseDate(post), lastMonth) &&
      isBefore(parseDate(post), firstOfMonth)
  );

  const olderPosts = remainingPosts.filter(
    (post) => !thisMonthsPosts.includes(post) && !lastMonthsPosts.includes(post)
  );

  return {
    id: createNodeId('whats-new'),
    title: "What's new",
    pages: formatPosts(recentPosts).concat(
      [
        { title: 'This month', pages: formatPosts(thisMonthsPosts) },
        { title: 'Last month', pages: formatPosts(lastMonthsPosts) },
        { title: 'Older', pages: formatPosts(olderPosts) },
      ].filter(({ pages }) => pages.length)
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

const createNav = ({ args, createNodeId, nodeModel }) => {
  const { slug } = args;
  const nav = nodeModel.getAllNodes({ type: 'NavYaml' }).find((nav) =>
    // table-of-contents pages should get the same nav as their landing page
    findPage(nav, slug.replace(/\/table-of-contents$/, ''))
  );

  if (!nav) {
    return null;
  }

  return {
    id: createNodeId(nav.title),
    title: nav.title,
    pages: nav.pages,
  };
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
