import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const dummyTable = () => <></>;

const Table = () => (
  <table
    css={css`
      thead {
        border-bottom: 0.375rem solid #52bbbb;
      }
      width: 700px;
      text-align: left;
      td,
      th {
        padding: 0.5rem;
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
    </tbody>
  </table>
);

//accept data props
//if has data props, check children for the prop values that match the tables

export default Table;
