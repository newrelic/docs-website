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
  useLoggedIn,
  LoggedInProvider,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import { scroller } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RootNavigation from '../components/RootNavigation';
import NavFooter from '../components/NavFooter';
import { useLocation, navigate } from '@reach/router';
import { MainLayoutContext } from '../components/MainLayoutContext';

const MainLayout = ({ children, pageContext, sidebarOpen = true }) => {
  const tessen = useTessen();
  const { loggedIn } = useLoggedIn();
  const { sidebarWidth } = useLayout();
  const { locale, slug } = pageContext;
  let { hideNavs } = pageContext;
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebar, setSidebar] = useState(sidebarOpen);
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

  /*
   * [VSU] some docs pages are being designed as JS for faster experimenting
   * and will never have the frontmatter property
   * Using regex for check to account for paths with and without trailing slash
   */
  const docsAsJS = [/introduction-apm/];
  const isJSDoc = docsAsJS.some((docUrl) => docUrl.test(location.pathname));
  hideNavs ||= isJSDoc;

  useEffect(() => {
    setIsMobileNavOpen(false);
    setSidebar(hideNavs ? false : sidebarOpen);
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
    if (loggedIn && !hideNavs) {
      setSidebar(true);
    }
  }, [location.pathname, loggedIn, sidebarOpen, hideNavs]);

  const navCollapser = (
    <Button
      variant={Button.VARIANT.PRIMARY}
      css={css`
        height: 40px;
        width: 40px;
        padding: 0;
        border-radius: 50%;
        left: 269px;
        position: fixed;
        top: 102px;
        transition: 300ms translate ease;
        z-index: 1;

        @media (max-width: 760px) {
          display: none;
        }

        ${!sidebar &&
        `translate: calc(calc(var(--sidebar-width) * -1) + 80px);`}

        @media (max-width: 1240px) {
          left: 208px;
          ${!sidebar &&
          `translate: calc(calc(var(--sidebar-width) * -1) + 141px);`}
        }
      `}
      onClick={() => setSidebar(!sidebar)}
    >
      <Icon name="nr-nav-collapse" size="1rem" />
    </Button>
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
          {navCollapser}
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
