import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import {
  Icon,
  Layout,
  Link,
  MarkdownContainer,
} from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import { TYPES } from '../utils/constants';

const WhatsNewTemplate = ({ data, location, pageContext }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    markdownRemark: {
      html,
      frontmatter: {
        title,
        summary,
        releaseDate,
        learnMoreLink,
        getStartedLink,
      },
    },
  } = data;

  const { disableSwiftype } = pageContext;

  return (
    <>
      <SEO
        location={location}
        title={title}
        type={TYPES.WHATS_NEW}
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
            margin-bottom: 1rem;
            color: var(--color-dark-600);
            display: flex;
            align-items: baseline;
          `}
        >
          <Icon
            name="fe-calendar"
            size="1rem"
            css={css`
              position: relative;
              top: 1px;
              margin-right: 0.25rem;
            `}
          />
          {releaseDate}
        </div>
        <div
          css={css`
            color: var(--secondary-text-color);
            font-size: 1.125rem;
            line-height: 1.75;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--divider-color);

            && {
              margin-bottom: 1rem;
            }
          `}
        >
          <p>{summary}</p>
          {(learnMoreLink || getStartedLink) && (
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
              {learnMoreLink && (
                <li>
                  <MetaLink to={learnMoreLink} siteUrl={siteUrl}>
                    Learn more
                  </MetaLink>
                </li>
              )}
              {getStartedLink && (
                <li>
                  <MetaLink to={getStartedLink} siteUrl={siteUrl}>
                    Get started
                  </MetaLink>
                </li>
              )}
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
      </Layout.Content>
    </>
  );
};

WhatsNewTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        releaseDate(formatString: "MMMM D, YYYY")
        summary
        learnMoreLink
        getStartedLink
      }
    }

    ...MainLayout_query
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

export default WhatsNewTemplate;
