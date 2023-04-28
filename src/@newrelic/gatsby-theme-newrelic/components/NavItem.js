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
import { Flipped } from 'react-flip-toolkit';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const NavItem = ({
  onExpand,
  page,
  name,
  __parent: parent,
  __depth: depth = 0,
  __root: root,
  ...rest
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
  const hasChildPages = page.pages?.length > 0;
  const isCurrentPage = page.url === pathname && !hasChildPages;
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
      {...rest}
    >
      <NavLink
        name={hasChildPages ? '' : name}
        active={isCurrentPage}
        to={hasChildPages ? null : page.url}
        icon={page.icon}
        label={page.label}
        isExpanded={isExpanded}
        expandable={hasChildPages}
        onClick={() => {
          onExpand(page.flipId);
          setIsExpanded(toggle);
        }}
        onToggle={() => {
          onExpand(page.flipId);
          setIsExpanded(toggle);
        }}
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
          <Flipped
            // we need to avoid animating if the current item's parent is animating,
            // otherwise it will try to double animate to its new position
            // and it looks wack.
            // this makes sure we're only animating either siblings under
            // the same parent, or items at the same depth under a different parent
            // but within the same ancestry tree.
            // items without a shared ancestor at depth 0 are also animated,
            // these are the top-level nav items.
            shouldFlip={(_prev, current) =>
              (sameDepth(current, child.flipId) &&
                sameParentFlipId(current, child.flipId)) ||
              layersDeep(child.flipId) ===
                sharedAncestorDepth(current, child.flipId)
            }
            flipId={child.flipId}
            key={child.url || child.title}
            translate
          >
            <NavItem
              name={`${child.url}/`}
              page={child}
              onExpand={onExpand}
              __parent={page}
              __depth={depth + 1}
              __root={depth === 0 ? page : root}
            />
          </Flipped>
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

const layersDeep = (flipId) => flipId.length - 1;

const parentFlipId = (flipId) => flipId.slice(0, -1);

const sameDepth = (flipIdA, flipIdB) =>
  layersDeep(flipIdA) === layersDeep(flipIdB);

const sameParentFlipId = (flipIdA, flipIdB) =>
  parentFlipId(flipIdA).join('') === parentFlipId(flipIdB).join('');

const sharedAncestorDepth = (flipIdA, flipIdB) => {
  let depth = -1;
  const length = flipIdA.length;

  while (true) {
    if (flipIdA[depth + 1] === flipIdB[depth + 1] && depth < length) {
      depth += 1;
    } else {
      return depth + 1;
    }
  }
};

export default NavItem;
