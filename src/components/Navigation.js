import React, { useMemo, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';
import { Flipped, Flipper } from 'react-flip-toolkit';

const Navigation = ({ nav, className }) => {
  const subNav = nav.url === '/docs/style-guide';
  const [flipKey, setFlipKey] = useState();
  const lastClickedId = useRef(null);

  const keyedNav = useMemo(
    () => ({
      ...nav,
      pages: addFlipIds(nav.pages),
    }),
    [nav]
  );

  const updateFlipKey = (clickedItemId) => {
    lastClickedId.current = clickedItemId;
    // using `Symbol` here ensures the `flipKey` changes on every update
    // eslint-disable-next-line symbol-description
    setFlipKey(Symbol());
  };

  return (
    <nav
      role="navigation"
      aria-label="Navigation"
      css={css`
        height: 100%;
        overflow: auto;
        margin: 16px 0;
        padding-bottom: 2rem;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        span,
        svg {
          color: #afe2e3;
        }
      `}
      id="nav"
      className={className}
    >
      <Flipper decisionData={lastClickedId.current} flipKey={flipKey}>
        {keyedNav.pages.map((page) => {
          if (page.title === 'section-break') {
            return <hr />;
          }
          if (page.title && !page.url && !subNav) {
            return (
              <Flipped flipId={page.flipId} translate>
                <p
                  css={css`
                    color: #1dcad3;
                    margin: 0;
                    font-size: 14px;
                    margin-top: 1rem;
                  `}
                >
                  {page.title.toUpperCase()}
                </p>
              </Flipped>
            );
          }
          return (
            <Flipped flipId={page.flipId} key={page.title} opacity translate>
              <NavItem
                onExpand={updateFlipKey}
                name={`${page.url}/`}
                page={page}
              />
            </Flipped>
          );
        })}
      </Flipper>
    </nav>
  );
};

const addFlipIds = (pages, parentKey = []) =>
  pages?.map((page) => ({
    ...page,
    flipId: [...parentKey, page.title],
    pages: addFlipIds(page.pages, [...parentKey, page.title]),
  }));

export default Navigation;
