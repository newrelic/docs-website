import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import NavLink from './NavLink';

const NavigationItem = ({ page, icon, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
        <NavLink to={page.path} {...linkProps} />
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

export default NavigationItem;
