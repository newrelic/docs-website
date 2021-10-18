import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { Icon, Layout, Link } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/SEO';
import { TYPES } from '../utils/constants';

const getTitle = ({ title, version, subject }) => {
  if (title) {
    return title;
  }

  return version ? `${subject} v${version}` : subject;
};

const ReleaseNoteTemplate = ({ data, location, pageContext }) => {
  const {
    mdx: {
      body,
      frontmatter,
      frontmatter: { downloadLink, releaseDate, metaDescription },
    },
  } = data;

  const { disableSwiftype } = pageContext;

  const title = getTitle(frontmatter);

  return (
    <>
      <SEO
        location={location}
        title={title}
        description={metaDescription}
        type={TYPES.RELEASE_NOTE}
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
          display: flex;
          justify-content: space-between;
          align-items: center;
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
        <span>
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
        </span>
        {downloadLink && (
          <Link
            to={downloadLink}
            css={css`
              display: inline-flex;
              align-items: center;
            `}
          >
            Download{' '}
            <Icon
              name="fe-external-link"
              css={css`
                margin-left: 0.25rem;
                position: relative;
                top: -1px;
              `}
            />
          </Link>
        )}
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
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        subject
        version
        title
        releaseDate(formatString: "MMMM D, YYYY")
        downloadLink
        metaDescription
      }
    }
    ...MainLayout_query
  }
`;

export default ReleaseNoteTemplate;
