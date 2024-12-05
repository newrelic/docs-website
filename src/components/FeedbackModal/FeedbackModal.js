import React, { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import shuffle from 'lodash/shuffle';
import {
  Button,
  Icon,
  Portal,
  useLocale,
  useTranslation,
  addPageAction,
} from '@newrelic/gatsby-theme-newrelic';
import RecaptchaFooter from '@newrelic/gatsby-theme-newrelic/src/components/SignupModal/RecaptchaFooter';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import Agreeance from './Agreeance';
import NumberRater from './NumberRater';
import { SUPRQ_QUESTIONS } from '../../utils/constants';

const FORM_VERSION = 1;
const questions = shuffle(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']);
// 1/10 chance to see the modal
const nat20 = Math.ceil(Math.random() * 10) === 10;
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
      .execute('6Lehf-4oAAAAAK-sCeVSRUrRQfImJdwgc2pPkOwZ', {
        action: 'surveyFeedback',
      })
      .then(resolve, reject);
  });
};

const FeedbackModal = ({ onClose }) => {
  const SUPRQ_SCORE = {
    'strongly-disagree': 1,
    'somewhat-disagree': 2,
    neutral: 3,
    'somewhat-agree': 4,
    'strongly-agree': 5,
  };
  const surveyDismissed = Cookies.get('surveyDismissed') === 'true';
  const hadChanceToShow = Cookies.get('surveyHadChanceToShow') === 'true';
  const shouldShow = useRef(nat20 && !hadChanceToShow && !surveyDismissed);
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const advance = () => setStep((s) => s + 1);
  const [guid] = useState(uuidv4());

  useEffect(() => {
    if (shouldShow.current) {
      addPageAction({
        eventName: 'surveyDisplayed',
        category: 'SurveyFeedback',
        formVersion: FORM_VERSION,
      });
    }
    Cookies.set('surveyHadChanceToShow', 'true', { expires: 1 });
  }, [surveyDismissed]);

  const setDismissedCookieAndClose = () => {
    onClose();
    Cookies.set('surveyDismissed', 'true', { expires: 90 });
  };

  const submitNpsScore = async (score) => {
    addPageAction({
      eventName: 'npsScoreSubmitted',
      category: 'SurveyFeedback',
      responseId: guid,
      response: score,
      formVersion: FORM_VERSION,
    });
    await recaptchaReady();
    const recaptchaToken = await generateRecaptchaToken();
    const npsSubmission = {
      responseId: guid,
      response: score,
      formVersion: FORM_VERSION,
      pageUrl: location.href,
      locale: locale.locale,
      recaptchaToken,
      type: 'nps',
    };
    fetch(
      'https://docs-user-feedback-service.newrelic-external.com/survey-feedback',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(npsSubmission),
      }
    );
    advance();
  };

  const submitSuprQ = async (responseObj) => {
    const responses = Object.entries(responseObj);
    const recaptchaToken = await generateRecaptchaToken();
    const suprQSubmission = {
      responseId: guid,
      formVersion: FORM_VERSION,
      pageUrl: location.href,
      locale: locale.locale,
      responses: responses.map(([questionId, answer]) => ({
        suprQuestion: SUPRQ_QUESTIONS[questionId],
        response: answer,
        score: SUPRQ_SCORE[answer],
      })),
      recaptchaToken,
      type: 'suprQ',
    };
    fetch(
      'https://docs-user-feedback-service.newrelic-external.com/survey-feedback',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(suprQSubmission),
      }
    );
    responses.forEach((response) => {
      const [questionId, answer] = response;
      addPageAction({
        eventName: 'suprQSubmitted',
        category: 'SurveyFeedback',
        responseId: guid,
        suprQuestion: SUPRQ_QUESTIONS[questionId],
        response: answer,
        score: SUPRQ_SCORE[answer],
        formVersion: FORM_VERSION,
      });
    });
    setShowThankYou(true);
    const timer = setTimeout(() => {
      setDismissedCookieAndClose();
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    !surveyDismissed &&
    shouldShow.current && (
      <Portal
        initializer={(node) => {
          if (node) {
            node.style.position = 'fixed';
            node.style.bottom = '2rem';
            node.style.right = '1.5rem';
            node.style.zIndex = 10;
          }
        }}
      >
        <Container>
          {step === 0 && <NpsScore onSubmit={submitNpsScore} />}
          {step === 1 && !showThankYou && <SuprQ onSubmit={submitSuprQ} />}
          {showThankYou && <ThankYou />}

          <CloseButton
            aria-label="Close"
            onClick={() => {
              addPageAction({
                eventName: 'surveyClosed',
                category: 'SurveyFeedback',
                formVersion: FORM_VERSION,
                step,
              });
              setDismissedCookieAndClose();
            }}
          >
            <Icon name="fe-x" size="1.5rem" />
          </CloseButton>
          {!showThankYou && <RecaptchaFooter />}
        </Container>
      </Portal>
    )
  );
};

