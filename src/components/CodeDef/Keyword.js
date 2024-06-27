import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Keyword = ({ children }) => (
  <span
    css={css`
      color: var(--code-console-text-highlight);
    `}
  >
    {children}
  </span>
);

Keyword.propTypes = {
  children: PropTypes.node,
};

export default Keyword;
