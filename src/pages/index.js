import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import {
  Link,
  Icon,
  SearchInput,
  Surface,
  useInstrumentedHandler,
  useTranslation,
  Tag,
} from '@newrelic/gatsby-theme-newrelic';
import SurfaceLink from '../components/SurfaceLink';
import HomepageBanner from '../components/HomepageBanner';
import FindYourQuickStart from '../components/FindYourQuickstart';

const HomePage = ({ data }) => {
  const {
    site: { layout },
    allMarkdownRemark: { edges: whatsNewPosts },
  } = data;

  const [searchTerm, setSearchTerm] = useState('');

  const { t } = useTranslation();

  const mobileBreakpoint = '450px';

  const latestWhatsNewPosts = whatsNewPosts.map((edge) => {
    return {
      title: edge.node.frontmatter.title,
      releaseDate: edge.node.frontmatter.releaseDate,
      path: edge.node.fields.slug,
    };
  });

  return (
    <>
      <h1
        css={css`
          font-size: 3.5rem;
          font-weight: 500;
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
        onSubmit={() => navigate(`?q=${searchTerm || ''}`)}
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
          margin-bottom: 1rem;
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
        <Link to="?q=nrql">{t('home.search.popularSearches.options.0')}</Link>
        <Link to="?q=logs">{t('home.search.popularSearches.options.1')}</Link>
        <Link to="?q=alert">{t('home.search.popularSearches.options.2')}</Link>
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
            title={t('home.popularDocs.t1.title')}
            label={{ text: 'Queries', color: '#F4CBE7' }}
            path="/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/"
          />
          <DocTile
            label={{ text: 'Events', color: '#AFE2E3' }}
            title={t('home.popularDocs.t2.title')}
            path="/attribute-dictionary/"
          />
          <DocTile
            title={t('home.popularDocs.t3.title')}
            label={{ text: 'Log management', color: '#FCD672' }}
            path="/docs/logs/get-started/get-started-log-management/"
          />
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
              title={post.title}
              date={post.releaseDate}
              path={post.path}
            />
          ))}
        </div>
      </Section>
      <Section layout={layout}>
        <FindYourQuickStart />
      </Section>
    </>
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
  query($slug: String!, $locale: String) {
    site {
      layout {
        contentPadding
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
    ...MainLayout_query
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

const DocTile = ({ title, path, instrumentation, label, date }) => (
  <SurfaceLink
    base={Surface.BASE.SECONDARY}
    to={path}
    interactive
    instrumentation={instrumentation}
    css={css`
      min-height: 130px;
      border-radius: 4px;
      background: var(--secondary-background-color);

      .dark-mode & {
        background: var(--secondary-background-color);
      }

      @media screen and (max-width: 1050px) {
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }

      @media screen and (max-width: 760px) {
        && {
          margin-bottom: 0;
        }
      }

      @media screen and (max-width: 650px) {
        font-size: 14px;
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        align-items: space-between;
        padding: 2rem;

        @media screen and (max-width: 650px) {
          padding: 1.5rem;
        }
      `}
    >
      <h4
        css={css`
          margin-bottom: 1rem;
          font-weight: 400;
          font-size: 20px;
        `}
      >
        {title}
      </h4>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        {label && (
          <Tag
            css={css`
              background: ${label.color};
              color: var(--system-text-primary-light);

              .dark-mode & {
                background: ${label.color};
                color: var(--system-text-primary-light);
              }
            `}
          >
            {label.text}
          </Tag>
        )}
        {date && (
          <Tag
            css={css`
              color: var(--primary-text-color);
            `}
          >
            {date}
          </Tag>
        )}
        <Icon
          name="fe-arrow-right"
          css={css`
            color: var(--primary-text-color);
          `}
        />
      </div>
    </div>
  </SurfaceLink>
);

DocTile.propTypes = {
  label: PropTypes.array,
  title: PropTypes.string,
  date: PropTypes.string,
  instrumentation: PropTypes.object,
};

export default HomePage;
