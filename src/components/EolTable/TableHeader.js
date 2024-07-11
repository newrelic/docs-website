import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';

const TableHeader = ({ headers, sortField, setSortField }) => {
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
        {headers.map(({ label, contentId, sort }) => {
          const isActiveSort = sortField === contentId;
          return (
            <th key={contentId}>
              {sort ? (
                <Button
                  onClick={() => setSortField(contentId)}
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
                    name="fe-arrow-down"
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
  children: PropTypes.node.isRequired,
};

export default TableHeader;
