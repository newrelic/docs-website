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
      units: String
    }
  `);
};

// exports.createResolvers = ({ createResolvers }) => {
//   createResolvers({
//     Query: {
//       dataDictionary: {
//         resolve: () => ({}),
//       },
//     },
//   });
// };

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
      const eventId = createNodeId(`DataDictionaryEvent-${frontmatter.name}`);

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
          };

          createNode({
            ...data,
            id,
            parent: eventId,
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
        id: eventId,
        parent: null,
        children: attributeIds,
        internal: {
          type: 'DataDictionaryEvent',
          contentDigest: createContentDigest(data),
        },
      });
    });
};
