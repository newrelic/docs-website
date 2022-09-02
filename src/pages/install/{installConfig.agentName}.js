import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import {
  Walkthrough,
  TableOfContents,
  ContributingGuidelines,
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
import SEO from '../../components/SEO';
import { TYPES } from '../../utils/constants';

const slugify = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/, '-')
    .replace(/[^a-z0-9-]/g, '');

const InstallPage = ({ data, location }) => {
  const { installConfig = {} } = data;
  const {
    title,
    intro,
    steps,
    appInfo,
    agentConfigFile,
    whatsNext,
    agentName,
    metaDescription,
  } = installConfig;

  const { queryParams, setQueryParam, deleteQueryParam } = useQueryParams();
  const [showGuided, setShowGuided] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tessen = useTessen();

  const handleAppInfoStateChange = (value, select) => {
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

  const matchOverride = ({ optionType, options }) => {
    if (queryParams.has(optionType)) {
      const selectedValue = queryParams.get(optionType);
      return options.some(({ value }) => value === selectedValue);
    }
    return false;
  };

  const renderStep = (step) => {
    const { overrides } = step;

    if (overrides) {
      for (const override of overrides) {
        const { selectedOptions } = override;
        const isOverrided = selectedOptions.every(matchOverride);

        if (isOverrided) {
          return renderFromComponentType(override);
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
          onChange={handleAppInfoStateChange}
          selectOptions={appInfo}
          mdx={mdx}
        />
      );
    } else if (componentType === 'appInfoConfigOption') {
      const { optionType } = frontmatter;
      return (
        <AppInfoConfigOption
          onChange={handleAppInfoStateChange}
          selectOptions={appInfo}
          optionType={optionType}
          mdx={mdx}
        />
      );
    }

    return body && <MDXContainer body={body} />;
  };

  const walkthroughSteps = steps
    .map((step, index) => {
      const { mdx } = step;
      return {
        content: renderStep(step),
        step,
        stepHeadings: {
          id: `${slugify(mdx.frontmatter?.headingText)}-${index + 1}`,
          text: mdx.frontmatter?.headingText,
        },
      };
    })
    .filter(({ content }) => content !== null);

  const headings = walkthroughSteps.map(({ stepHeadings }) => stepHeadings);

  return (
    <>
      <SEO
        location={location}
        title={title}
        description={metaDescription}
        type={TYPES.INTERACTIVE_INSTALL_PAGE}
      />
      <Layout.Main
        css={css`
          display: grid;
          grid-template-areas:
            'mt-disclaimer mt-disclaimer'
            'page-title page-title'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-column-gap: 2rem;

          @media screen and (max-width: 1240px) {
            grid-template-areas:
              'mt-disclaimer'
              'page-title'
              'content'
              'page-tools';
            grid-template-columns: minmax(0, 1fr);
          }
        `}
      >
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
                    id={`${slugify(mdx.frontmatter?.headingText)}-${index + 1}`}
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
          <InstallNextSteps mdx={whatsNext.mdx} />
          <ContributingGuidelines
            css={css`
              @media (min-width: 1240px) {
                display: none;
              }
            `}
          />
        </Layout.Content>
        <Layout.PageTools
          css={css`
            @media (max-width: 1240px) {
              display: none;
            }
          `}
        >
          <ContributingGuidelines />
          <TableOfContents headings={headings} />
        </Layout.PageTools>
      </Layout.Main>
    </>
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
          ...MDXInstallFragment
        }
      }
      whatsNext {
        filePath
        mdx {
          ...MDXInstallFragment
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
        filePath
        overrides {
          filePath
          mdx {
            ...MDXInstallFragment
          }
          skip
          selectedOptions {
            optionType
            options {
              value
            }
          }
        }
      }
    }
  }
`;

export default InstallPage;
