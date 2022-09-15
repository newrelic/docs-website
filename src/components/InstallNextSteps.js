import React from 'react';
import { css } from '@emotion/react';
import { Surface, Button, Link } from '@newrelic/gatsby-theme-newrelic';
import InstallFeedback from './InstallFeedback';

import MDXContainer from './MDXContainer';

const InstallNextSteps = ({ mdx, className }) => {
  const { body, frontmatter } = mdx;
  const { troubleshootingLink } = frontmatter;
  return (
    <div className={className}>
      <InstallFeedback />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 2rem;

          @media screen and (max-width: 1000px) {
            flex-direction: column;
          }
        `}
      >
        <Surface
          css={css`
            padding: 2rem;
            flex-grow: 1;
            border: 1px solid #afe2e3;
          `}
          base={Surface.BASE.PRIMARY}
        >
          <h3>{frontmatter.headingText}</h3>
          <MDXContainer body={body} />
        </Surface>
        <Surface
          css={css`
            padding: 2rem;
            flex-grow: 1;
            color: var(--color-white);
            background-color: var(--attention-notification-announcement);
          `}
          base={Surface.BASE.PRIMARY}
        >
          <h3
            css={css`
              color: var(--color-white);
            `}
          >
            Still not seeing data?
          </h3>
          <p>Follow our troubleshooting steps</p>
          <Button
            css={css`
              background-color: var(--system-background-surface-1-light);
              color: var(--color-black);
              &:hover {
                color: var(--color-black);
              }
            `}
            variant={Button.VARIANT.OUTLINE}
            as={Link}
            to={troubleshootingLink}
          >
            Start troubleshooting.
          </Button>
        </Surface>
      </div>
    </div>
  );
};

export default InstallNextSteps;
