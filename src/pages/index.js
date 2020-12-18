import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import { Button, Icon, Surface } from '@newrelic/gatsby-theme-newrelic';
import { rgba } from 'polished';
import IntegrationIcon from '../components/IntegrationIcon';
import SurfaceLink from '../components/SurfaceLink';
import { tdp, fso, ai, security, integrations } from '../data/homepage.yml';
import { injectIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';

const HomePage = ({ data, intl }) => {
  const {
    site: { layout },
  } = data;

  return (
    <>
      <Section layout={layout}>
        <h1>{intl.formatMessage({ id: 'title' })}</h1>
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
            <p>
              If you're new, follow these three steps to create an account and
              get going (it's free!).
            </p>
            <p>
              If you're catching up on the changes in New Relic One, start with{' '}
              <Link to="/docs/new-relic-one/use-new-relic-one/core-concepts/new-relic-one-transition-guide-july-2020">
                this transition guide
              </Link>{' '}
              or check out <Link to="/whats-new">what's new</Link>.
            </p>
            <p>
              Scroll on for more about our Telemetry Data Platform, Full-Stack
              Observability, and Applied Intelligence. Or get a wider view of
              the platform with our{' '}
              <Link to="/docs/using-new-relic/welcome-new-relic/get-started/introduction-new-relic">
                Intro to New Relic
              </Link>
              .
            </p>
          </div>
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
              to="https://newrelic.com/signup"
              title="Create a free account"
              description="No credit card required."
            />
            <WelcomeTile
              to="https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9"
              title="Start collecting data"
              description="Our UI guides you through setup and install."
            />
            <WelcomeTile
              to="/docs/alerts/new-relic-alerts/getting-started/introduction-new-relic-alerts"
              title="Set up alerts"
              description="Get notified quickly about changes in your system."
            />
          </div>
        </div>
      </Section>
      <Section alternate layout={layout}>
        <SectionTitle title={tdp.title} icon="nr-tdp" />
        <SectionDescription>{tdp.description}</SectionDescription>
        <DocTileGrid>
          {tdp.tiles.map((guide, idx) => (
            <DocTile key={idx} guide={guide} />
          ))}
        </DocTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={fso.title} icon="nr-fso" />
        <SectionDescription>{fso.description}</SectionDescription>
        <DocTileGrid>
          {fso.tiles.map((guide, idx) => (
            <DocTile key={idx} guide={guide} />
          ))}
        </DocTileGrid>
      </Section>
      <Section alternate layout={layout}>
        <SectionTitle title={ai.title} icon="nr-ai" />
        <SectionDescription>{ai.description}</SectionDescription>
        <DocTileGrid>
          {ai.tiles.map((guide, idx) => (
            <DocTile key={idx} guide={guide} />
          ))}
        </DocTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle title="New Relic integrations" />
        <SectionDescription>
          <Link to="/docs/integrations/intro-integrations/get-started/introduction-new-relic-integrations">
            Integrations
          </Link>{' '}
          connect the technologies in your stack to New Relic. Here are a few of
          our{' '}
          <a href="https://newrelic.com/integrations" rel="noopener noreferrer">
            370+ integrations
          </a>
          :
        </SectionDescription>

        {integrations.map(({ title, tiles }, idx) => (
          <Fragment key={idx}>
            <IntegrationTitle>{title}</IntegrationTitle>
            <IntegrationTileGrid>
              {tiles.map(({ name, icon, link }) => (
                <IntegrationTile key={name} name={name} icon={icon} to={link} />
              ))}
            </IntegrationTileGrid>
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
      <Section layout={layout}>
        <SectionTitle title={security.title} />
        <SectionDescription>{security.description}</SectionDescription>
        <DocTileGrid>
          {security.tiles.map((guide, idx) => (
            <DocTile key={idx} guide={guide} />
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
  }),
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      layout {
        contentPadding
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

const SectionTitle = ({ title, icon }) => (
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
);

SectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
};

const SectionDescription = (props) => (
  <p
    {...props}
    css={css`
      font-size: 1.125rem;
    `}
  />
);

const pulse = keyframes`
0% {
  box-shadow: 0 0 0 0 ${rgba('#008c99', 0.7)};
}

70% {
  box-shadow: 0 0 0 10px ${rgba('#008c99', 0)};
}

100% {
  box-shadow: 0 0 0 0 ${rgba('#008c99', 0)};
}
`;

const WelcomeTile = ({ description, title, to }) => (
  <SurfaceLink
    base={Surface.BASE.PRIMARY}
    to={to}
    css={css`
      text-align: center;
      padding: 3.5rem 1rem 1.5rem;
      color: currentColor;
      position: relative;
      min-height: 200px;

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

      .light-mode & {
        border: 1px solid var(--border-color);
      }

      &::before {
        content: counter(welcome-tile);
        counter-increment: welcome-tile;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        border: 1px solid var(--color-teal-500);
        background: var(--primary-background-color);
        z-index: 1;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        height: 2.75rem;
        width: 2.75rem;
        border: 1px solid var(--color-dark-100);
        background: var(--primary-background-color);
        transition: border-color 0.15s ease-out;

        .light-mode & {
          border: 1px solid ${rgba('#008c99', 0.3)};
        }
      }

      &:hover {
        color: currentColor;

        &::before {
          animation: ${pulse} 1.5s infinite;
        }
      }
    `}
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </SurfaceLink>
);

WelcomeTile.propTypes = {
  description: PropTypes.node,
  title: PropTypes.string,
  to: PropTypes.string,
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

const DocTile = ({ guide: { title, description, link } }) => (
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
  guide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
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

const IntegrationTileGrid = ({ children }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      grid-gap: 1rem;
    `}
  >
    {children}
  </div>
);

IntegrationTileGrid.propTypes = {
  children: PropTypes.node,
};

const IntegrationTile = ({ name, icon, to }) => (
  <SurfaceLink
    to={to}
    base={Surface.BASE.SECONDARY}
    css={css`
      text-align: center;
      padding: 0.5rem;
      color: currentColor;

      &:hover {
        color: currentColor;
      }

      .light-mode & {
        border: 1px solid var(--border-color);

        &:hover {
          border-color: var(--border-hover-color);
        }
      }
    `}
  >
    <IntegrationIcon
      name={icon}
      size="2rem"
      css={css`
        margin-bottom: 0.5rem;
      `}
    />
    <div
      css={css`
        font-size: 0.875rem;
      `}
    >
      {name}
    </div>
  </SurfaceLink>
);

IntegrationTile.propTypes = {
  name: PropTypes.string,
  icon: IntegrationIcon.propTypes.name,
  to: PropTypes.string,
};

export default HomePage;