const NpsScore = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('strings.surveyModal.npsIntro')}</Title>
      <NumberRater onSelect={onSubmit} />
    </>
  );
};

// how many questions to display at once.
const CHUNK_SIZE = 2;
const SuprQ = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  const numChunks = questions.length / CHUNK_SIZE;
  const isFinalStep = step + 1 === questions.length / CHUNK_SIZE;
  const buttonText = isFinalStep ? 'Submit' : 'Next';
  const currentQuestions = questions.slice(
    step * CHUNK_SIZE,
    step * CHUNK_SIZE + CHUNK_SIZE
  );
  const canContinue = currentQuestions.every(
    (questionId) => questionId in responses
  );

  const advance = () => {
    if (isFinalStep) {
      onSubmit(responses);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <>
      <Title>{t('strings.surveyModal.suprQ.intro')}</Title>
      {currentQuestions.map((questionId) => (
        <Agreeance
          id={questionId}
          key={questionId}
          onChange={(response) =>
            setResponses((responses) => ({
              ...responses,
              [questionId]: response,
            }))
          }
          statement={t(`strings.surveyModal.suprQ.${questionId}`)}
        />
      ))}
      <Steps>
        {step + 1} of {numChunks}
      </Steps>
      <SubmitButton disabled={!canContinue} onClick={advance} variant="primary">
        {buttonText}
      </SubmitButton>
    </>
  );
};

const ThankYou = () => (
  <Title
    css={css`
      margin: 0;
    `}
  >
    Thank you for the feedback! 🎉
  </Title>
);

const Container = styled.aside`
  align-items: center;
  background: var(--modal-background-color);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  width: max(550px, 30rem);
  border: 1px solid var(--divider-color);
  box-shadow: var(--shadow-3);

  & > fieldset,
  & > h1,
  & > textarea {
    grid-column: 1 / 3;
  }
  & > p {
    line-height: 1.4;
  }
`;

const CloseButton = styled.button`
  aspect-ratio: 1/1;
  border: 0;
  background: transparent;
  color: var(--primary-text-color);
  cursor: pointer;
  display: grid;
  padding: 16px;
  place-items: center;
  position: absolute;
  right: 0.6rem;
  top: 1rem;
`;

const Steps = styled.p`
  color: var(--primary-text-color);
  font-size: 1rem;
  margin: 0;
`;

const SubmitButton = styled(Button)`
  grid-column: 2;
  height: 2.1875rem;
  justify-self: end;
  width: 6.9375rem;
`;

const Title = styled.h1`
  color: var(--primary-text-color);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  /* this keeps the whole title on one line at smaller font sizes
   * and makes sure that at larger font sizes the second line has 
   * more than one word.
   */
  max-width: max(82%, 430px);
  .dark-mode & {
    color: var(--brand-button-primary-accent);
  }
`;

export default FeedbackModal;
