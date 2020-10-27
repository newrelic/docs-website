import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import { Button, Surface } from '@newrelic/gatsby-theme-newrelic';
import { rgba } from 'polished';
import AIIcon from '../components/AIIcon';
import FSOIcon from '../components/FSOIcon';
import TDPIcon from '../components/TDPIcon';
import IntegrationIcon from '../components/IntegrationIcon';
import SurfaceLink from '../components/SurfaceLink';

const HomePage = ({ data }) => {
  const {
    site: { layout },
  } = data;

  return (
    <>
      <Section layout={layout}>
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
                flex-direction: column;
                margin-right: 0;
                margin-bottom: 2rem;
                max-width: 600px;
              }
            `}
          >
            <h1>Welcome to New Relic</h1>
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
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              grid-gap: 1rem;
              counter-reset: welcome-tile;
              flex: 2;
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
        <SectionTitle title="Telemetry Data Platform" icon={TDPIcon} />
        <SectionDescription>
          Ingest, visualize, and alert on all your telemetry data in one place.
        </SectionDescription>
        <DocTileGrid>
          {tdpGuides.map((guide, idx) => (
            <DocTile key={idx} guide={guide} base={Surface.BASE.SECONDARY} />
          ))}
        </DocTileGrid>
      </Section>
      <Section layout={layout}>
        <SectionTitle title="Full-Stack Observability" icon={FSOIcon} />
        <SectionDescription>
          Analyze and troubleshoot problems easily across your entire software
          stack.
        </SectionDescription>
        <DocTileGrid>
          {fsoGuides.map((guide, idx) => (
            <DocTile key={idx} guide={guide} base={Surface.BASE.PRIMARY} />
          ))}
        </DocTileGrid>
      </Section>
      <Section alternate layout={layout}>
        <SectionTitle
          title="Alerts and Applied Intelligence (AI)"
          icon={AIIcon}
        />
        <SectionDescription>
          Automatically detect anomalies, correlate issues, and reduce alert
          noise.
        </SectionDescription>
        <DocTileGrid>
          {aiGuides.map((guide, idx) => (
            <DocTile key={idx} guide={guide} base={Surface.BASE.SECONDARY} />
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

        <IntegrationTitle>
          Back-end, front-end, and mobile applications
        </IntegrationTitle>
        <IntegrationTileGrid>
          <IntegrationTile name="C SDK" icon="c" to="/docs/agents/c-sdk" />
          <IntegrationTile name="Go" icon="go" to="/docs/agents/go-agent" />
          <IntegrationTile
            name="Java"
            icon="java"
            to="/docs/agents/java-agent"
          />
          <IntegrationTile
            name=".NET"
            icon="dotnet"
            to="/docs/agents/go-agent"
          />
          <IntegrationTile
            name="Node.js"
            icon="nodejs"
            to="/docs/agents/nodejs-agent"
          />
          <IntegrationTile name="PHP" icon="php" to="/docs/agents/php-agent" />
          <IntegrationTile
            name="Python"
            icon="python"
            to="/docs/agents/python-agent"
          />
          <IntegrationTile
            name="Ruby"
            icon="ruby"
            to="/docs/agents/ruby-agent"
          />
          <IntegrationTile
            name="Android"
            icon="android"
            to="/docs/mobile-monitoring/new-relic-mobile-android/get-started/introduction-new-relic-mobile-android"
          />
          <IntegrationTile
            name="iOS"
            icon="apple"
            to="/docs/mobile-monitoring/new-relic-mobile-ios/get-started/introduction-new-relic-mobile-ios"
          />
          <IntegrationTile
            name="Browser"
            icon="javascript"
            to="/docs/browser"
          />
          <IntegrationTile
            name="Synthetics"
            icon="newrelic"
            to="/docs/synthetics"
          />
        </IntegrationTileGrid>

        <IntegrationTitle>Infrastructure and cloud platforms</IntegrationTitle>
        <IntegrationTileGrid>
          <IntegrationTile
            name="AWS"
            icon="aws"
            to="/docs/integrations/amazon-integrations"
          />
          <IntegrationTile
            name="Azure"
            icon="azure"
            to="/docs/integrations/microsoft-azure-integrations/"
          />
          <IntegrationTile
            name="Google Cloud"
            icon="gcloud"
            to="/docs/integrations/google-cloud-platform-integrations"
          />
          <IntegrationTile
            name="Linux"
            icon="linux"
            to="/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/install-infrastructure-linux-using-package-manager"
          />
          <IntegrationTile
            name="Windows"
            icon="windows"
            to="/docs/infrastructure/install-configure-manage-infrastructure/windows-installation/install-infrastructure-windows-server-using-msi-installer"
          />
          <IntegrationTile
            name="Kubernetes"
            icon="kubernetes"
            to="/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration"
          />
          <IntegrationTile
            name="Apache"
            icon="apache"
            to="/docs/integrations/host-integrations/host-integrations-list/apache-monitoring-integration"
          />
          <IntegrationTile
            name="Kafka"
            icon="kafka"
            to="/docs/integrations/host-integrations/host-integrations-list/kafka-monitoring-integration"
          />
          <IntegrationTile
            name="Microsoft SQL"
            icon="mssql"
            to="/docs/integrations/host-integrations/host-integrations-list/microsoft-sql-server-monitoring-integration"
          />
          <IntegrationTile
            name="MongoDB"
            icon="mongodb"
            to="/docs/integrations/host-integrations/host-integrations-list/mongodb-monitoring-integration"
          />
          <IntegrationTile
            name="MySQL"
            icon="mysql"
            to="/docs/integrations/host-integrations/host-integrations-list/mysql-monitoring-integration"
          />
          <IntegrationTile
            name="NGINX"
            icon="nginx"
            to="/docs/integrations/host-integrations/host-integrations-list/nginx-monitoring-integration"
          />
          <IntegrationTile
            name="PostgreSQL"
            icon="postgresql"
            to="/docs/integrations/host-integrations/host-integrations-list/postgresql-monitoring-integration"
          />
          <IntegrationTile
            name="Redis"
            icon="redis"
            to="/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration"
          />
        </IntegrationTileGrid>

        <IntegrationTitle>Open-source monitoring systems</IntegrationTitle>
        <IntegrationTileGrid>
          <IntegrationTile
            name="Dropwizard"
            icon="dropwizard"
            to="/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-dropwizard-integration"
          />
          <IntegrationTile
            name="Istio"
            icon="istio"
            to="/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-istio-integration"
          />
          <IntegrationTile
            name="JMX"
            icon="jmx"
            to="/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration"
          />
          <IntegrationTile
            name="Kamon"
            icon="kamon"
            to="/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/kamon-reporter"
          />
          <IntegrationTile
            name="Micrometer"
            icon="micrometer"
            to="/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-micrometer-integration"
          />
          <IntegrationTile
            name="OpenCensus"
            icon="opencensus"
            to="/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-opencensus-integration"
          />
          <IntegrationTile
            name="OpenTelemetry"
            icon="opentelemetry"
            to="/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-opentelemetry-integration"
          />
          <IntegrationTile
            name="Prometheus"
            icon="prometheus"
            to="/docs/integrations/prometheus-integrations/get-started/prometheus-integrations-how-choose"
          />
          <IntegrationTile
            name="StatsD"
            icon="statsd"
            to="/docs/integrations/host-integrations/host-integrations-list/statsd-monitoring-integration-version-2"
          />
        </IntegrationTileGrid>
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
  query($nav: String) {
    site {
      layout {
        contentPadding
      }
    }
    ...MainLayout_query
  }
`;

const tdpGuides = [
  {
    title: 'Introduction to Telemetry Data Platform',
    description: 'How to manage all your monitoring in one place.',
    to:
      '/docs/data-ingest-apis/get-data-new-relic/getting-started/get-started-telemetry-data-platform',
  },
  {
    title: 'Data explorer',
    description:
      'Query and build charts with NRQL, our PromQL-style syntax, or our visual chart builder.',
    to:
      '/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer',
  },
  {
    title: 'Dashboards',
    description:
      'Combine data from anywhere in our platform into customized dashboards.',
    to:
      '/docs/dashboards/new-relic-one-dashboards/get-started/introduction-new-relic-one-dashboards',
  },
  {
    title: 'Log management',
    description:
      'Get logs alongside your telemetry data with our fast, scalable log management.',
    to: '/docs/logs/new-relic-logs/get-started/introduction-new-relic-logs',
  },
  {
    title: 'APIs',
    description:
      'Find APIs to send data in, get data out, or manage the New Relic platform.',
    to: '/docs/apis/get-started/intro-apis/introduction-new-relic-apis',
  },
  {
    title: 'Manage data',
    description: 'Monitor and control your data usage.',
    to: '/docs/manage-your-data',
  },
  {
    title: 'Build on New Relic One',
    description:
      'Learn how to build custom apps on our platform at developer.newrelic.com',
    to: 'https://developer.newrelic.com',
  },
];

const fsoGuides = [
  {
    title: 'Introduction to Full-Stack Observability',
    description:
      'Get deep insight into everything from infrastructure to server code to end-user apps.',
    to: '/docs/introduction-full-stack-observability',
  },
  {
    title: 'APM',
    description:
      "Get real-time and trending data about your app's performance and stability.",
    to: '/docs/apm',
  },
  {
    title: 'Browser',
    description:
      'Measure website performance, track errors, and see how users interact with your site.',
    to: '/docs/browser',
  },
  {
    title: 'Distributed Tracing',
    description:
      'Track requests through your distributed system to find trends and anomalies.',
    to:
      '/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing',
  },
  {
    title: 'Infrastructure',
    description:
      'Monitor your infrastructure—hosts, cloud providers, container services, backend services, orchestrators, and more.',
    to: '/docs/infrastructure',
  },
  {
    title: 'Logs in context',
    description:
      'Link your log data to APM agent data so you can pinpoint where things are going wrong.',
    to:
      '/docs/logs/enable-logs/configure-logs-context/configure-logs-context-apm-agents',
  },
  {
    title: 'Mobile',
    description:
      'Understand user journeys in your Android and iOS apps and troubleshoot crashes.',
    to: '/docs/mobile-monitoring',
  },
  {
    title: 'Serverless',
    description:
      'Monitor AWS Lambda, Azure Functions, and Google Cloud Functions.',
    to: '/docs/serverless-function-monitoring',
  },
  {
    title: 'Synthetics',
    description:
      'Simulate user activity to detect outages and fix poor website performance.',
    to: '/docs/synthetics',
  },
];

const aiGuides = [
  {
    title: 'Introduction to Alerts',
    description:
      'Get notified about important changes in your system based on any data you connect to New Relic.',
    to:
      '/docs/alerts/new-relic-alerts/getting-started/introduction-new-relic-alerts',
  },
  {
    title: 'Introduction to Applied Intelligence',
    description:
      'Recognize issues sooner, resolve problems faster, and reduce noise for better incident management.',
    to:
      '/docs/new-relic-one/use-new-relic-one/new-relic-ai/introduction-new-relic-ai',
  },
  {
    title: 'Incident Intelligence',
    description:
      'Get an overview of all your incidents. See sources and related events, and find out how they all correlate.',
    to:
      '/docs/new-relic-one/use-new-relic-one/new-relic-ai/get-started-incident-intelligence',
  },
  {
    title: 'Incident Workflows',
    description:
      'Enrich your incidents with New Relic data before sending them to your notification platform.',
    to:
      '/docs/new-relic-one/use-new-relic-one/new-relic-ai/enhance-notifications-using-incident-workflows',
  },
  {
    title: 'Proactive Detection',
    description: 'Get notified by Slack or webhook of unusual app behavior.',
    to:
      '/docs/new-relic-one/use-new-relic-one/new-relic-ai/proactive-detection-new-relic-ai',
  },
];

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

const SectionTitle = ({ title, icon: Icon }) => (
  <h2
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    {Icon && (
      <Icon
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
      padding: 4rem 1rem 0;
      color: currentColor;
      position: relative;
      height: 250px;

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
        border: 1px solid ${rgba('#008c99', 0.3)};
        background: var(--primary-background-color);
        transition: border-color 0.15s ease-out;
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

const DocTileGrid = ({ children }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 1rem;

      @media screen and (max-width: 1470px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    `}
  >
    {children}
  </div>
);

DocTileGrid.propTypes = {
  children: PropTypes.node,
};

const DocTile = ({ base, guide: { title, description, to } }) => (
  <SurfaceLink
    base={base}
    to={to}
    css={css`
      color: currentColor;
      padding: 1rem;
      min-height: 170px;

      &:hover {
        color: currentColor;
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
  base: Surface.propTypes.base,
  guide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
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
