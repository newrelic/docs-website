import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import shuffle from 'lodash/shuffle';
import {
  Button,
  Icon,
  Portal,
  useLocale,
  useTranslation,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';
import RecaptchaFooter from '@newrelic/gatsby-theme-newrelic/src/components/SignupModal/RecaptchaFooter';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import Agreeance from './Agreeance';
import NumberRater from './NumberRater';
import { SUPRQ_QUESTIONS } from '../../utils/constants';

const FORM_VERSION = 1;

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
      .execute(window._nr_survey.reCaptchaToken, {
        action: 'surveyFeedback',
      })
      .then(resolve, reject);
  });
};

const FeedbackModal = ({ onClose }) => {
  const surveyDismissed = Cookies.get('surveyDismissed') === 'true';
  const tessen = useTessen();
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const advance = () => setStep((s) => s + 1);
  const [guid] = useState(uuidv4());

  const setCookieAndClose = () => {
    Cookies.set('surveyDismissed', 'true', { expires: 90 });
    onClose();
  };

  const submitNpsScore = async (score) => {
    tessen.track({
      eventName: 'npsScoreSubmitted',
      category: 'SurveyFeedback',
      responseId: guid,
      response: score,
      formVersion: FORM_VERSION,
    });
    // const npsSubmission = {
    //   responseId: guid,
    //   response: score,
    //   formVersion: FORM_VERSION,
    //   pageUrl: location.href,
    //   locale,
    //   recaptchaToken,
    //   type: 'nps',
    // };
    // await recaptchaReady();
    // const recaptchaToken = await generateRecaptchaToken();
    // fetch(
    //   'https://docs-user-feedback-service.newrelic-external.com/survey-feedback',
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(npsSubmission),
    //   }
    // );
    // TODO: submit to survey service
    // add locale as well (built into tessen)
    advance();
  };

  const submitSuprQ = async (responseObj) => {
    const responses = Object.entries(responseObj);
    responses.forEach((response) => {
      const [questionId, answer] = response;
      tessen.track({
        eventName: 'suprQSubmitted',
        category: 'SurveyFeedback',
        responseId: guid,
        question: SUPRQ_QUESTIONS[questionId],
        response: answer,
        formVersion: FORM_VERSION,
      });
    });

    // TODO: submit to survey service
    // add locale as well (built into tessen)
    advance();
  };

  const submitFreetext = async (text) => {
    tessen.track({
      eventName: 'freeTextSubmitted',
      category: 'SurveyFeedback',
      responseId: guid,
      response: text,
      formVersion: FORM_VERSION,
    });
    // TODO: submit to survey service
    // add locale as well (built into tessen)
    setCookieAndClose();
  };

  return (
    !surveyDismissed && (
      <Portal
        initializer={(node) => {
          if (node) {
            node.style.position = 'fixed';
            node.style.bottom = '2rem';
            node.style.right = '1.5rem';
          }
        }}
      >
        <Container>
          {step === 0 && <NpsScore onSubmit={submitNpsScore} />}
          {step === 1 && <SuprQ onSubmit={submitSuprQ} />}
          {step === 2 && <Freetext onSubmit={submitFreetext} />}

          <CloseButton aria-label="Close" onClick={setCookieAndClose}>
            <Icon name="fe-x" size="1rem" />
          </CloseButton>
          <RecaptchaFooter />
        </Container>
      </Portal>
    )
  );
};

const NpsScore = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('surveyModal.npsIntro')}</Title>
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
      <Title>{t('surveyModal.suprQ.intro')}</Title>
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
          statement={t(`surveyModal.suprQ.${questionId}`)}
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

const Freetext = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('surveyModal.freeTextIntro')}</Title>
      <p
        css={css`
          font-size: 1.125rem;
          grid-column: 1 / 3;
          max-width: 92%;
        `}
      >
        {t('surveyModal.freeTextQuestion')}
      </p>
      <textarea
        css={css`
          background: var(--primary-contrast-color);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--primary-text-color);
          font-size: 0.875rem;
          height: 10rem;
          margin-bottom: 40px;
          padding: 8px 12px;
          &:focus {
            outline: 2px solid rgba(255, 255, 255, 0.6);
          }
        `}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
        value={text}
      />
      <SubmitButton onClick={() => onSubmit(text)} variant="primary">
        Submit
      </SubmitButton>
    </>
  );
};

const questions = shuffle(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']);
const Container = styled.aside`
  align-items: center;
  background: var(--modal-background-color);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  width: max(550px, 30rem);
  border: 1px solid var(--divider-color);

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
  font-size: 2rem;
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
