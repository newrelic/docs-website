import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const CollapserGroup = ({ children }) => {
  return <div>{children}</div>;
};

CollapserGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CollapserGroup;
