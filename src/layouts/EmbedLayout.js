import React from 'react';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const EmbedLayout = ({ children }) => {
  return (
    <Layout.Main
      css={css`
        min-height: 100vh;
      `}
    >
      {children}
    </Layout.Main>
  );
};

EmbedLayout.propTypes = {
  children: PropTypes.node,
};

export default EmbedLayout;
