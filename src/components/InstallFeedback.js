import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Surface,
  Button,
  Icon,
  CreateIssueButton,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';
import { isValidEmail } from '../utils/isValidEmail';

const InstallFeedback = () => {
  const [clicked, setClicked] = useState(false); //feedbackType
  const [userComments, setUserComments] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tessen = useTessen();

  const isCommentBoxEmpty = (comment) => {
    return comment === null || comment === '';
  };

  const handleClick = () => {
    setClicked(true);
    tessen.track({
      eventName: 'installFeedbackClick',
      path: location.pathname,
    });
  };

  const handleSubmit = async () => {
    setFormSubmitted(true);
    setClicked(false);
    // tessen.track({
    //   eventName: 'installFeedbackSubmitted',
    //   path: location.pathname,
    //   userEmail,
    //   userComments,
    // });
  };

  return (
    <Surface
      base={Surface.BASE.PRIMARY}
      css={css`
        padding: 2rem;
        margin-bottom: 2rem;
        border: 1px solid #afe2e3;
        background-color: rgba(175, 226, 227, 0.05);
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
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
              margin-bottom: 0.5rem;
            `}
          >
            While you wait for your data to come in...
          </h2>
          <p
            css={css`
              font-size: 1rem;
            `}
          >
            Did this doc help you install? How can we do this better?
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
            onClick={() => handleClick()}
            css={css`
              font-size: 1.25rem;
              color: #0095a9;
              border: 1px solid #0095a9;
              border-radius: 0.5rem;
              padding: 1rem 2rem;
              margin-right: 0.5rem;

              svg {
                transition: color 200ms;
              }

              &:hover {
                color: var(--secondary-text-color);
                transition: color 200ms;
                svg {
                  color: var(--secondary-text-color);
                  transition: color 200ms;
                }
              }
            `}
          >
            Leave comment
            <Icon
              size="1.25rem"
              name="fe-pen-tool"
              css={css`
                color: #0095a9;
                margin-left: 0.75rem;
              `}
            />
          </Button>
        </div>
      </div>

      <div
        css={css`
          margin-top: 2rem;
          display: flex;
          flex-direction: row;
          grid-row-gap: 2rem;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          input,
          textarea {
            &::placeholder {
              opacity: 50%;
            }
            .dark-mode & {
              &::placeholder {
                color: #00586f;
              }
              background-color: #e7f6f6;
            }
          }
          div {
            width: 100%;
            display: flex;
            @media screen and (max-width: 1500px) {
              flex-direction: column;
            }
          }
          p {
            width: 30%;
          }
          @media screen and (max-width: 1500px) {
            flex-direction: column;
            p,
            input,
            textarea {
              width: 100%;
            }

            div {
              margin: auto;
            }
          }
        `}
      >
        <div>
          <p>Comment</p>
          <textarea
            value={userComments}
            maxLength="30000"
            onChange={(e) => {
              setUserComments(e.target.value);
              setShouldSubmit(!isCommentBoxEmpty(e.target.value));
            }}
            css={css`
              padding: 0.5rem;
              height: 100px;
              width: 60%;
              border-radius: 4px;
              border: 1px solid;
            `}
          />
        </div>
        <div>
          <p>Your email (optional)</p>
          <input
            value={userEmail}
            placeholder="datanerd@example.com"
            onChange={(e) => {
              setUserEmail(e.target.value);
              setShouldSubmit(
                isValidEmail(e.target.value) || e.target.value.length === 0
              );
            }}
            css={css`
              padding: 0.5rem;
              border-radius: 4px;
              border: 1px solid;
              margin-right: auto;
              width: 30%;
            `}
          />
          {userEmail && !isValidEmail(userEmail) && (
            <p
              css={css`
                // using && here to increase specificity over the p styling in the section above
                && {
                  font-size: 1rem;
                  color: var(--attention-notification-critical);
                  margin: auto auto auto 0;
                }
              `}
            >
              Please provide a valid email
            </p>
          )}
        </div>
        <div css={css``}>
          <Button
            variant={Button.VARIANT.NORMAL}
            size={Button.SIZE.LARGE}
            onClick={handleSubmit}
            disabled={!shouldSubmit}
            css={css`
              font-size: 1.25rem;
              margin: 0.5rem auto 0;
              border-radius: 0.5rem;
              padding: 1rem 2rem;
              height: 3rem;
              background: #00586f;
              color: var(--system-text-primary-dark);
              &:hover {
                background: #0095a9;
              }
              .dark-mode &:hover {
                color: var(--system-text-primary-dark);
              }
              &:disabled,
              .dark-mode &:disabled {
                cursor: not-allowed;
                background: var(--system-text-primary-light);
              }
            `}
          >
            Submit comment
          </Button>
        </div>
      </div>
    </Surface>
  );
};

// const FeedbackResponse = ({ feedbackType }) => {
//   const feedbackText =
//     feedbackType === 'Positive' ? 'Great!' : `We're sorry to hear that`;

//   const feedbackStyles =
//     feedbackType === 'Positive'
//       ? {
//           backgroundColor: '#1dcad3',
//           headingTextColor: '#0d374a',
//           secondaryTextColor: '#000000',
//           hoverButtonColor: '#000000',
//         }
//       : {
//           backgroundColor: '#0d374a',
//           headingTextColor: '#ffffff',
//           secondaryTextColor: '#ffffff',
//           hoverButtonColor: '#ffffff',
//         };

//   const callToActionText =
//     feedbackType === 'Positive'
//       ? `Any suggestions for how to make it even better?`
//       : `We'd love to hear what went wrong so we can fix it.`;

//   return (
//     <Surface
//       base={Surface.BASE.PRIMARY}
//       css={css`
//         padding: 2rem;
//         margin-bottom: 2rem;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         border: 1px solid ${feedbackStyles.backgroundColor};
//         background-color: ${feedbackStyles.backgroundColor};
//       `}
//     >
//       <Icon
//         size="50px"
//         name={`fe-thumbs${feedbackType === 'Positive' ? 'up' : 'down'}`}
//         css={css`
//           color: #ffffff;
//         `}
//       />
//       <div
//         css={css`
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           margin-left: 2rem;
//           margin-right: 2rem;
//         `}
//       >
//         <h2
//           css={css`
//             color: ${feedbackStyles.headingTextColor};
//             margin-bottom: 0;
//           `}
//         >
//           {feedbackText}
//         </h2>
//         <p
//           css={css`
//             color: ${feedbackStyles.secondaryTextColor};
//             margin-bottom: 0.5rem;
//             font-size: 1rem;
//           `}
//         >
//           {callToActionText}
//         </p>
//       </div>
//       <CreateIssueButton
//         variant="outline"
//         css={css`
//           color: ${feedbackStyles.secondaryTextColor};
//           border: 1px solid ${feedbackStyles.secondaryTextColor};
//           &:hover {
//             color: ${feedbackStyles.hoverButtonColor};
//             border: 1px solid ${feedbackStyles.hoverButtonColor};
//           }
//         `}
//       />
//     </Surface>
//   );
// };

export default InstallFeedback;
