import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useLocation } from '@reach/router';

import {
  Surface,
  Button,
  Icon,
  addPageAction,
  useTranslation,
  isValidEmail,
} from '@newrelic/gatsby-theme-newrelic';
import RecaptchaFooter from '@newrelic/gatsby-theme-newrelic/src/components/SignupModal/RecaptchaFooter';

const InstallFeedback = () => {
  const [commentButtonClicked, setCommentButtonClicked] = useState(false);
  const [userComments, setUserComments] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { t } = useTranslation();

  const isCommentBoxEmpty = (comment) => {
    return comment === null || comment === '';
  };

  const handleClick = () => {
    setCommentButtonClicked(true);
    addPageAction({
      eventName: 'installFeedbackClick',
      category: 'LeaveAComment',
      path: location.pathname,
    });
  };

  const location = useLocation();
  const CAPTCHA_ACTION = 'userFeedback';

  const recaptchaReady = () => {
    return new Promise((resolve, reject) => {
      try {
        window.grecaptcha.ready(resolve);
      } catch (err) {
        reject(err);
      }
    });
  };

  const generateRecaptchaToken = () => {
    // turn the recaptcha thenable into an actual promise
    return new Promise((resolve, reject) => {
      window.grecaptcha
        .execute(window._nr_feedback.reCaptchaToken, {
          action: CAPTCHA_ACTION,
        })
        .then(resolve, reject);
    });
  };

  const handleSubmit = async () => {
    setFormSubmitted(true);
    setCommentButtonClicked(false);
    const title = location.pathname.split('/').slice(0, -1).pop();

    await recaptchaReady();
    const recaptchaToken = await generateRecaptchaToken();
    addPageAction({
      eventName: 'installFeedbackSubmitted',
      category: 'Comment',
      path: location.pathname,
      userEmail,
      userComments,
    });
    const jiraSubmission = {
      title: `Install page ${title}`,
      description: userComments,
      formType: 'userInstallFeedback',
      pageUrl: location.href,
      email: userEmail,
      recaptchaToken,
    };
    fetch(
      'https://docs-user-feedback-service.newrelic-external.com/user-feedback-service',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jiraSubmission),
      }
    );
  };

  return (
    <Surface
      base={Surface.BASE.PRIMARY}
      css={css`
        padding: 2rem;
        margin: 1rem;
        margin-bottom: 2rem;
        border: none;
        background: var(--system-text-primary-dark);
        .dark-mode && {
          background: var(--erno-black);
        }
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

              @media screen and (max-width: 1450px) {
                flex-wrap: wrap;
                justify-content: center;
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
                  font-weight: 500;
                  margin-bottom: 0;
                  text-align: center;
                  color: var(--primary-text-color);
                `}
              >
                {t('strings.installFeedback.question')}
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
                    font-weight: 500;
                    color: var(--system-text-primary-dark);
                    background: var(--product-blue);
                    border-radius: 4px;
                    padding: 1rem 2rem;
                    margin-right: 0.5rem;
                    @media screen and (max-width: 1500px) {
                      margin-top: 1rem;
                    }

                    @media screen and (max-width: 1450px) {
                      margin-right: 0;
                    }

                    @media screen and (max-width: 820px) {
                      font-size: 1rem;
                      padding: 1rem;
                    }

                    @media screen and (max-width: 420px) {
                      padding-left: 0.25rem;
                      padding-right: 0.25rem;
                    }

                    svg {
                      fill: var(--system-text-primary-dark);
                    }

                    &:hover {
                      background: var(--product-blue-hover);
                    }
                  `}
                >
                  {t('strings.installFeedback.commentButton')}
                  <Icon
                    size="1.5rem"
                    name="fe-contact-us"
                    css={css`
                      fill: #00586f;
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
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                input,
                textarea {
                  &::placeholder {
                    opacity: 50%;
                  }
                  .dark-mode & {
                    &::placeholder {
                      color: #1d252c;
                    }
                  }
                }
                div {
                  width: 100%;
                  display: flex;
                  @media screen and (max-width: 1500px) {
                    flex-direction: column;
                  }
                }
                flex-direction: column;
                p {
                  color: var(--primary-text-color);
                }

                p,
                input,
                textarea {
                  width: 100%;
                }
              `}
            >
              <p>{t('strings.installFeedback.comment')}</p>
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
                  margin-bottom: 1rem;
                `}
              />
              <p>{t('strings.installFeedback.email')}</p>
              <input
                value={userEmail}
                placeholder="datanerd@example.com"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setShouldSubmit(
                    (isValidEmail(e.target.value) &&
                      !isCommentBoxEmpty(userComments)) ||
                      (e.target.value.length === 0 &&
                        !isCommentBoxEmpty(userComments))
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
              <p
                css={css`
                  margin-top: 0.75rem;
                  font-size: 0.75rem;
                  color: var(--secondary-text-color);
                  width: 50%;
                `}
              >
                {t('strings.installFeedback.emailDisclaimer')}
              </p>

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
                  {t('strings.installFeedback.validEmail')}
                </p>
              )}
              <div>
                <Button
                  variant={Button.VARIANT.NORMAL}
                  size={Button.SIZE.LARGE}
                  onClick={handleSubmit}
                  disabled={!shouldSubmit}
                  css={css`
                    font-size: 1.25rem;
                    margin: 0.5rem auto 0;
                    border-radius: 4px;
                    padding: 1rem 2rem;
                    height: 3rem;
                    background: var(--product-blue);
                    color: var(--system-text-primary-dark);
                    &:hover,
                    .dark-mode &:hover {
                      color: var(--system-text-primary-dark);
                      background: var(--product-blue-hover);
                    }

                    &:disabled,
                    .dark-mode &:disabled {
                      cursor: not-allowed;
                      background: var(--system-text-primary-light);
                    }
                  `}
                >
                  {t('strings.installFeedback.submitButton')}
                </Button>
              </div>
              <div
                css={css`
                  margin-top: 1.5rem;
                  p {
                    text-align: center;
                    margin: auto;
                    width: 100%;
                  }
                `}
              >
                <RecaptchaFooter />
              </div>
            </div>
          )}
        </>
      ) : (
        <p
          css={css`
            margin: auto;
            font-size: 1.5rem;
            color: #1d252c;
          `}
        >
          {t('strings.installFeedback.submitMessage')}
        </p>
      )}
    </Surface>
  );
};

export default InstallFeedback;
