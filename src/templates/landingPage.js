import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Layout, SEO } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';

const isMdxType = (element, mdxType) => element.props?.mdxType === mdxType;

const Wrapper = ({ children }) => {
  children = Children.toArray(children);

  const viewAllButtonIdx = children.findIndex(
    (element, idx) =>
      isMdxType(element, 'ButtonLink') &&
      isMdxType(children[idx - 1], 'LandingPageTileGrid')
  );

  return viewAllButtonIdx === -1
    ? children
    : [
        ...children.slice(0, viewAllButtonIdx),
        <div
          key="viewAllButton"
          css={css`
            text-align: center;
          `}
        >
          {children[viewAllButtonIdx]}
        </div>,
        ...children.slice(viewAllButtonIdx + 1),
      ];
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

const components = {
  wrapper: Wrapper,
};

const LandingPage = ({ data, location }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <>
      <SEO location={location} title={frontmatter.title} />
      <PageTitle>{frontmatter.title}</PageTitle>
      <Layout.Content>
        <MDXContainer components={components} body={body} />
      </Layout.Content>
    </>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    ...MainLayout_query
  }
`;

export default LandingPage;
