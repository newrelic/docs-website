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

import enJson from '../i18n/translations/en/translation.json';
import krJson from '../i18n/translations/kr/translation.json';
import jpJson from '../i18n/translations/jp/translation.json';
import esJson from '../i18n/translations/es/translation.json';
import ptJson from '../i18n/translations/pt/translation.json';
import frJson from '../i18n/translations/fr/translation.json';

const HomePage = ({ data }) => {
  const {
    site: { layout },
  } = data;
  const [showFeedbackModal, setShowFeedbackModal] = useState(true);

  const { t } = useTranslation();

  const { locale } = useLocale();

  // using the json content to generate the Product tiles section
  const productTileJson = (() => {
    if (locale === 'en' && 'productTiles' in enJson.strings.home)
      return enJson.strings.home.productTiles;
    if (locale === 'kr' && 'productTiles' in krJson.strings.home)
      return krJson.strings.home.productTiles;
    if (locale === 'jp' && 'productTiles' in jpJson.strings.home)
      return jpJson.strings.home.productTiles;
    if (locale === 'es' && 'productTiles' in esJson.strings.home)
      return esJson.strings.home.productTiles;
    if (locale === 'pt' && 'productTiles' in ptJson.strings.home)
      return ptJson.strings.home.productTiles;
    if (locale === 'fr' && 'productTiles' in frJson.strings.home)
      return frJson.strings.home.productTiles;
    return enJson.strings.home.productTiles;
  })();

  const mobileBreakpoint = '450px';
  const isMobileScreen = useMedia(`(max-width: ${mobileBreakpoint})`);

  return (
    <ErrorBoundary eventName="homepage">
      <HomepageBanner />

      {/* ------ Onboarding steps ------ */}
      <Section
        layout={layout}
        css={css`
          border: none;
          max-width: 1440px;
          margin: 2rem auto 0;
          padding: 0 calc(5% + 8px); // to match the product tiles outer edges
        `}
      >
        <SectionTitle title={t('strings.home.getStarted')} />
        <OnboardingContainer>
          <OnboardingStep
            button={t('strings.home.onBoarding.0.button')}
            buttonHref={t('strings.home.onBoarding.0.buttonHref')}
            number={0}
            text={t('strings.home.onBoarding.0.text')}
            title={t('strings.home.onBoarding.0.title')}
          />
          <OnboardingStep
            docsHref={t('strings.home.onBoarding.1.docsHref')}
            hrefText={t('strings.home.onBoarding.1.hrefText')}
            number={1}
            text={t('strings.home.onBoarding.1.text')}
            title={t('strings.home.onBoarding.1.title')}
          />
          <OnboardingStep
            button={t('strings.home.onBoarding.2.button')}
            buttonHref={t('strings.home.onBoarding.2.buttonHref')}
            number={2}
            text={t('strings.home.onBoarding.2.text')}
            title={t('strings.home.onBoarding.2.title')}
          />
          <OnboardingStep
            docsHref={t('strings.home.onBoarding.3.docsHref')}
            hrefText={t('strings.home.onBoarding.3.hrefText')}
            number={3}
            text={t('strings.home.onBoarding.3.text')}
            title={t('strings.home.onBoarding.3.title')}
          />
        </OnboardingContainer>
      </Section>

      {/* ------ Popular docs ------ */}
      <Section layout={layout}>
        <SectionTitle title={t('strings.home.popularDocs.title')} />
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
              buttonText={t('strings.home.popularDocs.learnMore')}
              path="/docs/apm/new-relic-apm/getting-started/introduction-apm"
            >
              {t('strings.home.popularDocs.t1.title')}
            </DocTile>
            <DocTile
              buttonText={t('strings.home.popularDocs.learnMore')}
              path="/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring/"
            >
              {t('strings.home.popularDocs.t2.title')}
            </DocTile>
            <DocTile
              buttonText={t('strings.home.popularDocs.learnMore')}
              path="/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/"
            >
              {t('strings.home.popularDocs.t3.title')}
            </DocTile>
          </DocTiles>
        </div>
      </Section>

      {/* ------ Product tiles ------ */}
      <Section
        layout={layout}
        css={css`
          h3:nth-of-type(2) {
            padding-top: 0;
          }
          max-width: 1440px;
          padding: 0 5% 2rem;

          > div:nth-of-type(3n + 1) .product-icon {
            color: #ff8300;
          }
          > div:nth-of-type(3n + 2) .product-icon {
            color: #ff40b4;
          }
          > div:nth-of-type(3n + 3) .product-icon {
            color: #0095a9;
            .dark-mode & {
              color: #1dcad3;
            }
          }
        `}
      >
        <SectionTitle title={t('strings.home.productTilesHeader')} />

        <ProductTileSection sections={productTileJson} />
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
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1500px) {
    align-self: auto;
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
            padding: 0.75rem 0 0.4375rem;
            margin-left: 0.5rem;
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

ProductTileSection.propTypes = {
  sections: PropTypes.shape({
    sectionTitle: PropTypes.string,
    tiles: PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string,
        title: PropTypes.string,
        icon: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
};

export default HomePage;
