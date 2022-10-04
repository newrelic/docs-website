import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Surface,
  Button,
  Icon,
  CreateIssueButton,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';

const InstallFeedback = () => {
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
        @media screen and (max-width: 1500px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          margin-right: 10px;

          @media screen and (max-width: 1500px) {
            margin-bottom: 10px;
          }
        `}
      >
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
          Did this doc help you install?
        </p>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <Button
          variant={Button.VARIANT.LINK}
          onClick={() => handleClick('Positive')}
          css={css`
            color: var(--primary-text-color);
            border: 1px solid #0095a9;
            border-radius: 0.5rem 0 0 0.5rem;
            border-right-width: 0;
            padding: 1rem 2rem;

            svg {
              transition: color 200ms;
            }

            &:hover {
              svg {
                color: var(--secondary-text-color);
                transition: color 200ms;
              }
            }
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
            border: 1px solid #0095a9;
            padding: 1rem 2rem;
            border-radius: 0 0.5rem 0.5rem 0;

            svg {
              transition: color 200ms;
            }

            &:hover {
              svg {
                color: var(--secondary-text-color);
                transition: color 200ms;
              }
            }
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
    feedbackType === 'Positive' ? 'Great!' : `We're sorry to hear that`;

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

  const callToActionText =
    feedbackType === 'Positive'
      ? `Any suggestions for how to make it even better?`
      : `We'd love to hear what went wrong so we can fix it.`;

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
          {callToActionText}
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

export default InstallFeedback;
