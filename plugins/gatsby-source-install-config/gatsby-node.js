exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type InstallConfig @dontInfer {
      id: ID!
      agentLanguage: String!
      agentType: String!
      title: String!
      introFile: String!
      appInfo: [AppInfoOption!]!
      steps: [InstallStep!]!
      mdxFiles: [Mdx]
      whatsNextMdx: String!
    }
    type AppInfoOption @dontInfer {
      type: String!
      label: String!
      options: [AppInfoOptionValue!]!
    }
    type AppInfoOptionValue @dontInfer {
      value: String!
      displayName: String!
      recommendedGuided: Boolean
    }
    type InstallStep @dontInfer {
      file: String
      overrides: [StepOverride]
    }
    type StepOverride @dontInfer {
      type: String!
      overrideConfig: [StepOverrideConfig!]!
    }
    type StepOverrideConfig @dontInfer {
      value: String!
      file: String
      skip: Boolean
      overrides: [StepOverride]
    }
  `);
};

exports.createResolvers = ({ createResolvers, createNodeId }) => {
  createResolvers({
    Query: {
      installConfig: {
        type: 'InstallConfig',
        args: {
          agentName: 'String!',
        },
        resolve: async (_source, args, context) => {
          const { agentName } = args;
          const { nodeModel } = context;
          const { entries } = await nodeModel.findAll({ type: 'ConfigYaml' });

          const installConfigYaml = Array.from(entries).find((yaml) =>
            findInstallConfig(yaml, agentName)
          );

          const agentInstallName =
            agentName?.toLowerCase() ||
            installConfigYaml.agentName?.toLowerCase();

          const { entries: mdxFiles } = await nodeModel.findAll({
            type: 'Mdx',
            query: {
              filter: {
                fileAbsolutePath: {
                  regex: `/src/install/${agentInstallName}/`,
                },
              },
            },
          });

          return {
            ...installConfigYaml,
            mdxFiles: mdxFiles,
            id: createNodeId('installConfig'),
          };
        },
      },
    },
  });
};

const findInstallConfig = (yaml, agentName) => {
  if (yaml.agentName == null && agentName == null) {
    return null;
  }
  if (yaml.agentName?.toLowerCase() === agentName?.toLowerCase()) {
    return yaml;
  }
};
