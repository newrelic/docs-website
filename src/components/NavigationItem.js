import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import NavLink from './NavLink';
import { useMatch, useLocation } from '@reach/router';

const NavigationItem = ({ page, icon, depth = 0 }) => {
  const { pathname } = useLocation();
  const subPage = useMemo(() => findPage(page, pathname), [page, pathname]);
  const isCurrentPage = Boolean(useMatch(page.path || '/'));

  const [isExpanded, setIsExpanded] = useState(
    isCurrentPage || Boolean(subPage)
  );

  const linkProps = {
    icon,
    isExpanded,
    expandable: page.pages?.length > 0,
    title: page.title,
    onClick: () => setIsExpanded((expanded) => !expanded),
  };

  return (
    <div
      css={css`
        padding-left: ${depth === 0 ? '0' : '1rem'};
      `}
    >
      {page.path ? (
        <NavLink active={isCurrentPage} to={page.path} {...linkProps} />
      ) : (
        <NavLink as="div" {...linkProps} />
      )}

      {isExpanded &&
        page.pages?.map((page) => (
          <NavigationItem key={page.title} page={page} depth={depth + 1} />
        ))}
    </div>
  );
};

NavigationItem.propTypes = {
  depth: PropTypes.number,
  icon: PropTypes.elementType,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    pages: PropTypes.arrayOf(PropTypes.object),
  }),
};

const findPage = (page, path) => {
  if (page.path === path) {
    return page;
  }

  if (page.pages == null || page.pages.length === 0) {
    return null;
  }

  return page.pages.find((child) => findPage(child, path));
};

export default NavigationItem;
