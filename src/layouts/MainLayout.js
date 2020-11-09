import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  Layout,
  Logo,
  useLayout,
} from '@newrelic/gatsby-theme-newrelic';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import MobileHeader from '../components/MobileHeader';
import { useMedia, usePrevious } from 'react-use';
import RootNavigation from '../components/RootNavigation';
import SubNavigation from '../components/SubNavigation';
import { animated, useTransition } from 'react-spring';
import { useLocation } from '@reach/router';

const MainLayout = ({ data = {}, children, pageContext }) => {
  const { subnav, ...rootNav } = data;
  const { contentPadding } = useLayout();

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
  const isRootPath = location.pathname === '/';
  const transition = useTransition(isRootPath, {
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
    <>
      <GlobalHeader />
      {isSmallScreen && (
        <MobileHeader
          isOpen={isMobileNavOpen}
          onToggle={() => setIsMobileNavOpen((open) => !open)}
          css={css`
            padding: ${contentPadding};
            padding-bottom: 0;
          `}
        >
          {isRootPath ? (
            <RootNavigation nav={rootNav} />
          ) : (
            <SubNavigation nav={subnav} />
          )}
        </MobileHeader>
      )}
      <Layout>
        <Layout.Sidebar>
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

            if (isRoot) {
              document.title = 'New Relic Documentation';
            }

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
        </Layout.Sidebar>
        <Layout.Main
          css={css`
            display: ${isMobileNavOpen ? 'none' : 'block'};
          `}
        >
          {children}
        </Layout.Main>
        <Layout.Footer fileRelativePath={pageContext.fileRelativePath} />
      </Layout>
    </>
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
