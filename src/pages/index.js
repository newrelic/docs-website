import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import {
  Button,
  Link,
  Icon,
  Surface,
  useInstrumentedHandler,
  useTranslation,
  Trans,
} from '@newrelic/gatsby-theme-newrelic';
import SurfaceLink from '../components/SurfaceLink';
import TechTile from '../components/TechTile';
import TechTileGrid from '../components/TechTileGrid';
import NetworkPerformanceMonitoringBannerGA from '../components/NetworkPerformanceMonitoringBannerGA';
import {
  tdp,
  fso,
  ai,
  security,
  integrations,
  mobile_apps,
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
      <NetworkPerformanceMonitoringBannerGA />
      <Section layout={layout}>
        <h1>{t('home.title')}</h1>
        <div
          css={css`
            display: flex;

            @media screen and (max-width: 1500px) {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              flex: 1;
              margin-right: 2rem;

              @media screen and (max-width: 1500px) {
                max-width: 550px;
                margin-right: 0;
                margin-bottom: 2rem;
              }
            `}
          >
            <p>{t('home.intro.p1')}</p>

            <Trans i18nKey="home.intro.p3" parent="p">
              Keep scrolling to read more about getting data into New Relic, our
              platform features, our observability solutions, and our alerting
              tools. Or, to get a wider view of our platform's capabilities,
              read{' '}
              <Link to="/docs/using-new-relic/welcome-new-relic/get-started/introduction-new-relic">
                Intro to New Relic
              </Link>
              , or see our{' '}
              <Link to="/docs/new-relic-solutions">
                guides and best practices
              </Link>
              .
            </Trans>
          </div>
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 1rem;
              counter-reset: welcome-tile;
              flex: 2;
              align-self: flex-start;
              background: var(--tertiary-background-color);
              padding: 1.5rem;
              border-radius: 0.5rem;
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
            />
            <WelcomeTile
              links={latestWhatsNewPosts}
              title={t('home.welcome.t2.title')}
            />
            <WelcomeTile
              title={t('home.welcome.t3.title')}
              links={popular_content.links}
            />
          </div>
        </div>
      </Section>
      <Section alternate layout={layout}>
        <SectionTitle
          title={t('home.tdp.title')}
          icon="nr-tdp"
          to="/docs/telemetry-data-platform"
        />
        <SectionDescription>{t('home.tdp.description')}</SectionDescription>
        <DocTileGrid>
          {tdp.tiles.map((link, idx) => (
            <DocTile
              key={idx}
              title={t(`home.tdp.t${idx + 1}.title`)}
              description={t(`home.tdp.t${idx + 1}.description`)}
              link={link}
            />
          ))}
        </DocTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle
          title={t('home.fso.title')}
          icon="nr-fso"
          to="/docs/full-stack-observability"
        />
        <SectionDescription>{t('home.fso.description')}</SectionDescription>
        <DocTileGrid>
          {fso.tiles.map((link, idx) => (
            <DocTile
              key={idx}
              title={t(`home.fso.t${idx + 1}.title`)}
              description={t(`home.fso.t${idx + 1}.description`)}
              link={link}
            />
          ))}
        </DocTileGrid>
      </Section>
      <Section alternate layout={layout}>
        <SectionTitle
          title={t('home.ai.title')}
          icon="nr-ai"
          to="/docs/alerts-applied-intelligence"
        />
        <SectionDescription>{t('home.ai.description')}</SectionDescription>
        <DocTileGrid>
          {ai.tiles.map((link, idx) => (
            <DocTile
              key={idx}
              title={t(`home.ai.t${idx + 1}.title`)}
              description={t(`home.ai.t${idx + 1}.description`)}
              link={link}
            />
          ))}
        </DocTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle title="New Relic integrations" />
        <SectionDescription>
          <Trans i18nKey="home.integrations.description">
            <Link to="/docs/integrations/intro-integrations/get-started/introduction-new-relic-integrations">
              Integrations
            </Link>{' '}
            connect the technologies in your stack to New Relic. Here are a few
            of our{' '}
            <a
              href="https://newrelic.com/integrations"
              rel="noopener noreferrer"
            >
              370+ integrations
            </a>
            :
          </Trans>
        </SectionDescription>

        {integrations.map((integration, idx) => (
          <Fragment key={idx}>
            <IntegrationTitle>
              {t(`home.integrations.title${idx + 1}`)}
            </IntegrationTitle>
            <TechTileGrid>
              {integration.tiles.map(({ name, icon, link }) => (
                <TechTile key={name} name={name} icon={icon} to={link} />
              ))}
            </TechTileGrid>
          </Fragment>
        ))}

        <div
          css={css`
            margin-top: 4rem;
            text-align: center;
          `}
        >
          <Button
            as="a"
            href="https://newrelic.com/integrations"
            variant={Button.VARIANT.PRIMARY}
          >
            See all 370+ integrations
          </Button>
        </div>
      </Section>
      <Section alternate layout={layout}>
        <SectionTitle
          title={t('home.mobile_apps.title')}
          icon="logo-newrelic"
          to="/docs/mobile-apps/new-relic-mobile-apps"
        />
        <SectionDescription>
          {t('home.mobile_apps.description')}
        </SectionDescription>
        <TechTileGrid>
          {mobile_apps.tiles.map(({ name, icon, link }) => (
            <TechTile key={name} name={name} icon={icon} to={link} />
          ))}
        </TechTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.security.title')} />
        <SectionDescription>
          {t('home.security.description')}
        </SectionDescription>
        <DocTileGrid>
          {security.tiles.map((link, idx) => (
            <DocTile
              key={idx}
              title={t(`home.security.t${idx + 1}.title`)}
              description={t(`home.security.t${idx + 1}.description`)}
              link={link}
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

const Section = ({ alternate, layout, ...props }) => {
  return (
    <section
      css={css`
        background: ${alternate && 'var(--secondary-background-color)'};
        margin: 0 -${layout.contentPadding};
        padding: ${layout.contentPadding};

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
      <h2
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
      </h2>
    </Wrapper>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  to: PropTypes.string,
};

const SectionDescription = (props) => (
  <p
    {...props}
    css={css`
      font-size: 1.125rem;
    `}
  />
);

const WelcomeTile = ({ title, links, variant = 'normal', instrumentation }) => (
  <Surface
    base={Surface.BASE.PRIMARY}
    instrumentation={instrumentation}
    css={css`
      color: currentColor;
      position: relative;
      min-height: 300px;
      border-color: var(--tile-border-color, var(--border-color));
      border-radius: 0.5rem;

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
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }

      &:hover {
        color: currentColor;
      }

      ${welcomeTileStyles[variant]};
    `}
  >
    <h2
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5.5rem;
        margin-bottom: 0;
        border-bottom: solid 2px var(--tertiary-background-color);
      `}
    >
      {title}
    </h2>
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
  variant: PropTypes.oneOf(['normal', 'cta']),
  instrumentation: PropTypes.object,
};

const welcomeTileStyles = {
  normal: css`
    --number-background-color: var(--primary-background-color);
    --number-border-color: var(--color-teal-500);
    --outer-ring-border-color: var(--border-color);
  `,
  cta: css`
    --tile-border-color: var(--color-teal-400);
    --number-background-color: var(--color-teal-400);
    --number-color: white;
    --outer-ring-border-color: var(--border-color);

    &:hover {
      border-color: var(--color-teal-300);

      .dark-mode & {
        border-color: var(--color-teal-500);
      }
    }

    .dark-mode & {
      --tile-border-color: var(--color-teal-600);
      --number-background-color: var(--color-teal-600);
    }
  `,
};

const DocTileGrid = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 1rem;
      `}
    >
      {children}
    </div>
  );
};

DocTileGrid.propTypes = {
  children: PropTypes.node,
};

const DocTile = ({ title, description, link }) => (
  <SurfaceLink
    base={Surface.BASE.SECONDARY}
    to={link}
    css={css`
      color: currentColor;
      padding: 1rem;
      min-height: 170px;

      .light-mode & {
        border: 1px solid var(--border-color);
      }

      &:hover {
        color: currentColor;
        border-color: var(--border-hover-color);
      }
    `}
  >
    <h3
      css={css`
        font-size: 1rem;
      `}
    >
      {title}
    </h3>
    <p>{description}</p>
  </SurfaceLink>
);

DocTile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
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
