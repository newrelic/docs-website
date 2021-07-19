import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { useMedia } from 'react-use';
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

  const headingIds = useMemo(() => headings.map(prop('id')), [headings]);
  const activeHash = useActiveHash(headingIds);
  const isMobileScreen = useMedia('(max-width: 1240px)');

  return headings.length === 0 ? null : (
    <PageTools.Section>
      <PageTools.Title>On this page</PageTools.Title>
      <nav
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
              <li
                key={id}
                css={css`
                  margin: 0;
                `}
              >
                <a
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
                    text-decoration: none;

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
                    name="fe-arrow-left"
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
