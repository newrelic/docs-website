import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';

const NavFooter = ({ width }) => {
  return (
    <div
      css={css`
        align-items: center;
        background: #afe2e3;
        bottom: 0;
        display: flex;
        height: 72px;
        justify-content: center;
        left: 0;
        position: fixed;
        width: ${width};
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

NavFooter.propTypes = {
  width: PropTypes.string,
};

export default NavFooter;
