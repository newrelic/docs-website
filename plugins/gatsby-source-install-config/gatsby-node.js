const { pick } = require('lodash');

exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {
  const { createNode } = actions;

  const configYamlNodes = getNodesByType('ConfigYaml');

  configYamlNodes.forEach((configYamlNode) => {
    const {
      introFilePath,
      whatsNextFilePath,
      agentConfigFilePath,
      steps,
      agentName,
      redirects,
    } = configYamlNode;

    const data = {
      intro: {
        filePath: introFilePath,
      },
      steps,
      redirects,
      agentConfigFile: {
        filePath: agentConfigFilePath,
      },
      whatsNext: {
        filePath: whatsNextFilePath,
      },
      ...pick(configYamlNode, [
        'title',
        'agentName',
        'agentType',
        'appInfo',
        'metaDescription',
      ]),
    };

    createNode({
      id: createNodeId(`InstallConfig-${agentName}`),
      parent: null,
      children: [],
      internal: {
        type: 'InstallConfig',
        contentDigest: createContentDigest(data),
      },
      ...data,
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type InstallConfig implements Node {
      agentName: String!
      agentType: String!
      title: String!
      redirects: [String]
      metaDescription: String
      intro: MDXConfig
      appInfo: [AppInfoOption!]!
      steps: [InstallStep]
      whatsNext: MDXConfig
      agentConfigFile: File
    }
    type MDXConfig @dontInfer {
      filePath: String
      mdx: Mdx
    }
    type AppInfoOption @dontInfer {
      optionType: String!
      label: String!
      placeholder: String!
      options: [AppInfoOptionValue!]!
    }
    type AppInfoOptionValue @dontInfer {
      value: String!
      displayName: String!
      logo: String
      recommendedGuided: Boolean
    }
    type InstallStep @dontInfer {
      filePath: String
      mdx: Mdx
      overrides: [StepOverride]
    }
    type StepOverride @dontInfer {
      filePath: String 
      mdx: Mdx
      skip: Boolean
      isConditionalStep: Boolean
      selectedOptions: [AppInfoSelectedOption]
    }
    type AppInfoSelectedOption @dontInfer {
      optionType: String! 
      options: [AppInfoSelectedOptionValues]
    }
    type AppInfoSelectedOptionValues @dontInfer {
      value: String! 
    }
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      componentType: String! 
      headingText: String
      descriptionText: String
      inputOptions: [InputOption]
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

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    InstallConfig: {
      steps: {
        resolve: async (source, _args, context) => {
          const { nodeModel } = context;

          const { entries: allMdx } = await nodeModel.findAll({
            type: 'Mdx',
            query: {
              filter: {
                fileAbsolutePath: {
                  regex: `/src/install/${source.agentName.toLowerCase()}/`,
                },
              },
            },
          });

          const mdxFiles = Array.from(allMdx);

          const steps = source.steps.map((step) =>
            mapStepToMdx(step, mdxFiles)
          );

          return steps;
        },
      },
      agentConfigFile: {
        resolve: async (source, _args, context) => {
          const { nodeModel } = context;
          const { filePath } = source.agentConfigFile;
          if (!filePath) {
            return null;
          }
          const agentConfigFile = await nodeModel.findOne({
            type: 'File',
            query: {
              filter: {
                absolutePath: {
                  regex: `/${filePath}/`,
                },
              },
            },
          });

          return agentConfigFile;
        },
      },
      whatsNext: {
        resolve: async (source, _args, context) => {
          const { nodeModel } = context;
          const { filePath } = source.whatsNext;
          const mdx = await nodeModel.findOne({
            type: 'Mdx',
            query: {
              filter: {
                fileAbsolutePath: {
                  regex: `/${filePath}/`,
                },
              },
            },
          });
          return { filePath, mdx };
        },
      },
      intro: {
        resolve: async (source, _args, context) => {
          const { nodeModel } = context;
          const { filePath } = source.intro;
          const mdx = await nodeModel.findOne({
            type: 'Mdx',
            query: {
              filter: {
                fileAbsolutePath: {
                  regex: `/${filePath}/`,
                },
              },
            },
          });
          return { filePath, mdx };
        },
      },
    },
  });
};

const mapStepToMdx = (step, files) => {
  const { filePath, overrides } = step;
  const mdx = findMdxFile(filePath, files);
  if (!overrides) {
    return { ...step, mdx };
  }

  const overridesWithMdx = overrides.map((overrideStep) => {
    const { filePath } = overrideStep;
    const overrideMdx = findMdxFile(filePath, files);
    return { ...overrideStep, mdx: overrideMdx };
  });

  return { ...step, mdx, overrides: overridesWithMdx };
};

const findMdxFile = (filePath, files) =>
  files.find(({ fileAbsolutePath }) => fileAbsolutePath.includes(filePath));
