import React from 'react';

import { css } from '@emotion/react';
import { useTranslation } from '@newrelic/gatsby-theme-newrelic';
import bannerBackground from 'images/bannerBackground.svg';

const HomepageBanner = () => {
  const bannerHeight = '200px';
  const mobileBreakpoint = '450px';
  const { t } = useTranslation();

  return (
    <section
      css={css`
        position: relative;
        background: var(--system-text-primary-light);
        background-image: url(${bannerBackground});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        min-height: ${bannerHeight};
        justify-content: center;

        @media screen and (max-width: 550px) {
          justify-content: center;
          background-size: 150%;
          background-position: center 20px;
        }
        @media screen and (max-width: ${mobileBreakpoint}) {
          background-size: 200%;
          background-position: center 8px;
        }
      `}
    >
      <h1
        css={css`
          font-size: 3rem;
          font-weight: 500;
          color: #1ce783;
          text-align: center;
          margin: 0 20px;

          line-height: 1;
          @media screen and (max-width: 550px) {
            font-size: 2rem;
            padding: 0 1rem 0;
          }
          @media screen and (max-width: ${mobileBreakpoint}) {
            font-size: 1.5rem;
          }
        `}
      >
        {t('strings.home.pageTitle')}
      </h1>
    </section>
  );
};

export default HomepageBanner;
