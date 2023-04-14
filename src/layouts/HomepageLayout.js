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
  useTessen,
  useTranslation,
  useLoggedIn,
  LoggedInProvider,
} from '@newrelic/gatsby-theme-newrelic';
import cx from 'classnames';
import styled from '@emotion/styled';
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

  const hasToggled = useRef(false);
  const [currentView, setCurrentView] = useState(TOGGLE_VIEWS.newUserView);
  const [showTooltip, setShowTooltip] = useState();
  const updateView = (id) => {
    hasToggled.current = true;
    setCurrentView(id);
  };
  const showAnimatedSearchBar = currentView === TOGGLE_VIEWS.newUserView;

  const SAVED_TOGGLE_VIEW_KEY = 'docs-website/homepage-selected-view';

  /* `useLocalStorage` hook doesn't work here because SSR doesn't have access to
   * localStorage, so when it gets to the client, the current tab is already set
   * and the client doesn't know to update it.
   *
   */
  useEffect(() => {
    const storedToggleView = window.localStorage.getItem(SAVED_TOGGLE_VIEW_KEY);

    const chooseViewByLoggedIn = loggedIn
      ? TOGGLE_VIEWS.defaultView
      : TOGGLE_VIEWS.newUserView;

    if (!storedToggleView && loggedIn !== null) {
      setCurrentView(
        loggedIn ? TOGGLE_VIEWS.defaultView : TOGGLE_VIEWS.newUserView
      );
      setCurrentView(chooseViewByLoggedIn);
    }

    /* prevents the tooltip from continuing to show on every render
     * of the defaultview if it's triggered by the toggle buttons
     * and only on initial page load to defaultview
     */
    if (loggedIn) {
      setShowTooltip(storedToggleView !== TOGGLE_VIEWS.newUserView);
    } else if (!loggedIn) {
      setShowTooltip(storedToggleView === TOGGLE_VIEWS.defaultView);
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
      <MobileHeader
        css={css`
          && .text-color {
            fill: var(--primary-text-color);
          }
        `}
      >
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
                background-color: var(--primary-background-color);
                position: relative;
                max-width: unset;

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
                  justify-content: right;
                  grid-template-columns: 1fr max-content;
                  align-items: center;
                  position: absolute;
                  top: 1.5rem;
                  right: 0;
                  z-index: 90;

                  @media (max-width: 920px) {
                    grid-template-columns: 1fr auto;
                  }

                  @media (max-width: 760px) {
                    display: none;
                  }
                `}
              >
                <AnimatedSearchInput
                  placeholder="Search"
                  size={SearchInput.SIZE.SMALL}
                  value={searchTerm || ''}
                  iconName={SearchInput.ICONS.SEARCH}
                  isIconClickable
                  alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  onSubmit={() => {
                    tessen.track({
                      eventName: 'personaViewSearch',
                      category: 'SearchInput',
                      searchTerm,
                    });
                    navigate(`?q=${searchTerm || ''}`);
                  }}
                  className={cx(showAnimatedSearchBar && 'visible')}
                />
                <ToggleSelector
                  showTooltip={showTooltip}
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
                          eventName: 'homepageSidebarSearch',
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
                  padding: 0;
                  position: relative;

                  @media (max-width: 760px) {
                    padding: 1.5rem;
                  }
                  @media (min-width: 761px) {
                    max-width: unset;
                  }
                `}
              >
                {children}
              </Layout.Main>
              <Layout.Footer
                fileRelativePath={pageContext.fileRelativePath}
                css={css`
                  height: 60px;
                  a:first-of-type {
                    margin-left: 0;
                  }
                  ${!sidebar &&
                  css`
                    grid-column: 1/3;
                  `}
                  @media (max-width: 760px) {
                    height: 100%;
                    align-items: center;
                  }
                `}
              />
            </Layout>
          </ToggleViewContext.Provider>
        </MainLayoutContext.Provider>
      </LoggedInProvider>
    </>
  );
};

const AnimatedSearchInput = styled(SearchInput)`
  justify-self: end;
  width: 150px;
  transition: width 1200ms cubic-bezier(0.7, 0, 0.35, 1);
  display: none;
  &.visible {
    display: grid;
  }
  input {
    justify-self: end;
    width: 0.5rem;
    border: none;
    background: none;
    padding-left: 0.75rem;
    height: 30px;
  }
  svg {
    stroke: #fff;
    right: 0.75rem;
    transition: stroke, width, height 0.55s ease;
    width: 1.25rem;
    height: 1.25rem;
  }
  &:focus-within {
    svg {
      transition: stroke, width, height 0.55s ease;
      stroke: var(--erno-black);
      width: 0.75rem;
      height: 0.75rem;
    }
  }
  &:hover {
    width: 150px;
    svg {
      transition: stroke, width, height 0.55s ease;
      stroke: var(--erno-black);
      width: 0.75rem;
      height: 0.75rem;
    }
  }
  &:hover input,
  input:active,
  input:focus {
    box-shadow: none;
    width: 150px;
    border: 1px solid var(--system-text-primary-light);
    background: #fff;
    color: var(--system-text-primary-light);
    &::placeholder {
      color: var(--system-text-primary-light);
    }
  }
`;

HomepageLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default HomepageLayout;
