import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const NumberValue = ({ value }) => (
  <span
    css={css`
      color: var(--code-query-syntax-numeric);
      .light-mode {
        --code-query-syntax-numeric: #ab6400;
        color: var(--code-query-syntax-numeric);
      }
    `}
  >
    {value}
  </span>
);

NumberValue.propTypes = {
  value: PropTypes.number.isRequired,
};

export default NumberValue;
