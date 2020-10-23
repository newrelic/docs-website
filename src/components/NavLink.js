import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const NavLink = ({
  as: Element = Link,
  active,
  icon: LinkIcon,
  title,
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
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        margin: 0 -1rem;
        font-size: 0.875rem;

        &:hover {
          color: var(--primary-text-hover-color);
        }

        ${active &&
        css`
          background: var(--color-neutrals-100);
          border-radius: 0.25rem;

          .dark-mode & {
            background: var(--color-dark-100);
          }
        `}
      `}
    >
      {LinkIcon && (
        <LinkIcon
          size="1.75rem"
          css={css`
            margin-right: 0.5rem;
          `}
        />
      )}

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

NavLink.propTypes = {
  as: PropTypes.elementType,
  active: PropTypes.bool,
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  expandable: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default NavLink;
