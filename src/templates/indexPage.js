import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import SEO from '../components/seo';

const IndexPage = ({ pageContext }) => {
  const { html, title } = pageContext;

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

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default IndexPage;
