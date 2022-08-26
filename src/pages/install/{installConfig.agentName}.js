import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import {
  Walkthrough,
  useQueryParams,
  Layout,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';
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
    agentName,
  } = installConfig;

  const { queryParams, setQueryParam, deleteQueryParam } = useQueryParams();
  const [showGuided, setShowGuided] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tessen = useTessen();

  const handleChange = (value, select) => {
    if (value !== null || value !== undefined) {
      setQueryParam(select.optionType, value);
      const recommendedGuided = select.options.some(
        (option) => option.value === value && option.recommendedGuided === true
      );
      setShowGuided(recommendedGuided);
      tessen.track({
        eventName: 'appInfoOptionSelected',
        category: `${select.optionType}AppInfoOptionSelect`,
        value,
        path: location.pathname,
        agentName,
        recommendedGuided,
      });
    } else {
      deleteQueryParam(select.optionType, value);
    }
  };

  const handleAgentConfigChange = ({ name, value }) => {
    tessen.track({
      eventName: 'agentConfigFileUpdated',
      category: `${name}AgentConfigFileUpdated`,
      key: name,
      value,
      path: location.pathname,
      agentName,
    });
  };

  const handleSelectIndex = (index) => {
    setSelectedIndex(index);
    tessen.track({
      eventName: 'activeStepUpdated',
      activeStep: index + 1,
      path: location.pathname,
      agentName,
    });
  };

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
          onChange={handleAgentConfigChange}
        />
      );
    } else if (componentType === 'appInfoConfig') {
      return (
        <AppInfoConfig
          showGuided={showGuided}
          onChange={handleChange}
          selectOptions={appInfo}
          mdx={mdx}
        />
      );
    } else if (componentType === 'appInfoConfigOption') {
      const { optionType } = frontmatter;
      return (
        <AppInfoConfigOption
          onChange={handleChange}
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
    <Layout.Main>
      <Layout.Content>
        <PageTitle>{title}</PageTitle>
        <div
          css={css`
            margin-bottom: 2rem;
          `}
        >
          <MDXContainer body={intro.mdx?.body} />
        </div>
        <div>
          <Walkthrough>
            {walkthroughSteps.map(({ content, step: { mdx } }, index) => {
              const { descriptionText, headingText } = mdx?.frontmatter;
              return (
                <Walkthrough.Step
                  number={index + 1}
                  title={headingText}
                  active={selectedIndex === index}
                  key={index}
                  onMouseOver={() => handleSelectIndex(index)}
                  onFocus={() => handleSelectIndex(index)}
                >
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
      </Layout.Content>
    </Layout.Main>
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
      agentName
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
        placeholder
        label
        optionType
        options {
          displayName
          recommendedGuided
          value
          logo
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
