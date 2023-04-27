import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Layout,
  useQueryParams,
  Link,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';
import useDarkMode from 'use-dark-mode';
import EmbedContext from '../components/EmbedContext';
import ErrorBoundary from '../components/ErrorBoundary';
import MDXContainer from '../components/MDXContainer';

const components = {
  a: ({ href, ...props }) => <Link to={href} isEmbedPageLink {...props} />,
  Link: (props) => <Link {...props} isEmbedPageLink {...props} />,
};

const EmbedPage = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title } = frontmatter;

  const { queryParams } = useQueryParams();
  const embedDarkMode = queryParams.get('embedDarkMode');
  const darkMode = useDarkMode(embedDarkMode === 'enabled');

  const tessen = useTessen();

  useEffect(() => {
    if (embedDarkMode === 'enabled') {
      darkMode.enable();
    } else if (embedDarkMode === 'disabled') {
      darkMode.disable();
    }
  }, [darkMode, embedDarkMode]);

  return (
    <ErrorBoundary tessen={tessen} eventName="embed">
      <EmbedContext.Provider value={{ isEmbedded: true }}>
        <h1>{title}</h1>
        <Layout.Content>
          <MDXContainer components={components} body={body} />
        </Layout.Content>
      </EmbedContext.Provider>
    </ErrorBoundary>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

EmbedPage.propTypes = {
  data: PropTypes.object,
};

export default EmbedPage;
