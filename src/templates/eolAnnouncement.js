import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import {
  Icon,
  Layout,
  Link,
  MarkdownContainer,
  ContributingGuidelines,
} from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import { TYPES } from '../utils/constants';
import ErrorBoundary from '../components/ErrorBoundary';

const EolAnnouncement = ({ data, location, pageContext }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    markdownRemark: {
      html,
      frontmatter: {
        title,
        summary,
        eolEffectiveDate,
        publishDate,
        learnMoreLink,
      },
      fields: { fileRelativePath },
    },
  } = data;

  const { disableSwiftype } = pageContext;

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute('pageType', 'Template/eol');
  }

  return (
    <ErrorBoundary eventName="eol">
      <SEO
        location={location}
        title={title}
        type={TYPES.EOL}
        disableSwiftype={disableSwiftype}
      />
      <PageTitle
        css={css`
          max-width: 850px;
          margin-bottom: 0.5rem;
          line-height: 1.15;
        `}
      >
        {title}
      </PageTitle>
      <div
        css={css`
          max-width: 850px;
        `}
      >
        <div
          css={css`
            font-size: 1rem;
            display: flex;
            align-items: baseline;
            margin: 1rem 0 0.5rem;
          `}
        >
          <Icon
            name="fe-calendar"
            size="1rem"
            css={css`
              position: relative;
              top: 1px;
            `}
          />
          <b
            css={css`
              margin: 0 0.25rem;
            `}
          >
            Published:
          </b>
          {publishDate}
        </div>
        <div
          css={css`
            font-size: 1rem;
            display: flex;
            align-items: baseline;
            margin: 1rem 0 0.5rem;
          `}
        >
          <Icon
            name="fe-minus-circle"
            size="1rem"
            css={css`
              position: relative;
              top: 1px;
            `}
          />
          <b
            css={css`
              margin: 0 0.25rem;
            `}
          >
            End of life effective:
          </b>
          {eolEffectiveDate}
        </div>

        <div
          css={css`
            color: var(--secondary-text-color);
            font-size: 1.125rem;
            line-height: 1.75;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--divider-color);
            margin: 1rem 0;
          `}
        >
          <p>{summary}</p>
          {learnMoreLink && (
            <ul
              css={css`
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                font-size: 0.875rem;
                gap: 1rem;

                > li {
                  margin: 0;
                }

                @supports not (gap: 1rem) {
                  > li:not(:last-child) {
                    margin-right: 1rem;
                  }
                }
              `}
            >
              <li>
                <MetaLink to={learnMoreLink} siteUrl={siteUrl}>
                  Learn more
                </MetaLink>
              </li>
            </ul>
          )}
        </div>
      </div>
      <Layout.Content
        css={css`
          max-width: 850px;
        `}
      >
        <MarkdownContainer dangerouslySetInnerHTML={{ __html: html }} />
        <ContributingGuidelines
          css={css`
            margin-top: 1rem;
            padding-left: 0;
            > * {
              justify-content: flex-start;
              text-align: left;
            }
          `}
          fileRelativePath={fileRelativePath}
          issueLabels={['feedback', 'feedback-issue']}
        />
      </Layout.Content>
    </ErrorBoundary>
  );
};

EolAnnouncement.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        eolEffectiveDate(formatString: "MMMM D, YYYY")
        publishDate(formatString: "MMMM D, YYYY")
        summary
        learnMoreLink
      }
      fields {
        fileRelativePath
      }
    }
  }
`;

const MetaLink = ({ children, to, siteUrl }) => {
  const isExternalLink = to.startsWith('http') && !to.startsWith(siteUrl);

  return (
    <Link
      to={to}
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      {children}{' '}
      {isExternalLink && (
        <Icon
          name="fe-external-link"
          css={css`
            margin-left: 0.5rem;
          `}
        />
      )}
    </Link>
  );
};

MetaLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
};

export default EolAnnouncement;
