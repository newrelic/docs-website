import React from 'react';
import PropTypes from 'prop-types';
import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

const MainLayout = ({ children }) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
          maxWidth
        }
      }
    }
  `);

  return (
    <>
      <GlobalHeader />
      <main
        css={css`
          margin: 0 auto;
          max-width: ${layout.maxWidth};
          padding: ${layout.contentPadding};
        `}
      >
        {children}
      </main>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
