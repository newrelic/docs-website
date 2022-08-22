const { pick } = require('lodash');

exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {
  const { createNode, touchNode } = actions;

  const configYamlNodes = getNodesByType('ConfigYaml');
  const mdxNodes = getNodesByType('Mdx');

  const installMdx = mdxNodes.filter(({ fileAbsolutePath }) =>
    fileAbsolutePath.includes('src/install')
  );

  configYamlNodes.forEach((configYamlNode) => {
    touchNode(configYamlNode);
    const {
      introFilePath,
      whatsNextFilePath,
      agentConfigFilePath,
      steps: installSteps,
      agentName,
    } = configYamlNode;

    const filteredInstallMdx = installMdx.filter(({ fileAbsolutePath }) =>
      fileAbsolutePath.includes(`src/install/${agentName}`)
    );

    const steps = installSteps.map((step) =>
      mapFileNametoFile(step, filteredInstallMdx)
    );

    const data = {
      intro: {
        filePath: introFilePath,
        mdx: findMdxFile(introFilePath, filteredInstallMdx),
      },
      steps,
      agentConfigFile: {
        filePath: agentConfigFilePath,
      },
      whatsNext: {
        filePath: whatsNextFilePath,
        mdx: findMdxFile(whatsNextFilePath, filteredInstallMdx),
      },
      ...pick(configYamlNode, ['title', 'agentName', 'agentType', 'appInfo']),
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
      intro: MDXConfig
      appInfo: [AppInfoOption!]!
      steps: [InstallStep]
      whatsNext: MDXConfig
      agentConfigFile: AgentConfigFile
    }
    type AgentConfigFile @dontInfer {
      filePath: String
      file: File
    }
    type MDXConfig @dontInfer {
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
      agentConfigFile: {
        resolve: async (source, _args, context) => {
          const { nodeModel } = context;
          const { filePath } = source.agentConfigFile;
          const file = await nodeModel.findOne({
            type: 'File',
            query: {
              filter: {
                absolutePath: {
                  regex: `/${filePath}/`,
                },
              },
            },
          });

          return { filePath, file };
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
