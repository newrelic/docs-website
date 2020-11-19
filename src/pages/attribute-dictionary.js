import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import {
  ContributingGuidelines,
  Layout,
} from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/seo';
import PageTitle from '../components/PageTitle';

const AttributeDictionary = ({ data, pageContext }) => {
  return (
    <>
      <SEO title="New Relic data dictionary" />
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'page-title page-title'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-column-gap: 2rem;
        `}
      >
        <PageTitle>New Relic data dictionary</PageTitle>
        <Layout.Content>
          <div>Stuff</div>
        </Layout.Content>
        <Layout.PageTools>
          <ContributingGuidelines
            fileRelativePath={pageContext.fileRelativePath}
          />
        </Layout.PageTools>
      </div>
    </>
  );
};

AttributeDictionary.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    attributes: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "attribute" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            name
            events
            units
          }
        }
      }
    }
  }
`;

export default AttributeDictionary;
