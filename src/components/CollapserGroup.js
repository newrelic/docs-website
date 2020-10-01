import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from '@emotion/core';

const CollapserGroup = ({ children }) => {
  return (
    <div>
      <ClassNames>
        {({ css }) => {
          return Children.map(children, (child) =>
            cloneElement(child, {
              className: css`
                margin-bottom: 1rem;
              `,
            })
          );
        }}
      </ClassNames>
    </div>
  );
};

CollapserGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CollapserGroup;
