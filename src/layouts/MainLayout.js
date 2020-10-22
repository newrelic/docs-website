import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import { useMedia, usePrevious } from 'react-use';
import { useLocation } from '@reach/router';
import RootNavigation from '../components/RootNavigation';
import SubNavigation from '../components/SubNavigation';
import { animated, useTransition } from 'react-spring';

const MainLayout = ({ data = {}, children, path }) => {
  const { subNav, ...rootNav } = data;

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

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  // maintain the previous subnav so that exit transitions preserve the nav data
  const previousSubNav = usePrevious(subNav);

  const isSmallScreen = useMedia('(max-width: 760px)');
  const transition = useTransition(path === '/', {
    config: { mass: 1, friction: 34, tension: 400 },
    from: (isRoot) => ({
      opacity: 0,
      position: 'absolute',
      transform: `translateX(${isRoot ? '125px' : '-125px'})`,
    }),

    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: (isRoot) => ({
      opacity: 0,
      transform: `translateX(${isRoot ? '125px' : '-125px'})`,
    }),
  });

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

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
            onToggle={() => setIsMobileNavOpen((open) => !open)}
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
            >
              {transition((style, isRoot) => {
                return isRoot ? (
                  <animated.div
                    style={style}
                    css={css`
                      left: ${layout.contentPadding};
                      right: ${layout.contentPadding};
                      top: ${layout.contentPadding};
                      padding-bottom: ${layout.contentPadding};
                    `}
                  >
                    <RootNavigation nav={rootNav} />
                  </animated.div>
                ) : (
                  <animated.div
                    style={style}
                    css={css`
                      left: ${layout.contentPadding};
                      right: ${layout.contentPadding};
                      top: ${layout.contentPadding};
                      padding-bottom: ${layout.contentPadding};
                    `}
                  >
                    <SubNavigation nav={subNav || previousSubNav} />
                  </animated.div>
                );
              })}
            </Sidebar>
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
  data: PropTypes.object,
  path: PropTypes.string,
};

export const query = graphql`
  fragment MainLayout_query on Query {
    subNav: navYaml(title: { eq: $nav }) {
      ...MainLayout_navFields
      pages {
        ...MainLayout_navFields
        pages {
          ...MainLayout_navFields
          pages {
            ...MainLayout_navFields
            pages {
              ...MainLayout_navFields
              pages {
                ...MainLayout_navFields
              }
            }
          }
        }
      }
    }

    ...RootNavigation_pages
  }

  fragment MainLayout_navFields on NavYaml {
    title
    path
  }
`;

export default MainLayout;
