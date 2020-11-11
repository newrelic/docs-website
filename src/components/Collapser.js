import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon } from '@newrelic/gatsby-theme-newrelic';
import { animated, useSpring } from 'react-spring';
import { usePrevious, useIsomorphicLayoutEffect } from 'react-use';

const collapserIcon = (isOpen) => css`
  margin-left: auto;
  transition: transform 0.6s ease;
  color: var(--accent-text-color);
  ${isOpen && `transform: rotate(180deg);`}
`;

const ResizeObserver = global.ResizeObserver || class ResizeObserver {};

const Collapser = ({ title, id, openByDefault, className, children }) => {
  const [element, ref] = useState();
  const [isOpen, setIsOpen] = useState(openByDefault);
  const [height, setHeight] = useState(0);
  const { height: viewHeight } = useSpring({ height: isOpen ? height : 0 });
  const previousIsOpen = usePrevious(isOpen);

  const observer = useMemo(
    () =>
      new ResizeObserver(([entry]) => {
        // Unfortunatly entry.contentRect does NOT return the box sizing info
        // (border + padding), which leads to an incorrect height when fully
        // expanded. We are using getBoundingClientRect() to get a more accurate
        // height.
        const { height } = entry.target.getBoundingClientRect();

        setHeight(height);
      }),
    []
  );

  useIsomorphicLayoutEffect(() => {
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [element]);

  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        border: 1px solid var(--border-color);
      `}
    >
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        type="button"
        css={css`
          cursor: pointer;
          padding: 0.75rem;
          background-color: inherit;
          display: flex;
          align-items: center;
          transition: background-color 0.6s ease;
          border: none;

          &:hover,
          &:focus {
            background-color: var(--color-neutrals-100);
            outline: none;
            .dark-mode & {
              background-color: var(--color-dark-100);
            }
          }
        `}
      >
        <h5
          id={id}
          css={css`
            font-size: 1rem;
            margin-top: 0;
            margin-bottom: 0;
          `}
        >
          {title}
        </h5>
        <Icon
          name={Icon.TYPE.CHEVRON_DOWN}
          size="1.25rem"
          css={collapserIcon(isOpen)}
        />
      </button>

      <animated.div
        style={{ height: isOpen && previousIsOpen ? 'auto' : viewHeight }}
        css={css`
          overflow: hidden;
        `}
      >
        <div
          ref={ref}
          css={css`
            border-top: 1px solid var(--border-color);
            padding: 1rem;
          `}
        >
          {children}
        </div>
      </animated.div>
    </div>
  );
};

Collapser.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
  openByDefault: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Collapser.defaultProps = {
  openByDefault: false,
};

export default Collapser;
