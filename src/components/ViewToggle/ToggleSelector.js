import React from 'react';
import { css } from '@emotion/react';

import { useTessen, useTranslation } from '@newrelic/gatsby-theme-newrelic';

import { useToggleViewContext } from './ToggleViewContext';

export const TOGGLE_VIEWS = {
  newUserView: 'new-user-view',
  defaultView: 'default-view',
};

const mobileBreakpoint = '450px';

const ToggleSelector = () => {
  const [currentView, setCurrentView] = useToggleViewContext();
  const tessen = useTessen();
  const { t } = useTranslation();

  return (
    <div
      css={css`
        width: 244px;
        display: flex;
        align-items: center;

        button {
          height: 32px;
          font-size: 0.75rem;
          border: none;
        }

        @media screen and (max-width: 800px) {
          align-items: flex-end;
          flex-direction: column;
          justify-content: center;
        }
        @media screen and (max-width: ${mobileBreakpoint}) {
          display: none;
        }
      `}
    >
      <button
        type="button"
        onClick={() => {
          setCurrentView(TOGGLE_VIEWS.newUserView);
          tessen.track({
            eventName: 'homepageToggleClick',
            category: 'HomepageToggle',
            tabView: 'newUserView',
          });
        }}
        css={css`
          background-color: #eceded;
          border-radius: 4px 0 0 4px;
          width: 140px;
          box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.25);
          &:hover {
            color: var(--primary-text-color);
          }
          .dark-mode & {
            box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 0.25);
            background-color: var(--secondary-background-color);
            color: var(--system-text-disabled-dark);
          }

          ${currentView === TOGGLE_VIEWS.newUserView &&
          css`
            box-shadow: unset;
            color: #293338;
            background-color: var(--brand-button-primary-accent);
            .dark-mode & {
              color: #293338;
              background-color: var(--brand-button-primary-accent);
            }
          `}
        `}
      >
        {t('home.toggle.newUserView')}
      </button>

      <button
        type="button"
        onClick={() => {
          setCurrentView(TOGGLE_VIEWS.defaultView);
          tessen.track({
            eventName: 'homepageToggleClick',
            category: 'HomepageToggle',
            tabView: 'defaultView',
          });
        }}
        css={css`
          background-color: #eceded;

          border-radius: 0 4px 4px 0;
          width: 103px;
          color: #9ea5a9;
          box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.25);
          &:hover {
            color: var(--primary-text-color);
          }
          .dark-mode & {
            box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 0.25);
            background-color: var(--secondary-background-color);
            color: var(--system-text-disabled-dark);
          }

          ${currentView === TOGGLE_VIEWS.defaultView &&
          css`
            box-shadow: unset;
            color: #293338;
            background-color: var(--brand-button-primary-accent);
            .dark-mode & {
              color: #293338;
              background-color: var(--brand-button-primary-accent);
            }
          `}
        `}
      >
        {t('home.toggle.defaultView')}
      </button>
    </div>
  );
};

export default ToggleSelector;
