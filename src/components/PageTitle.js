/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { css } from '@emotion/react';

const PageTitle = (props) => (
  <h1
    css={css`
      grid-area: page-title;
    `}
    {...props}
  />
);

export default PageTitle;
