import React, { useState } from 'react';
import { css } from '@emotion/react';
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
import { DocTile } from '../components/DocTile';
import ProductTile from '../components/ProductTile';
import ErrorBoundary from '../components/ErrorBoundary';
import FeedbackModal from '../components/FeedbackModal';

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
      <Section
        layout={layout}
        css={css`
          border: none;
          background: var(--tertiary-background-color);
          max-width: 1200px;
          margin: auto;
          padding: 2.5rem 3rem;
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
      <Section
        layout={layout}
        css={css`
          border: none;
          background: var(--tertiary-background-color);
          max-width: 1200px;
          margin: auto;
          padding: 2.5rem 3rem;
        `}
      >
        <SectionTitle title={t('home.productRow1.title')} />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
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
      <Section
        layout={layout}
        css={css`
          border: none;
          background: var(--tertiary-background-color);
          max-width: 1200px;
          margin: auto;
          padding: 2.5rem 3rem;
        `}
      >
        <SectionTitle title={t('home.productRow2.title')} />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
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
          <ProductTile to="/" title={t('home.productRow1.t1.title')}>{t('home.productRow1.t1.body')}</ProductTile>
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
