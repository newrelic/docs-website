import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import {
  Link,
  Icon,
  Surface,
  useInstrumentedHandler,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import SurfaceLink from '../components/SurfaceLink';
import HomepageBanner from '../components/HomepageBanner';
import {
  tdp,
  fso,
  ai,
  getting_started,
  popular_content,
} from '../data/homepage.yml';

const HomePage = ({ data }) => {
  const {
    site: { layout },
    allMarkdownRemark: { edges: whatsNewPosts },
  } = data;

  const { t } = useTranslation();

  const latestWhatsNewPosts = whatsNewPosts.slice(0, 3).map((edge) => {
    return {
      title: edge.node.frontmatter.title,
      path: edge.node.fields.slug,
    };
  });

  return (
    <>
      <HomepageBanner />
      <Section
        layout={layout}
        css={css`
          border: none;
          background: var(--tertiary-background-color);
        `}
      >
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
          <WelcomeTile
            title={t('home.welcome.t1.title')}
            links={getting_started.links}
            icon="fe-help-circle"
          />
          <WelcomeTile
            links={latestWhatsNewPosts}
            title={t('home.welcome.t2.title')}
            icon="nr-info-announcement"
          />
          <WelcomeTile
            title={t('home.welcome.t3.title')}
            links={popular_content.links}
            icon="fe-star"
          />
        </div>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.tdp.title')} />
        <DocTileGrid>
          {tdp.tiles.map(({ link, icon }, idx) => (
            <DocTile
              key={idx}
              title={t(`home.tdp.t${idx + 1}.title`)}
              icon={icon}
              link={link}
            />
          ))}
        </DocTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.fso.title')} />
        <DocTileGrid>
          {fso.tiles.map(({ link, icon }, idx) => (
            <DocTile
              key={idx}
              title={t(`home.fso.t${idx + 1}.title`)}
              description={t(`home.fso.t${idx + 1}.description`)}
              link={link}
              icon={icon}
            />
          ))}
        </DocTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.ai.title')} />
        <DocTileGrid>
          {ai.tiles.map(({ link, icon }, idx) => (
            <DocTile
              key={idx}
              title={t(`home.ai.t${idx + 1}.title`)}
              description={t(`home.ai.t${idx + 1}.description`)}
              link={link}
              icon={icon}
            />
          ))}
        </DocTileGrid>
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
      edges: PropTypes.shape({
        whatsNewPosts: PropTypes.shape({
          frontMatter: PropTypes.shape({
            title: PropTypes.string,
            releaseDate: PropTypes.string,
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
        }),
      }),
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
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            releaseDate(formatString: "MMMM D, YYYY")
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

const Section = ({ layout, ...props }) => {
  return (
    <section
      css={css`
        margin: 2.5rem 0 0;
        padding: ${layout.contentPadding};
        border: 1px solid var(--color-neutrals-300);
        border-radius: 0.5rem;

        .dark-mode & {
          background: var(--tertiary-background-color);
          border: 1px solid var(--color-dark-500);
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
  const handleClick = useInstrumentedHandler(null, {
    actionName: 'sectionTitle_click',
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

const WelcomeTile = ({ title, links, instrumentation, icon }) => (
  <Surface
    base={Surface.BASE.PRIMARY}
    instrumentation={instrumentation}
    css={css`
      color: currentColor;
      position: relative;
      min-height: 300px;
      border-color: var(--tile-border-color, var(--border-color));
      border-radius: 0.5rem;

      .dark-mode & {
        background: var(--color-dark-300);
        border: 1px solid var(--color-dark-500);
      }

      @media screen and (max-width: 1050px) {
        min-height: 175px;

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

      &:hover {
        color: currentColor;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        padding-left: 2rem;
        align-items: center;
        height: 5.5rem;
        border-bottom: solid 1.5px var(--tertiary-background-color);
        .dark-mode & {
          border-bottom: 1.5px solid var(--color-dark-500);
        }
      `}
    >
      <Icon name={icon} size="2rem" />
      <h2
        css={css`
          margin-bottom: 0;
          margin-left: 1rem;
        `}
      >
        {title}
      </h2>
    </div>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1.5rem 2rem 2.5rem;
      `}
    >
      {links &&
        links.map((link, index) => (
          <Link
            css={css`
              &:not(:last-child) {
                margin-bottom: 1rem;
              }
            `}
            key={index + link.title}
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
    </div>
  </Surface>
);

WelcomeTile.propTypes = {
  links: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string,
  instrumentation: PropTypes.object,
};

const DocTileGrid = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-gap: 1rem;
        @media screen and (max-width: 650px) {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
      `}
    >
      {children}
    </div>
  );
};

DocTileGrid.propTypes = {
  children: PropTypes.node,
};

const DocTile = ({ title, link, icon }) => (
  <SurfaceLink
    base={Surface.BASE.SECONDARY}
    to={link}
    css={css`
      color: currentColor;
      height: 4.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.5rem;
      border: 1px solid var(--color-neutrals-200);
      box-shadow: none;

      .light-mode & {
        background: var(--color-neutrals-050);
      }

      .dark-mode & {
        border: solid 1px var(--color-dark-300);
      }

      &:hover {
        color: currentColor;
        border-color: var(--border-hover-color);
        background: var(--color-brand-100);
        box-shadow: none;
        border: none;

        .dark-mode & {
          background: var(--color-dark-300);
        }
      }
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      {icon && (
        <Icon
          name={icon}
          css={css`
            color: var(--color-brand-400);
          `}
          size="1.5rem"
        />
      )}
      <h3
        css={css`
          font-size: 14px;
          margin-bottom: 0;
          margin-left: 1rem;
        `}
      >
        {title}
      </h3>
    </div>
    <Icon
      name="fe-arrow-right"
      size="1.5rem"
      css={css`
        color: var(--color-neutrals-600);
        .dark-mode & {
          color: var(--accent-text-color);
        }
      `}
    />
  </SurfaceLink>
);

DocTile.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

const IntegrationTitle = ({ children }) => (
  <h3
    css={css`
      margin-top: 2rem;
      margin-bottom: 1rem;
    `}
  >
    {children}
  </h3>
);

IntegrationTitle.propTypes = {
  children: PropTypes.node,
};

export default HomePage;
