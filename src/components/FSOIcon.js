import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const FSOIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 67 54"
    className={className}
    css={css`
      width: ${size};
      height: ${size};
      stroke: currentColor;
    `}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="var(--primary-background-color)"
        d="M16.609 35.907h48.175V2.077H16.61z"
      />
      <path
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.609 35.907h48.175V2.077H16.61z"
      />
      <path
        d="M20.976 8.328a.987.987 0 111.974 0 .987.987 0 01-1.974 0"
        fill="#0BAFBE"
      />
      <path
        d="M20.976 8.328a.987.987 0 111.974 0 .987.987 0 01-1.974 0z"
        stroke="#0BAFBE"
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M25.676 8.351h14.829"
      />
      <path
        d="M21.098 12.954a.987.987 0 111.974 0 .987.987 0 01-1.974 0"
        fill="#0BAFBE"
      />
      <path
        d="M21.098 12.954a.987.987 0 111.974 0 .987.987 0 01-1.974 0z"
        stroke="#0BAFBE"
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M25.746 12.978H40.37"
      />
      <path
        fill="var(--primary-background-color)"
        d="M2.073 51.401H50.25v-33.83H2.073z"
      />
      <path
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.073 51.401H50.25v-33.83H2.073zM33.044 36.331l7.611-8.68M22.617 32.637l5.838 4.24M10.931 40.66l6.95-7.595"
      />
      <path
        d="M17.495 30.742a2.91 2.91 0 115.822 0 2.91 2.91 0 01-5.822 0"
        fill="#0BAFBE"
      />
      <path
        d="M17.495 30.742a2.91 2.91 0 115.822 0 2.91 2.91 0 01-5.822 0z"
        stroke="#0BAFBE"
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.455 38.7a2.909 2.909 0 014.538-2.413 2.91 2.91 0 11-4.538 2.413"
        fill="#0BAFBE"
      />
      <path
        d="M28.455 38.7a2.909 2.909 0 014.538-2.413 2.91 2.91 0 11-4.538 2.413z"
        stroke="#0BAFBE"
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.056 42.806a2.91 2.91 0 115.821 0 2.91 2.91 0 01-5.821 0"
        fill="#0BAFBE"
      />
      <path
        d="M6.056 42.806a2.91 2.91 0 115.821 0 2.91 2.91 0 01-5.821 0z"
        stroke="#0BAFBE"
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.75 25.541a2.91 2.91 0 115.822 0 2.91 2.91 0 01-5.821 0"
        fill="#0BAFBE"
      />
      <path
        d="M39.75 25.541a2.91 2.91 0 115.822 0 2.91 2.91 0 01-5.821 0z"
        stroke="#0BAFBE"
        strokeWidth="2.785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

FSOIcon.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

FSOIcon.defaultProps = {
  size: '1em',
};

export default FSOIcon;
