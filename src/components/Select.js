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
      border: 1px solid var(--color-neutrals-500);
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      position: relative;

      ${disabled &&
      css`
        cursor: not-allowed;
        opacity: 0.5;

        .light-mode & {
          background-color: var(--color-neutrals-100);
        }
      `}

      .dark-mode & {
        border: 1px solid var(--color-dark-300);
        background-color: var(--color-dark-300);
      }

      &::after {
        content: '';
        grid-area: select;
        justify-self: end;
        width: 0.5rem;
        height: 0.25rem;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        background-color: var(--color-neutrals-700);

        .dark-mode & {
          background-color: var(--color-dark-700);
        }
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

        &:focus + .focus-ring {
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border: 2px solid var(--color-brand-500);
          border-radius: inherit;
        }

        .dark-mode & {
          color: var(--color-dark-900);

          option {
            color: var(--color-dark-050);
          }
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
