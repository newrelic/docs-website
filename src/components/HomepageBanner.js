import React, { useState } from 'react';
import { navigate } from '@reach/router';

import { css } from '@emotion/react';
import {
  Link,
  SearchInput,
  useTranslation,
  addPageAction,
} from '@newrelic/gatsby-theme-newrelic';
import bannerBackground from 'images/bannerBackground.svg';

const HomepageBanner = () => {
  const bannerHeight = '250px';
  const mobileBreakpoint = '450px';
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

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
        flex-direction: column;
        align-items: center;
        min-height: ${bannerHeight};

        @media screen and (max-width: 550px) {
          justify-content: center;
          background-size: 150%;
          background-position: center 20px;
        }
        @media screen and (max-width: ${mobileBreakpoint}) {
          min-height: 200px;
          background-size: 200%;
          background-position: center 8px;
        }
      `}
    >
      <h1
        css={css`
          font-size: 2.5rem;
          font-weight: 500;
          color: #1ce783;
          padding-top: 3rem;
          margin-bottom: 1.5rem;
          text-align: center;

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
      <SearchInput
        placeholder={t('strings.home.search.placeholder')}
        size={SearchInput.SIZE.MEDIUM}
        value={searchTerm || ''}
        iconName={SearchInput.ICONS.SEARCH}
        isIconClickable
        alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={() => {
          addPageAction({
            eventName: 'swiftypeSearchInput',
            category: 'SearchInput',
            searchTerm,
            searchLocation: 'homepage',
          });
          navigate(`?q=${searchTerm || ''}`);
        }}
        css={css`
          max-width: 880px;
          width: 80%;
          svg {
            color: var(--primary-text-color);
          }
        `}
      />
      <div
        css={css`
          margin-top: 0.75rem;
          width: 40%;
          color: white;
          display: flex;
          align-items: baseline;
          justify-content: center;
          width: 100%;
          flex-wrap: wrap;
          font-weight: 500;
          font-size: 1rem;
          a {
            margin-left: 0.25rem;
            &:hover {
              color: var(--brand-button-primary-accent);
            }
          }
          @media screen and (max-width: 550px) {
            font-size: 0.75rem;
          }

          @media screen and (max-width: ${mobileBreakpoint}) {
            display: none;
          }
        `}
      >
        <p>{t('strings.home.search.popularSearches.title')}: </p>
        <Link to="?q=nrql">
          {t('strings.home.search.popularSearches.options.0')},
        </Link>
        <Link to="?q=logs">
          {t('strings.home.search.popularSearches.options.1')},
        </Link>
        <Link to="?q=alert">
          {t('strings.home.search.popularSearches.options.2')},
        </Link>
        <Link to="?q=best practices">
          {t('strings.home.search.popularSearches.options.3')},
        </Link>
        <Link to="?q=kubernetes">
          {t('strings.home.search.popularSearches.options.4')}
        </Link>
      </div>
    </section>
  );
};

export default HomepageBanner;
