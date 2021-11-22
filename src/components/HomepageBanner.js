import React from 'react';
import { css } from '@emotion/react';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import bannerForeground from '../images/bannerForeground.png';
import bannerForegroundMobile from '../images/bannerForegroundMobile.svg';
import relicsAtWork from '../images/photo-relics-at-work-01.png';
import relicsAtWorkMobile from '../images/relics-at-work--SM.png';

const HomepageBanner = () => {
  const bannerHeight = '383px';
  const mobileBreakpoint = '450px';

  return (
    <section
      css={css`
        position: relative;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        background-image: url(${bannerForeground});
        background-repeat: no-repeat;
        background-size: auto;
        height: ${bannerHeight};
        @media screen and (max-width: ${mobileBreakpoint}) {
          background-image: url(${bannerForegroundMobile});
          flex-direction: column-reverse;
          background-position: 0 150px;
          min-height: 525px;
        }
      `}
    >
      <div
        css={css`
          border-radius: 0.5rem;
          position: absolute;
          z-index: -2;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--color-brand-700);
        `}
      />
      <div
        css={css`
          padding: 0 3rem;
          max-width: 650px;
          @media screen and (max-width: ${mobileBreakpoint}) {
            max-width: 100%;
            padding: 0 1.5rem 2rem;
          }
        `}
      >
        <h1
          css={css`
            font-size: 3rem;
            color: var(--color-neutrals-200);
            @media screen and (max-width: 850px) {
              font-size: 2.5rem;
            }
            @media screen and (max-width: ${mobileBreakpoint}) {
              font-weight: 600;
              font-size: 2rem;
            }
          `}
        >
          Welcome to <br />
          New Relic docs!
        </h1>
        <p
          css={css`
            color: var(--color-neutrals-200);
            @media screen and (max-width: 850px) {
              font-size: 0.85rem;
            }
            @media screen and (max-width: ${mobileBreakpoint}) {
              font-size: 0.75rem;
            }
          `}
        >
          We're here to help you monitor, debug, and improve your entire stack.
          If you're new to New Relic, read our{' '}
          <Link
            to="/docs/using-new-relic/"
            css={css`
              color: var(--color-neutrals-200);
            `}
          >
            Introduction to New Relic doc
          </Link>
          . Or get started right now by creating an account and installing a
          quickstart:
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
              background: var(--color-brand-500);
              &:hover {
                background: var(--color-brand-400);
              }

              .dark-mode & {
                background: var(--color-brand-100);
                color: var(--color-brand-700);
                &:hover {
                  background: var(--color-brand-200);
                  color: var(--color-brand-600);
                }
              }
            `}
          >
            Create a free account
          </Button>
          <Button
            variant={Button.VARIANT.OUTLINE}
            as={Link}
            to="https://developer.newrelic.com/instant-observability/"
            css={css`
              color: var(--color-brand-400);
              border-color: var(--color-brand-500);
              margin-left: 1rem;
              &:hover {
                color: var(--color-brand-400);
                border-color: white;
              }

              .dark-mode & {
                color: var(--color-brand-300);
                border-color: var(--color-brand-400);
                &:hover {
                  border-color: white;
                }
              }
              @media screen and (max-width: ${mobileBreakpoint}) {
                margin-left: 0;
                margin-top: 1rem;
              }
            `}
          >
            Find your quickstart
          </Button>
        </div>
      </div>
      <div
        css={css`
          border-radius: 0.5rem;
          background-image: url(${relicsAtWork});
          background-repeat: no-repeat;
          background-size: auto;
          background-position: right;
          height: 100%;
          flex: 1;
          z-index: -1;
          @media screen and (max-width: ${mobileBreakpoint}) {
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(${relicsAtWorkMobile});
            background-position: top;
            border-bottom-right-radius: 0;
            width: 100%;
          }
        `}
      />
    </section>
  );
};

export default HomepageBanner;
