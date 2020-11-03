import React, { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon, PageTools } from '@newrelic/gatsby-theme-newrelic';
import useActiveHash from '../hooks/useActiveHash';
import { usePrevious } from 'react-use';

const prop = (name) => (obj) => obj[name];

const TableOfContents = ({ headings }) => {
  const raf = useRef();
  const navRef = useRef();
  const activeRef = useRef();
  const headingIds = useMemo(() => headings.map(prop('id')), [headings]);
  const activeHash = useActiveHash(headingIds);
  const previousActiveHash = usePrevious(activeHash);
  const changedActiveHash = activeHash !== previousActiveHash;

  useEffect(() => {
    if (!activeRef.current) {
      return;
    }

    const navRect = navRef.current.getBoundingClientRect();
    const activeElementRect = activeRef.current.getBoundingClientRect();

    const scrollTop = activeElementRect.top - navRect.top;
    const offset = activeRef.current.offsetTop - navRef.current.offsetTop;
    const bottom = scrollTop + activeElementRect.height;
    const isVisible = bottom <= navRect.height && scrollTop > 0;

    if (!isVisible) {
      cancelAnimationFrame(raf.current);

      raf.current = requestAnimationFrame(() => {
        navRef.current.scrollTo({
          top: offset - navRect.height / 2,
          behavior: 'smooth',
        });
      });
    }
  }, [changedActiveHash]);

  return headings.length === 0 ? null : (
    <PageTools.Section>
      <PageTools.Title>On this page</PageTools.Title>
      <nav
        ref={navRef}
        css={css`
          max-height: 60vh;
          overflow-y: auto;
        `}
      >
        <ul
          css={css`
            list-style: none;
            padding: 0;
            margin: 0;
          `}
        >
          {headings.map(({ id, text }) => {
            const isActive = activeHash === id;

            return (
              <li key={id}>
                <a
                  ref={isActive ? activeRef : null}
                  href={`#${id}`}
                  className={isActive ? 'active' : null}
                  css={css`
                    display: flex;
                    align-items: center;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    padding: 0.5rem 0;
                    color: var(--primary-text-color);

                    &.active {
                      background: var(--color-neutrals-100);
                      padding-left: 0.5rem;
                      padding-right: 0.5rem;

                      .dark-mode & {
                        background: var(--color-dark-100);
                      }
                    }
                  `}
                >
                  <Icon
                    name={Icon.TYPE.ARROW_LEFT}
                    css={css`
                      display: ${isActive ? 'inline-block' : 'none'};
                      margin-right: 0.5rem;
                    `}
                  />
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </PageTools.Section>
  );
};

TableOfContents.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default TableOfContents;
