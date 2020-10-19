import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import { useMedia } from 'react-use';

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

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const isSmallScreen = useMedia('(max-width: 760px)');

  return (
    <div
      css={css`
        --global-header-height: 36px;
        --sidebar-width: 300px;

        min-height: 100vh;
      `}
    >
      <GlobalHeader />
      <div
        css={css`
          margin: 0 auto;
          max-width: ${layout.maxWidth};
          display: grid;
          grid-template-areas:
            'sidebar content'
            'sidebar footer';
          grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
          grid-template-rows: 1fr auto;
          grid-gap: ${layout.contentPadding};
          width: 100%;
          max-width: ${layout.maxWidth};
          margin: 0 auto;

          @media screen and (max-width: 760px) {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas:
              'mobile-header'
              'content'
              'footer';
            grid-template-rows: unset;
            padding: ${layout.contentPadding};
          }
        `}
      >
        {isSmallScreen ? (
          <MobileHeader
            isOpen={isMobileNavOpen}
            onToggle={() => setMobileNavOpen((open) => !open)}
            css={css`
              grid-area: mobile-header;
            `}
          />
        ) : (
          <>
            <Sidebar
              css={css`
                position: fixed;
                top: var(--global-header-height);
                width: var(--sidebar-width);
                height: calc(100vh - var(--global-header-height));
                overflow: auto;
              `}
            />
            <div
              css={css`
                grid-area: sidebar;
              `}
            />
          </>
        )}
        <main
          css={css`
            display: ${isMobileNavOpen ? 'none' : 'block'};
            grid-area: content;
            padding-top: ${layout.contentPadding};
            padding-right: ${layout.contentPadding};

            @media screen and (max-width: 760px) {
              padding: 0;
            }
          `}
        >
          {children}
        </main>
        <footer
          css={css`
            display: ${isMobileNavOpen ? 'none' : 'block'};
            grid-area: footer;
          `}
        >
          FOOTER
        </footer>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
