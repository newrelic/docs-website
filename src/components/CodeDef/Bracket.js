import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Bracket = ({ children }) => (
  <span
    css={css`
      color: var(--code-query-syntax-operator);
      .light-mode & {
        --code-query-syntax-operator: #3d808a;
        color: var(--code-query-syntax-operator);
      }
    `}
  >
    {children}
  </span>
);

Bracket.propTypes = {
  children: PropTypes.node,
};

export default Bracket;
