import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Surface,
  Button,
  Icon,
  CreateIssueButton,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';

import MDXContainer from './MDXContainer';

const FeedbackSurface = () => {
  const [clicked, setClicked] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const tessen = useTessen();

  const handleClick = (feedbackType) => {
    setClicked(true);
    setFeedback(feedbackType);
    tessen.track({
      eventName: 'installFeedbackThumbClick',
      category: `${feedbackType}FeedbackClick`,
      path: location.pathname,
    });
  };

  return clicked ? (
    <FeedbackResponse feedbackType={feedback} />
  ) : (
    <Surface
      base={Surface.BASE.PRIMARY}
      css={css`
        padding: 2rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #afe2e3;
        background-color: rgba(175, 226, 227, 0.05);
      `}
    >
      <div>
        <h2
          css={css`
            margin-bottom: 0;
          `}
        >
          While you wait for your data to come in...
        </h2>
        <p
          css={css`
            font-size: 1rem;
          `}
        >
          Did this doc help make your installation a success?
        </p>
      </div>
      <div>
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
      </div>
    </Surface>
  );
};

const FeedbackResponse = ({ feedbackType }) => {
  const feedbackText =
    feedbackType === 'Positive' ? 'So glad to hear it!' : 'Sorry to hear that!';

  const feedbackStyles =
    feedbackType === 'Positive'
      ? {
          backgroundColor: '#1dcad3',
          headingTextColor: '#0d374a',
          secondaryTextColor: '#000000',
          hoverButtonColor: '#000000',
        }
      : {
          backgroundColor: '#0d374a',
          headingTextColor: '#ffffff',
          secondaryTextColor: '#ffffff',
          hoverButtonColor: '#ffffff',
        };

  return (
    <Surface
      base={Surface.BASE.PRIMARY}
      css={css`
        padding: 2rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid ${feedbackStyles.backgroundColor};
        background-color: ${feedbackStyles.backgroundColor};
      `}
    >
      <Icon
        size="50px"
        name={`fe-thumbs${feedbackType === 'Positive' ? 'up' : 'down'}`}
        css={css`
          color: #ffffff;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 2rem;
          margin-right: 2rem;
        `}
      >
        <h2
          css={css`
            color: ${feedbackStyles.headingTextColor};
            margin-bottom: 0;
          `}
        >
          {feedbackText}
        </h2>
        <p
          css={css`
            color: ${feedbackStyles.secondaryTextColor};
            margin-bottom: 0.5rem;
            font-size: 1rem;
          `}
        >
          Do you have a few minutes to let us know what you think?
        </p>
      </div>
      <CreateIssueButton
        variant="outline"
        css={css`
          color: ${feedbackStyles.secondaryTextColor};
          border: 1px solid ${feedbackStyles.secondaryTextColor};
          &:hover {
            color: ${feedbackStyles.hoverButtonColor};
            border: 1px solid ${feedbackStyles.hoverButtonColor};
          }
        `}
      />
    </Surface>
  );
};

const InstallNextSteps = ({ mdx, className }) => {
  const { body, frontmatter } = mdx;
  return (
    <div className={className}>
      <FeedbackSurface />
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
