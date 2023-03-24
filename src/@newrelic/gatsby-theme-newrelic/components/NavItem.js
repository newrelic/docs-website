import React, { useEffect, useLayoutEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';

import {
  NavLink,
  TextHighlight,
  usePrevious,
  useLocale,
  useNavigation,
  stripTrailingSlash,
} from '@newrelic/gatsby-theme-newrelic';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const NavItem = ({
  page,
  name,
  __parent: parent,
  __depth: depth = 0,
  __root: root,
}) => {
  const locale = useLocale();
  const location = useLocation();
  const { searchTerm } = useNavigation();
  const matchesSearch = searchTerm
    ? matchesSearchTerm(page, searchTerm)
    : false;
  const pathname = stripTrailingSlash(location.pathname).replace(
    new RegExp(`\\/${locale.locale}(?=\\/)`),
    ''
  );
  const containsCurrentPage = useMemo(() => containsPage(page, pathname), [
    page,
    pathname,
  ]);
  const isCurrentPage = page.url === pathname;
  const shouldExpand = isCurrentPage || containsCurrentPage;
  const hasChangedPage = pathname !== usePrevious(pathname);
  const [isExpanded, setIsExpanded] = useState(shouldExpand);
  const toggle = (expanded) => !expanded;

  const {
    site: {
      layout: { mobileBreakpoint },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          mobileBreakpoint
        }
      }
    }
  `);

  useEffect(() => {
    if (hasChangedPage) {
      setIsExpanded(shouldExpand);
    }
  }, [hasChangedPage, shouldExpand]);

  useEffect(() => {
    if (matchesSearch && !shouldExpand) {
      setIsExpanded(true);
    }
  }, [matchesSearch, shouldExpand, searchTerm]);

  useIsomorphicLayoutEffect(() => {
    if (!searchTerm) {
      setIsExpanded(shouldExpand);
    }
  }, [searchTerm, shouldExpand]);

  return (
    <div
      css={css`
        --icon-size: 1.5rem;
        --icon-spacing: 0.5rem;
        --nav-link-padding: 1rem;
        display: ${matchesSearch || !searchTerm ? 'block' : 'none'};
        padding-left: ${parent == null ? '8px' : 'var(--nav-link-padding)'};
        border-left: ${parent == null ? 'none' : 'solid #0D374A 2px'};
        span {
          font-weight: 700;
        }
        ${depth > 0 &&
        css`
          span {
            font-weight: 600;
          }
        `}
        ${depth > 1 &&
        css`
          border-left: solid rgba(231, 246, 246, 0.1) 2px;
          span {
            font-weight: 500;
          }
        `}
        a > div > span {
          font-weight: 400;
        }

        ${mobileBreakpoint &&
        css`
          @media screen and (max-width: ${mobileBreakpoint}) {
            padding-left: 0;
          }
        `}
      `}
    >
      <NavLink
        name={name}
        active={isCurrentPage}
        to={page.pages?.length > 0 ? null : page.url}
        icon={page.icon}
        label={page.label}
        isExpanded={isExpanded}
        expandable={page.pages?.length > 0}
        onClick={() => {
          setIsExpanded(() => !isExpanded);
        }}
        onToggle={() => setIsExpanded(toggle)}
        mobileBreakpoint={mobileBreakpoint}
        css={css`
          padding-left: ${root?.icon
            ? 'calc(var(--icon-size) + var(--icon-spacing))'
            : 'var(--nav-link-padding)'};

          ${mobileBreakpoint &&
          css`
            @media screen and (max-width: ${mobileBreakpoint}) {
              --border-width: 4px;

              padding-left: ${getMobilePadding({ parent, depth })};
            }
          `}
          ${isCurrentPage &&
          css`
            background: #0d374a;
          `}
        `}
      >
        {searchTerm ? (
          <TextHighlight text={page.title} match={searchTerm} />
        ) : (
          page.title
        )}
      </NavLink>

      {isExpanded &&
        page.pages?.map((child) => (
          <NavItem
            name={`${child.url}/`}
            key={child.url || child.title}
            page={child}
            __parent={page}
            __depth={depth + 1}
            __root={depth === 0 ? page : root}
          />
        ))}
    </div>
  );
};

const page = PropTypes.shape({
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.object),
});

NavItem.propTypes = {
  __parent: page,
  __depth: PropTypes.number,
  page: page.isRequired,
  __root: page,
};

const getMobilePadding = ({ parent, depth }) => {
  if (parent == null) {
    return 'calc(var(--nav-link-padding) - var(--border-width))';
  }

  return parent?.icon
    ? `calc(${depth} * var(--nav-link-padding) + var(--icon-size) + var(--icon-spacing) - var(--border-width))`
    : `calc(${depth + 1} * var(--nav-link-padding) - var(--border-width))`;
};

const containsPage = (page, url) => {
  if (page.url === url) {
    return true;
  }

  if (page.pages == null || page.pages.length === 0) {
    return false;
  }

  return page.pages.some((child) => containsPage(child, url));
};

const matchesSearchTerm = (page, searchTerm) =>
  new RegExp(searchTerm, 'i').test(page.title) ||
  (page.pages || []).some((child) => matchesSearchTerm(child, searchTerm));

export default NavItem;
