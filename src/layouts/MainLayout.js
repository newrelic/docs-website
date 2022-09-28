import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  Layout,
  Link,
  MobileHeader,
  useLayout,
  Icon,
  Button,
  SearchInput,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import SEO from '../components/SEO';
import RootNavigation from '../components/RootNavigation';
import { animated, useTransition } from 'react-spring';
import { useLocation, navigate } from '@reach/router';

const MainLayout = ({ data = {}, children, pageContext }) => {
  const { nav } = data;
  const { sidebarWidth, contentPadding } = useLayout();
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebar, setSidebar] = useState(true);
  const { t } = useTranslation();

  const transition = useTransition(nav, {
    key: nav?.id,
    config: { mass: 1, friction: 34, tension: 400 },
    initial: { position: 'absolute' },
    from: () => ({
      opacity: 0,
      position: 'absolute',
      transform: `translateX('125px')`,
    }),

    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: () => ({
      opacity: 0,
      transform: `translateX('125px')`,
    }),
  });

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <>
      <SEO location={location} />
      <GlobalHeader
        hideSearch
        customStyles={{ navLeftMargin: '150px', searchRightMargin: '30px' }}
      />
      <MobileHeader>
        <RootNavigation nav={nav} />
      </MobileHeader>
      <Layout
        css={css`
          --sidebar-width: ${sidebar ? sidebarWidth : '50px'};
          -webkit-font-smoothing: antialiased;
          font-size: 1.125rem;
          @media screen and (max-width: 1240px) {
            --sidebar-width: ${sidebar ? '278px' : '50px'};
          }
        `}
      >
        <Layout.Sidebar
          css={css`
            background: var(--erno-black);
            padding: 0;
            ${!sidebar &&
            css`
              border: none;
              background: var(--primary-background-color);
              & > div {
                padding: ${contentPadding} 0;
              }
            `}
            hr {
              border: none;
              height: 1rem;
              margin: 0;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Link
              to="/"
              css={css`
                display: block;
                text-decoration: none;
                color: var(--system-text-primary-dark);
                &:hover {
                  color: var(--system-text-primary-dark);
                }
              `}
            >
              <p
                css={css`
                  font-size: 44px;
                  font-weight: 500;
                  line-height: 0;
                  ${!sidebar &&
                  css`
                    display: none;
                  `}
                `}
              >
                Docs
              </p>
            </Link>
            <Button
              variant={Button.VARIANT.PRIMARY}
              css={css`
                height: 40px;
                width: 40px;
                padding: 0;
                border-radius: 50%;
              `}
              onClick={() => setSidebar(!sidebar)}
            >
              <Icon name="fe-move-horizontal" size="1rem" />
            </Button>
          </div>
          {sidebar && (
            <>
              <SearchInput
                placeholder={t('home.search.placeholder')}
                value={searchTerm || ''}
                iconName={SearchInput.ICONS.SEARCH}
                isIconClickable
                alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
                onChange={(e) => setSearchTerm(e.target.value)}
                onSubmit={() => navigate(`?q=${searchTerm || ''}`)}
                css={css`
                  margin: 1.5rem 0 2rem;
                  svg {
                    color: var(--primary-text-color);
                  }
                `}
              />
              {transition((style, nav) => {
                const containerStyle = css`
                  left: ${contentPadding};
                  right: ${contentPadding};
                  top: calc(${contentPadding} + 7rem);
                  padding-bottom: ${contentPadding};
                `;

                return (
                  <animated.div style={style} css={containerStyle}>
                    <RootNavigation nav={nav} />
                  </animated.div>
                );
              })}
            </>
          )}
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
    nav(slug: $slug) {
      id
      title(locale: $locale)
      url
      filterable
      pages {
        ...MainLayout_navPages
        pages {
          ...MainLayout_navPages
          pages {
            ...MainLayout_navPages
            pages {
              ...MainLayout_navPages
              pages {
                ...MainLayout_navPages
                pages {
                  ...MainLayout_navPages
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPages on NavItem {
    title(locale: $locale)
    url
    icon
  }
`;

export default MainLayout;
