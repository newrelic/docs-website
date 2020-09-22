import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const whatsNewTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, summary, learnMoreLink, getStartedLink } = frontmatter;
  return (
    <>
      <h1>{title}</h1>
      <ul>
        <li>{`summary: ${summary}`}</li>
        <li>{`getStartedLink: ${getStartedLink}`}</li>
        <li>{`learnMoreLink: ${learnMoreLink}`}</li>
      </ul>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </>
  );
};

whatsNewTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($fileRelativePath: String!) {
    mdx(fields: { fileRelativePath: { eq: $fileRelativePath } }) {
      body
      frontmatter {
        title
        summary
        learnMoreLink
        getStartedLink
      }
    }
  }
`;

export default whatsNewTemplate;
