import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Link,
  Icon,
  useInstrumentedHandler,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import { useMedia } from 'react-use';
import HomepageBanner from '../components/HomepageBanner';
import { DocTile, DocTiles } from '../components/DocTile';
import ProductTile from '../components/ProductTile';
import ErrorBoundary from '../components/ErrorBoundary';
import FeedbackModal from '../components/FeedbackModal';
import { OnboardingContainer, OnboardingStep } from '../components/Onboarding';

const HomePage = ({ data }) => {
  const {
    site: { layout },
  } = data;
  const [showFeedbackModal, setShowFeedbackModal] = useState(true);

  const { t } = useTranslation();

  const mobileBreakpoint = '450px';
  const isMobileScreen = useMedia(`(max-width: ${mobileBreakpoint})`);

  return (
    <ErrorBoundary eventName="homepage">
      <HomepageBanner />
      <Section layout={layout}>
        <SectionTitle title={t('home.getStarted')} />
        <OnboardingContainer>
          <OnboardingStep
            button={t('home.onBoarding.0.button')}
            buttonHref={t('home.onBoarding.0.buttonHref')}
            number={0}
            text={t('home.onBoarding.0.text')}
            title={t('home.onBoarding.0.title')}
          />
          <OnboardingStep
            readDocsHref={t('home.onBoarding.1.readDocsHref')}
            number={1}
            text={t('home.onBoarding.1.text')}
            title={t('home.onBoarding.1.title')}
          />
          <OnboardingStep
            button={t('home.onBoarding.2.button')}
            buttonHref={t('home.onBoarding.2.buttonHref')}
            number={2}
            text={t('home.onBoarding.2.text')}
            title={t('home.onBoarding.2.title')}
          />
          <OnboardingStep
            readDocsHref={t('home.onBoarding.3.readDocsHref')}
            number={3}
            text={t('home.onBoarding.3.text')}
            title={t('home.onBoarding.3.title')}
          />
        </OnboardingContainer>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.popularDocs.title')} />
        <div>
          <DocTiles
            variant="homepage"
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
              @media screen and (max-width: 1000px) {
                grid-template-columns: 1fr;
                padding: 0 5rem;
              }

              @media screen and (max-width: 760px) {
                padding: 0;
              }
            `}
          >
            <DocTile
              buttonText={t('home.popularDocs.learnMore')}
              path="/docs/apm/new-relic-apm/getting-started/introduction-apm"
            >
              {t('home.popularDocs.t1.title')}
            </DocTile>
            <DocTile
              buttonText={t('home.popularDocs.learnMore')}
              path="/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring/"
            >
              {t('home.popularDocs.t2.title')}
            </DocTile>
            <DocTile
              buttonText={t('home.popularDocs.learnMore')}
              path="/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/"
            >
              {t('home.popularDocs.t3.title')}
            </DocTile>
          </DocTiles>
        </div>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.productRow1.title')} />
        <SectionContent>
          <ProductTile
            to="/docs/ai-monitoring/intro-to-ai-monitoring/"
            title={t('home.productRow1.t1.title')}
            icon="nr-ai-monitoring"
          >
            {t('home.productRow1.t1.body')}
          </ProductTile>
          <ProductTile
            to="/docs/apm/new-relic-apm/getting-started/introduction-apm/"
            title={t('home.productRow1.t2.title')}
            icon="nr-apm"
          >
            {t('home.productRow1.t2.body')}
          </ProductTile>
          <ProductTile
            to="/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring/"
            title={t('home.productRow1.t3.title')}
            icon="nr-browser"
          >
            {t('home.productRow1.t3.body')}
          </ProductTile>
          <ProductTile
            to="/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring/"
            title={t('home.productRow1.t4.title')}
            icon="nr-infrastructure"
          >
            {t('home.productRow1.t4.body')}
          </ProductTile>
          <ProductTile
            to="/docs/kubernetes-pixie/kubernetes-integration/get-started/introduction-kubernetes-integration/"
            title={t('home.productRow1.t5.title')}
            icon="nr-k8s-cluster"
          >
            {t('home.productRow1.t5.body')}
          </ProductTile>
          <ProductTile
            to="/docs/logs/get-started/get-started-log-management/"
            title={t('home.productRow1.t6.title')}
            icon="nr-logs"
          >
            {t('home.productRow1.t6.body')}
          </ProductTile>
          <ProductTile
            to="/docs/mobile-monitoring/new-relic-mobile/get-started/introduction-mobile-monitoring/"
            title={t('home.productRow1.t7.title')}
            icon="nr-mobile"
          >
            {t('home.productRow1.t7.body')}
          </ProductTile>
          <ProductTile
            to="/docs/mlops/get-started/intro-mlops/"
            title={t('home.productRow1.t8.title')}
            icon="nr-learning-models"
          >
            {t('home.productRow1.t8.body')}
          </ProductTile>
          <ProductTile
            to="/docs/network-performance-monitoring/get-started/npm-introduction/"
            title={t('home.productRow1.t9.title')}
            icon="nr-network-monitoring"
          >
            {t('home.productRow1.t9.body')}
          </ProductTile>
          <ProductTile
            to="/docs/serverless-function-monitoring/overview/"
            title={t('home.productRow1.t10.title')}
            icon="nr-ml-endpoints"
          >
            {t('home.productRow1.t10.body')}
          </ProductTile>
          <ProductTile
            to="/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/"
            title={t('home.productRow1.t11.title')}
            icon="nr-synthetics"
          >
            {t('home.productRow1.t11.body')}
          </ProductTile>
        </SectionContent>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.productRow2.title')} />
        <SectionContent>
          <ProductTile
            to="/docs/alerts-applied-intelligence/overview/"
            title={t('home.productRow2.t1.title')}
            icon="nr-alerts-ai"
          >
            {t('home.productRow2.t1.body')}
          </ProductTile>
          <ProductTile
            to="/docs/change-tracking/change-tracking-introduction/"
            title={t('home.productRow2.t2.title')}
            icon="nr-upstream-deployment"
          >
            {t('home.productRow2.t2.body')}
          </ProductTile>
          <ProductTile
            to="/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/"
            title={t('home.productRow2.t3.title')}
            icon="nr-dashboard"
          >
            {t('home.productRow2.t3.body')}
          </ProductTile>
          <ProductTile
            to="/docs/distributed-tracing/concepts/introduction-distributed-tracing/"
            title={t('home.productRow2.t4.title')}
            icon="nr-service-map"
          >
            {t('home.productRow2.t4.body')}
          </ProductTile>
          <ProductTile
            to="/docs/nrql/get-started/introduction-nrql-new-relics-query-language/"
            title={t('home.productRow2.t5.title')}
            icon="nr-query"
          >
            {t('home.productRow2.t5.body')}
          </ProductTile>
          <ProductTile
            to="/docs/service-level-management/intro-slm/"
            title={t('home.productRow2.t6.title')}
            icon="nr-horizontal-chart"
          >
            {t('home.productRow2.t6.body')}
          </ProductTile>
        </SectionContent>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.productRow3.title')} />
        <SectionContent>
          <ProductTile
            to="/docs/codestream/start-here/what-is-codestream/"
            title={t('home.productRow3.t1.title')}
            icon="nr-notes-edit"
          >
            {t('home.productRow3.t1.body')}
          </ProductTile>
          <ProductTile
            to="/docs/tutorial-error-tracking/respond-outages/"
            title={t('home.productRow3.t2.title')}
            icon="nr-inbox"
          >
            {t('home.productRow3.t2.body')}
          </ProductTile>
          <ProductTile
            to="/docs/iast/introduction/"
            title={t('home.productRow3.t3.title')}
            icon="nr-iast"
          >
            {t('home.productRow3.t3.body')}
          </ProductTile>
          <ProductTile
            to="/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/opentelemetry-introduction/"
            title={t('home.productRow3.t4.title')}
            icon="nr-needs-instrumentation"
          >
            {t('home.productRow3.t4.body')}
          </ProductTile>
          <ProductTile
            to="/docs/vulnerability-management/overview/"
            title={t('home.productRow3.t5.title')}
            icon="nr-vulnerability"
          >
            {t('home.productRow3.t5.body')}
          </ProductTile>
          <ProductTile
            to="/docs/website-performance-monitoring/increase-user-engagement/"
            title={t('home.productRow3.t6.title')}
            icon="nr-dashboard"
          >
            {t('home.productRow3.t6.body')}
          </ProductTile>
        </SectionContent>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.productRow4.title')} />
        <SectionContent>
          <ProductTile
            to="/docs/release-notes/"
            title={t('home.productRow4.t1.title')}
            icon="nr-notes-edit"
          >
            {t('home.productRow4.t1.body')}
          </ProductTile>
          <ProductTile
            to="/whats-new/"
            title={t('home.productRow4.t2.title')}
            icon="nr-notes-add"
          >
            {t('home.productRow4.t2.body')}
          </ProductTile>
        </SectionContent>
      </Section>
      <Section layout={layout}>
        <SectionTitle title={t('home.productRow5.title')} />
        <SectionContent>
          <ProductTile
            to="/docs/accounts/accounts-billing/account-setup/create-your-new-relic-account/"
            title={t('home.productRow5.t1.title')}
            icon="nr-user"
          >
            {t('home.productRow5.t1.body')}
          </ProductTile>
          <ProductTile
            to="/docs/data-apis/get-started/nrdb-horsepower-under-hood/"
            title={t('home.productRow5.t2.title')}
            icon="nr-area-chart"
          >
            {t('home.productRow5.t2.body')}
          </ProductTile>
          <ProductTile
            to="/attribute-dictionary/"
            title={t('home.productRow5.t3.title')}
            icon="nr-bookmark"
          >
            {t('home.productRow5.t3.body')}
          </ProductTile>
          <ProductTile
            to="/docs/security/overview/"
            title={t('home.productRow5.t4.title')}
            icon="nr-private"
          >
            {t('home.productRow5.t4.body')}
          </ProductTile>
          <ProductTile
            to="/docs/licenses/overview/"
            title={t('home.productRow5.t5.title')}
            icon="nr-attachment"
          >
            {t('home.productRow5.t5.body')}
          </ProductTile>
        </SectionContent>
      </Section>
      {showFeedbackModal && !isMobileScreen && (
        <FeedbackModal onClose={() => setShowFeedbackModal(false)} />
      )}
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
  query {
    site {
      layout {
        contentPadding
      }
    }
  }
`;
const Section = ({ ...props }) => {
  return (
    <section
      css={css`
        padding-top: 2.5rem;
        &:first-child {
          padding-top: 0;
        }
        border: none;
        background: var(--tertiary-background-color);
        max-width: 1200px;
        margin: auto;
        padding: 2.5rem 3rem;
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
const SectionContent = styled.div`
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
`;
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
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 24px;
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
