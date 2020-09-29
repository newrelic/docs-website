import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import './Collapser.css';

const Collapser = ({ children }) => {
  return (
    <div
      css={css`
        margin: 24px 0;
      `}
    >
      {children}
    </div>
  );
};

Collapser.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Collapser;
