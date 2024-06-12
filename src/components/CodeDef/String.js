import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const StringValue = ({ value }) => (
  <span
    css={css`
      color: var(--code-query-syntax-string);
      .light-mode & {
        --code-query-syntax-string: #4f8400;
        color: var(--code-query-syntax-string);
      }
    `}
  >
    "{value}"
  </span>
);

StringValue.propTypes = {
  value: PropTypes.string.isRequired,
};

export default StringValue;
