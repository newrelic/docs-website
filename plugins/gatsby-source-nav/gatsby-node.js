const parseISO = require('date-fns/parseISO');
const startOfMonth = require('date-fns/startOfMonth');
const startOfYear = require('date-fns/startOfYear');
const getYear = require('date-fns/getYear');
const getMonth = require('date-fns/getMonth');
const sub = require('date-fns/sub');
const isAfter = require('date-fns/isAfter');
const isBefore = require('date-fns/isBefore');
const isEqual = require('date-fns/isEqual');

const isEqualOrAfter = (date, compareDate) =>
  isEqual(date, compareDate) || isAfter(date, compareDate);

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

            case slug.startsWith('/docs/release-notes'):
              return createReleaseNotesNav(utils);

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

const createRootNav = async ({ createNodeId, nodeModel }) => {
  const nav = await nodeModel.runQuery({
    type: 'NavYaml',
    query: {
      filter: {
        rootNav: { eq: true },
      },
      sort: {
        fields: ['title'],
        order: ['ASC'],
      },
    },
  });

  return {
    id: createNodeId('root'),
    pages: nav.map((item) => ({ ...item, pages: [] })),
  };
};

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

  const now = new Date();
  const firstOfMonth = startOfMonth(now);
  const lastMonth = sub(firstOfMonth, { months: 1 });
  const firstOfYear = startOfYear(now);
  const lastYear = sub(firstOfYear, { years: 1 });

  const thisMonthsPosts = posts.filter((post) =>
    isEqualOrAfter(parseDate(post), firstOfMonth)
  );

  const lastMonthsPosts = posts.filter(
    (post) =>
      isEqualOrAfter(parseDate(post), lastMonth) &&
      isBefore(parseDate(post), firstOfMonth)
  );

  const thisYearsPosts = posts.filter((post) =>
    isEqualOrAfter(parseDate(post), firstOfYear)
  );

  const lastYearsPosts = posts.filter(
    (post) =>
      isEqualOrAfter(parseDate(post), lastYear) &&
      isBefore(parseDate(post), firstOfYear)
  );

  return {
    id: createNodeId('whats-new'),
    title: "What's new",
    pages: [{ title: 'Overview', url: '/whats-new' }].concat(
      [
        { title: 'This month', pages: formatPosts(thisMonthsPosts) },
        { title: 'Last month', pages: formatPosts(lastMonthsPosts) },
        { title: 'This Year', pages: formatPosts(thisYearsPosts) },
        { title: 'Last Year', pages: formatPosts(lastYearsPosts) },
      ].filter(({ pages }) => pages.length)
    ),
  };
};

const createReleaseNotesNav = async ({ createNodeId, nodeModel }) => {
  const posts = await nodeModel.runQuery({
    type: 'Mdx',
    query: {
      filter: {
        fileAbsolutePath: {
          regex: '/src/content/docs/release-notes/',
        },
      },
      sort: {
        fields: ['frontmatter.releaseDate'],
        order: ['DESC'],
      },
    },
  });

  const subjects = posts
    .reduce((acc, curr) => [...new Set([...acc, curr.frontmatter.subject])], [])
    .filter(Boolean)
    .sort();

  const formatReleaseNotePosts = (posts) =>
    posts.map((post) => ({
      title: `${post.frontmatter.subject} v${post.frontmatter.version}`,
      url: post.fields.slug,
      pages: [],
    }));

  const filterBySubject = (subject, posts) =>
    posts.filter((post) => post.frontmatter.subject === subject);

  return {
    id: createNodeId('release-notes'),
    title: 'Release Notes',
    pages: [{ title: 'Overview', url: '/docs/release-notes' }].concat(
      subjects.map((subject) => {
        return {
          title: subject,
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
