import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Collapser from './Collapser';
import Chevron from './Chevron';

const collapserIcon = (isOpen) => css`
  margin-left: auto;
  transition: transform 0.6s ease;
  color: #777;
  ${isOpen &&
  `
transform: rotate(180deg);`}
`;

const CollapserRow = ({ title, id, children }) => {
  const [isOpen, toggleOpen] = useState();
  const [setHeight, setHeightState] = useState('0px');

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
            color: #444;
            cursor: pointer;
            padding: 12px 14px;
            border: 1px solid #616161;
            background-color: inherit;
            border-radius: 3px;
            display: flex;
            align-items: center;
            transition: background-color 0.6s ease;
            &:hover,
            &:active {
              background-color: var(--nr1--base-colors--ui--gray--2);
              cursor: pointer;
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
          <Chevron width={20} css={collapserIcon(isOpen)} />
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
  children: PropTypes.node.isRequired,
};

export default CollapserRow;
