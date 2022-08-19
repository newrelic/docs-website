import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Surface,
  Button,
  Icon,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';

import MDXContainer from './MDXContainer';

const Feedback = () => {
  const [clicked, setClicked] = useState(false);
  const tessen = useTessen();

  const handleClick = (feedbackType) => {
    setClicked(true);
    tessen.track({
      eventName: 'feedbackThumbClick',
      category: `${feedbackType}FeedbackClick`,
      path: location.pathname,
    });
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
      `}
    >
      {clicked ? (
        <h4>Thank you for your feedback!</h4>
      ) : (
        <>
          <Button
            variant={Button.VARIANT.LINK}
            onClick={() => handleClick('Positive')}
            css={css`
              color: var(--primary-text-color);
              &:hover {
                color: var(--secondary-text-color);
              }
              border: 1px solid #0095a9;
              border-radius: 0.5rem 0 0 0.5rem;
              border-right-width: 0;
              padding: 1rem 2rem;
            `}
          >
            <Icon
              size="1.25rem"
              name="fe-thumbsup"
              css={css`
                margin-right: 0.5rem;
                color: #0095a9;
              `}
            />
          </Button>
          <Button
            variant={Button.VARIANT.LINK}
            onClick={() => handleClick('Negative')}
            css={css`
              color: var(--primary-text-color);
              &:hover {
                color: var(--secondary-text-color);
              }
              border: 1px solid #0095a9;
              padding: 1rem 2rem;
              border-radius: 0 0.5rem 0.5rem 0;
            `}
          >
            <Icon
              size="1.25rem"
              name="fe-thumbsdown"
              css={css`
                margin-right: 0.5rem;
                color: #0095a9;
              `}
            />
          </Button>
        </>
      )}
    </div>
  );
};

const InstallNextSteps = ({ mdx, className }) => {
  const { body, frontmatter } = mdx;
  return (
    <div className={className}>
      <Surface
        css={css`
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid #afe2e3;
          background-color: rgba(175, 226, 227, 0.05);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
        base={Surface.BASE.PRIMARY}
      >
        <div>
          <h3>While you wait for your data to come in...</h3>
          <p
            css={css`
              font-size: 1rem;
            `}
          >
            How would you rate your install experience?
          </p>
        </div>
        <Feedback />
      </Surface>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 2rem;
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
            `}
            variant={Button.VARIANT.OUTLINE}
          >
            Start troubleshooting.
          </Button>
        </Surface>
      </div>
    </div>
  );
};

export default InstallNextSteps;
