import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import IndexContents from '../components/IndexContents';
import TableOfContentsContainer from '../components/TableOfContentsContainer';
import SEO from '../components/SEO';
import { TYPES } from '../utils/constants';

const IndexPage = ({ data, pageContext, location }) => {
  const { nav } = data;
  const { html } = pageContext;
  const title = nav ? nav.title : pageContext.title;

  return (
    <>
      <SEO location={location} title={title} type={TYPES.AUTO_INDEX_PAGE} />
      <PageTitle>{title}</PageTitle>
      <Layout.Content>
        {nav ? (
          <IndexContents nav={nav} />
        ) : (
          <TableOfContentsContainer
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </Layout.Content>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    ...MainLayout_query
  }
`;

export default IndexPage;
