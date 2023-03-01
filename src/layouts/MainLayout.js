import React, { useEffect, useState } from 'react';
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
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import { scroller } from 'react-scroll';
import SEO from '../components/SEO';
import RootNavigation from '../components/RootNavigation';
import NavFooter from '../components/NavFooter';
import { useLocation, navigate } from '@reach/router';
import { MainLayoutContext } from '../components/MainLayoutContext';

const MainLayout = ({ children, pageContext, sidebarOpen = true }) => {
  const { loggedIn } = useLoggedIn();
  const { sidebarWidth, contentPadding } = useLayout();
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
   */
  const introDocsAsJS = ['/introduction-apm'];
  if (introDocsAsJS.includes(location.pathname) && !hideNavs) {
    hideNavs = true;
  }

  useEffect(() => {
    setIsMobileNavOpen(false);
    setSidebar(hideNavs ? !hideNavs : sidebarOpen);
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
      <MainLayoutContext.Provider value={[sidebar]}>
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
              padding: 0;
              > div {
                height: 100%;
                overflow: hidden;
              }
              background: var(--erno-black);

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
            )}
          </Layout.Sidebar>
          <Layout.Main
            css={css`
              display: ${isMobileNavOpen ? 'none' : 'block'};
              position: relative;
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
      </MainLayoutContext.Provider>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default MainLayout;
