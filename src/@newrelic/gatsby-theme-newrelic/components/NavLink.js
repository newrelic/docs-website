/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Icon, Link, useTessen } from '@newrelic/gatsby-theme-newrelic';

const NavLink = ({
  active,
  children,
  className,
  to,
  icon,
  label,
  isExpanded,
  expandable,
  onClick,
  onToggle,
  mobileBreakpoint,
  ...props
}) => {
  const tessen = useTessen();

  const isExternalLink = to && !to.startsWith('/');
  const Element = to ? Link : 'div';

  return (
    <Element
      to={to}
      onClick={onClick}
      instrumentation={{
        navInteractionType: 'leftNavLinkClick',
      }}
      className={className}
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: 0.2s ease-out;
        padding: 0.5rem var(--nav-link-padding);
        margin: 0 calc(var(--nav-link-padding) * -1);
        font-size: 0.875rem;
        text-decoration: none;
        border-radius: 0.25rem;

        &:hover {
          color: var(--secondary-text-color);
        }

        ${mobileBreakpoint &&
        css`
          @media screen and (max-width: ${mobileBreakpoint}) {
            border-radius: 0;
            border-left: var(--border-width) solid transparent;
          }
        `}

        ${active &&
        css`
          background: var(--nav-highlight);
        `}
      `}
      {...props}
    >
      <div>
        {icon && (
          <Icon
            name={icon}
            size="var(--icon-size)"
            css={css`
              margin-right: var(--icon-spacing);
            `}
          />
        )}

        <span
          css={css`
            flex: 1;
          `}
        >
          {children}
        </span>
        {label && <NavLabel>{label}</NavLabel>}
      </div>

      {isExternalLink ? (
        <Icon name="fe-external-link" size="1rem" />
      ) : expandable ? (
        <Button
          size={Button.SIZE.EXTRA_SMALL}
          variant={Button.VARIANT.PLAIN}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle && onToggle();
            tessen.track({
              eventName: 'navLinkInteraction',
              category: 'NavLink',
              name: 'navLinkClick',
              navInteractionType: 'leftNavMenuToggle',
              to,
              isExpanded,
            });
          }}
          css={css`
            font-size: 1rem;
            padding: 0.25rem;
            transform: translateX(0.25rem);
          `}
        >
          <Icon
            name="fe-chevron-down"
            css={css`
              transform: rotate(${isExpanded ? 0 : -90}deg);
              transition: 0.2s ease-out;
            `}
          />
        </Button>
      ) : null}
    </Element>
  );
};

const NavLabel = styled.p`
  display: inline;
  margin-left: 0.5rem;
  padding: 0 0.25rem;
  background: #e1edff;
  border-radius: 3px;
  color: #0b6acb;
  font-size: 0.75rem;
  font-weight: 400;
`;

NavLink.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  expandable: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  onToggle: PropTypes.func,
  mobileBreakpoint: PropTypes.string,
};

export default NavLink;
