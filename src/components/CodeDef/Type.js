import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Type = ({ className, children }) => (
  <span
    className={className}
    css={css`
      padding: 0.125rem;
      border-radius: 0.125rem;
      color: var(--code-query-syntax-keyword);
      .light-mode {
        --code-query-syntax-keyword: #aa1bc8;
      }
    `}
  >
    {children}
  </span>
);

Type.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Type;
