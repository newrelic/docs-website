import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const collapserIcon = (isOpen) => css`
  margin-left: auto;
  transition: transform 0.6s ease;
  color: var(--accent-text-color);
  ${isOpen &&
  `
transform: rotate(180deg);`}
`;

const Collapser = ({ title, id, openByDefault, children }) => {
  const [isOpen, toggleOpen] = useState(openByDefault);
  const [height, setHeight] = useState(isOpen ? 'auto' : '0px');

  const content = useRef(null);
  const toggleCollapser = () => {
    toggleOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${content.current.scrollHeight}px`);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        margin: 1rem;
      `}
    >
      <button
        onClick={toggleCollapser}
        type="button"
        css={css`
          cursor: pointer;
          padding: 0.75rem;
          background-color: inherit;
          border-radius: 3px;
          display: flex;
          align-items: center;
          transition: background-color 0.6s ease;
          border: 1px solid var(--border-color);
          ${isOpen && `border-bottom: 1px dotted var(--border-color);`}
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
      <div
        ref={content}
        css={css`
          overflow: hidden;
          transition: max-height 0.6s ease;
          max-height: ${height};
          border-left: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          border-right: 1px solid var(--border-color);
          ${!isOpen && `border-bottom: none`}
        `}
      >
        <div
          css={css`
            padding: 1rem;
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Collapser.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  openByDefault: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Collapser.defaultProps = {
  openByDefault: false,
};

export default Collapser;
