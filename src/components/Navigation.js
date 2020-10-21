import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const dummyData = {
  name: 'Hello',
  path: '/hello',
  children: {
    name: 'Another One!',
    path: '/link',
    children: {
      name: 'Helllllllooooo',
      path: '/hellooooooo',
    },
  },
};

const TOPICS = [
  'Full Stack Observability',
  'Telemetry Data Platform',
  'Alerts and Applied Intelligence',
];

// navigation of dummy data is 1

const Navigation = ({ pages }) => {
  const [isNestedView, setIsNestedView] = useState(false);
  return (
    <nav role="navigation" aria-label="Navigation">
      {pages.map((topLevelPage) => {
        return (
          <NavigationItem
            onClick={() => setIsNestedView(true)}
            page={topLevelPage}
            isNestedView={isNestedView}
          />
        );
      })}
    </nav>
  );
};

const noop = () => {};

const NavigationItem = ({ page, depthLevel = 0, isNestedView, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, path, children } = page;

  if (depthLevel === 0 && !isNestedView) {
    //can add logic for whether it has an icon or not later
    return (
      <div onClick={() => onClick()}>
        <Link to={path}>{name}</Link>
      </div>
    );
  }

  if (isNestedView && depthLevel > 0) {
    //return nestedView Items
    return (
      <>
        <div onClick={() => setIsExpanded(!isExpanded)}>
          <Link to={path}>{name}</Link>
        </div>
        {isExpanded &&
          children &&
          children.map((child) => (
            <NavigationItem
              page={child}
              onClick={noop}
              depthLevel={depthLevel + 1}
              isNestedView={true}
            />
          ))}
      </>
    );
  }
};

// map out externally??
