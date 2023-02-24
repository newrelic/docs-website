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
            font-size: 15px;
          }
        }
      `}
      className={className}
    >
      <ExternalLink
        to="{ctaContent.link}"
        css={css`
          color: var(--erno-black);
          font-size: 18px;
          line-height: 24px;
          position: relative;
          text-underline-offset: 10px;
        `}
        instrumentation={{
          component: 'navFooterCta',
        }}
      >
        {t(`navFooter.${ctaContent.i18nKey}`)}
        <Icon
          css={css`
            position: absolute;
            top: 4px;
            right: -20px;
            stoke: var(--erno-black);

            && path {
            }
          `}
          name={ctaContent.icon}
        />
      </ExternalLink>
    </div>
  );
};

NavFooter.propTypes = {
  className: PropTypes.string,
};

export default NavFooter;
