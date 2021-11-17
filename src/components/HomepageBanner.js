import React from 'react';
import { css } from '@emotion/react';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import bannerForeground from '../images/bannerForeground.svg';
import bannerForegroundMobile from '../images/bannerForegroundMobile.svg';
import relicsAtWork from '../images/photo-relics-at-work-01.png';

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

        @media screen and (max-width: 900px) {
          padding-top: calc(500 / 380 * 100%);
          max-height: 500px;
        }
        @media screen and (max-width: 500px) {
          padding-top: calc(624 / 380 * 100%);
          height: 100%;
          max-height: 624px;
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
          @media screen and (max-width: 900px) {
            display: flex;
            flex-direction: column;
          }
        `}
      >
        <picture
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <source srcSet={bannerForegroundMobile} media="(max-width:900px)" />
          <img
            src={bannerForeground}
            alt="banner foreground"
            css={css`
              position: relative;
              height: 100%;
              max-height: 423px;
              z-index: 1;
              @media screen and (max-width: 900px) {
                max-height: 100%;
                margin-top: 50px;
                width: 100%;
              }
              @media screen and (max-width: 700px) {
                margin-top: 10px;
              }
            `}
          />
        </picture>
        <img
          src={relicsAtWork}
          alt="relics at work"
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            @media screen and (max-width: 900px) {
              width: auto;
              height: 60%;
            }
          `}
        />
        <div
          css={css`
            color: white;
            position: absolute;
            top: 10%;
            left: 5%;
            z-index: 2;
            width: 48%;
            @media screen and (max-width: 900px) {
              width: 90%;
              top: 37%;
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
                font-size: 2rem;
                font-weight: 600;
                width: 70%;
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
              @media screen and (max-width: 1200px) {
                display: none;
              }
              @media screen and (max-width: 900px) {
                display: inline;
                font-size: 14px;
              }
            `}
          >
            We have tons of content to get you started, feel free to browse
            around. Don't forget to read our{' '}
            <Link
              to="/docs/using-new-relic/"
              css={css`
                color: white;
              `}
            >
              introductory statement
            </Link>{' '}
            for a wider view on our platform's capabilities.
          </p>
        </div>
        <div
          css={css`
            position: absolute;
            bottom: 15%;
            left: 5%;
            z-index: 2;
            display: flex;
            @media screen and (max-width: 1500px) {
              bottom: 10%;
            }
            @media screen and (max-width: 1200px) {
              bottom: 15%;
            }
            @media screen and (max-width: 1000px) {
              flex-direction: column-reverse;
              align-items: flex-start;
              justify-content: space-between;
              height: 30%;
            }
            @media screen and (max-width: 900px) {
              bottom: 3rem;
              height: 15%;
            }
          `}
        >
          <Button
            as={Link}
            to="https://newrelic.com/signup"
            css={css`
              height: 40px;
              font-size: 1rem;
              background: var(--color-brand-100);
              color: var(--color-brand-600);
              &:hover {
                background: var(--color-brand-500);
                border-color: var(--color-brand-500);
              }
              @media screen and (max-width: 1500px) {
                height: 30px;
                font-size: 0.85rem;
              }
              @media screen and (max-width: 1100px) {
                height: 25px;
                font-size: 0.75rem;
              }
              @media screen and (max-width: 900px) {
                height: 40px;
                font-size: 1rem;
                left: 5%;
                bottom: 100px;
              }
            `}
          >
            Create a free account
          </Button>
          <Button
            as={Link}
            to="https://developer.newrelic.com/instant-observability/"
            css={css`
              height: 40px;
              font-size: 1rem;
              margin-left: 1rem;
              background: none;
              border: 1px solid var(--color-neutrals-600);
              color: var(--color-neutrals-050);
              &:hover {
                background: var(--color-brand-500);
                border-color: var(--color-brand-500);
              }

              @media screen and (max-width: 1500px) {
                height: 30px;
                font-size: 0.85rem;
              }
              @media screen and (max-width: 1100px) {
                height: 25px;
                font-size: 0.75rem;
              }
              @media screen and (max-width: 1000px) {
                margin-left: 0;
              }
              @media screen and (max-width: 900px) {
                height: 40px;
                font-size: 1rem;
              }
            `}
          >
            Find your quickstart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
