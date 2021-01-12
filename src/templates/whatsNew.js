import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Icon, Layout, SEO } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import MarkdownContainer from '../components/MarkdownContainer';

const WhatsNewTemplate = ({ data, location }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, summary, releaseDate },
    },
  } = data;

  return (
    <>
      <SEO location={location} title={title} />
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
            font-size: 0.75rem;
            margin-bottom: 1rem;
            color: var(--color-dark-600);
            display: flex;
            align-items: baseline;
          `}
        >
          <Icon
            name="fe-calendar"
            size="0.75rem"
            css={css`
              position: relative;
              top: 1px;
              margin-right: 0.25rem;
            `}
          />
          {releaseDate}
        </div>
        <p
          css={css`
            color: var(--secondary-text-color);
            font-size: 1.125rem;
            line-height: 1.75;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--divider-color);
            margin-bottom: 1rem;
          `}
        >
          {summary}
        </p>
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
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        releaseDate(formatString: "MMMM D, YYYY")
        summary
      }
    }

    ...MainLayout_query
  }
`;

export default WhatsNewTemplate;
