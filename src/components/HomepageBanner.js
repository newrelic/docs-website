import React, { useState } from 'react';
import { navigate } from '@reach/router';

import { css } from '@emotion/react';
import {
  Link,
  SearchInput,
  useTranslation,
  addPageAction,
} from '@newrelic/gatsby-theme-newrelic';
import bannerBackground from '../images/bannerBackground.png';

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

        @media screen and (max-width: ${mobileBreakpoint}) {
          flex-direction: column-reverse;
          background-position: 0 150px;
        }
      `}
    >
      <h1
        css={css`
          font-size: 2.5rem;
          font-weight: 500;
          color: #1ce783;
          padding-top: 3rem;

          line-height: 1;
          @media screen and (max-width: ${mobileBreakpoint}) {
            font-size: 1.5rem;
          }
        `}
      >
        {t('home.pageTitle')}
      </h1>
      <SearchInput
        placeholder={t('home.search.placeholder')}
        size={SearchInput.SIZE.MEDIUM}
        value={searchTerm || ''}
        iconName={SearchInput.ICONS.SEARCH}
        isIconClickable
        alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={() => {
          addPageAction({
            eventName: 'defaultViewSearch',
            category: 'SearchInput',
          });
          navigate(`?q=${searchTerm || ''}`);
        }}
        css={css`
          max-width: 880px;
          width: 80%;
          @media screen and (max-width: ${mobileBreakpoint}) {
            margin-bottom: 1rem;
          }
        `}
      />
      <div
        css={css`
          margin-top: 1rem;
          width: 40%;
          color: white;
          display: flex;
          align-items: baseline;
          justify-content: center;
          width: 100%;
          flex-wrap: wrap;
          font-weight: 500;
          a {
            margin-left: 0.25rem;
          }
          @media screen and (max-width: ${mobileBreakpoint}) {
            display: none;
          }
        `}
      >
        <p>{t('home.search.popularSearches.title')}: </p>
        <Link to="?q=nrql">{t('home.search.popularSearches.options.0')}</Link>
        <Link to="?q=logs">{t('home.search.popularSearches.options.1')}</Link>
        <Link to="?q=alert">{t('home.search.popularSearches.options.2')}</Link>
        <Link to="?q=best practices">
          {t('home.search.popularSearches.options.3')}
        </Link>
        <Link to="?q=kubernetes">
          {t('home.search.popularSearches.options.4')}
        </Link>
      </div>
    </section>
  );
};

export default HomepageBanner;
