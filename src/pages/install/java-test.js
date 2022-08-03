import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
// import { SEO } from '../../components/SEO';
import PageTitle from '../../components/PageTitle';
import MDXContainer from '../../components/MDXContainer';
import { Walkthrough } from '@newrelic/gatsby-theme-newrelic';
import AgentConfig from '../../components/AgentConfig';
import AppInfoConfig from '../../components/AppInfoConfig';
import AppInfoConfigOption from '../../components/AppInfoConfigOption';

const defaultAppInfoState = (appInfo) => {
  return appInfo.reduce(
    (acc, { optionType }) => ({ ...acc, [optionType]: null }),
    {}
  );
};

const InstallPage = ({ data }) => {
  const { installConfig = {} } = data;
  const { title, intro, steps, appInfo, agentConfigFile } = installConfig;
  const [pageState, setPageState] = useState({
    selectOptions: defaultAppInfoState(appInfo),
  });

  const renderStep = (step) => {
    const { overrides } = step;

    if (overrides) {
      for (const override of overrides) {
        const { optionType, overrideConfig } = override;
        const overrideValue = pageState.selectOptions[optionType];
        if (pageState.selectOptions[optionType] !== null) {
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
      return (
        <AppInfoConfig
          selectOptions={appInfo}
          pageState={pageState}
          setPageState={setPageState}
          mdx={mdx}
        />
      );
    } else if (componentType === 'appInfoConfigOption') {
      const { optionType } = frontmatter;
      return (
        <AppInfoConfigOption
          selectOptions={appInfo}
          pageState={pageState}
          setPageState={setPageState}
          optionType={optionType}
          mdx={mdx}
        />
      );
    }

    return body && <MDXContainer body={body} />;
  };

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <MDXContainer body={intro.mdx?.body} />
      <Walkthrough
        css={css`
          max-width: 900px;
        `}
      >
        {steps.map((step, index) => {
          const { frontmatter } = step.mdx;
          const content = renderStep(step);
          return content ? (
            <Walkthrough.Step
              key={index}
              number={index}
              title={frontmatter.headingText}
            >
              {content}
            </Walkthrough.Step>
          ) : null;
        })}
      </Walkthrough>
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
      agentConfigFilePath
    }
  }

  query($locale: String!, $slug: String!) {
    ...MainLayout_query
    installConfig(agentName: "java") {
      id
      title
      intro {
        filePath
        mdx {
          body
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
