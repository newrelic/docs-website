import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';

const releaseNoteTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, releaseDateTime, releaseVersion, downloadLink } = frontmatter;
  return (
    <>
      <SEO title={title} />
      <h1>{title}</h1>
      <ul>
        <li>{`releaseDateTime: ${releaseDateTime}`}</li>
        <li>{`releaseVersion: ${releaseVersion}`}</li>
        <li>{`downloadLink: ${downloadLink}`}</li>
      </ul>
      <MDXContainer>{body}</MDXContainer>
    </>
  );
};

releaseNoteTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($fileRelativePath: String!, $nav: String) {
    mdx(fields: { fileRelativePath: { eq: $fileRelativePath } }) {
      body
      frontmatter {
        title
        releaseDateTime
        releaseVersion
        downloadLink
      }
    }
    ...MainLayout_allNavYaml
  }
`;

export default releaseNoteTemplate;
