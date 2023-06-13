import React, { useEffect, useRef, useState } from 'react';
import { navigate } from '@reach/router';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Link,
  Icon,
  SearchInput,
  useInstrumentedHandler,
  useTranslation,
  useTessen,
  useLoggedIn,
} from '@newrelic/gatsby-theme-newrelic';
import HomepageBanner from '../components/HomepageBanner';
import { DocTile } from '../components/DocTile';
import FindYourQuickStart from '../components/FindYourQuickstart';
import {
  ToggleSelector,
  ToggleView,
  ToggleViewContext,
  TOGGLE_VIEWS,
} from '../components/ToggleView';
import HomepageVideo from '../components/HomepageVideo';
import ErrorBoundary from '../components/ErrorBoundary';

const SAVED_TOGGLE_VIEW_KEY = 'docs-website/homepage-selected-view';

const HomePage = ({ data }) => {
  const {
    site: { layout },
    allMarkdownRemark: { edges: whatsNewPosts },
  } = data;
  const tessen = useTessen();
  const { loggedIn } = useLoggedIn();
  const [searchTerm, setSearchTerm] = useState('');
  const hasToggled = useRef(false);
  const [currentView, setCurrentView] = useState(TOGGLE_VIEWS.newUserView);
  const [showTooltip, setShowTooltip] = useState(); // used for tooltip
  const updateView = (id) => {
    hasToggled.current = true;
    setCurrentView(id);
  };

  const { t } = useTranslation();

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

  const mobileBreakpoint = '450px';

  const latestWhatsNewPosts = whatsNewPosts.map((edge) => {
    return {
      title: edge.node.frontmatter.title,
      releaseDate: edge.node.frontmatter.releaseDate,
      path: edge.node.fields.slug,
    };
  });

  return (
    <ErrorBoundary eventName="homepage">
      <ToggleViewContext.Provider value={[currentView, updateView]}>
        <div
          css={css`
            display: grid;
            gap: 1rem;
            justify-content: space-between;
            grid-template-columns: 1fr max-content;
            align-items: center;
            @media (max-width: 920px) {
              grid-template-columns: 1fr auto;
            }
          `}
        >
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
        <ToggleView id={TOGGLE_VIEWS.newUserView}>
          <HomepageVideo />
        </ToggleView>
        <ToggleView id={TOGGLE_VIEWS.defaultView}>
          <h1
            css={css`
              font-size: 3.5rem;
              font-weight: 500;
              line-height: 1;
              @media screen and (max-width: ${mobileBreakpoint}) {
                font-size: 1.5rem;
              }
            `}
          >
            {t('home.pageTitle')}
          </h1>
          <SearchInput
            placeholder={t('home.search.placeholder')}
            size={SearchInput.SIZE.LARGE}
            value={searchTerm || ''}
            iconName={SearchInput.ICONS.SEARCH}
            isIconClickable
            alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={() => {
              tessen.track({
                eventName: 'defaultViewSearch',
                category: 'SearchInput',
              });
              navigate(`?q=${searchTerm || ''}`);
            }}
            css={css`
              @media screen and (max-width: ${mobileBreakpoint}) {
                margin-bottom: 1rem;
              }
            `}
          />
          <div
            css={css`
              margin-top: 1rem;
              width: 40%;
              display: flex;
              width: 100%;
              flex-wrap: wrap;
              a {
                margin-left: 0.75rem;
              }
              @media screen and (max-width: ${mobileBreakpoint}) {
                display: none;
              }
            `}
          >
            <p>{t('home.search.popularSearches.title')}: </p>
            <Link to="?q=nrql">
              {t('home.search.popularSearches.options.0')}
            </Link>
            <Link to="?q=logs">
              {t('home.search.popularSearches.options.1')}
            </Link>
            <Link to="?q=alert">
              {t('home.search.popularSearches.options.2')}
            </Link>
            <Link to="?q=best practices">
              {t('home.search.popularSearches.options.3')}
            </Link>
            <Link to="?q=kubernetes">
              {t('home.search.popularSearches.options.4')}
            </Link>
          </div>
          <HomepageBanner />
          <Section
            layout={layout}
            css={css`
              border: none;
              background: var(--tertiary-background-color);
            `}
          >
            <SectionTitle title={t('home.popularDocs.title')} />
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 1rem;
                counter-reset: welcome-tile;
                flex: 2;
                align-self: flex-start;
                @media screen and (max-width: 1500px) {
                  align-self: auto;
                }
                @media screen and (max-width: 1050px) {
                  grid-template-columns: 1fr;
                }
                @media screen and (max-width: 760px) {
                  grid-template-columns: repeat(3, 1fr);
                }
                @media screen and (max-width: 650px) {
                  grid-template-columns: 1fr;
                }
              `}
            >
              <DocTile
                label={{ text: 'Get started', color: '#F4CBE7' }}
                path="/docs/apm/new-relic-apm/getting-started/introduction-apm"
              >
                {t('home.popularDocs.t1.title')}
              </DocTile>
              <DocTile
                label={{ text: 'Get started', color: '#F4CBE7' }}
                path="/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring/"
              >
                {t('home.popularDocs.t2.title')}
              </DocTile>
              <DocTile
                label={{ text: 'Get started', color: '#F4CBE7' }}
                path="/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/"
              >
                {t('home.popularDocs.t3.title')}
              </DocTile>
            </div>
          </Section>
          <Section layout={layout}>
            <SectionTitle title={t('home.whatsNew.title')} />
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 1rem;
                counter-reset: welcome-tile;
                flex: 2;
                align-self: flex-start;
                @media screen and (max-width: 1500px) {
                  align-self: auto;
                }
                @media screen and (max-width: 1050px) {
                  grid-template-columns: 1fr;
                }

                @media screen and (max-width: 760px) {
                  grid-template-columns: repeat(3, 1fr);
                }

                @media screen and (max-width: 650px) {
                  grid-template-columns: 1fr;
                }
              `}
            >
              {latestWhatsNewPosts.map((post) => (
                <DocTile
                  key={post.title}
                  date={post.releaseDate}
                  path={post.path}
                >
                  {post.title}
                </DocTile>
              ))}
            </div>
          </Section>
          <Section layout={layout}>
            <FindYourQuickStart />
          </Section>
        </ToggleView>
      </ToggleViewContext.Provider>
    </ErrorBoundary>
  );
};
HomePage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      layout: PropTypes.shape({
        contentPadding: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
};
export const pageQuery = graphql`
  query($quicklaunchSlug: String!) {
    site {
      layout {
        contentPadding
      }
    }
    quicklaunch: mdx(slug: { eq: $quicklaunchSlug }) {
      body
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___releaseDate, frontmatter___title]
        order: [DESC, ASC]
      }
      filter: { fields: { slug: { regex: "/whats-new/" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            releaseDate(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
const Section = ({ ...props }) => {
  return (
    <section
      css={css`
        padding-top: 2.5rem;
        .dark-mode & {
          background: var(--tertiary-background-color);
        }
        &:first-child {
          padding-top: 0;
        }
      `}
      {...props}
    />
  );
};
Section.propTypes = {
  alternate: PropTypes.bool,
  layout: PropTypes.shape({
    contentPadding: PropTypes.string,
  }),
};
const SectionTitle = ({ title, icon, to }) => {
  const handleClick = useInstrumentedHandler({
    eventName: 'sectionTitleClick',
    category: 'SectionTitle',
    title,
    href: to,
  });
  const Wrapper = to ? Link : React.Fragment;
  const props = to
    ? {
        to,
        onClick: handleClick,
        css: css`
          display: inline-block;
        `,
      }
    : {};
  return (
    <Wrapper {...props}>
      <h3
        css={css`
          display: flex;
          align-items: center;
          font-size: 2rem;
          font-weight: 400;
        `}
      >
        {icon && (
          <Icon
            name={icon}
            size="3rem"
            css={css`
              margin-right: 1rem;
            `}
          />
        )}
        {title}
      </h3>
    </Wrapper>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  to: PropTypes.string,
};
export default HomePage;
