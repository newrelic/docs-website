import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const Logo = ({ className }) => {
  return (
    <div
      className={className}
      css={css`
        display: inline-flex;
        align-items: center;
        font-size: 1.5rem;
      `}
    >
      <Icon
        name={Icon.TYPE.FILE_TEXT}
        size="1.25em"
        css={css`
          stroke: var(--logo-icon-color, var(--color-brand-500));
          stroke-width: 1.5;
          margin-right: 0.5rem;

          .dark-mode & {
            stroke: var(--logo-icon-color, var(--color-brand-300));
          }
        `}
      />
      <span
        css={css`
          font-weight: 600;
          color: var(--logo-text-color, var(--heading-text-color));
        `}
      >
        Docs
      </span>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
