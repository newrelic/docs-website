import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Collapser from './Collapser';
import Chevron from './Chevron';
// import './Collapser.css';

const collapserIcon = (isOpen) => css`
  margin-left: auto;
  transition: transform 0.6s ease;
  ${isOpen &&
  `
transform: rotate(180deg);`}
`;

const CollapserRow = ({ title, isOpen, children }) => {
  const [setOpen, toggleOpen] = useState(isOpen);
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('collapser__icon');

  const content = useRef(null);
  const toggleCollapser = () => {
    toggleOpen(setOpen ? false : true);
    // setActiveState(isOpen === '' ? 'open' : '');
    setHeightState(setOpen ? '0px' : `${content.current.scrollHeight}px`);
    // setRotateState(setOpen ? 'collapser__icon' : 'collapser__icon rotate');
  };

  return (
    <Collapser>
      <div
        className="collapser__section"
        css={css`
          display: flex;
          flex-direction: column;
          border-radius: 3px;
          margin-bottom: 8px;
        `}
      >
        <button
          className={`collapser ${setOpen}`}
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
          <p
            className="collapser__title"
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
          </p>
          <Chevron width={20} fill={'#777'} css={collapserIcon(setOpen)} />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="collapser__content"
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
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CollapserRow.defaultProps = {
  isOpen: false,
};

export default CollapserRow;
