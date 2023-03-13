import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useSpring, animated, useTransition } from '@react-spring/web';
import { useTranslation } from '@newrelic/gatsby-theme-newrelic';

import { useMainLayoutContext } from './MainLayoutContext';
import { DocTiles as DocTilesBase, DocTile as DocTileBase } from '../components/DocTile';
import useMediaQuery from '../hooks/useMediaQuery';
import backend from './backend.png';
import frontend from './frontend.png';
import devops from './devops.png';

const HomepageSlabs = () => {
  const { t } = useTranslation();
  const [sidebar] = useMainLayoutContext();
  const [activePanel, setActivePanel] = useState(null);

  const isTabletWidth = useMediaQuery('(max-width: 1240px)');

  const [textOpacitySprings1, textOpacityApi1] = useSpring(() => {});
  const [textOpacitySprings2, textOpacityApi2] = useSpring(() => {});
  const [textOpacitySprings3, textOpacityApi3] = useSpring(() => {});

  const [opacitySprings1, opacityApi1] = useSpring(() => {});
  const [opacitySprings2, opacityApi2] = useSpring(() => {});
  const [opacitySprings3, opacityApi3] = useSpring(() => {});

  const [panelSprings1, panelApi1] = useSpring(() => {});
  const [panelSprings2, panelApi2] = useSpring(() => {});
  const [panelSprings3, panelApi3] = useSpring(() => {});

  const PANEL_SPRING_APIS = { 1: panelApi1, 2: panelApi2, 3: panelApi3 };
  const OPACITY_SPRING_APIS = {
    1: opacityApi1,
    2: opacityApi2,
    3: opacityApi3,
  };
  const TEXT_OPACITY_SPRING_APIS = {
    1: textOpacityApi1,
    2: textOpacityApi2,
    3: textOpacityApi3,
  };

  useEffect(() => {
    const transition = isTabletWidth ? tabletTransition : normalTransition;
    const initialTransition = isTabletWidth
      ? initialTabletPanelState
      : initialPanelState;
    for (const apiKey in PANEL_SPRING_APIS) {
      if (Number(apiKey) === activePanel) {
        PANEL_SPRING_APIS[apiKey].start(transition);
        OPACITY_SPRING_APIS[apiKey].start(opacityFadeOut);
        TEXT_OPACITY_SPRING_APIS[apiKey].start(textOpacityFadeIn);
      } else {
        PANEL_SPRING_APIS[apiKey].start(initialTransition);
        OPACITY_SPRING_APIS[apiKey].start(opacityFadeIn);
        TEXT_OPACITY_SPRING_APIS[apiKey].start(textOpacityFadeOut);
      }
    }
  }, [
    OPACITY_SPRING_APIS,
    PANEL_SPRING_APIS,
    activePanel,
    isTabletWidth,
    sidebar,
  ]);

  useEffect(() => {
    const randomPanelId = Math.ceil(Math.random() * 3);
    setActivePanel(randomPanelId);

    const transition = isTabletWidth ? tabletTransition : normalTransition;
    const initialTransition = isTabletWidth
      ? initialTabletPanelState
      : initialPanelState;
    // without this, on page load the slabs snap to their new locations
    const startingTransition = isTabletWidth
      ? {
          ...initialTransition,
          from: { ...initialTransition.from, height: '33%' },
        }
      : {
          ...initialTransition,
          from: { ...initialTransition.from, width: '33%' },
        };
    for (const apiKey in PANEL_SPRING_APIS) {
      if (Number(apiKey) === activePanel) {
        PANEL_SPRING_APIS[apiKey].start(transition);
        TEXT_OPACITY_SPRING_APIS[apiKey].start(textOpacityFadeIn);
        OPACITY_SPRING_APIS[apiKey].start(opacityFadeOut);
      } else {
        PANEL_SPRING_APIS[apiKey].start(startingTransition);
        TEXT_OPACITY_SPRING_APIS[apiKey].start(textOpacityFadeOut);
        OPACITY_SPRING_APIS[apiKey].start(opacityFadeIn);
      }
    }
  }, []);

  const handlePanelClick = (panelId) => {
    setActivePanel(panelId);
  };

  return (
    <div
      css={css`
        width: ${sidebar ? 'calc(100vw - var(--sidebar-width))' : '100vw'};
        /* header and footer heights */
        height: calc(100vh - 72px - 60px);
        display: flex;

        @media screen and (max-width: 1240px) {
          flex-direction: column;
        }
      `}
    >
      <Slab
        style={panelSprings1}
        opacitySprings={opacitySprings1}
        onClick={() => handlePanelClick(1)}
        headers={{
          active: t('home.personas.active.1'),
          default: t('home.personas.default.1'),
        }}
        isTabletWidth={isTabletWidth}
        activePanel={activePanel}
        panelId={1}
        css={css`
          background-image: url(${frontend});
          > div:first-child {
            background-color: #fac632;
          }
          ${activePanel !== 1 &&
          css`
            background-position-x: 80%;
          `}
          @media screen and (max-width: 1240px) {
            background-position: right -80px top 20%;
          }
        `}
      >
        <animated.div style={textOpacitySprings1}>
          {activePanel === 1 && <Blurb>{t('home.personas.blurbs.1')}</Blurb>}
        </animated.div>
        {activePanel === 1 && (
          <DocTiles animated>
            <DocTile forceLightMode path={t('home.personas.tiles.1.0.url')}>
              {t('home.personas.tiles.1.0.label')}
            </DocTile>
            <DocTile forceLightMode path={t('home.personas.tiles.1.1.url')}>
              {t('home.personas.tiles.1.1.label')}
            </DocTile>
            <DocTile forceLightMode path={t('home.personas.tiles.1.2.url')}>
              {t('home.personas.tiles.1.2.label')}
            </DocTile>
          </DocTiles>
        )}
      </Slab>
      <Slab
        style={panelSprings2}
        opacitySprings={opacitySprings2}
        onClick={() => handlePanelClick(2)}
        headers={{
          active: t('home.personas.active.2'),
          default: t('home.personas.default.2'),
        }}
        isTabletWidth={isTabletWidth}
        activePanel={activePanel}
        panelId={2}
        css={css`
          background-image: url(${backend});
          > div:first-child {
            background-color: #f547be;
          }
        `}
      >
        <animated.div style={textOpacitySprings2}>
          {activePanel === 2 && <Blurb>{t('home.personas.blurbs.2')}</Blurb>}
        </animated.div>
        {activePanel === 2 && (
          <DocTiles animated>
            <DocTile forceLightMode path={t('home.personas.tiles.2.0.url')}>
              {t('home.personas.tiles.2.0.label')}
            </DocTile>
            <DocTile forceLightMode path={t('home.personas.tiles.2.1.url')}>
              {t('home.personas.tiles.2.1.label')}
            </DocTile>
            <DocTile forceLightMode path={t('home.personas.tiles.2.2.url')}>
              {t('home.personas.tiles.2.2.label')}
            </DocTile>
          </DocTiles>
        )}
      </Slab>
      <Slab
        style={panelSprings3}
        opacitySprings={opacitySprings3}
        onClick={() => handlePanelClick(3)}
        headers={{
          active: t('home.personas.active.3'),
          default: t('home.personas.default.3'),
        }}
        isTabletWidth={isTabletWidth}
        activePanel={activePanel}
        panelId={3}
        css={css`
          background-image: url(${devops});
          > div:first-child {
            background-color: #2bdfe3;
          }
        `}
      >
        <animated.div style={textOpacitySprings3}>
          {activePanel === 3 && <Blurb>{t('home.personas.blurbs.3')}</Blurb>}
        </animated.div>
        {activePanel === 3 && (
          <DocTiles animated>
            <DocTile forceLightMode path={t('home.personas.tiles.3.0.url')}>
              {t('home.personas.tiles.3.0.label')}
            </DocTile>
            <DocTile forceLightMode path={t('home.personas.tiles.3.1.url')}>
              {t('home.personas.tiles.3.1.label')}
            </DocTile>
            <DocTile forceLightMode path={t('home.personas.tiles.3.2.url')}>
              {t('home.personas.tiles.3.2.label')}
            </DocTile>
          </DocTiles>
        )}
      </Slab>
    </div>
  );
};

