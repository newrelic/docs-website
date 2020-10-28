import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  GlobalFooter,
  Logo,
} from '@newrelic/gatsby-theme-newrelic';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import { useMedia, usePrevious } from 'react-use';
import RootNavigation from '../components/RootNavigation';
import SubNavigation from '../components/SubNavigation';
import { animated, useTransition } from 'react-spring';
import { useLocation } from '@reach/router';

const MainLayout = ({ data = {}, children, pageContext }) => {
  const { subnav, ...rootNav } = data;

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

  const location = useLocation();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // maintain the previous subnav so that exit transitions preserve the nav data
  const previousSubnav = usePrevious(subnav);

  const isSmallScreen = useMedia('(max-width: 760px)');
  const transition = useTransition(location.pathname === '/', {
    config: { mass: 1, friction: 34, tension: 400 },
    initial: { position: 'absolute' },
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

        display: grid;
        grid-template-rows: auto 1fr;
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
            padding-bottom: 0;
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
              <Link
                to="/"
                css={css`
                  display: block;
                  margin-bottom: 1rem;
                `}
              >
                <Logo />
              </Link>
              {transition((style, isRoot) => {
                const containerStyle = css`
                  left: ${layout.contentPadding};
                  right: ${layout.contentPadding};
                  top: calc(${layout.contentPadding} + 3rem);
                  padding-bottom: ${layout.contentPadding};
                `;
                return isRoot ? (
                  <animated.div style={style} css={containerStyle}>
                    <RootNavigation nav={rootNav} />
                  </animated.div>
                ) : (
                  <animated.div style={style} css={containerStyle}>
                    <SubNavigation nav={subnav || previousSubnav} />
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
        <GlobalFooter
          fileRelativePath={pageContext.fileRelativePath}
          css={css`
            --logo-icon-color: currentColor;
            --logo-text-color: currentColor;

            margin-left: -${layout.contentPadding};
            display: ${isMobileNavOpen ? 'none' : 'block'};

            @media screen and (max-width: 760px) {
              margin: 0 -${layout.contentPadding};
            }
          `}
        />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export const query = graphql`
  fragment MainLayout_query on Query {
    subnav: navYaml(title: { eq: $nav }) {
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
