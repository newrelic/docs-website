import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const TableOfContentsContainer = ({ children, dangerouslySetInnerHTML }) => (
  <div
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    css={css`
      h1,
      h2,
      h3 {
        font-weight: bold;
      }

      h1,
      h2 {
        &:not(:first-child) {
          margin-top: 3rem;
        }
      }

      h3 {
        margin-top: 1rem;
      }

      h2 {
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--divider-color);
      }

      ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-left: 1rem;

        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }

      li:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    `}
  >
    {children}
  </div>
);

TableOfContentsContainer.propTypes = {
  children: PropTypes.node,
  dangerouslySetInnerHTML: PropTypes.object,
};

export default TableOfContentsContainer;
