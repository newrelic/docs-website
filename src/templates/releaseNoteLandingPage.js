import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import SEO from '../components/seo';

const ReleaseNoteLandingPage = ({ data }) => {
  const {
    mdx: {
      frontmatter: { subject },
    },
  } = data;

  return (
    <>
      <SEO title={subject} />
      <PageTitle>{subject}</PageTitle>
    </>
  );
};

ReleaseNoteLandingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        subject
      }
    }

    ...MainLayout_query
  }
`;

export default ReleaseNoteLandingPage;
