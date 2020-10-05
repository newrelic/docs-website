import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Table = () => (
  <table
    css={css`
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      text-align: left;
      td,
      th {
        padding: 0.5rem;
      }
      th {
        border-bottom: 3px solid var(--color-brand-600);
      }
      tbody {
        tr {
          border-bottom: 1px solid var(--border-color);
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
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jill</td>
        <td>
          <div>
            <ul>
              <li>hello there</li>
            </ul>
          </div>
        </td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Jill</td>
        <td>
          <div>
            <ul>
              <li>hello there</li>
            </ul>
          </div>
        </td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </tbody>
  </table>
);

//accept data props
//if has data props, check children for the prop values that match the tables

export default Table;
