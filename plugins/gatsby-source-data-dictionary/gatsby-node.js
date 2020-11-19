const uniq = (arr) => [...new Set(arr)];

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type DataDictionaryEvent implements Node {
      name: String!
      definition: String!
      dataSources: [String!]!
    }

    type DataDictionaryAttribute implements Node {
      name: String!
      definition: String!
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
  const { createNode } = actions;

  const dataDictionaryNodes = getNodesByType('MarkdownRemark').filter((node) =>
    node.fileAbsolutePath.includes(pluginOptions.path)
  );

  dataDictionaryNodes
    .filter(({ frontmatter }) => frontmatter.type === 'event')
    .forEach((event) => {
      const { frontmatter, rawMarkdownBody } = event;

      const attributeIds = dataDictionaryNodes
        .filter(
          ({ frontmatter }) =>
            frontmatter.type === 'attribute' &&
            frontmatter.events.includes(event.frontmatter.name)
        )
        .map((attribute) => {
          const { frontmatter, rawMarkdownBody } = attribute;
          const id = createNodeId(
            `attribute-${event.frontmatter.name}-${frontmatter.name}`
          );

          const data = {
            name: frontmatter.name,
            definition: rawMarkdownBody.trim(),
            units: frontmatter.units,
            events: frontmatter.events,
          };

          createNode({
            ...data,
            id,
            parent: null,
            children: [],
            internal: {
              type: 'DataDictionaryAttribute',
              contentDigest: createContentDigest(data),
            },
          });

          return id;
        });

      const data = {
        name: frontmatter.name,
        dataSources: frontmatter.dataSources,
        definition: rawMarkdownBody.trim(),
      };

      createNode({
        ...data,
        id: createNodeId(`DataDictionaryEvent-${frontmatter.name}`),
        parent: null,
        children: attributeIds,
        internal: {
          type: 'DataDictionaryEvent',
          contentDigest: createContentDigest(data),
        },
      });
    });
};
