import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Logo = ({ className, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 261.95 98.52"
    css={css`
      width: ${width || '118px'};

      .text-color {
        fill: #e7f6f6;
      }
      .hexagon-color {
        fill: var(--system-text-primary-light);
      }
      .brand-color {
        fill: #1ce783;
      }
    `}
    className={className}
  >
    <path
      className="text-color"
      d="M369.63,75.57H384.9c14.61,0,23.85,9.38,23.85,24.05s-9.24,24-23.85,24H369.63ZM384.9,118.1c10.92,0,17.55-7.3,17.55-18.48s-6.63-18.49-17.61-18.49h-8.91v37Z"
      transform="translate(-251.43 -50.58)"
    />
    <path
      className="text-color"
      d="M429.51,124.4c-9.58,0-16.28-7.37-16.28-18.22S419.93,88,429.51,88s16.28,7.37,16.28,18.22S439.09,124.4,429.51,124.4Zm0-5.16c6.17,0,10.18-5.09,10.18-13.06s-4-13.13-10.18-13.13-10.18,5.09-10.18,13.13S423.35,119.24,429.51,119.24Z"
      transform="translate(-251.43 -50.58)"
    />
    <path
      className="text-color"
      d="M467.56,119.11c4.82,0,7.7-3.08,8.71-7.44l5.36,2.48C480,120,474.86,124.4,467.56,124.4c-9.78,0-16.55-7.44-16.55-18.22S457.78,88,467.56,88c7.3,0,12.26,4.22,13.93,10.05l-5.22,2.61c-1-4.29-3.89-7.43-8.71-7.43-6.23,0-10.52,5-10.52,13S461.33,119.11,467.56,119.11Z"
      transform="translate(-251.43 -50.58)"
    />
    <path
      className="text-color"
      d="M489.06,112.81a11.7,11.7,0,0,0,10.72,6.57c4.08,0,7.7-1.75,7.7-5.56s-3.35-4.36-9.11-5.56-11.79-2.55-11.79-9.72C486.58,92.31,492,88,499.44,88c6.3,0,11.46,3.08,13.53,7.23l-4.28,3.42a10.27,10.27,0,0,0-9.52-5.69c-4,0-6.69,2-6.69,5.15,0,3.29,3.08,3.89,8,5,6,1.41,12.93,2.61,12.93,10.25,0,6.7-6.1,11.12-13.6,11.12-6.37,0-12.73-2.75-15.41-8.17Z"
      transform="translate(-251.43 -50.58)"
    />
    <polygon
      className="hexagon-color"
      points="0 25.33 44.19 0 88.38 25.33 88.38 73.18 44.19 98.52 0 73.18 0 25.33"
    />
    <path
      className="brand-color"
      d="M283.62,100.83h24v4h-24Zm0,12h18v-4h-18Zm33-27.8v35.8a2,2,0,0,1-2,2h-38a2,2,0,0,1-2-2v-44a2,2,0,0,1,2-2h29.8a2,2,0,0,1,1.42.59l8.19,8.2A2,2,0,0,1,316.62,85Zm-4,33.8v-32h-8v-8h-26v40Zm-29-22h24v-4h-24Z"
      transform="translate(-251.43 -50.58)"
    />
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
