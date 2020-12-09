import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import SEO from '../components/seo';

const WhatsNewTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  } = data;

  return (
    <>
      <SEO title={title} />
      <PageTitle>{title}</PageTitle>
      <Layout.Content>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout.Content>
    </>
  );
};

WhatsNewTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default WhatsNewTemplate;
