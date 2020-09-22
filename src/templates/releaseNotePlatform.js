import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const releaseNotePlatformTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, releaseDateTime, releaseImpact } = frontmatter;
  return (
    <>
      <h1>{title}</h1>
      <ul>
        <li>{`releaseDateTime: ${releaseDateTime}`}</li>
        <li>{`releaseImpact: ${releaseImpact}`}</li>
      </ul>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </>
  );
};

releaseNotePlatformTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($fileRelativePath: String!) {
    mdx(fields: { fileRelativePath: { eq: $fileRelativePath } }) {
      body
      frontmatter {
        title
        releaseDateTime
        releaseImpact
      }
    }
  }
`;

export default releaseNotePlatformTemplate;
