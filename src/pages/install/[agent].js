import React from 'react';
import { graphql } from 'gatsby';

const InstallTemplate = ({ params }) => {
  console.table(params);

  return <p>{params.agent}</p>;
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___releaseDate, frontmatter___title]
        order: [DESC, ASC]
      }
      filter: { fields: { slug: { regex: "/whats-new/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            releaseDate(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    ...MainLayout_query
  }
`;

export default InstallTemplate;
