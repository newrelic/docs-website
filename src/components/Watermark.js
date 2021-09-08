import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Watermark = ({ text }) => (
  <div
    data-swiftype-index={false}
    css={css`
      position: fixed;
      color: #eeeeee;
      font-size: 18rem;
      transform: rotate(-15deg);
      z-index: -1;
      top: calc(var(--global-header-height) + 8rem);
      user-select: none;
      white-space: pre;
      line-height: 1;

      .dark-mode & {
        color: var(--color-dark-100);
      }
    `}
  >
    {text}
  </div>
);

Watermark.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Watermark;
