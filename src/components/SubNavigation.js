import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useDebounce } from 'react-use';
import {
  Link,
  Navigation,
  NavItem,
  Icon,
  SearchInput,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';

const SubNavigation = ({ nav }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  useDebounce(
    () => {
      if (typeof window !== 'undefined' && window.newrelic && searchTerm) {
        window.newrelic.addPageAction('navInteraction', {
          navInteractionType: 'leftNavSearch',
          searchTerm,
        });
      }
    },
    400,
    [searchTerm]
  );

  return (
    <>
      <Link
        to="/"
        css={css`
          color: var(--primary-text-color);
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          margin-bottom: 0.5rem;
          transition: 0.2s ease-out;
          text-decoration: none;

          &:hover {
            color: var(--primary-text-hover-color);
          }
        `}
      >
        <Icon
          name="fe-home"
          size="1rem"
          css={css`
            margin-right: 0.5rem;
          `}
        />
        {t('subNav.homeLink')}
      </Link>
      {nav && (
        <>
          <h2>{nav.title}</h2>
          {nav.filterable && (
            <SearchInput
              placeholder={t('subNav.filter.placeholder')}
              onClear={() => setSearchTerm('')}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              value={searchTerm}
              css={css`
                margin-bottom: 1rem;
              `}
            />
          )}
          <Navigation searchTerm={searchTerm}>
            {nav.pages.map((page) => (
              <NavItem key={page.title} page={page} />
            ))}
          </Navigation>
        </>
      )}
    </>
  );
};

SubNavigation.propTypes = {
  nav: PropTypes.object,
};

export default SubNavigation;
