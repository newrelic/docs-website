import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon, PageTools } from '@newrelic/gatsby-theme-newrelic';
import toString from 'mdast-util-to-string';
import GithubSlugger from 'github-slugger';

const slugs = new GithubSlugger();

const TableOfContents = ({ page }) => (
  <PageTools.Section>
    <PageTools.Title>On this page</PageTools.Title>
    <nav>
      <ul
        css={css`
          list-style: none;
          padding: 0;
          margin: 0;
        `}
      >
        {page.mdxAST.children
          .filter((node) => node.type === 'heading' && node.depth === 2)
          .map((heading, idx) => {
            const text = toString(heading);
            const isSelected = idx === 0;

            return (
              <li key={idx}>
                <a
                  href={`#${slugs.slug(text)}`}
                  css={css`
                    display: flex;
                    align-items: center;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    padding: 0.5rem 0;
                    color: var(--primary-text-color);
                    transition: all 0.2s ease-out;

                    ${isSelected &&
                    css`
                      background: var(--color-neutrals-100);
                      padding-left: 0.5rem;
                      padding-right: 0.5rem;

                      .dark-mode & {
                        background: var(--color-dark-100);
                      }
                    `}
                  `}
                >
                  {isSelected && (
                    <Icon
                      name={Icon.TYPE.ARROW_LEFT}
                      css={css`
                        margin-right: 0.5rem;
                      `}
                    />
                  )}
                  {text}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  </PageTools.Section>
);

TableOfContents.propTypes = {
  page: PropTypes.object,
};

export const query = graphql`
  fragment TableOfContents_page on Mdx {
    mdxAST
  }
`;

export default TableOfContents;
