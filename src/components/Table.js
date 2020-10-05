import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Table = ({ children }) => (
  <table
    css={css`
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      text-align: left;
      td,
      th {
        padding: 0.5rem 1rem;
      }
      th {
        border-bottom: 3px solid var(--color-brand-600);
      }
      tbody {
        tr {
          border: 1px solid var(--border-color);
          border-top: 0;
        }
        tr:nth-child(odd) {
          background-color: var(--color-neutrals-100);
          .dark-mode & {
            background-color: var(--color-dark-100);
          }
        }
      }
    `}
  >
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
