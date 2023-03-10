import React from 'react';
import { css } from '@emotion/react';

import {
  useTessen,
  useTranslation,
  Trans,
} from '@newrelic/gatsby-theme-newrelic';

import { useToggleViewContext } from './ToggleViewContext';

import Tooltip from '../Tooltip';

const SAVED_TOGGLE_VIEW_KEY = 'docs-website/homepage-selected-view';
export const TOGGLE_VIEWS = {
  newUserView: 'new-user-view',
  defaultView: 'default-view',
};

const mobileBreakpoint = '450px';

const ToggleSelector = ({ className }) => {
  const [currentView, setCurrentView] = useToggleViewContext();
  const tessen = useTessen();
  const { t } = useTranslation();

  /* this check prevents the tooltip from continuing to show
   * on each render of the defaultview if it's triggered
   * by the user selecting the toggle buttons which sets the local
   * storage key
   */

  const showTooltip =
    currentView === TOGGLE_VIEWS.defaultView &&
    window.localStorage.getItem(SAVED_TOGGLE_VIEW_KEY) !==
      TOGGLE_VIEWS.newUserView;

  return (
    <div
      css={css`
        display: grid;
        place-items: center;
      `}
      className={className}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          position: relative;

          button {
            font-size: 0.75rem;
            border: none;
            cursor: pointer;
            padding: 8px 16px;
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
        {showTooltip && (
          <Tooltip
            css={css`
              position: absolute;
              bottom: 150%;
              left: -50px;
              & p:nth-of-type(2) {
                font-size: 12px;
              }
            `}
          >
            <Trans i18nKey="home.toggle.tooltip">
              <p>👋 Hey there! Are you a new user?</p>
              <p>
                Check out our <strong>new</strong>quick launch view here!
              </p>
            </Trans>
          </Tooltip>
        )}
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
            padding: 8px 16px 8px 16px;
            box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.25);
            &:hover {
              color: var(--primary-text-color);
            }
            .dark-mode & {
              box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 0.25);
              background-color: var(--secondary-background-color);
              color: var(--system-text-disabled-dark);
            }

            @media (max-width: 920px) {
              border-radius: 4px;
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
            padding: 8px 16px 8px 16px;
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

            @media (max-width: 920px) {
              border-radius: 4px;
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
    </div>
  );
};

export default ToggleSelector;
