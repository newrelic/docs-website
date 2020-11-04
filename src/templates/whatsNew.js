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
      <MDXContainer body={body} />
    </>
  );
};

whatsNewTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $nav: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        summary
        learnMoreLink
        getStartedLink
      }
    }
    ...MainLayout_query
  }
`;

export default whatsNewTemplate;
