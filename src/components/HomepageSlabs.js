import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useSpring, animated, useTransition } from '@react-spring/web';
import { useTranslation } from '@newrelic/gatsby-theme-newrelic';
import { useMainLayoutContext } from './MainLayoutContext';
import useMediaQuery from '../hooks/useMediaQuery';
import backend from './backend.png';
import frontend from './frontend.png';
import devops from './devops.png';

// TODO
// random panel ✅
// dark/lightmode overhaul
// add margin to top of default view

const HomepageSlabs = () => {
  const { t } = useTranslation();
  const [sidebar] = useMainLayoutContext();
  const [activePanel, setActivePanel] = useState(null);

  const isTabletWidth = useMediaQuery('(max-width: 1240px)');

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

  useEffect(() => {
    const transition = isTabletWidth ? tabletTransition : normalTransition;
    const initialTransition = isTabletWidth
      ? initialTabletPanelState
      : initialPanelState;
    for (const apiKey in PANEL_SPRING_APIS) {
      if (Number(apiKey) === activePanel) {
        PANEL_SPRING_APIS[apiKey].start(transition);
        OPACITY_SPRING_APIS[apiKey].start(opacityFadeOut);
      } else {
        PANEL_SPRING_APIS[apiKey].start(initialTransition);
        OPACITY_SPRING_APIS[apiKey].start(opacityFadeIn);
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
        OPACITY_SPRING_APIS[apiKey].start(opacityFadeOut);
      } else {
        PANEL_SPRING_APIS[apiKey].start(startingTransition);
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
          > div {
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
      />
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
          > div {
            background-color: #f547be;
          }
        `}
      />
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
          > div {
            background-color: #2bdfe3;
          }
        `}
      />
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
        background-position: center bottom -60px;
        padding-top: 5rem;
        min-width: 240px;
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
    </animated.div>
  );
};

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
export default HomepageSlabs;
