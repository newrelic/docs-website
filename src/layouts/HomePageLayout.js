import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  MobileHeader,
  LoggedInProvider,
} from '@newrelic/gatsby-theme-newrelic';
import { isNavClosed, setNavClosed } from '../utils/navState';
import { css } from '@emotion/react';
import { scroller } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RootNavigation from '../components/RootNavigation';
import { useLocation } from '@reach/router';
import { MainLayoutContext } from '../components/MainLayoutContext';

const MainLayout = ({ children, pageContext }) => {
  const { locale, slug } = pageContext;
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const isStyleGuide =
    slug.match(/\/docs\/style-guide/) || slug.match(/\/docs\/agile-handbook/);
  const addTrailingSlash = (path) => {
    if (path.endsWith('/')) {
      return path;
    } else {
      return path.concat('/');
    }
  };

  useEffect(() => {
    setIsMobileNavOpen(false);
    setSidebar(!isNavClosed());
    // react scroll causes the page to crash if it doesn't find an element
    // so we're checking for the element before firing
    const pathName = addTrailingSlash(location.pathname);
    const scrollElement = document.getElementsByName(pathName);
    if (location.pathname !== '/' && scrollElement.length === 1) {
      scroller.scrollTo(pathName, {
        duration: 600,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'nav',
        offset: -5,
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    setNavClosed(!sidebar);
  }, [sidebar]);

  return (
    <>
      <SEO location={location} />
      <GlobalHeader
        hideSearch
        customStyles={{ navLeftMargin: '150px', searchRightMargin: '30px' }}
      />
      <MobileHeader>
        <RootNavigation locale={locale} isStyleGuide={isStyleGuide} />
      </MobileHeader>
      <LoggedInProvider>
        <MainLayoutContext.Provider value={[sidebar]}>
          <Layout
            css={css`
              --sidebar-width: 0;
              -webkit-font-smoothing: antialiased;
              font-size: 1.125rem;
              @media screen and (max-width: 1240px) {
                --sidebar-width: 0;
              }
            `}
          >
            <Layout.Sidebar
              css={css`
                display: none;
              `}
            />
            <CSSTransition
              in={sidebar}
              timeout={300}
              classNames="main-transition"
            >
              <Layout.Main
                css={css`
                  display: ${isMobileNavOpen ? 'none' : 'block'};
                  padding: 0; // override padding from theme on homepage
                  position: relative;
                  max-width: unset;

                  @media (min-width: 760px) {
                    ${!sidebar &&
                    `padding-left: calc(var(--site-content-padding) + 50px);`}
                  }

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
            </CSSTransition>
            <Layout.Footer
              fileRelativePath={pageContext.fileRelativePath}
              css={css`
                height: 60px;
                ${!sidebar &&
                css`
                  grid-column: 1/3;
                `}
              `}
            />
          </Layout>
        </MainLayoutContext.Provider>
      </LoggedInProvider>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default MainLayout;
