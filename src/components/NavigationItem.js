import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const NavLink = ({
  as: Element = 'div',
  title,
  depth,
  isExpanded,
  expandable,
  onClick,
  ...props
}) => {
  return (
    <Element
      {...props}
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        color: var(--primary-text-color);
        transition: 0.2s ease-out;
        padding: 0.5rem 0;
        padding-left: ${depth * 1}rem;

        &:hover {
          color: var(--primary-text-hover-color);
        }
      `}
    >
      <span
        css={css`
          flex: 1;
        `}
      >
        {title}
      </span>

      {expandable && (
        <Icon
          name="chevron-down"
          size="1rem"
          css={css`
            transform: rotate(${isExpanded ? 0 : -90}deg);
            transition: 0.2s ease-out;
          `}
        />
      )}
    </Element>
  );
};

const NavigationItem = ({ page, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const linkProps = {
    depth,
    expandable: page.pages?.length > 0,
    title: page.title,
    onClick: () => setIsExpanded((expanded) => !expanded),
  };

  return (
    <>
      {page.path ? (
        <NavLink as={Link} to={page.path} {...linkProps} />
      ) : (
        <NavLink {...linkProps} />
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
