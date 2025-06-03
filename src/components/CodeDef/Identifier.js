import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Identifier = ({ children }) => (
  <span
    css={css`
      color: var(--code-console-text-primary);

      .light-mode & {
        color: var(--color-background);
      }
    `}
  >
    {children}
  </span>
);

Identifier.propTypes = {
  children: PropTypes.node,
};

export default Identifier;
