import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';
import { css } from '@emotion/react';

const DashboardIcon = (props) => (
  <SVG
    viewBox="0 0 16 13"
    {...props}
    css={css`
      fill: currentColor;
    `}
  >
    <g>
      <path
        d="M14,0H2C0.9,0,0,0.9,0,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V2C16,0.9,15.1,0,14,0z M15,12c0,0.6-0.4,1-1,1H2
c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1V12z"
      />
      <rect x="2" y="11" width="1" height="1" />
      <rect x="4" y="10" width="1" height="2" />
      <rect x="6" y="11" width="1" height="1" />
      <rect x="10" y="11" width="1" height="1" />
      <rect x="8" y="10" width="1" height="2" />
      <rect x="11" y="3" width="3" height="1" />
      <rect x="11" y="5" width="2" height="1" />
      <rect x="11" y="7" width="3" height="1" />
      <path
        d="M5.5,2C3.6,2,2,3.6,2,5.5S3.6,9,5.5,9S9,7.4,9,5.5S7.4,2,5.5,2z M3,5.5c0-1.2,0.9-2.2,2-2.4v2.2L3.4,6.9C3.2,6.5,3,6,3,5.5
z M5.5,8C5,8,4.5,7.8,4.1,7.6L6,5.7V3.1c1.1,0.2,2,1.2,2,2.4C8,6.9,6.9,8,5.5,8z"
      />
    </g>
  </SVG>
);

export default DashboardIcon;
