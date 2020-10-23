import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import SkewedContainer from '../components/SkewedContainer';
import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';

const NotFoundPage = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
      `}
    >
      <GlobalHeader />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        `}
      >
        <SkewedContainer
          css={css`
            font-size: 1.125rem;
            padding: 8rem 0;
          `}
        >
          <h1
            css={css`
              font-family: var(--secondary-font-family);
              font-size: 9rem;
              font-weight: normal;
              line-height: 1;
            `}
          >
            404
          </h1>
          <p>
            The URL you entered may be broken, or the page has been removed.{' '}
            <Link to="/">Go back to the home page</Link>.
          </p>
        </SkewedContainer>
      </div>
    </div>
  );
};

export default NotFoundPage;
