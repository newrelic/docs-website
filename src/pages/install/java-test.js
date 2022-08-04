import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
// import { SEO } from '../../components/SEO';
import PageTitle from '../../components/PageTitle';
import MDXContainer from '../../components/MDXContainer';
import { Walkthrough, Surface, Button } from '@newrelic/gatsby-theme-newrelic';
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
  const {
    title,
    intro,
    steps,
    appInfo,
    agentConfigFile,
    whatsNext,
  } = installConfig;
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
      <Walkthrough
        css={css`
          max-width: 900px;
        `}
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
      <Conclusion
        css={css`
          max-width: 900px;
        `}
        whatsNext={whatsNext}
      />
    </div>
  );
};

const Conclusion = ({ whatsNext, className }) => {
  const {
    mdx: { body, frontmatter },
  } = whatsNext;
  return (
    <div className={className}>
      <Surface
        css={css`
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid #afe2e3;
        `}
        base={Surface.BASE.PRIMARY}
      >
        <h3>While you wait for your data to come in...</h3>
      </Surface>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 2rem;
        `}
      >
        <Surface
          css={css`
            padding: 2rem;
            flex-grow: 1;
            border: 1px solid #afe2e3;
          `}
          base={Surface.BASE.PRIMARY}
        >
          <h3>{frontmatter.headingText}</h3>
          <MDXContainer body={body} />
        </Surface>
        <Surface
          css={css`
            padding: 2rem;
            flex-grow: 1;
            color: var(--color-white);
            background-color: var(--attention-notification-announcement);
          `}
          base={Surface.BASE.PRIMARY}
        >
          <h3
            css={css`
              color: var(--color-white);
            `}
          >
            Still not seeing data?
          </h3>
          <p>Follow our troubleshooting steps</p>
          <Button
            css={css`
              background-color: var(--system-background-surface-1-light);
            `}
            variant={Button.VARIANT.OUTLINE}
          >
            Start troubleshooting.
          </Button>
        </Surface>
      </div>
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
