const { difference } = require('lodash');

const uniq = (arr) => [...new Set(arr)];
const prop = (key) => (obj) => obj[key];

const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type DataDictionaryEvent implements Node {
      name: String!
      definition: MarkdownRemark @link
      dataSources: [String!]!
    }

    type DataDictionaryAttribute implements Node {
      name: String!
      definition: MarkdownRemark! @link
      events: [DataDictionaryEvent!]!
    }
  `);
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    DataDictionaryAttribute: {
      events: {
        resolve: (source, _args, context) =>
          context.nodeModel
            .getAllNodes({ type: 'DataDictionaryEvent' })
            .filter((event) => source.events.includes(event.name)),
      },
    },
  });
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest, getNodesByType },
  pluginOptions
) => {
  const { createNode, createRedirect, touchNode } = actions;

  const dataDictionaryNodes = getNodesByType('MarkdownRemark').filter((node) =>
    node.fileAbsolutePath.includes(pluginOptions.path)
  );

  dataDictionaryNodes.forEach((node) => touchNode(node));

  const attributeEvents = uniq(
    dataDictionaryNodes
      .filter(({ frontmatter }) => frontmatter.type === 'attribute')
      .flatMap(({ frontmatter }) => frontmatter.events)
  );

  const events = dataDictionaryNodes
    .filter(({ frontmatter }) => frontmatter.type === 'event')
    .map(({ id, fileAbsolutePath, frontmatter }) => ({
      name: frontmatter.name,
      dataSources: frontmatter.dataSources,
      definition: id,
      fileRelativePath: getFileRelativePath(fileAbsolutePath),
    }));

  const missingEvents = difference(
    attributeEvents,
    events.map(prop('name'))
  ).map((name) => ({
    name,
    dataSources: [],
    definition: null,
    fileRelativePath: null,
  }));

  events.concat(missingEvents).forEach((event) => {
    const attributeIds = dataDictionaryNodes
      .filter(
        ({ frontmatter }) =>
          frontmatter.type === 'attribute' &&
          frontmatter.events.includes(event.name)
      )
      .sort((a, b) => (a.frontmatter.name > b.frontmatter.name ? 1 : -1))
      .map((attribute) => {
        const { frontmatter, fileAbsolutePath } = attribute;

        const id = createNodeId(`attribute-${event.name}-${frontmatter.name}`);

        const data = {
          name: frontmatter.name,
          units: frontmatter.units,
          events: frontmatter.events,
          fileRelativePath: getFileRelativePath(fileAbsolutePath),
          definition: attribute.id,
        };

        createNode({
          ...data,
          id,
          parent: null,
          children: [],
          plugin: 'gatsby-source-data-dictionary',
          internal: {
            type: 'DataDictionaryAttribute',
            contentDigest: createContentDigest(data),
          },
        });

        frontmatter.events.forEach((event) => {
          createRedirect({
            fromPath: `/attribute-dictionary/${event.toLowerCase()}/${frontmatter.name.toLowerCase()}`,
            toPath: `/attribute-dictionary/?event=${event}&attribute=${frontmatter.name}`,
            isPermanent: true,
            redirectInBrowser: true,
            trailingSlash: false,
          });
        });

        return id;
      });

    createRedirect({
      fromPath: `/attribute-dictionary/${event.name.toLowerCase()}`,
      toPath: `/attribute-dictionary/?event=${event.name}`,
      isPermanent: true,
      redirectInBrowser: true,
      trailingSlash: false,
    });

    createNode({
      ...event,
      id: createNodeId(`DataDictionaryEvent-${event.name}`),
      parent: null,
      children: attributeIds,
      plugin: 'gatsby-source-data-dictionary',
      internal: {
        type: 'DataDictionaryEvent',
        contentDigest: createContentDigest(event),
      },
    });
  });
};
