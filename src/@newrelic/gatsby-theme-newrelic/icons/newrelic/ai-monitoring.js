import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const AIMonitoringIcon = (props) => (
  <SVG
    {...props}
    viewBox="-.5 -.5 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path d="M15 1.876c-1.68 0-1.876-.197-1.876-1.876h-.938c0 1.68-.197 1.876-1.876 1.876v.938c1.679 0 1.876.197 1.876 1.876h.938c0-1.679.197-1.876 1.876-1.876v-.938zM7.477 14.071h.018l.01.01a.474.474 0 00.44-.32L9.748 8.34l.76 1.707a.474.474 0 00.431.281H15V9.39h-3.762l-1.125-2.533c-.075-.178-.235-.281-.45-.281a.463.463 0 00-.423.319l-1.67 5.01L5.478 3.18a.452.452 0 00-.44-.356.465.465 0 00-.46.337l-1.801 6.23H0v.937h3.124c.206 0 .394-.14.45-.337l1.407-4.869 2.064 8.593a.46.46 0 00.432.356z" />
  </SVG>
);

AIMonitoringIcon.propTypes = {
  size: PropTypes.string,
};

export default AIMonitoringIcon;
