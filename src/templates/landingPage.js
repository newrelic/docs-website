import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';

const isMdxType = (element, mdxType) => element.props?.mdxType === mdxType;

const Wrapper = ({ children }) => {
  children = Children.toArray(children);

  const viewAllButtonIdx = children.findIndex(
    (element, idx) =>
      isMdxType(element, 'Button') &&
      isMdxType(children[idx - 1], 'LandingPageTileGrid')
  );

  return [
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

const LandingPage = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <MDXContainer components={components} body={body} />
    </>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $nav: String) {
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
