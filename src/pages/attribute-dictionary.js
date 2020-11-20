import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import {
  ContributingGuidelines,
  Layout,
} from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/seo';
import DataDictionaryFilter from '../components/DataDictionaryFilter';
import PageTitle from '../components/PageTitle';

const AttributeDictionary = ({ data, pageContext }) => {
  const { allDataDictionaryEvent } = data;

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
          <DataDictionaryFilter
            events={allDataDictionaryEvent.edges.map((edge) => edge.node)}
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
    allDataDictionaryEvent(sort: { fields: [name] }) {
      edges {
        node {
          ...DataDictionaryFilter_events
        }
      }
    }
  }
`;

export default AttributeDictionary;
