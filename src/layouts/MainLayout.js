import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  Link,
  Logo,
  MobileHeader,
  useLayout,
  Icon,
  Button,
  SearchInput,
  useTessen,
  useTranslation,
  LoggedInProvider,
} from '@newrelic/gatsby-theme-newrelic';
import { isNavClosed, setNavClosed } from '../utils/navState';
import { css } from '@emotion/react';
import { scroller } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RootNavigation from '../components/RootNavigation';
import NavFooter from '../components/NavFooter';
import { useLocation, navigate } from '@reach/router';
import { MainLayoutContext } from '../components/MainLayoutContext';

const MainLayout = ({ children, pageContext }) => {
  const tessen = useTessen();
  const { sidebarWidth } = useLayout();
  const { locale, slug } = pageContext;
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebar, setSidebar] = useState(true);
  const { t } = useTranslation();
  const navHeaderHeight = '100px';
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

  const navCollapser = (
    <div
      css={css`
        grid-column: 1;
        grid-row: 1;
        height: calc(100vh - var(--global-header-height));
        left: 269px;
        padding: 1.5rem 0;
        position: sticky;
        top: var(--global-header-height);
        width: 0;
        z-index: 1;

        @media (max-width: 760px) {
          display: none;
        }

        @media (max-width: 1240px) {
          left: 208px;
        }
      `}
    >
      <Button
        variant={Button.VARIANT.PRIMARY}
        css={css`
          height: 40px;
          width: 40px;
          padding: 0;
          border-radius: 50%;
          transition: 300ms translate ease;

          ${!sidebar && `translate: calc(var(--sidebar-width) / 4);`}

          @media (max-width: 1240px) {
            ${!sidebar &&
            `translate: calc(calc(var(--sidebar-width) / 4) + 14px);`}
          }
        `}
        onClick={() => {
          tessen.track({
            eventName: sidebar ? 'closeNav' : 'openNav',
            category: 'NavCollapserClick',
          });
          setSidebar(!sidebar);
        }}
      >
        <Icon name="nr-nav-collapse" size="1rem" />
      </Button>
    </div>
  );

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
              --sidebar-width: ${sidebarWidth};
              -webkit-font-smoothing: antialiased;
              font-size: 1.125rem;
              @media screen and (max-width: 1240px) {
                --sidebar-width: 278px;
              }
            `}
          >
            {navCollapser}
            <Layout.Sidebar
              aria-hidden={!sidebar}
              css={css`
                padding: 0;
                > div {
                  height: 100%;
                  overflow: hidden;
                }
                background: var(--erno-black);

                hr {
                  border: none;
                  height: 1rem;
                  margin: 0;
                }
              `}
            >
              <div
                css={css`
                  height: ${navHeaderHeight};
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
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      text-decoration: none;
                      color: var(--system-text-primary-dark);
                      &:hover {
                        color: var(--system-text-primary-dark);
                      }
                    `}
                  >
                    <Logo
                      css={css`
                        ${!sidebar &&
                        css`
                          display: none;
                        `}
                      `}
                    />
                  </Link>
                </div>
                {sidebar && (
                  <SearchInput
                    placeholder={t('home.search.placeholder')}
                    value={searchTerm || ''}
                    iconName={SearchInput.ICONS.SEARCH}
                    isIconClickable
                    alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onSubmit={() => {
                      tessen.track({
                        eventName: 'nonHomepageSidebarSearch',
                        category: 'SearchInput',
                        searchTerm,
                      });
                      navigate(`?q=${searchTerm || ''}`);
                    }}
                    css={css`
                      margin: 1.5rem 0 2rem;
                      svg {
                        color: var(--primary-text-color);
                      }
                    `}
                  />
                )}
              </div>

              <>
                <RootNavigation
                  isStyleGuide={isStyleGuide}
                  locale={locale}
                  css={css`
                    overflow-x: hidden;
                    height: calc(
                      100vh - ${navHeaderHeight} - var(--global-header-height) -
                        4rem
                    );
                  `}
                />
                <NavFooter
                  css={css`
                    width: calc(var(--sidebar-width) - 1px);
                  `}
                />
              </>
            </Layout.Sidebar>
            <CSSTransition
              in={sidebar}
              timeout={300}
              classNames="main-transition"
            >
              <Layout.Main
                css={css`
                  display: ${isMobileNavOpen ? 'none' : 'block'};
                  position: relative;

                  @media (min-width: 760px) {
                    ${!sidebar &&
                    `padding-left: calc(var(--site-content-padding) + 50px);`}
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
