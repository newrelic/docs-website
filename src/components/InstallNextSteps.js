import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Surface,
  Button,
  Icon,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';

import MDXContainer from './MDXContainer';
// {clicked ? (
//   <h6
//     css={css`
//       padding: 0.3rem;
//     `}
//   >
//     Thank you for your feedback!
//   </h6>
// ) : (
//   <>
//     {' '}
//     <h6
//       css={css`
//         margin-bottom: 0;
//       `}
//     >
//       {t('feedback.question')}
//     </h6>
//
//     </>
// );

const SimpleFeedback = () => {
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
    <>
      {clicked ? (
        <h4>Thank you for your feedback!</h4>
      ) : (
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 0.25rem;
            @supports not (gap: 0.5rem) {
              a:first-of-type {
                margin-right: 0.25rem;
              }
            }
          `}
        >
          <Button
            variant={Button.VARIANT.LINK}
            onClick={() => handleClick('Positive')}
            css={css`
              color: var(--primary-text-color);
              &:hover {
                color: var(--secondary-text-color);
              }
            `}
          >
            <Icon
              size="0.75rem"
              name="fe-thumbsup"
              css={css`
                margin-right: 0.5rem;
                color: var(--primary-text-color);
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
            `}
          >
            <Icon
              size="0.75rem"
              name="fe-thumbsdown"
              css={css`
                margin-right: 0.5rem;
                color: var(--primary-text-color);
              `}
            />
          </Button>
        </div>
      )}
    </>
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
        `}
        base={Surface.BASE.PRIMARY}
      >
        <h3>While you wait for your data to come in...</h3>
        <SimpleFeedback />
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
