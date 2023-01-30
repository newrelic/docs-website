import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTabsContext from './useTabsContext';

const BarItem = ({
  className,
  index,
  children,
  id,
  disabled,
  onClick: onTabClick,
}) => {
  const [currentTab, setCurrentTab] = useTabsContext();
  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  return (
    <button
      role="tab"
      aria-controls={id}
      type="button"
      onClick={() => {
        !disabled && setCurrentTab(id);
        onTabClick && onTabClick(id);
      }}
      css={css`
        border: 0;
        background: none;
        color: var(--muted-text);
        flex-grow: 1;
        text-align: center;
        padding: 0.5em;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;

        &:hover {
          color: var(--primary-text-color);
        }

        ${isSelected &&
        css`
          color: var(--primary-text-color);
          border-bottom: var(--brand-button-primary-accent) solid 3px;

          .dark-mode & {
            border-bottom: var(--brand-button-primary-accent-hover) solid 3px;
          }
        `}
      `}
      className={className}
    >
      {children}
    </button>
  );
};

BarItem.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BarItem;
