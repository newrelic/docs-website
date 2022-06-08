import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Surface, Icon, useTranslation } from '@newrelic/gatsby-theme-newrelic';
import SurfaceLink from './SurfaceLink';
import quickstartTilesBackground from '../images/quickstartTiles.svg';
import quickstartArrow from '../images/quickstartArrow.svg';

const mobileBreakpoint = '450px';

const QuickstartTile = ({ logo, size, to, title, className, children }) => (
  <SurfaceLink
    base={Surface.BASE.SECONDARY}
    to={to}
    interactive
    css={css`
      height: 90px;
      width: 100%;
      border-radius: 4px;
      background: var(--color-white);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .dark-mode & {
        background: var(--system-text-primary-dark);
      }

      @media screen and (max-width: ${mobileBreakpoint}) {
        height: 60px;
      }
    `}
    className={className}
  >
    {logo && <Icon name={logo} size={size || '3.5rem'} />}
    {title && (
      <p
        css={css`
          color: var(--system-text-primary-light);
        `}
      >
        {title}
      </p>
    )}
    {children}
  </SurfaceLink>
);

const FindYourQuickStart = () => {
  const { t } = useTranslation();

  return (
    <div
      css={css`
        background: var(--system-text-primary-light);
        background-image: url(${quickstartTilesBackground});
        background-repeat: no-repeat;
        background-position: left bottom -60%;

        border-radius: 4px;
        min-height: 380px;
        width: 100%;
        position: relative;
        padding: 2rem;
        h2,
        h3 {
          color: var(--system-text-primary-dark);
          font-weight: 400;
        }
        h2 {
          font-size: 3rem;
        }

        .dark-mode & {
          background-color: var(--system-background-floating-dark);
        }
        @media screen and (max-width: 1050px) {
          h2 {
            font-size: 2rem;
          }
        }
        @media screen and (max-width: 600px) {
          h2 {
            font-size: 2rem;
          }
          height: 100%;
        }
        @media screen and (max-width: ${mobileBreakpoint}) {
          background-image: none;
          padding: 1rem 1.5rem 1rem;
          height: 100%;
          h3 {
            display: none;
          }
          h2 {
            font-size: 1.5rem;
          }
        }
      `}
    >
      <h3>{t('findYourQuickstart.subtext')}</h3>
      <div
        css={css`
          display: flex;
          @media screen and (max-width: ${mobileBreakpoint}) {
            justify-content: center;
          }
        `}
      >
        <h2>{t('findYourQuickstart.cta')}</h2>
        <img
          src={quickstartArrow}
          alt="A green arrow pointing down"
          css={css`
            margin-left: 0.5rem;
            @media screen and (max-width: 800px) {
              display: none;
            }
          `}
        />
      </div>
      <div
        css={css`
          padding-top: 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
          grid-gap: 1rem;
          justify-items: center;
          flex: 2;
          align-self: flex-start;

          @media screen and (max-width: ${mobileBreakpoint}) {
            padding: 0;
            grid-template-columns: repeat(2, 1fr);
          }
        `}
      >
        <QuickstartTile
          logo="logo-apache"
          title="Apache"
          to="https://newrelic.com/instant-observability/apache/ad5affab-545a-4355-ad48-cfd66e2fbf00"
        />
        <QuickstartTile
          logo="logo-php"
          title="PHP"
          to="https://newrelic.com/instant-observability/php/475dec69-10c9-4bc6-8312-3caa266fb028"
        />
        <QuickstartTile
          logo="logo-java"
          title="Java"
          to="https://newrelic.com/instant-observability/java/3ebfb315-d0a6-4b27-9f89-b16a9a1ada5f"
        />
        <QuickstartTile
          logo="logo-kafka"
          title="Kakfa"
          to="https://newrelic.com/instant-observability/kafka/9c559112-90e1-4ff4-b38b-90c0ba3c56fe"
          css={css`
            @media screen and (min-width: 960px) and (max-width: 1100px) {
              display: none;
            }
            @media screen and (min-width: 650px) and (max-width: 820px) {
              display: none;
            }
          `}
        />
        <QuickstartTile
          logo="logo-mysql"
          title="MySQL"
          to="https://newrelic.com/instant-observability/mysql/ad9f635b-6496-48a8-b373-9fab81a7f719"
          css={css`
            @media screen and (min-width: 960px) and (max-width: 1240px) {
              display: none;
            }
            @media screen and (min-width: 650px) and (max-width: 820px) {
              display: none;
            }
          `}
        />
        <QuickstartTile
          logo="logo-nodejs"
          title="Node"
          to="https://newrelic.com/instant-observability/node-js/01fdea36-5a15-44b4-a864-c4c99866735b"
          css={css`
            @media screen and (min-width: 750px) and (max-width: 1380px) {
              display: none;
            }
            @media screen and (max-width: 820px) {
              display: none;
            }
          `}
        />
        <QuickstartTile
          logo="logo-dotnet"
          title=".NET"
          to="https://newrelic.com/instant-observability/dotnet/2dff13b6-0fac-43a6-abc6-57f0a3299639"
          css={css`
            @media screen and (max-width: 1530px) {
              display: none;
            }
          `}
        />
        <QuickstartTile
          to="https://newrelic.com/instant-observability"
          css={css`
            font-weight: 400;
            font-size: 18px;
            background: var(--brand-button-primary-accent);
            align-self: center;
            color: var(--color-black);
            &:hover {
              color: var(--color-black);
            }
            .dark-mode & {
              background: var(--brand-button-primary-accent);
            }
          `}
        >
          {t('findYourQuickstart.button')}
        </QuickstartTile>
      </div>
    </div>
  );
};

QuickstartTile.propTypes = {
  logo: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FindYourQuickStart;
