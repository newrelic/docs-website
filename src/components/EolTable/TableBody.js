import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const TableBody = ({ body, headers }) => {
  return (
    <tbody
      css={css`
        tr {
          vertical-align: top;
          border: 2px solid grey;
        }
      `}
    >
      {body.map((content) => {
        return (
          <tr key={content.id}>
            {headers.map(({ contentId }) => {
              return <td key={contentId}>{content[contentId]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
TableBody.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      contentId: PropTypes.string.isRequired,
      sort: PropTypes.bool,
    })
  ).isRequired,
  body: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))
  ).isRequired,
};

export default TableBody;
