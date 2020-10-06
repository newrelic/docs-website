import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon } from '@newrelic/gatsby-theme-newrelic';
// Use the renderprops API since we are animating 'auto'
// https://www.react-spring.io/docs/hooks/basics
import { animated, Spring } from 'react-spring/renderprops';

const collapserIcon = (isOpen) => css`
  margin-left: auto;
  transition: transform 0.6s ease;
  color: var(--accent-text-color);
  ${isOpen &&
  `
transform: rotate(180deg);`}
`;

const Collapser = ({ title, id, openByDefault, className, children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(openByDefault);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
          border-bottom: ${isOpen || showBorder
            ? '1px solid var(--border-color)'
            : 'none'};

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

      <Spring
        to={{ height: isOpen ? 'auto' : 0 }}
        onFrame={({ height }) => {
          // Hide the bottom border on the button only when the collapser is
          // expanded or animating closed. We want to hide it when its almost
          // closed to avoid showing a double bottom border.
          if (height <= 1.5) {
            setShowBorder(false);
          }
        }}
        onStart={() => setShowBorder(isMounted && true)}
      >
        {(style) => (
          <animated.div
            style={style}
            css={css`
              overflow: hidden;
            `}
          >
            <div
              css={css`
                padding: 1rem;
              `}
            >
              {children}
            </div>
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

Collapser.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  openByDefault: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Collapser.defaultProps = {
  openByDefault: false,
};

export default Collapser;
