import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTabsContext from './useTabsContext';
import Select from '../Select';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * `TabBar`s and `TabItem`s can be rendered under the hood with
 * MDXCreateElement, which can potentially be nested multiple times.
 * Trying to render `TabItem`s from MDX directly will render `[object Object]`.
 * This function returns the deepest descendent element,
 * which in the case of `TabItem`s is a string.
 * It expects every element in the chain to have one child, otherwise
 * it returns null since it wouldn't know which child to continue from.
 */
const getDeepestChild = (child) => {
  if (typeof child !== 'object') return child;

  try {
    React.Children.only(child);
  } catch (err) {
    return null;
  }

  if (!child?.props?.children) {
    return child;
  }

  const deeperChild = child.props.children;
  if (deeperChild.props) {
    return getDeepestChild(deeperChild);
  }

  return deeperChild;
};

const MobileTabControl = ({ children, className }) => {
  const [currentTab, setCurrentTab] = useTabsContext();
  // eslint gets angry about using props from React.Children.map
  /* eslint-disable react/prop-types */
  return (
    <Select
      onChange={(e) => {
        setCurrentTab(e.target.value);
      }}
      css={css`
        margin-bottom: 1rem;
      `}
      className={className}
    >
      {React.Children.map(children, ({ props }) => (
        <option
          key={props.id}
          value={props.id}
          selected={props.id === currentTab}
          disabled={props.disabled}
        >
          {getDeepestChild(props.children)}
          {(props.count || props.count === 0) && ` (${props.count})`}
        </option>
      ))}
    </Select>
  );
  /* eslint-enable react/prop-types */
};

MobileTabControl.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Bar = ({ children, className }) => {
  const {
    site: {
      layout: { mobileBreakpoint },
    },
  } = useStaticQuery(graphql`
    query BarQuery {
      site {
        layout {
          mobileBreakpoint
        }
      }
    }
  `);

  return (
    <>
      <MobileTabControl
        css={css`
          display: none;
          @media screen and (max-width: ${mobileBreakpoint}) {
            display: grid;
          }
        `}
      >
        {children}
      </MobileTabControl>
      <div
        className={className}
        role="tablist"
        css={css`
          display: flex;
          width: 100%;
          border-bottom: 1px solid var(--divider-color);
          margin-bottom: 1em;
          overflow: auto;
          @media screen and (max-width: ${mobileBreakpoint}) {
            display: none;
          }
        `}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { ...child.props, index })
        )}
      </div>
    </>
  );
};

Bar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Bar;
