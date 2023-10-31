import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import shuffle from 'lodash/shuffle';
import { Button, Icon, Portal } from '@newrelic/gatsby-theme-newrelic';

import Agreeance from './Agreeance';
import NumberRater from './NumberRater';

const FORM_VERSION = 1;
const FeedbackModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const advance = () => setStep((s) => s + 1);

  const submitNpsScore = (score) => {
    console.log('nps score:', score);
    // TODO: submit to tessen and survey service
    advance();
  };

  const submitSuprQ = (responses) => {
    console.log('responses:', responses);
    // TODO: submit to tessen and survey service
    advance();
  };

  const submitFreetext = (text) => {
    console.log('freetext:', text);
    // TODO: submit to tessen and survey service
    onClose();
  };

  return (
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

        <CloseButton aria-label="Close" onClick={onClose}>
          <Icon name="fe-x" size="1rem" />
        </CloseButton>
      </Container>
    </Portal>
  );
};

const NpsScore = ({ onSubmit }) => (
  <>
    <Title>How likely are you to recommend our docs site?</Title>
    <NumberRater onSelect={onSubmit} />
  </>
);

// how many questions to display at once.
const CHUNK_SIZE = 2;
const SuprQ = ({ onSubmit }) => {
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
    (question) => question.id in responses
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
      <Title>
        Please rate how much you agree or disagree with the following
        statements:
      </Title>
      {currentQuestions.map((question) => (
        <Agreeance
          id={question.id}
          key={question.id}
          onChange={(response) =>
            setResponses((responses) => ({
              ...responses,
              [question.id]: response,
            }))
          }
          statement={question.statement}
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
  return (
    <>
      <Title>Thanks for your feedback!</Title>
      <p
        css={css`
          font-size: 1.125rem;
          grid-column: 1 / 3;
          max-width: 92%;
        `}
      >
        Take a few more minutes to share your thoughts on how we can improve
      </p>
      <textarea
        css={css`
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fafbfb;
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

const questions = shuffle([
  {
    statement: 'The information on the docs site is credible.',
    id: 'q1',
  },
  {
    statement: "It's easy to navigate the docs site.",
    id: 'q2',
  },
  {
    statement: 'question 3',
    id: 'q3',
  },
  {
    statement: 'question 4',
    id: 'q4',
  },
  {
    statement: 'question 5',
    id: 'q5',
  },
  {
    statement: 'question 6',
    id: 'q6',
  },
]);

const Container = styled.aside`
  align-items: center;
  background: #1d252c;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  width: max(550px, 30rem);

  @media (prefers-color-scheme: dark) {
    background: #293338;
    border: 1px solid var(--system-background-selected-low-contrast-light);
  }

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
  color: #fff;
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
  color: #fff;
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
  color: var(--brand-button-primary-accent);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  /* this keeps the whole title on one line at smaller font sizes
   * and makes sure that at larger font sizes the second line has 
   * more than one word.
   */
  max-width: max(82%, 430px);
`;

export default FeedbackModal;
