import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';

const releaseNotePlatformTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, releaseDateTime, releaseImpact } = frontmatter;
  return (
    <>
      <SEO title={title} />
      <h1>{title}</h1>
      <ul>
        <li>{`releaseDateTime: ${releaseDateTime}`}</li>
        <li>{`releaseImpact: ${releaseImpact}`}</li>
      </ul>
      <MDXContainer>{body}</MDXContainer>
    </>
  );
};

releaseNotePlatformTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($fileRelativePath: String!, $nav: String) {
    mdx(fields: { fileRelativePath: { eq: $fileRelativePath } }) {
      body
      frontmatter {
        title
        releaseDateTime
        releaseImpact
      }
    }
    ...MainLayout_allNavYaml
  }
`;

export default releaseNotePlatformTemplate;
