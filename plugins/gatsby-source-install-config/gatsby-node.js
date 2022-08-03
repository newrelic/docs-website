exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type InstallConfig @dontInfer {
      id: ID!
      agentName: String!
      agentType: String!
      title: String!
      intro: IntroFile
      appInfo: [AppInfoOption!]!
      steps: [InstallStep]
      mdxFiles: [Mdx]
      whatsNextMdx: String!
    }
    type allInstallConfig @dontInfer {
      id: ID!
      nodes: [InstallConfig]
    }
    type IntroFile @dontInfer {
      filePath: String
      mdx: Mdx
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
      headingText: String
      inputOptions: [InputOption]
      tipMdx: String
      agentConfigFilePath: String
      optionType: String
    }
    type InputOption @dontInfer {
      name: String!
      codeLine: String!
      label: String!
      defaultValue: String!
      toolTip: String,
      url: InputUrl,
    }
    type InputUrl {
      title: String!
      href: String!
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
          id: 'String!',
        },
        resolve: async (_source, args, context) => {
          const { agentName, id } = args;
          const { nodeModel } = context;
          let installConfigYaml;

          if (!agentName && !id) {
            return null;
          }

          if (id && !agentName) {
            installConfigYaml = await nodeModel.findOne({
              type: 'ConfigYaml',
              query: {
                filter: {
                  id: { eq: id },
                },
              },
            });
          } else {
            installConfigYaml = await nodeModel.findOne({
              type: 'ConfigYaml',
              query: {
                filter: {
                  agentName: { eq: agentName },
                },
              },
            });
          }

          if (!installConfigYaml) {
            return null;
          }

          const { entries: allMdx } = await nodeModel.findAll({
            type: 'Mdx',
            query: {
              filter: {
                fileAbsolutePath: {
                  regex: `/src/install/${installConfigYaml.agentName.toLowerCase()}/`,
                },
              },
            },
          });

          const mdxFiles = Array.from(allMdx);

          const {
            introFilePath,
            steps: installSteps,
            ...installConfigYamlContent
          } = installConfigYaml;

          const introMdx = findMdxFile(introFilePath, mdxFiles);

          const intro = { filePath: introFilePath, mdx: introMdx };

          const steps = installSteps?.map((step) =>
            mapFileNametoFile(step, Array.from(mdxFiles))
          );

          return {
            ...installConfigYamlContent,
            intro,
            steps,
            mdxFiles,
            id: createNodeId('installConfig'),
          };
        },
      },
      allInstallConfig: {
        type: 'allInstallConfig',
        resolve: async (_source, args, context) => {
          const { nodeModel } = context;
          // const returnData = [];

          const { entries: agents } = await nodeModel.findAll({
            type: 'ConfigYaml',
          });

          return { nodes: agents};

          // for (const agent of agents) {
          //   returnData.push(
          //     await nodeModel.findOne({
          //       type: 'InstallConfig',
          //       query: {
          //         filter: {
          //           agentName: { eq: agent },
          //         },
          //       },
          //     })
          //   );
          // }
          //
          // return { nodes: returnData };
        },
      },
    },
  });
};

const mapFileNametoFile = (step, files) => {
  const { filePath, overrides } = step;
  const mdx = findMdxFile(filePath, files);

  if (!overrides) {
    return { ...step, mdx };
  }

  const newOverrides = overrides.map((override) => {
    const { overrideConfig } = override;
    const newOverrideConfig = overrideConfig.map((config) =>
      mapFileNametoFile(config, files)
    );
    return { ...override, overrideConfig: newOverrideConfig };
  });

  return { ...step, mdx, overrides: newOverrides };
};

const findMdxFile = (filePath, files) =>
  files.find(({ fileAbsolutePath }) => fileAbsolutePath.includes(filePath));
