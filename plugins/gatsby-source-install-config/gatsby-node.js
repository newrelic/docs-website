exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type InstallConfig @dontInfer {
      id: ID!
      agentName: String!
      agentType: String!
      title: String!
      introFilePath: String!
      appInfo: [AppInfoOption!]!
      steps: [InstallStep]
      mdxFiles: [Mdx]
      whatsNextMdx: String!
    }
    type AppInfoOption @dontInfer {
      optionType: String!
      label: String!
      options: [AppInfoOptionValue!]!
    }
    type AppInfoOptionValue @dontInfer {
      value: String!
      displayName: String!
      recommendedGuided: Boolean
    }
    type InstallStep @dontInfer {
      filePath: String
      mdx: Mdx
      overrides: [StepOverride]
    }
    type StepOverride @dontInfer {
      optionType: String!
      overrideConfig: [StepOverrideConfig]
    }
    type StepOverrideConfig @dontInfer {
      value: String!
      filePath: String
      mdx: Mdx
      skip: Boolean
      overrides: [StepOverride]
    }
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      componentType: String! 
      headingText: String! 
      inputOptions: [InputOption]
      tipMdx: String
      agentConfigFilePath: String
      optionType: String
    }
    type InputOption @dontInfer {
      labelMdx: String!
      value: String! 
      infoMdx: String! 
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

          if (!agentName) {
            return null;
          }

          const installConfigYaml = Array.from(entries).find((yaml) =>
            findInstallConfig(yaml, agentName)
          );

          if (!installConfigYaml) {
            return null;
          }

          const { entries: mdxFiles } = await nodeModel.findAll({
            type: 'Mdx',
            query: {
              filter: {
                fileAbsolutePath: {
                  regex: `/src/install/${installConfigYaml.agentName.toLowerCase()}/`,
                },
              },
            },
          });

          const steps = installConfigYaml.steps?.map((step) =>
            mapFileNametoFile(step, Array.from(mdxFiles))
          );

          return {
            ...installConfigYaml,
            steps: steps ?? [],
            mdxFiles: mdxFiles,
            id: createNodeId('installConfig'),
          };
        },
      },
    },
  });
};

const mapFileNametoFile = (step, files) => {
  const { file, overrides } = step;
  const mdx = files.find(({ fileAbsolutePath }) =>
    fileAbsolutePath.includes(file)
  );

  if (!overrides) {
    return { ...step, mdx };
  }

  const overrideFiles = overrides.map((override) => {
    const { overrideConfig } = override;
    const newOverrideConfig = mapFileNametoFile(overrideConfig, files);
    return { ...override, overrideConfig: newOverrideConfig };
  });

  return { ...step, mdx, overrides: overrideFiles };
};

const findInstallConfig = (yaml, agentName) => {
  if (yaml.agentName == null) {
    return null;
  }
  if (yaml.agentName?.toLowerCase() === agentName.toLowerCase()) {
    return yaml;
  }
};
