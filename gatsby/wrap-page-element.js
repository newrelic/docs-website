import React from 'react';
import { Global, css } from '@emotion/react';

const wrapPageElement = ({ element }) => (
  <>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
      `}
    />
    {element}
  </>
);

export default wrapPageElement;
