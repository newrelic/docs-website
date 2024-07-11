import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

const EolTable = ({ headers, data, setSortField, sortField }) => {
  return (
    <>
      <table
        css={css`
          width: 100%;
        `}
      >
        <TableHeader
          headers={headers}
          sortField={sortField}
          setSortField={setSortField}
        />
        <TableBody headers={headers} tableData={data} />
      </table>
    </>
  );
};
// EolTable.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default EolTable;
