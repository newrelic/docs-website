import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  Layout,
  Link,
  Logo,
  MobileHeader,
  useLayout,
  Icon,
  Button,
  SearchInput,
  useTranslation,
  useLoggedIn,
  LoggedInProvider,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import { scroller } from 'react-scroll';
import SEO from '../components/SEO';
import RootNavigation from '../components/RootNavigation';
import NavFooter from '../components/NavFooter';
import { useLocation, navigate } from '@reach/router';
import { MainLayoutContext } from '../components/MainLayoutContext';
import {
  ToggleViewContext,
  TOGGLE_VIEWS,
  ToggleSelector,
} from '../components/ToggleView';

const HomepageLayout = ({ children, pageContext, sidebarOpen = true }) => {
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

  const hasToggled = useRef(false);
  const [currentView, setCurrentView] = useState(TOGGLE_VIEWS.newUserView);
  const updateView = (id) => {
    hasToggled.current = true;
    setCurrentView(id);
  };

  const SAVED_TOGGLE_VIEW_KEY = 'docs-website/homepage-selected-view';

  /* `useLocalStorage` hook doesn't work here because SSR doesn't have access to
   * localStorage, so when it gets to the client, the current tab is already set
   * and the client doesn't know to update it.
   *
   */
  useEffect(() => {
    const storedToggleView = window.localStorage.getItem(SAVED_TOGGLE_VIEW_KEY);
    if (!storedToggleView && loggedIn !== null) {
      setCurrentView(
        loggedIn ? TOGGLE_VIEWS.defaultView : TOGGLE_VIEWS.newUserView
      );
    }
    if (storedToggleView) {
      setCurrentView(storedToggleView);
    }
  }, [setCurrentView, loggedIn]);

  useEffect(() => {
    if (hasToggled.current) {
      window.localStorage.setItem(SAVED_TOGGLE_VIEW_KEY, currentView);
    }
  }, [currentView]);

  return (
    <>
      <SEO location={location} />
      <GlobalHeader
        hideSearch
        customStyles={{ navLeftMargin: '150px', searchRightMargin: '30px' }}
      />
      <MobileHeader>
        <RootNavigation locale={locale} isStyleGuide={false} />
      </MobileHeader>
      <LoggedInProvider>
        <MainLayoutContext.Provider value={[sidebar]}>
          <ToggleViewContext.Provider value={[currentView, updateView]}>
            <Layout
              css={css`
                --sidebar-width: ${sidebar ? sidebarWidth : '60px'};
                -webkit-font-smoothing: antialiased;
                font-size: 1.125rem;
                background-color: ${currentView === TOGGLE_VIEWS.newUserView
                  ? 'black'
                  : 'var(--primary-background-color)'};
                position: relative;

                ${!sidebar &&
                currentView === TOGGLE_VIEWS.newUserView &&
                css`
                  grid-template-areas: 'main' 'footer';
                `}

                @media screen and (max-width: 1240px) {
                  --sidebar-width: ${sidebar ? '278px' : '50px'};
                }
              `}
            >
              <div
                css={css`
                  display: grid;
                  gap: 1rem;
                  justify-content: space-between;
                  grid-template-columns: 1fr max-content;
                  align-items: center;
                  position: absolute;
                  top: 1.5rem;
                  right: 0;
                  z-index: 90;

                  @media (max-width: 920px) {
                    grid-template-columns: 1fr auto;
                  }
                `}
              >
                <ToggleSelector
                  css={css`
                    justify-self: end;
                    @media screen and (max-width: 760px) {
                      display: none;
                    }
                  `}
                />
              </div>
              <Layout.Sidebar
                css={css`
                  padding: 0;
                  border-right: none;
                  > div {
                    height: 100%;
                    overflow: hidden;
                  }
                  background: var(--erno-black);

                  ${!sidebar &&
                  css`
                    height: 50px;
                    width: 50px;
                    border: none;
                    z-index: 2;
                    position: absolute;
                    top: 1.5rem;
                    left: 6px;
                    background-color: transparent;
                    & > div {
                      padding: 0;
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
                      <Icon
                        name="nr-nav-collapse"
                        size="1rem"
                        css={
                          !sidebar &&
                          css`
                            transform: rotateZ(180deg);
                          `
                        }
                      />
                    </Button>
                  </div>
                  {sidebar && (
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
                  )}
                </div>
                {sidebar && (
                  <>
                    <RootNavigation
                      isStyleGuide={isStyleGuide}
                      locale={locale}
                      css={css`
                        overflow-x: hidden;
                        height: calc(
                          100vh - ${navHeaderHeight} -
                            var(--global-header-height) - 4rem
                        );
                      `}
                    />
                    <NavFooter
                      css={css`
                        width: calc(var(--sidebar-width) - 1px);
                      `}
                    />
                  </>
                )}
              </Layout.Sidebar>
              <Layout.Main
                css={css`
                  display: ${isMobileNavOpen ? 'none' : 'block'};
                  position: relative;
                  padding: ${currentView === TOGGLE_VIEWS.newUserView
                    ? '0'
                    : '1.5rem'};
                `}
              >
                {children}
              </Layout.Main>
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
          </ToggleViewContext.Provider>
        </MainLayoutContext.Provider>
      </LoggedInProvider>
    </>
  );
};

HomepageLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default HomepageLayout;
