import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { rgba } from 'polished';
import { css } from '@emotion/react';
import {
  Portal,
  useKeyPress,
  useScrollFreeze,
} from '@newrelic/gatsby-theme-newrelic';

const Lightbox = ({ children }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const transitions = useTransition(lightboxOpen, {
    config: { tension: 220, friction: 22 },
    from: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.96)' },
  });
  useScrollFreeze(lightboxOpen);
  useKeyPress('Escape', () => setLightboxOpen(false), {
    ignoreTextInput: false,
  });

  return (
    <>
      <div role="img" onClick={() => setLightboxOpen(true)}>
        {children}
      </div>
      {lightboxOpen &&
        transitions(
          (style, item) =>
            item && (
              <Portal>
                <animated.div
                  style={{ opacity: style.opacity }}
                  css={css`
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 900;
                    background: ${rgba('#d5d7d7', 0.75)};

                    .dark-mode & {
                      background: ${rgba('#3a444b', 0.75)};
                    }
                  `}
                  onClick={() => setLightboxOpen(false)}
                >
                  <animated.div
                    onClick={(e) => e.stopPropagation()}
                    style={style}
                    css={css`
                      --horizontal-spacing: 1rem;

                      z-index: 101;
                      width: 100%;
                      max-width: 90%;
                    `}
                  >
                    {children}
                  </animated.div>
                </animated.div>
              </Portal>
            )
        )}
    </>
  );
};

export default Lightbox;
