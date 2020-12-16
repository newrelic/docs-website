import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Link } from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/seo';

const IndexPage = ({ pageContext }) => {
  const { pages } = pageContext;

  console.log(pageContext);

  return (
    <>
      <SEO />
      <Layout.Content>
        <ul>
          {pages.map((page) => (
            <li key={page.title}>
              <Link to={page.url}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </Layout.Content>
    </>
  );
};

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default IndexPage;
