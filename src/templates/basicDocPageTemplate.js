import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const basicDocPageTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <div>{body}</div>
    </>
  );
};

basicDocPageTemplate.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($filepath: String!) {
    mdx(fileAbsolutePath: { eq: $filepath }) {
      body {
        frontmatter {
          title
        }
      }
    }
  }
`;

export default basicDocPageTemplate;
