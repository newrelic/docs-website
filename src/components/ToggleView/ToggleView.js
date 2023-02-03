import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { useToggleViewContext } from './ToggleViewContext';

const ToggleView = ({ children, id }) => {
  const [currentView] = useToggleViewContext();

  return (
    <div
      id={id}
      css={
        id !== currentView &&
        css`
          display: none;
        `
      }
    >
      {children}
    </div>
  );
};

ToggleView.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ToggleView;
