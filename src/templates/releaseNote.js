import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Icon, Layout } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';

const ReleaseNoteTemplate = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { subject, version, releaseDate },
    },
  } = data;

  const title = `${subject} v${version}`;

  return (
    <>
      <SEO title={title} />
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
          font-size: 0.75rem;
          color: var(--color-dark-600);
          display: flex;
          align-items: baseline;
          max-width: 850px;
          border-bottom: 1px solid var(--divider-color);
          padding-bottom: 1rem;
          margin-bottom: 1rem;
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
      <Layout.Content
        css={css`
          max-width: 850px;
        `}
      >
        <MDXContainer body={body} />
      </Layout.Content>
    </>
  );
};

ReleaseNoteTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        subject
        version
        releaseDate(formatString: "MMMM D, YYYY")
      }
    }
    ...MainLayout_query
  }
`;

export default ReleaseNoteTemplate;
