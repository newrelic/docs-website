import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Logo = ({ className, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 118 33"
    className={className}
    css={css`
      stroke: #007e8a;
      width: ${width || '118px'};

      .dark-mode & {
        stroke: #70ccd3;
      }
    `}
  >
    <g transform="translate(-80 -98)">
      <g transform="translate(80 98)">
        <g transform="translate(0 1)">
          <g>
            <path
              d="M15.4 0H4v30h22V10.6L15.4 0zm.6 3.4l6.6 6.6H16V3.4zM24 28H6V2h8v10h10v16z"
              fillRule="evenodd"
              clipRule="evenodd"
              css={css`
                stroke: none;
                fill: #007e8a;

                .dark-mode & {
                  fill: #70ccd3;
                }
              `}
            />
          </g>
          <path
            d="M8.5 15.5h13"
            css={css`
              stroke-width: 1.5;
              stroke-linecap: round;
            `}
          />
          <path
            d="M8.5 20.2h13"
            css={css`
              stroke-width: 1.5;
              stroke-linecap: round;
            `}
          />
          <path
            d="M8.4 24.5h7.2"
            css={css`
              stroke-width: 1.5;
              stroke-linecap: round;
            `}
          />
        </g>
        <text
          transform="translate(44 28)"
          fontSize="32"
          css={css`
            stroke: none;
            fill: var(--heading-text-color);
            font-family: var(--primary-font-family);
          `}
        >
          Docs
        </text>
      </g>
    </g>
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
