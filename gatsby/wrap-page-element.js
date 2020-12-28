/* eslint-disable react/prop-types */
import React from 'react';
import { Global, css } from '@emotion/core';

const wrapPageElement = ({ element }) => (
  <>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }

        // add additional styles provided by gatsby-remark-autolink-headers
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          .anchor svg {
            opacity: 0;
            transition: opacity 0.2s ease-out;
          }

          &:hover .anchor svg,
          .anchor:focus svg {
            opacity: 1;
          }
        }
      `}
    />
    {element}
  </>
);

export default wrapPageElement;
