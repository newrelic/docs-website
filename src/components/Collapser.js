import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon } from '@newrelic/gatsby-theme-newrelic';
import { animated, useSpring } from 'react-spring';

const collapserIcon = (isOpen) => css`
  margin-left: auto;
  transition: transform 0.6s ease;
  color: var(--accent-text-color);
  ${isOpen &&
  `
transform: rotate(180deg);`}
`;

const Collapser = ({ title, id, openByDefault, className, children }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(openByDefault);
  const [height, setHeight] = useState(0);
  const style = useSpring({ height: isOpen ? height : 0 });

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();

    setHeight(height);
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
        style={style}
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
