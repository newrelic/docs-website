import React from 'react';
import { css } from '@emotion/react';

import { useTessen } from '@newrelic/gatsby-theme-newrelic';

import { useToggleViewContext } from './ToggleViewContext';

export const TOGGLE_VIEWS = {
  newUserView: 'new-user-view',
  defaultView: 'default-view',
};

const ToggleSelector = () => {
  const [currentView, setCurrentView] = useToggleViewContext();
  const tessen = useTessen();

  return (
    <>
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
          &:hover {
            color: var(--primary-text-color);
          }

          ${currentView === TOGGLE_VIEWS.newUserView &&
          css`
            color: var(--primary-text-color);
            border-bottom: var(--brand-button-primary-accent) solid 3px;

            .dark-mode & {
              border-bottom: var(--brand-button-primary-accent-hover) solid 3px;
            }
          `}
        `}
      >
        NewUserView
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
          &:hover {
            color: var(--primary-text-color);
          }

          ${currentView === TOGGLE_VIEWS.defaultView &&
          css`
            color: var(--primary-text-color);
            border-bottom: var(--brand-button-primary-accent) solid 3px;

            .dark-mode & {
              border-bottom: var(--brand-button-primary-accent-hover) solid 3px;
            }
          `}
        `}
      >
        DefaultView
      </button>
    </>
  );
};

export default ToggleSelector;
