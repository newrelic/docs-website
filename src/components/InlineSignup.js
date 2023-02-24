import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import cx from 'classnames';

import {
  Button,
  Trans,
  useLoggedIn,
  useTessen,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import { createAccountRequest } from '@newrelic/gatsby-theme-newrelic/src/components/SignupModal/signup';
import RecaptchaFooter from '@newrelic/gatsby-theme-newrelic/src/components/SignupModal/RecaptchaFooter';
import HideWhenEmbedded from './HideWhenEmbedded';

const MOBILE_BREAKPOINT = '600px';

/**
 * [VSU] This component allows users to sign up inline in a doc.
 * It only renders if the current user is not logged in.
 */
const InlineSignup = () => {
  const [error, setError] = useState(null);
  const tessen = useTessen();
  const { t } = useTranslation();
  const { loggedIn } = useLoggedIn();
  const submitEvent = {
    category: 'InlineSignup',
    eventName: 'attemptedSignup',
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, name } = Object.fromEntries(new FormData(e.target));
    const organizationId = await createAccountRequest(
      { email, name },
      tessen,
      submitEvent
    );

    if (organizationId) {
      const redirectUrl = `https://newrelic.com/thank-you?org=${organizationId}&standalone=true`;
      window.location.assign(redirectUrl);
    } else {
      setError(true);
    }
  };

  if (loggedIn == null || loggedIn) return null;

  return (
    <Form onSubmit={onSubmit}>
      <CTAText>{t('inlineSignup.ctaText')}</CTAText>

      <InputContainer>
        <label className="screenreader-only" htmlFor="inline-signup-name">
          {t('inlineSignup.nameLabel')}
        </label>
        <Input
          className="first"
          id="inline-signup-name"
          name="name"
          // this basically says that a name has to have atleast one letter.
          // numbers are allowed, for a name like Charles the 3rd.
          // i used `\p{Letter}` here instead of `[a-zA-Z]`
          // to allow Unicode characters in names, like Björk, or 준영.
          pattern=".*\p{Letter}+.*"
          placeholder={t('inlineSignup.nameLabel')}
          required
          type="text"
        />
        {/* for the sake of not complicating the markup, i'm using this
         * for both the input validation hint and the error text if
         * the account creation fails.
         */}
        <ValidationHint className={cx({ error })}>
          {error
            ? t('inlineSignup.submitError')
            : t('inlineSignup.nameValidationHint')}
        </ValidationHint>
      </InputContainer>
      <InputContainer>
        <label className="screenreader-only" htmlFor="inline-signup-email">
          {t('inlineSignup.emailLabel')}
        </label>
        <Input
          className="last"
          id="inline-signup-email"
          name="email"
          pattern=".+@.+\..+"
          placeholder={t('inlineSignup.emailLabel')}
          required
          type="email"
        />
        <ValidationHint>{t('inlineSignup.emailValidationHint')}</ValidationHint>
      </InputContainer>

      <CTAButton type="submit" variant={Button.VARIANT.PRIMARY}>
        {t('inlineSignup.ctaButton')}
      </CTAButton>

      <Terms>
        <Trans i18nKey="inlineSignup.terms">
          100 GB + 1 user free. Forever. No credit card required.
          <br />
          By signing up you're agreeing to{' '}
          <a href="https://newrelic.com/termsandconditions/terms">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="https://newrelic.com/termsandconditions/privacy">
            Services Privacy Notice.
          </a>
        </Trans>
      </Terms>
      <RecaptchaFooter
        css={css`
          grid-column: 1 / 4;
        `}
      />
    </Form>
  );
};

const CTAButton = styled(Button)`
  align-self: start;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 0.5rem;
  padding: 0.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 0;
  }
`;

const CTAText = styled.p`
  grid-column: 1 / 4;
  font-size: 1.125rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 0;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 37.5% 37.5% 25%;
  margin-bottom: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    gap: 1rem;
    margin-left: 0;
  }
`;

const ValidationHint = styled.p`
  align-self: start;
  font-size: 0.75rem;
  justify-self: start;
  line-height: 1.4;
  padding-left: 0.25rem;
  visibility: hidden;

  &.error {
    color: var(--color-red);
    visibility: visible;
  }
`;

const Input = styled.input`
  background: var(--secondary-background-color);
  border: 1px solid var(--primary-text-color);
  color: var(--primary-text-color);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  width: 100%;

  &:focus-within {
    border-radius: 4px;
    outline: 2px solid rgba(0, 126, 138, 0.6);
    z-index: 1;
  }

  &.first {
    margin-right: -2px;
  }

  &.first:not(:focus-within) {
    border-radius: 4px 0px 0px 4px;
    border-right: 1px solid transparent;
  }

  &.last:not(:focus-within) {
    border-radius: 0px 4px 4px 0px;
  }

  &:invalid:not(:focus-within):not(:placeholder-shown) + ${ValidationHint} {
    visibility: visible;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    &.first:not(:focus-within),
    &.last:not(:focus-within) {
      border: 1px solid var(--primary-text-color);
      border-radius: 4px;
    }
  }
`;

const InputContainer = styled.div`
  display: grid;
  gap: 0.25rem 0;
  grid-template-rows: auto 1fr;
  place-items: center;
  position: relative;

  &:first-of-type {
    margin-left: 0.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-column: 1 / 4;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const Terms = styled.p`
  color: var(--system-text-muted-light);
  grid-column: 1 / 4;
  font-size: 0.875rem;
  line-height: 1.25;
  margin: 0.25rem 0 0.5rem;

  a {
    color: currentColor;
  }
`;

const WrappedInlineSignup = () => (
  <HideWhenEmbedded>
    <InlineSignup />
  </HideWhenEmbedded>
);

export default WrappedInlineSignup;
