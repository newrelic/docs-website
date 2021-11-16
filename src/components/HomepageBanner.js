import React from 'react';
import { css } from '@emotion/react';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import bannerForegroundVert from '../images/bannerForeground.svg';
// import bannerForegroundVert from '../images/bannerVertical.svg';
import relicsAtWork from '../images/photo-relics-at-work-01.png';

const HomepageBanner = () => {
  return (
    <div
      css={css`
        max-height: 415px;
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        padding-top: calc(415 / 1252 * 100%);
        @media screen and (max-width: 500px) {
          padding-top: calc(624 / 380 * 100%);
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
          @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
          }
        `}
      >
        <img
          src={bannerForegroundVert}
          alt="banner foreground"
          css={css`
            height: 100%;
            max-height: 415px;
            @media screen and (max-width: 500px) {
              position: absolute;
              bottom: 0;
              /* left: 0; */
              right: -11%;
              max-height: 100%;
              height: 70%;
            }
          `}
        />

        <img
          src={relicsAtWork}
          alt="relics at work"
          css={css`
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            width: 50%;
            @media screen and (max-width: 500px) {
              width: auto;
              height: 60%;
            }
          `}
        />
        <Button
          css={css`
            position: absolute;
            left: 3rem;
            bottom: 50px;

            @media screen and (max-width: 500px) {
              left: 0;
              background: var(--color-brand-100);
              color: var(--color-brand-600);
              bottom: 100px;
              margin-left: 1rem;
            }
          `}
        >
          Create a free account
        </Button>
        <Button
          css={css`
            position: absolute;
            margin-left: 1rem;
            background: none;
            bottom: 50px;
            border: 1px solid var(--color-neutrals-600);
            color: var(--color-neutrals-050);
            left: 15rem;

            @media screen and (max-width: 500px) {
              left: 0;
            }
          `}
        >
          Find your quickstart
        </Button>
      </div>
    </div>
  );
};

export default HomepageBanner;
