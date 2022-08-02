import React, { useState } from 'react';
import { graphql } from 'gatsby';
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
  // console.log('params', params);
  const { installConfig = {} } = data;
  const { title, intro, steps, appInfo, agentConfigFile } = installConfig;
  const [pageState, setPageState] = useState({
    selectOptions: defaultAppInfoState(appInfo),
  });

  const renderStep = (mdx) => {
    const { frontmatter, body } = mdx;
    const { componentType } = frontmatter;

    if (componentType === 'agentConfig') {
      const { inputOptions } = frontmatter;
      return (
        <AgentConfig
          config={agentConfigFile?.internal?.content}
          inputOptions={inputOptions}
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

    return <MDXContainer body={body} />;
  };

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <MDXContainer body={intro.mdx?.body} />
      <Walkthrough>
        {steps.map(({ mdx }, index) => {
          const { frontmatter } = mdx;
          return (
            <Walkthrough.Step
              key={index}
              number={index}
              title={frontmatter.headingText}
            >
              {renderStep(mdx)}
            </Walkthrough.Step>
          );
        })}
      </Walkthrough>
    </div>
  );
};

export const pageQuery = graphql`
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
        filePath
        mdx {
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
            tipMdx
          }
        }
      }
    }
  }
`;

export default InstallPage;
