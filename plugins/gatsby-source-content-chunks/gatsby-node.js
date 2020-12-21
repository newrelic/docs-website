const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type ContentChunk implements Node {
      name: String!
      body: Mdx @link
    }
  `);
};

exports.sourceNodes = (
  { actions, createContentDigest, createNodeId, getNodesByType },
  pluginOptions
) => {
  const { createNode } = actions;

  const contentChunkNodes = getNodesByType('Mdx').filter((node) =>
    node.fileAbsolutePath.includes(pluginOptions.path)
  );

  const contentChunkData = contentChunkNodes.map(
    ({ id, slug, fileAbsolutePath, frontmatter }) => ({
      name: frontmatter.name,
      id,
      body: id,
      slug,
      fileRelativePath: getFileRelativePath(fileAbsolutePath),
    })
  );

  contentChunkData.forEach((chunk) => {
    createNode({
      ...chunk,
      id: createNodeId(`chunk-${chunk.name}`),
      parent: null,
      children: [],
      plugin: 'gatsby-source-content-chunks',
      internal: {
        type: 'ContentChunk',
        contentDigest: createContentDigest(chunk),
      },
    });
  });
};
