import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Watermark = ({ text }) => (
  <div
    data-swiftype-index={false}
    css={css`
      position: fixed;
      left: 25%;
      top: 75%;
      transform: translate(-25%, -75%);
      color: #eeeeee;
      font-size: 18rem;
      transform: rotate(-25deg);
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
