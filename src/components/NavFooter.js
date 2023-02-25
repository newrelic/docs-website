import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import {
  ExternalLink,
  Icon,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import ctaJson from '../data/nav-footer-cta';

const NavFooter = ({ className }) => {
  const { t } = useTranslation();
  let ctaContent = ctaJson.default;
  const allCTAs = Object.keys(ctaJson);

  if (typeof window !== 'undefined') {
    const currentPage = location.pathname;

    for (const product of allCTAs) {
      if (
        currentPage.includes(ctaJson[product].directory) &&
        product !== 'default'
      ) {
        ctaContent = ctaJson[product];
      }
    }
  }

  return (
    <div
      css={css`
        align-items: center;
        background: #1ce783;
        bottom: 0;
        display: flex;
        height: 60px;
        justify-content: center;
        left: 0;
        position: fixed;
        width: 340px;

        @media screen and (max-width: 1240px) {
          width: 277px;
          a {
            font-size: 14px;
          }
        }
      `}
      className={className}
    >
      <ExternalLink
        to={ctaContent.link}
        css={css`
          color: var(--erno-black);
          font-size: 17px;
          line-height: 24px;
          position: relative;
          text-decoration: none;
          :hover {
            color: #00586f;
          }
        `}
        instrumentation={{
          component: 'navFooterCta',
        }}
      >
        {ctaContent.icon && (
          <Icon
            css={css`
              position: absolute;
              left: -1.6em;
              top: 1.5px;
              height: 1.35em;
              width: 1.35em;
              opacity: 0.85;

              && path {
                opacity: 0.85;
              }
              @media screen and (max-width: 1240px) {
                left: -1.6em;
                top: 3.5px;
                height: 1.3em;
                width: 1.3em;
              }
            `}
            name={ctaContent.icon}
          />
        )}
        {t(`navFooter.${ctaContent.i18nKey}`)}
        <Icon
          css={css`
            position: absolute;
            top: 4px;
            right: -1em;
            height: 1.1em;
            width: 1.1em;
            stoke: var(--erno-black);
            stroke-width: 1.5;

            && path {
              display: none;
            }
          `}
          name="fe-external-link"
        />
      </ExternalLink>
    </div>
  );
};

NavFooter.propTypes = {
  className: PropTypes.string,
};

export default NavFooter;
