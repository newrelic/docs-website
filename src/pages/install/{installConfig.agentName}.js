import React, { useState, useEffect } from 'react';
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
  const [agentConfigUpdate, setAgentConfigUpdate] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  const tessen = useTessen();

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute('pageType', 'Interactive/Install');
    window.newrelic.setCustomAttribute('agentName', agentName);
  }

  const selectOptions = appInfo.map((select) => ({
    ...select,
    value: queryParams.has(select.optionType)
      ? queryParams.get(select.optionType)
      : null,
  }));

  const capitalize = (word) => {
    let capitalizedWord = word.split('');
    capitalizedWord[0] = capitalizedWord[0].toUpperCase();
    capitalizedWord = capitalizedWord.join('');
    return capitalizedWord;
  };

  const handleAppInfoStateChange = (value, select) => {
    if (value !== null || value !== undefined) {
      setQueryParam(select.optionType, value);
      const recommendedGuided = select.options.some(
        (option) => option.value === value && option.recommendedGuided === true
      );
      setShowGuided(recommendedGuided);
      tessen.track({
        eventName: 'appInfoOptionSelected',
        category: `${capitalize(select.optionType)}AppInfoOptionSelect`,
        value,
        path: location.pathname,
        agentName,
        recommendedGuided,
      });
    } else {
      deleteQueryParam(select.optionType, value);
    }
  };

  const handleAgentConfigChange = ({ name }) => {
    if (!agentConfigUpdate.includes(name)) {
      tessen.track({
        eventName: 'agentConfigFileUpdated',
        category: `${capitalize(name)}AgentConfigFileUpdated`,
        key: name,
        path: location.pathname,
        agentName,
      });
      setAgentConfigUpdate([...agentConfigUpdate, name]);
    }
  };

  const handleSelectIndex = (index) => {
    setSelectedIndex(index);
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
    let shouldNotRender = false;
    if (overrides) {
      for (const override of overrides) {
        const { selectedOptions, isConditionalStep } = override;
        const isOverridden = selectedOptions.every(matchOverride);
        if (isOverridden && isConditionalStep) {
          return { content: renderFromComponentType(step), step };
        } else if (isOverridden) {
          return { content: renderFromComponentType(override), step: override };
        } else if (isConditionalStep) {
          shouldNotRender = true;
        }
      }
    }
    if (shouldNotRender) {
      return { content: null };
    }
    return { content: renderFromComponentType(step), step };
  };

  const renderFromComponentType = ({ mdx, skip }) => {
    if (skip) {
      return null;
    }
    const { frontmatter, body } = mdx;
    const { componentType } = frontmatter;
    if (componentType === 'agentConfig') {
      const { inputOptions, fileName } = frontmatter;
      return (
        <AgentConfig
          config={agentConfigFile?.internal?.content}
          inputOptions={inputOptions}
          fileName={fileName}
          tipMdx={mdx}
          onChange={handleAgentConfigChange}
        />
      );
    } else if (componentType === 'appInfoConfig') {
      return (
        <AppInfoConfig
          showGuided={showGuided}
          onChange={handleAppInfoStateChange}
          selectOptions={selectOptions}
          mdx={mdx}
        />
      );
    } else if (componentType === 'appInfoConfigOption') {
      const { optionType } = frontmatter;
      return (
        <AppInfoConfigOption
          showGuided={showGuided}
          onChange={handleAppInfoStateChange}
          selectOptions={selectOptions}
          optionType={optionType}
          mdx={mdx}
        />
      );
    }

    return body && <MDXContainer body={body} />;
  };

  const walkthroughSteps = steps.reduce((acc, stepsItem, index) => {
    const { content, step } = renderStep(stepsItem);
    if (content === null) {
      return acc;
    }
    const { mdx } = step;
    return [
      ...acc,
      {
        content,
        step,
        stepHeadings: {
          id: `${slugify(mdx?.frontmatter?.headingText)}-${index + 1}`,
          text: mdx?.frontmatter?.headingText,
        },
      },
    ];
  }, []);

  const headings = walkthroughSteps.map(({ stepHeadings }) => stepHeadings);

  // this was added because were running into hydration issues when an
  // appConfigOption was supposed to conditionally render after a selection
  // was chosen
  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
            {isHydrated ? (
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
                      id={`${slugify(mdx.frontmatter?.headingText)}-${
                        index + 1
                      }`}
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
            ) : null}
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
      fileName
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

  query($agentName: String!) {
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
          isConditionalStep
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
