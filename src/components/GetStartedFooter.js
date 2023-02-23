import Button from '@newrelic/gatsby-theme-newrelic/src/components/Button';
import { ExternalLink } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/react';

const MOBILE_BREAKPOINT = '1050px';

const GetStartedFooter = ({ className, ...props }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1.5rem;

        font-size: 33px;

        background-color: var(--brand-button-primary-accent);

        > h3 {
          font-size: 44px;
          line-height: 50px;
          font-weight: 500;
        }

        @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
          padding: 4rem 2.5rem;
          height: 325px;
          flex-direction: column;
          justify-content: center;

          > h3 {
            font-size: 36px;
            width: 296px;
            line-height: 2.875rem;
            margin-bottom: 2rem;
            font-size: 2.75rem;
            letter-spacing: -0.015em;
          }
        }

        @media screen and (min-width: ${MOBILE_BREAKPOINT}) {
          h3 {
            padding-right: 180px;
          }
        }
      `}
      className={className}
    >
      <h3
        css={css`
          margin-bottom: 0px;
        `}
      >
        Get started today for free.
      </h3>
      <div
        css={css`
          display: flex;
          justify-content: flex-start;

          > a {
            font-size: 18px;
            line-height: 24px;

            width: 142px;
            height: 64px;

            :first-of-type {
              margin: 0px 8px;
            }
          }

          @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
            height: 315px;
            flex-direction: column;

            > a {
              width: 296px;
              height: 64px;

              :first-of-type {
                margin: 8px 0px;
              }
            }
          }
        `}
      >
        <Button
          {...props}
          as={ExternalLink}
          variant={Button.VARIANT.NORMAL}
          href="https://newrelic.com/signup/"
          css={css`
            color: var(--brand-button-primary-accent);
            border-radius: 4px;
            font-size: 14px;
            line-height: 21px;
            font-weight: 400;
            padding: 1rem;
            .scroll {
              margin-top: -1px;
            }
            > div {
              color: var(--brand-button-primary-accent);
            }
          `}
        >
          Sign Up
        </Button>
        <Button
          {...props}
          as={ExternalLink}
          variant={Button.VARIANT.OUTLINE}
          href="https://newrelic.com/request-demo/"
          css={css`
            border-radius: 4px;
            font-size: 14px;
            line-height: 21px;
            font-weight: 400;
            padding: 1rem;
            > div {
              color: var(--button-outline-color);
            }
          `}
        >
          Get Demo
        </Button>
      </div>
    </div>
  );
};

GetStartedFooter.propTypes = {
  style: PropTypes.string,
};

export default GetStartedFooter;
