import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';

const ReleaseNoteTemplate = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { subject, version },
    },
  } = data;

  const title = `${subject} v${version}`;

  return (
    <>
      <SEO title={title} />
      <PageTitle>{title}</PageTitle>
      <Layout.Content>
        <MDXContainer body={body} />
      </Layout.Content>
    </>
  );
};

ReleaseNoteTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        subject
        version
      }
    }
    ...MainLayout_query
  }
`;

export default ReleaseNoteTemplate;
