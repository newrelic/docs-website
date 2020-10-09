import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';

const whatsNewTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, summary, learnMoreLink, getStartedLink } = frontmatter;
  return (
    <>
      <SEO title={title} />
      <h1>{title}</h1>
      <ul>
        <li>{`summary: ${summary}`}</li>
        <li>{`getStartedLink: ${getStartedLink}`}</li>
        <li>{`learnMoreLink: ${learnMoreLink}`}</li>
      </ul>
      <MDXContainer>{body}</MDXContainer>
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
