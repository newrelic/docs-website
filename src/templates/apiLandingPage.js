import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import { Layout, Link, SEO } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from '../components/MDXContainer';

const ApiIndexPage = ({ data, location }) => {
  const {
    mdx: {
      body,
      frontmatter: { title },
    },
    allMdx: { nodes: apiDocPages },
  } = data;
  return (
    <>
      <SEO location={location} title={title} />
      <PageTitle>{title}</PageTitle>
      <Layout.Content>
        <MDXContainer body={body}>
          {apiDocPages.map((apiDoc) => (
            <>
              <Link to={apiDoc.fields.slug}>{apiDoc.frontmatter.title}</Link>
              <p>{apiDoc.frontmatter.shortDescription}</p>
            </>
          ))}
        </MDXContainer>
      </Layout.Content>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String!, $slugRegex: String!, $locale: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    allMdx(
      filter: { fields: { slug: { regex: $slugRegex } } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          shortDescription
          title
        }
      }
    }
    ...MainLayout_query
  }
`;

ApiIndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ApiIndexPage;
