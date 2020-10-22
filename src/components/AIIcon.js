import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const AIIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47 54"
    className={className}
    css={css`
      width: ${size};
      height: ${size};
      stroke: currentColor;
    `}
  >
    <g fill="none" fillRule="evenodd">
      <path
        strokeWidth="2.317"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.132 10.134h4.607v6.478M8.8 41.232l3.49 2.64h3.457"
      />
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.317">
        <path d="M23.83 3.396v45.61l-3.11 2.332-10.366-4.146-1.555-5.96-3.887-2.592-2.85-11.143 2.85-12.957 6.22-4.406.777-4.924 8.034-3.11z" />
        <path d="M23.796 3.396v45.61l3.11 2.332 10.366-4.146 1.555-5.96 3.887-2.592 2.85-11.143-2.85-12.957-6.22-4.406-.777-4.924-8.033-3.11z" />
      </g>
      <path
        strokeWidth="2.317"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23.92 35.993h4.303l2.38 4.76M32.317 27.618h-16.23l-3.145 5.041M23.878 19.277h4.55l2.131-4.222"
      />
      <path
        d="M29.41 12.607a2.471 2.471 0 114.942 0 2.471 2.471 0 01-4.942 0"
        fill="#0AB0BF"
      />
      <path
        d="M29.41 12.607a2.471 2.471 0 114.942 0 2.471 2.471 0 01-4.942 0z"
        stroke="#0AB0BF"
        strokeWidth="2.317"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.205 43.142a2.471 2.471 0 114.943 0 2.471 2.471 0 01-4.943 0"
        fill="#0AB0BF"
      />
      <path
        d="M29.205 43.142a2.471 2.471 0 114.943 0 2.471 2.471 0 01-4.943 0z"
        stroke="#0AB0BF"
        strokeWidth="2.317"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.313 27.587a2.471 2.471 0 114.942 0 2.471 2.471 0 01-4.942 0"
        fill="#0AB0BF"
      />
      <path
        d="M32.313 27.587a2.471 2.471 0 114.942 0 2.471 2.471 0 01-4.942 0z"
        stroke="#0AB0BF"
        strokeWidth="2.317"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.45 35.01a2.471 2.471 0 114.942 0 2.471 2.471 0 01-4.942 0"
        fill="#0AB0BF"
      />
      <path
        d="M9.45 35.01a2.471 2.471 0 114.942 0 2.471 2.471 0 01-4.942 0z"
        stroke="#0AB0BF"
        strokeWidth="2.317"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

AIIcon.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

AIIcon.defaultProps = {
  size: '1em',
};

export default AIIcon;
