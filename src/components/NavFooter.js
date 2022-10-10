import React from 'react';
import { css } from '@emotion/react';
import { ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';

const NavFooter = () => {
  return (
    <div
      css={css`
        align-items: center;
        background: #afe2e3;
        display: flex;
        height: 72px;
        justify-content: center;
        width: 100%;
      `}
    >
      <ExternalLink
        to="https://newrelic.com/instant-observability"
        css={css`
          color: #00586f;
          font-size: 18px;
          line-height: 24px;
          position: relative;
          text-underline-offset: 10px;
        `}
      >
        See our 470+ quickstarts
        <Icon
          css={css`
            position: absolute;
            top: 4px;

            && path {
              display: none;
            }
          `}
          name="fe-external-link"
        />
      </ExternalLink>
    </div>
  );
};

export default NavFooter;
