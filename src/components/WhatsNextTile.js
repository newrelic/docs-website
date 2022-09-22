import React from 'react';
import { css } from '@emotion/react';
import { Surface } from '@newrelic/gatsby-theme-newrelic';

const WhatsNextTile = ({ children, title, alignment }) => {
  return (
    <Surface
      base={Surface.BASE.PRIMARY}
      css={css`
        border: 1px solid var(--brand-button-primary-accent);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: ${alignment === 'center' ? 'center' : 'flex-start'};
        align-items: ${alignment === 'center' ? 'center' : 'flex-start'};
      `}
    >
      <div>
        {title && (
          <>
            <h2
              css={css`
                padding: 1rem 1.5rem;
                margin: 0;
              `}
            >
              {title}
            </h2>
            <hr
              css={css`
                border-bottom: 1px solid var(--brand-button-primary-accent);
                margin: 0;
                padding: 0;
              `}
            />
          </>
        )}
        <div
          css={css`
            padding: 1.5rem;
          `}
        >
          {children}
        </div>
      </div>
    </Surface>
  );
};

export default WhatsNextTile;
