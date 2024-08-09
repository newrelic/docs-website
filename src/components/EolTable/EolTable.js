import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

const EolTable = ({
  body,
  headers,
  setSortDirection,
  setSortField,
  sortDirection,
  sortField,
}) => {
  return (
    <>
      <table
        css={css`
          padding-right: 4rem;
          width: 100%;
        `}
      >
        <TableHeader
          headers={headers}
          sortDirection={sortDirection}
          sortField={sortField}
          setSortDirection={setSortDirection}
          setSortField={setSortField}
        />
        <TableBody headers={headers} body={body} />
      </table>
    </>
  );
};

EolTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
};

export default EolTable;
