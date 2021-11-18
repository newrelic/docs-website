import React from 'react';
import { css } from '@emotion/react';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import bannerForeground from '../images/bannerForeground.svg';
import bannerForegroundMobile from '../images/bannerForegroundMobile.svg';
import relicsAtWork from '../images/photo-relics-at-work-01.png';
import relicsAtWorkMobile from '../images/relics-at-work--SM.png';

const BREAKPOINTS = {
  NO_LEFT_NAV: '760px',
  SINGLE_COLUMN: '650px',
  MOBILE: '450px',
};

const HomepageBanner = () => {
  return (
    <div
      css={css`
        max-height: 423px;
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        padding-top: calc(423 / 1252 * 100%);
        background: var(--color-brand-700);

        @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
          padding-top: calc(450 / 380 * 100%);
          max-height: 450px;
        }

        @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
          padding-top: 0;
          max-height: none;
          height: 500px;
        }
        @media screen and (max-width: 320px) {
          height: 460px;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
            display: flex;
            flex-direction: column;
          }
        `}
      >
        <picture>
          <source
            srcSet={bannerForegroundMobile}
            media={`(max-width:${BREAKPOINTS.SINGLE_COLUMN})`}
          />
          <img
            src={bannerForeground}
            alt="banner foreground"
            css={css`
              position: relative;
              height: 100%;
              max-height: 423px;
              z-index: 1;
              @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
                max-height: 100%;
                width: 100%;
                top: 150px;
              }
              @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
                top: 140px;
              }
            `}
          />
        </picture>
        <picture>
          <source
            srcSet={relicsAtWorkMobile}
            media={`(max-width:${BREAKPOINTS.SINGLE_COLUMN})`}
          />
          <img
            src={relicsAtWork}
            alt="relics at work"
            css={css`
              position: absolute;
              top: 0;
              right: 0;
              width: 50%;
              @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
                width: 100%;
                top: -10%;
              }
              @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
                top: 0;
              }
            `}
          />
        </picture>
        <div
          css={css`
            position: absolute;
            top: 10%;
            left: 5%;
            z-index: 2;
            width: 48%;

            @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
              width: 85%;
              top: 180px;
              left: 0;
              padding: 0 1rem;
              height: 40%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              p {
                display: block;
                font-size: max(3.5vw, 11px);
                padding-right: 1rem;
              }
            }
            @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
              top: 155px;
              width: 100%;
              height: 30%;
              p {
                padding-right: 1.5rem;
                margin-bottom: 0;
              }
            }
          `}
        >
          <h1
            css={css`
              color: white;
              font-size: min(4vw, 4rem);
              @media screen and (max-width: 1200px) {
                font-size: min(3.5vw, 2.5rem);
              }
              @media screen and (max-width: 900px) {
                font-size: min(3vw, 2rem);
              }
              @media screen and (max-width: ${BREAKPOINTS.NO_LEFT_NAV}) {
                font-size: 2rem;
              }
              @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
                font-weight: 600;
                font-size: 5vw;
              }
              @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
                line-height: 37px;
                font-size: 7vw;
              }
            `}
          >
            Welcome to <br />
            New Relic docs!
          </h1>
          <p
            css={css`
              color: white;
              font-size: min(1vw, 1rem);
              margin-bottom: 1%;
              @media screen and (max-width: 1200px) {
                display: none;
              }
            `}
          >
            We're here to help you monitor, debug, and improve your entire
            stack. If you're new to New Relic, read our{' '}
            <Link
              to="/docs/using-new-relic/"
              css={css`
                color: white;
              `}
            >
              Introduction to New Relic doc
            </Link>
            . Or get started right now by creating an account and installing a
            quickstart:
          </p>

          <div
            css={css`
              display: flex;
              @media screen and (max-width: 1500px) {
                bottom: 10%;
              }
              @media screen and (max-width: 1200px) {
                bottom: 25%;
              }
              @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
                bottom: 2rem;
              }
              @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
                flex-direction: column;
                bottom: 1.5rem;
              }
            `}
          >
            <Button
              variant={Button.VARIANT.PRIMARY}
              as={Link}
              to="https://newrelic.com/signup"
              css={css`
                font-size: 1rem;
                margin-top: 1rem;
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

                @media screen and (max-width: 1150px) {
                  font-size: 0.75rem;
                }
                @media screen and (max-width: 990px) {
                  font-size: 0.625rem;
                  padding: 0.375rem 0.625rem;
                  border-radius: 0.125rem;
                }
                @media screen and (max-width: 900px) {
                  font-size: 0.5rem;
                }
                @media screen and (max-width: ${BREAKPOINTS.NO_LEFT_NAV}) {
                  font-size: 0.75rem;
                }
                @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
                  padding: 0.5rem 1rem;
                  left: 5%;
                  bottom: 100px;
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
                margin-left: 1rem;
                margin-top: 1rem;
                font-size: 1rem;
                color: var(--color-brand-400);
                border-color: var(--color-brand-500);
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

                @media screen and (max-width: 1150px) {
                  font-size: 0.75rem;
                }
                @media screen and (max-width: 990px) {
                  font-size: 0.625rem;
                  padding: 0.375rem 0.625rem;
                  border-radius: 0.125rem;
                }
                @media screen and (max-width: 900px) {
                  font-size: 0.5rem;
                }
                @media screen and (max-width: ${BREAKPOINTS.NO_LEFT_NAV}) {
                  font-size: 0.75rem;
                }
                @media screen and (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
                  padding: 0.5rem 1rem;
                }
                @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
                  margin-left: 0;
                }
              `}
            >
              Find your quickstart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
