import React from 'react';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  LoggedInProvider,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useLocation } from '@reach/router';
import { MainLayoutContext } from '../components/MainLayoutContext';

const HomePageLayout = ({ children, pageContext }) => {
  const location = useLocation();

  return (
    <>
      <SEO location={location} />
      <GlobalHeader
        hideSearch
        customStyles={{ navLeftMargin: '150px', searchRightMargin: '30px' }}
      />
      <LoggedInProvider>
        <MainLayoutContext.Provider value={[false]}>
          <Layout
            css={css`
              --sidebar-width: 0;
              -webkit-font-smoothing: antialiased;
              font-size: 1.125rem;
              @media screen and (max-width: 1240px) {
                --sidebar-width: 0;
              }
              --link-color: rgb(243, 244, 244);
              background: #f3f4f4;

              .dark-mode && {
                background: var(--primary-background-color);
              }
            `}
          >
            <Layout.Sidebar
              css={css`
                display: none;
              `}
            />

            <Layout.Main
              css={css`
                display: 'block';
                padding: 0; // override padding from theme on homepage
                position: relative;
                max-width: unset;

                @media screen and (max-width: 1000px) {
                  padding: 0; // override padding from theme on homepage
                }

                &.main-transition-enter {
                  translate: 50px;
                }
                &.main-transition-enter-active {
                  translate: 0;
                  transition: 300ms translate ease;
                }
                &.main-transition-enter-done {
                  translate: 0;
                }

                &.main-transition-exit {
                  translate: -50px;
                }
                &.main-transition-exit-active {
                  translate: 0;
                  transition: 300ms translate ease;
                }
                &.main-transition-exit-done {
                  translate: 0;
                }
              `}
            >
              {children}
            </Layout.Main>
            <Layout.Footer
              fileRelativePath={pageContext.fileRelativePath}
              css={css`
                height: 70px;
              `}
            />
          </Layout>
        </MainLayoutContext.Provider>
      </LoggedInProvider>
    </>
  );
};

HomePageLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default HomePageLayout;
