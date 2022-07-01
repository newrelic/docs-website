import React, { useEffect } from 'react';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useDarkMode from 'use-dark-mode';

const EmbedLayout = ({ children }) => {
  // Disable dark mode for embed pages. We want to set it to light mode
  // and not use/update user's site darkMode preference in localstorage
  const { disable } = useDarkMode(false, { storageKey: 'embedDarkMode' });
  useEffect(() => disable(), [disable]);
  return (
    <Layout.Main
      css={css`
        min-height: 100vh;
      `}
      className="light-mode"
    >
      {children}
    </Layout.Main>
  );
};

EmbedLayout.propTypes = {
  children: PropTypes.node,
};

export default EmbedLayout;
