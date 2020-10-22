import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

const NavigationItem = ({ page, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const linkProps = {
    depth,
    isExpanded,
    expandable: page.pages?.length > 0,
    title: page.title,
    onClick: () => setIsExpanded((expanded) => !expanded),
  };

  return (
    <>
      {page.path ? (
        <NavLink to={page.path} {...linkProps} />
      ) : (
        <NavLink as="div" {...linkProps} />
      )}

      {isExpanded &&
        page.pages?.map((page) => (
          <NavigationItem key={page.title} page={page} depth={depth + 1} />
        ))}
    </>
  );
};

NavigationItem.propTypes = {
  depth: PropTypes.number,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    pages: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default NavigationItem;
