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
          const { nodeModel } = context;

          switch (true) {
            case slug === '/':
              return createRootNav({ nodeModel, createNodeId });

            case slug.startsWith('/whats-new'):
              return createWhatsNewNav({ nodeModel, createNodeId });

            default:
              return createNav(slug, {
                nodeModel: context.nodeModel,
                createNodeId,
              });
          }
        },
      },
    },
    NavItem: {
      url: {
        resolve: (source) => source.path,
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
        frontmatter: {
          template: 'whatsNew',
        },
      },
    },
  });

  console.log(posts);

  return {
    id: createNodeId('whats-new'),
    title: "What's new",
    pages: [],
  };
};

const createNav = (path, { createNodeId, nodeModel }) => {
  const nav = nodeModel.getAllNodes({ type: 'NavYaml' }).find((nav) =>
    // table-of-contents pages should get the same nav as their landing page
    findPage(nav, path.replace(/\/table-of-contents$/, ''))
  );

  if (!nav) {
    return null;
  }

  return {
    id: createNodeId(path),
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
