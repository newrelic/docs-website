import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import {
  ExternalLink,
  Icon,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import json from '../data/nav-footer-cta';

const NavFooter = ({ className }) => {
  const { t } = useTranslation();

  const currentPage = location.pathname;
  console.log('jsonTest pathname', currentPage);

  let ctaObject = {
    i18nKey: 'default',
    link: 'https://one.newrelic.com/marketplace',
    icon: 'fe-external-link',
  };

  const allCTAs = Object.keys(json);

  for (const product of allCTAs) {
    if (currentPage.includes(json[product].directory)) {
      ctaObject = json[product];
      console.log('jsonTest yay!', ctaObject.text);
    }
  }

  console.log('jsonTest object', ctaObject);

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
        to={ctaObject.link}
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
        {t(`navFooter.${ctaObject.i18nKey}`)}
        <Icon
          css={css`
            position: absolute;
            top: 4px;
            right: -20px;
            stoke: var(--erno-black);

            && path {
            }
          `}
          name={ctaObject.icon}
        />
      </ExternalLink>
    </div>
  );
};

NavFooter.propTypes = {
  className: PropTypes.string,
};

export default NavFooter;
