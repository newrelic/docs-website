import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import TileLogo from './TileLogo';

const TileOption = ({ displayName, value, logo, onChange, isSelected }) => {
  return (
    <Button
      role="option"
      aria-selected={isSelected}
      onClick={() => onChange(value)}
      variant={Button.VARIANT.OUTLINE}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0.5rem;
        color: var(--system-text-primary-light);
        border: ${isSelected
          ? '1.25px solid var(--attention-notification-info)'
          : ' 1px solid #3a444b'};
        background: var(--system-background-app-light);

        .light-mode & {
          border: ${isSelected
            ? '1.25px solid var(--attention-notification-info)'
            : '1px solid var(--system-border-strong-light)'};
        }
      `}
    >
      {logo && (
        <TileLogo
          name={logo}
          css={css`
            margin-bottom: 0;
            img {
              width: 2rem;
            }
          `}
        />
      )}
      <div
        css={css`
          font-size: 0.875rem;
        `}
      >
        {displayName}
      </div>
    </Button>
  );
};

TileOption.propTypes = {
  displayName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  logo: PropTypes.string,
  onChange: PropTypes.func,
};

export default TileOption;
