import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Collapser from './Collapser';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const collapserIcon = (isOpen) => css`
  margin-left: auto;
  transition: transform 0.6s ease;
  color: var(--accent-text-color);
  ${isOpen &&
  `
transform: rotate(180deg);`}
`;

const CollapserRow = ({ title, id, openByDefault, children }) => {
  const [isOpen, toggleOpen] = useState(openByDefault);
  const [setHeight, setHeightState] = useState(isOpen ? 'auto' : '0px');

  const content = useRef(null);
  const toggleCollapser = () => {
    toggleOpen(!isOpen);
    setHeightState(isOpen ? '0px' : `${content.current.scrollHeight}px`);
  };

  return (
    <Collapser>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          border-radius: 3px;
          margin-bottom: 8px;
        `}
      >
        <button
          onClick={toggleCollapser}
          type="button"
          css={css`
            cursor: pointer;
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            background-color: inherit;
            border-radius: 3px;
            display: flex;
            align-items: center;
            transition: background-color 0.6s ease;
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
              font-family: 'Open Sans', sans-serif;
              font-weight: 600;
              font-size: 14px;
              text-align: left;
              margin-top: 0;
              margin-bottom: 0;
              font-size: 16px;
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
          style={{ maxHeight: `${setHeight}` }}
          css={css`
            overflow: hidden;
            transition: max-height 0.6s ease;
          `}
        >
          {children}
        </div>
      </div>
    </Collapser>
  );
};

CollapserRow.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  openByDefault: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CollapserRow.defaultProps = {
  openByDefault: false,
};

export default CollapserRow;
