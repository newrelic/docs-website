import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const TDPIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 53"
    className={className}
    css={css`
      width: ${size};
      height: ${size};
      stroke: currentColor;
    `}
  >
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#2C2C2C"
        strokeWidth="2.337"
        strokeLinecap="square"
        strokeLinejoin="round"
        d="M46.898 12.204h-5.102"
      />
      <path
        d="M51.954 11.716a2.351 2.351 0 10-4.703 0 2.351 2.351 0 004.703 0"
        fill="#0AB0BF"
      />
      <path
        d="M51.954 11.716a2.351 2.351 0 10-4.703 0 2.351 2.351 0 004.703 0z"
        stroke="#0AB0BF"
        strokeWidth="2.337"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="#2C2C2C"
        strokeWidth="2.337"
        strokeLinecap="square"
        strokeLinejoin="round"
        d="M47.251 41.667h-5.58"
      />
      <path
        d="M51.954 41.66a2.351 2.351 0 10-4.703 0 2.351 2.351 0 004.703 0"
        fill="#0AB0BF"
      />
      <path
        d="M51.954 41.66a2.351 2.351 0 10-4.703 0 2.351 2.351 0 004.703 0z"
        stroke="#0AB0BF"
        strokeWidth="2.337"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="#2C2C2C"
        strokeWidth="2.337"
        strokeLinecap="square"
        strokeLinejoin="round"
        d="M6.703 27.355h5.579"
      />
      <path
        d="M2 27.361a2.351 2.351 0 104.703 0 2.351 2.351 0 00-4.703 0"
        fill="#0AB0BF"
      />
      <path
        d="M2 27.361a2.351 2.351 0 104.703 0 2.351 2.351 0 00-4.703 0z"
        stroke="#0AB0BF"
        strokeWidth="2.337"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.68 5.636v10.247c.022.101.057.197.057.305 0 1.965 5.624 4.821 14.437 4.821 8.813 0 14.438-2.856 14.438-4.821 0-.115.036-.22.06-.326V5.633M27.174 36.385c8.813 0 14.438-2.856 14.438-4.821 0-.115.036-.22.06-.326V21.009c-3.147 2.285-8.84 3.467-14.498 3.467-5.656 0-11.345-1.182-14.493-3.464v10.247c.021.1.056.197.056.305 0 1.965 5.624 4.821 14.437 4.821z"
        strokeWidth="2.337"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.174 39.818c-5.656 0-11.345-1.182-14.493-3.462v8.314c0 .031-.003.06-.003.093 0 4.57 7.469 7.034 14.493 7.034 7.028 0 14.497-2.464 14.497-7.034h.003v-8.41c-3.146 2.282-8.84 3.465-14.497 3.465zM41.671 5.633c0 1.997-6.49 3.616-14.495 3.616-8.006 0-14.495-1.619-14.495-3.616 0-1.996 6.49-3.615 14.495-3.615 8.006 0 14.495 1.619 14.495 3.615z"
        strokeWidth="2.337"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

TDPIcon.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

TDPIcon.defaultProps = {
  size: '1em',
};

export default TDPIcon;
