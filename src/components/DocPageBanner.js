// VSU
import React from 'react';
import { css } from '@emotion/react';
import {
  Button,
  Link,
  Icon,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';
import lines from './bannerLines.svg';

const DocPageBanner = ({ text, cta, url, height, onClose }) => {
  const ctaWithDefault = cta ?? 'Start now';
  const urlWithDefault = url ?? 'https://newrelic.com/signup';

  const handleBannerDismiss = useInstrumentedHandler(
    () => {
      onClose();
    },
    {
      eventName: 'dismiss',
      category: 'DocBanner',
    }
  );
  return (
    <div
      css={css`
        height: ${height};
        position: absolute;
        top: 0;
        /* grid causes a 1 pixel gap on either side of the main body */
        left: -1px;
        width: calc(100% + 1px);
        background: radial-gradient(
          60% 170% at 20% -10%,
          rgba(28, 231, 131, 0.66) 0%,
          rgba(29, 215, 176, 0.2856) 36.94%,
          rgba(29, 202, 211, 0) 100%
        );
        background-color: #212c31;
        @media screen and (max-width: 760px) {
          display: none;
        }
      `}
    >
      <div
        css={css`
          height: 100%;
          position: absolute;
          top: 0;
          /* grid causes a 1 pixel gap on either side of the main body */
          left: -1px;
          width: calc(100% + 1px);
          padding: 1.5rem 2rem 1.5rem 1.5rem;
          background-image: url(${lines});
          background-position: right;
          background-repeat: no-repeat;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            color: white;
            margin-bottom: 0;
            font-size: 28px;
            @media screen and (max-width: 1100px) {
              font-size: 1.5rem;
              line-height: 100%;
            }
          }
        `}
      >
        <p>{text}</p>
        <Button
          css={css`
            height: 40px;
          `}
          as={Link}
          to={urlWithDefault}
          variant={Button.VARIANT.PRIMARY}
          instrumentation={{ component: 'docBannerCta' }}
        >
          {ctaWithDefault}
        </Button>
      </div>
      <Button
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          background: none;
          border: none;
          padding: 8px;
        `}
        variant={Button.VARIANT.SIMPLE}
        onClick={handleBannerDismiss}
        aria-label="close"
      >
        <Icon
          name="fe-x"
          css={css`
            color: white;
          `}
        />
      </Button>
    </div>
  );
};

export default DocPageBanner;
