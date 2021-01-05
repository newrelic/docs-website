import React, { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { useMedia, usePrevious } from 'react-use';
import { Icon, PageTools } from '@newrelic/gatsby-theme-newrelic';
import useActiveHash from '../hooks/useActiveHash';
import GithubSlugger from 'github-slugger';
import { parseHeading } from '../../plugins/gatsby-remark-custom-heading-ids/utils/heading';

const prop = (name) => (obj) => obj[name];

const TableOfContents = ({ page }) => {
  const { mdxAST } = page;

  const headings = useMemo(() => {
    const slugs = new GithubSlugger();

    return mdxAST.children
      .filter(
        (node) =>
          node.type === 'heading' &&
          node.depth === 2 &&
          node.children.length > 0
      )
      .map((heading) => {
        const { id, text } = parseHeading(heading);

        return { id: id || slugs.slug(text), text };
      });
  }, [mdxAST]);

  const raf = useRef();
  const navRef = useRef();
  const activeRef = useRef();
  const headingIds = useMemo(() => headings.map(prop('id')), [headings]);
  const activeHash = useActiveHash(headingIds);
  const previousActiveHash = usePrevious(activeHash);
  const changedActiveHash = activeHash !== previousActiveHash;

  const isMobileScreen = useMedia('(max-width: 1240px)');

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
                  className={isActive && !isMobileScreen ? 'active' : null}
                  css={css`
                    display: flex;
                    align-items: center;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    padding: 0.5rem 0;
                    color: var(--primary-text-color);
                    transition: color 0.2s ease-out;

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
                      display: ${isActive && !isMobileScreen
                        ? 'inline-block'
                        : 'none'};
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
  page: PropTypes.shape({ mdxAST: PropTypes.object }).isRequired,
};

export const query = graphql`
  fragment TableOfContents_page on Mdx {
    mdxAST
  }
`;

export default TableOfContents;
