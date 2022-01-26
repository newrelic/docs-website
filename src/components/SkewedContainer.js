import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const SkewedContainer = ({ className, children }) => (
  <div
    className={className}
    css={css`
      background: var(--secondary-background-color);
      transform: skew(0, -2deg);
    `}
  >
    <div
      css={css`
        transform: skew(0, 2deg);
      `}
    >
      {children}
    </div>
  </div>
);

SkewedContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SkewedContainer;
