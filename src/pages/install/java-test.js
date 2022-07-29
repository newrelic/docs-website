import React from 'react';
import { graphql } from 'gatsby';
// import { SEO } from '../../components/SEO';
import PageTitle from '../../components/PageTitle';
import MDXContainer from '../../components/MDXContainer';
import { Walkthrough } from '@newrelic/gatsby-theme-newrelic';
import AgentConfig from '../../components/AgentConfig';

const InstallPage = ({ data }) => {
  // console.log('params', params);
  const { installConfig = {} } = data;
  const { title, intro, steps } = installConfig;

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

const renderStep = (mdx) => {
  const { frontmatter, body } = mdx;
  const { componentType } = frontmatter;

  if (componentType === 'agentConfig') {
    const { inputOptions, tipMdx } = frontmatter;
    return <AgentConfig inputOptions={inputOptions} tipMdx={tipMdx} />;
  }
  return <MDXContainer body={body} />;
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
      appInfo {
        optionType
        label
        options {
          value
          displayName
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
