import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Link,
  Icon,
  useLocale,
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

// to map over the items to generate the product tiles
import enJson from '../i18n/translations/en/translation.json';
import krJson from '../i18n/translations/kr/translation.json';
import jpJson from '../i18n/translations/jp/translation.json';
import esJson from '../i18n/translations/es/translation.json';
import ptJson from '../i18n/translations/pt/translation.json';

const HomePage = ({ data }) => {
  const {
    site: { layout },
  } = data;
  const [showFeedbackModal, setShowFeedbackModal] = useState(true);

  const { t } = useTranslation();

  const { locale } = useLocale();
  const tileJson = (() => {
    if (locale === 'en') return enJson;
    if (locale === 'kr') return krJson;
    if (locale === 'jp') return jpJson;
    if (locale === 'es') return esJson;
    if (locale === 'pt') return ptJson;
    return enJson;
  })();

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
      <Section
        layout={layout}
        css={css`
          h3:nth-of-type(2) {
              padding-top: 0;
            }
          }
        `}
      >
        <SectionTitle title={t('home.productTilesHeader')} />

        <ProductTileSection sections={tileJson.home.productTiles} />
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

const ProductTileSection = ({ sections }) => {
  const tileSections = [];

  for (const contents of Object.values(sections)) {
    tileSections.push(
      <>
        <h3
          css={css`
            font-size: 1.25rem;
            color: #7b838a;
            font-weight: 400;
            padding: 2.25rem 0 1.9375rem;
            .dark-mode && {
              color: #b5b6b6;
            }
          `}
        >
          {contents.sectionTitle.toUpperCase()}
        </h3>
        <SectionContent>
          {contents.tiles.map((tile, i) => {
            return (
              <ProductTile
                key={i}
                to={tile.to}
                title={tile.title}
                icon={tile.icon}
              >
                {tile.text}
              </ProductTile>
            );
          })}
        </SectionContent>
      </>
    );
  }
  return tileSections;
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
