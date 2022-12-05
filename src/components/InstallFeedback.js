import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Surface,
  Button,
  Icon,
  useTessen,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import { isValidEmail } from '../utils/isValidEmail';

const InstallFeedback = () => {
  const [commentButtonClicked, setCommentButtonClicked] = useState(false);
  const [userComments, setUserComments] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tessen = useTessen();
  const { t } = useTranslation();

  const isCommentBoxEmpty = (comment) => {
    return comment === null || comment === '';
  };

  const handleClick = () => {
    setCommentButtonClicked(true);
    tessen.track({
      eventName: 'installFeedbackClick',
      path: location.pathname,
    });
  };

  const handleSubmit = async () => {
    setFormSubmitted(true);
    setCommentButtonClicked(false);
  };

  return (
    <Surface
      base={Surface.BASE.PRIMARY}
      css={css`
        padding: 2rem;
        margin-bottom: 2rem;
        border: 1px solid #afe2e3;
        background-color: rgba(175, 226, 227, 0.1);
      `}
    >
      {!formSubmitted ? (
        <>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-start;
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
                  margin-bottom: 0;
                  text-align: center;
                `}
              >
                {t('installFeedback.question')}
              </h2>
            </div>
            {!commentButtonClicked && (
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
                      transition: fill 200ms;
                    }

                    &:hover {
                      color: var(--secondary-text-color);
                      transition: color 200ms;
                      svg {
                        fill: var(--secondary-text-color);
                        transition: fill 200ms;
                      }
                    }
                  `}
                >
                  {t('installFeedback.commentButton')}
                  <Icon
                    size="1.5rem"
                    name="fe-contact-us"
                    css={css`
                      fill: #0095a9;
                      stroke: none;
                      margin-left: 0.75rem;
                      position: relative;
                      top: 3px;
                    `}
                  />
                </Button>
              </div>
            )}
          </div>
          {commentButtonClicked && !formSubmitted && (
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
                <p>{t('installFeedback.comment')}</p>
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
                <p>{t('installFeedback.email')}</p>
                <input
                  value={userEmail}
                  placeholder="datanerd@example.com"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                    setShouldSubmit(
                      isValidEmail(e.target.value) ||
                        e.target.value.length === 0
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
                        margin: auto auto auto 0;
                        color: var(--attention-notification-critical);
                      }
                    `}
                  >
                    {t('installFeedback.validEmail')}
                  </p>
                )}
              </div>
              <div
                css={css`
                  margin-top: -1rem;
                  font-size: 0.75rem;
                  color: var(--secondary-text-color);
                  width: 50%;
                `}
              >
                {t('installFeedback.emailDisclaimer')}
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
                  {t('installFeedback.submitButton')}
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p
          css={css`
            margin: auto;
            font-size: 1.5rem;
          `}
        >
          {t('installFeedback.submitMessage')}
        </p>
      )}
    </Surface>
  );
};

export default InstallFeedback;
