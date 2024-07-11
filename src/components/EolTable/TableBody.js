import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const TableBody = ({ tableData, headers }) => {
  return (
    <tbody
      css={css`
        tr {
          vertical-align: top;
          border: 2px solid grey;
        }
      `}
    >
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {headers.map(({ contentId }) => {
              return <td key={contentId}>{data[contentId]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableBody;
