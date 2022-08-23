import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { Walkthrough, useQueryParams } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../../components/PageTitle';
import MDXContainer from '../../components/MDXContainer';
import AgentConfig from '../../components/AgentConfig';
import AppInfoConfig from '../../components/AppInfoConfig';
import AppInfoConfigOption from '../../components/AppInfoConfigOption';
import InstallNextSteps from '../../components/InstallNextSteps';

const InstallPage = ({ data }) => {
  const { installConfig = {} } = data;
  const {
    title,
    intro,
    steps,
    appInfo,
    agentConfigFile,
    whatsNext,
  } = installConfig;

  const { queryParams } = useQueryParams();

  const renderStep = (step) => {
    const { overrides } = step;

    if (overrides) {
      for (const override of overrides) {
        const { optionType, overrideConfig } = override;
        if (queryParams.has(optionType)) {
          const overrideValue = queryParams.get(optionType);
          const matchedOverrideConfig = overrideConfig.find(
            ({ value }) => value === overrideValue
          );
          if (matchedOverrideConfig) {
            return renderFromComponentType(matchedOverrideConfig);
          }
        }
      }
    }
    return renderFromComponentType(step);
  };

  const renderFromComponentType = ({ mdx, skip }) => {
    if (skip) {
      return null;
    }
    const { frontmatter, body } = mdx;
    const { componentType } = frontmatter;
    if (componentType === 'agentConfig') {
      const { inputOptions } = frontmatter;
      return (
        <AgentConfig
          config={agentConfigFile?.internal?.content}
          inputOptions={inputOptions}
          tipMdx={mdx}
        />
      );
    } else if (componentType === 'appInfoConfig') {
      return <AppInfoConfig selectOptions={appInfo} mdx={mdx} />;
    } else if (componentType === 'appInfoConfigOption') {
      const { optionType } = frontmatter;
      return (
        <AppInfoConfigOption
          selectOptions={appInfo}
          optionType={optionType}
          mdx={mdx}
        />
      );
    }

    return body && <MDXContainer body={body} />;
  };

  const walkthroughSteps = steps
    .map((step) => {
      return { content: renderStep(step), step };
    })
    .filter(({ content }) => content !== null);

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <div
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <MDXContainer body={intro.mdx?.body} />
      </div>
      <div>
        <Walkthrough
          css={css`
            max-width: 900px;
          `}
          r
        >
          {walkthroughSteps.map(({ content, step: { mdx } }, index) => {
            const { descriptionText, headingText } = mdx?.frontmatter;
            return (
              <Walkthrough.Step key={index} number={index} title={headingText}>
                {descriptionText && (
                  <p
                    css={css`
                      margin-bottom: 2rem;
                    `}
                  >
                    {descriptionText}
                  </p>
                )}
                {content}
              </Walkthrough.Step>
            );
          })}
        </Walkthrough>
      </div>
      <InstallNextSteps
        css={css`
          max-width: 900px;
        `}
        mdx={whatsNext.mdx}
      />
    </div>
  );
};

export const pageQuery = graphql`
  fragment MDXInstallFragment on Mdx {
    body
    frontmatter {
      componentType
      optionType
      inputOptions {
        codeLine
        defaultValue
        label
        name
        toolTip
        url {
          href
          title
        }
      }
      headingText
      descriptionText
      agentConfigFilePath
    }
  }

  query($agentName: String!, $locale: String!, $slug: String!) {
    ...MainLayout_query
    installConfig(agentName: { eq: $agentName }) {
      id
      title
      intro {
        filePath
        mdx {
          body
        }
      }
      whatsNext {
        filePath
        mdx {
          body
          frontmatter {
            headingText
          }
        }
      }
      agentConfigFile {
        internal {
          content
        }
      }
      appInfo {
        label
        optionType
        options {
          displayName
          recommendedGuided
          value
        }
      }
      steps {
        mdx {
          ...MDXInstallFragment
        }
        overrides {
          optionType
          overrideConfig {
            mdx {
              ...MDXInstallFragment
            }
            skip
            value
          }
        }
      }
    }
  }
`;

export default InstallPage;
