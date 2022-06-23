import React from 'react';
import { css } from '@emotion/react';
import {
  Button,
  Link,
  useTranslation,
  Trans,
} from '@newrelic/gatsby-theme-newrelic';
import bannerBackground from '../images/bannerBackground.svg';
import bannerBackgroundDark from '../images/bannerBackgroundDark.svg';

const HomepageBanner = () => {
  const bannerHeight = '250px';
  const mobileBreakpoint = '450px';
  const { t } = useTranslation();

  return (
    <section
      css={css`
        position: relative;
        border-radius: 4px;
        background: var(--system-text-primary-light);
        background-image: url(${bannerBackground});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        min-height: ${bannerHeight};

        .dark-mode & {
          background-color: var(--system-background-floating-dark);
          background-image: url(${bannerBackgroundDark});
        }
        @media screen and (max-width: ${mobileBreakpoint}) {
          flex-direction: column-reverse;
          background-position: 0 150px;
        }
      `}
    >
      <div
        css={css`
          padding: 0 2rem;
          @media screen and (max-width: ${mobileBreakpoint}) {
            max-width: 100%;
            padding: 2rem 1.5rem;
          }
        `}
      >
        <h1
          css={css`
            font-size: 3rem;
            color: var(--system-text-primary-dark);
            white-space: pre-line;
            font-weight: 500;
            @media screen and (max-width: 850px) {
              font-size: 2.5rem;
            }
            @media screen and (max-width: ${mobileBreakpoint}) {
              font-size: 2rem;
            }
          `}
        >
          {t('home.banner.title')}
        </h1>
        <p
          css={css`
            color: var(--system-text-primary-dark);
            @media screen and (max-width: 850px) {
              font-size: 0.85rem;
            }
            @media screen and (max-width: ${mobileBreakpoint}) {
              font-size: 0.75rem;
            }
          `}
        >
          <Trans i18nKey="home.banner.intro.p1">
            We're here to help you monitor, debug, and improve your entire
            stack. If you're new to New Relic, read our{' '}
            <Link
              css={css`
                color: var(--system-text-primary-dark);
                &:hover {
                  color: var(--system-text-primary-dark);
                }
              `}
              to="/docs/using-new-relic/"
            >
              Introduction to New Relic doc
            </Link>
            . Or get started right now by creating an account and installing a
            quickstart:
          </Trans>
        </p>
        <div
          css={css`
            @media screen and (max-width: 850px) {
              a {
                font-size: 0.75rem;
              }
            }
            @media screen and (max-width: ${mobileBreakpoint}) {
              flex-direction: column;
              width: 100%;
              a {
                width: 100%;
              }
            }
          `}
        >
          <Button
            variant={Button.VARIANT.PRIMARY}
            as={Link}
            to="https://newrelic.com/signup"
            css={css`
              height: 50px;
            `}
          >
            {t('home.banner.button1')}
          </Button>
          <Button
            variant={Button.VARIANT.OUTLINE}
            as={Link}
            to="https://one.newrelic.com/marketplace?state=7ca7c800-845d-8b31-4677-d21bcc061961"
            css={css`
              height: 50px;
              margin-left: 1rem;
              color: var(--system-text-primary-dark);
              border-color: var(--system-text-primary-dark);
              &:hover {
                color: var(--system-text-primary-dark);
              }

              @media screen and (max-width: ${mobileBreakpoint}) {
                margin-left: 0;
                margin-top: 1rem;
              }
            `}
          >
            {t('home.banner.button2')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomepageBanner;