const Slab = ({
  className,
  activePanel,
  panelId,
  headers,
  opacitySprings,
  isTabletWidth,
  children,
  ...props
}) => {
  const isActivePanel = activePanel === panelId;
  const header =
    !isActivePanel || isTabletWidth ? headers.default : headers.active;
  const transitions = useTransition(header, {
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { display: 'none' },
    exitBeforeEnter: true,
  });

  return (
    <animated.div
      css={css`
        height: 100%;
        width: 33%;
        padding: 1rem;
        background-color: black;
        background-size: auto 70%;
        background-repeat: no-repeat;
        background-position: center bottom -95px;
        padding-top: 3.5rem;
        min-width: 240px;
        overflow: hidden;
        position: relative;

        h1,
        p {
          color: var(--system-text-primary-dark);
        }

        h1 {
          font-size: 72px;
          font-weight: 500;
        }

        @media screen and (max-width: 1240px) {
          height: 33%;
          width: 100%;
          background-size: 800px auto;
          background-position: right -200px top 20%;
          padding-top: 4.5rem;
          h1 {
            font-size: 48px;
          }
        }
      `}
      className={className}
      {...props}
    >
      <animated.div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.5;
          z-index: 1;
          ${!isActivePanel &&
          css`
            &:hover {
              opacity: 0.3 !important;
              transition: opacity 300ms;
            }
            transition: opacity 300ms;
          `}
        `}
        style={opacitySprings}
      />
      {transitions((style, item) => (
        <animated.h1 style={style}>{item}</animated.h1>
      ))}
      {children}
    </animated.div>
  );
};

const Blurb = styled.p`
  font-size: 20px;
  line-height: 1.5;
  /* using vws here because a percentage causes the text */
  /* to jumble around while the slide animation is playing, */
  /* even with the delay */
  width: 62vw;

  @media (max-width: 1420px) {
    width: 57vw;
  }

  @media (max-width: 1240px) {
    width: 70vw;
  }

  @media (max-width: 880px) {
    width: 57vw;
  }
`;

const DocTiles = styled(DocTilesBase)`
  @media screen and (max-width: 1240px) {
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    max-width: 78%;
  }
`

const DocTile = styled(DocTileBase)`
  & > div {
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    padding: 1.5rem;

    & h4 {
      margin: 0;
    }
  }

  @media screen and (max-width: 1240px) {
    min-height: unset;

    & > div {
      gap: 0.25rem;
      padding: 1rem;
    }
  }
  @media screen and (max-width: 880px) {
    & h4 {
      font-size: 18px;
    }

    & > div {
      gap: 0.25rem;
      padding: 0.75rem;
    }
  }
`;

const springConfig = {
  mass: 1,
  friction: 36,
  tension: 170,
};
const normalTransition = {
  from: {
    height: '100%',
  },
  to: {
    height: '100%',
    width: '70%',
  },
};
const tabletTransition = {
  from: {
    width: '100%',
  },
  to: {
    height: '50%',
    width: '100%',
  },
};
const initialPanelState = {
  from: {
    height: '100%',
  },
  to: {
    width: '15%',
  },
  config: springConfig,
};
const initialTabletPanelState = {
  from: {
    width: '100%',
  },
  to: {
    height: '25%',
  },
  config: springConfig,
};
const opacityFadeOut = {
  from: { opacity: 0.3 },
  to: { opacity: 0 },
};
const opacityFadeIn = {
  to: { opacity: 0.5 },
};
const textOpacityFadeIn = {
  delay: 400,
  from: { opacity: 0 },
  to: { opacity: 1 },
};
const textOpacityFadeOut = {
  to: { opacity: 0 },
};
export default HomepageSlabs;
