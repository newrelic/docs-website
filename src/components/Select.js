import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Select = ({ disabled, ...props }) => (
  <div
    css={css`
      display: grid;
      grid-template-areas: 'select';
      align-items: center;
      width: 100%;
      min-width: 15ch;
      border: 1px solid var(--border-color);
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      position: relative;

      ${disabled &&
      css`
        cursor: not-allowed;
        opacity: 0.5;

        .light-mode & {
          background-color: var(--primary-hover-color);
        }
      `}

      .dark-mode & {
        background-color: var(--secondary-background-color);
      }

      &::after {
        content: '';
        grid-area: select;
        justify-self: end;
        width: 0.5rem;
        height: 0.25rem;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        background-color: var(--border-color);
      }
    `}
  >
    <select
      disabled={disabled}
      css={css`
        grid-area: select;
        appearance: none;
        background-color: transparent;
        border: none;
        padding: 0 1em 0 0;
        margin: 0;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
        outline: none;
        color: var(--primary-text-color);

        option {
          font: -moz-pull-down-menu;
          color: var(--system-text-primary-light);
        }

        &:focus + .focus-ring {
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border: 2px solid var(--brand-button-primary-accent);
          border-radius: inherit;
        }

        .dark-mode & {
          border-color: var(--brand-button-primary-accent-hover);
        }
      `}
      {...props}
    />
    <span className="focus-ring" />
  </div>
);

Select.propTypes = {
  disabled: PropTypes.bool,
};

export default Select;
