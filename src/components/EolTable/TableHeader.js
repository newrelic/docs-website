import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';

const TableHeader = ({
  headers,
  setSortDirection,
  setSortField,
  sortDirection,
  sortField,
}) => {
  return (
    <thead
      css={css`
        margin-bottom: 2rem;

        th {
          text-align: left;
        }
      `}
    >
      <tr>
        {headers.map(({ label, contentId, sort = false }) => {
          const isActiveSort = sortField === contentId;
          return (
            <th key={contentId}>
              {sort ? (
                <Button
                  variant={Button.VARIANT.PLAIN}
                  onClick={() => {
                    if (sortField === contentId) {
                      setSortDirection(DIRECTION.opposite(sortDirection));
                    } else {
                      setSortField(contentId);
                      setSortDirection(DIRECTION.ASC);
                    }
                  }}
                  css={css`
                    background: none;
                  `}
                >
                  <b
                    css={css`
                      margin: 0 0.25rem;
                    `}
                  >
                    {label}
                  </b>
                  <Icon
                    name={
                      isActiveSort && sortDirection === DIRECTION.DESC
                        ? 'fe-arrow-up'
                        : 'fe-arrow-down'
                    }
                    size="1rem"
                    css={css`
                      position: relative;
                      top: 1px;
                      stroke: ${isActiveSort ? '#00ac69' : 'grey'};
                      stroke-width: 4px;
                    `}
                  />
                </Button>
              ) : (
                <b>{label}</b>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      contentId: PropTypes.string.isRequired,
      sort: PropTypes.bool,
    })
  ).isRequired,
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
};

export const DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
};
DIRECTION.opposite = (direction) =>
  direction === DIRECTION.ASC ? DIRECTION.DESC : DIRECTION.ASC;

export default TableHeader;
