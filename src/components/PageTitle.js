/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { css } from '@emotion/react';

const PageTitle = (props) => (
  <h1
    css={css`
      grid-area: page-title;
      &::before {
        content: '';
        display: block;
        margin-top: -5px;
      }
    `}
    {...props}
  />
);

export default PageTitle;
