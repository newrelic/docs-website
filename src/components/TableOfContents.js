import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon, PageTools } from '@newrelic/gatsby-theme-newrelic';
import useActiveHash from '../hooks/useActiveHash';

const prop = (name) => (obj) => obj[name];

const TableOfContents = ({ headings }) => {
  const headingIds = useMemo(() => headings.map(prop('id')), [headings]);
  const activeHash = useActiveHash(headingIds);

  return (
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
          {headings.map(({ id, text }) => {
            const isActive = activeHash === id;

            return (
              <li key={id}>
                <a
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
                      background: var(--color-dark-100);
                      padding-left: 0.5rem;
                      padding-right: 0.5rem;
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
