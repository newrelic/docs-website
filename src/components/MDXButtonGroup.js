import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const ALIGNMENTS = {
  CENTER: 'center',
  LEFT: 'left',
};
const DIRECTIONS = {
  ROW: 'row',
  COLUMN: 'column',
};

const MDXButtonGroup = ({
  children,
  alignment = 'center',
  direction = 'row',
}) => {
  return (
    <div
      css={css`
        display: flex;
        ${styles.alignment[alignment]}
        ${styles.direction[direction]}
        div {
          display: block;
        }
      `}
    >
      {children}
    </div>
  );
};

const styles = {
  alignment: {
    [ALIGNMENTS.CENTER]: css`
      justify-content: center;
    `,
    [ALIGNMENTS.LEFT]: css`
      justify-content: flex-start;
    `,
  },
  direction: {
    [DIRECTIONS.ROW]: css`
      flex-direction: row;
      align-items: baseline;
      div {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    `,
    [DIRECTIONS.COLUMN]: css`
      flex-direction: column;
      div {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    `,
  },
};

MDXButtonGroup.ALIGNMENT = ALIGNMENTS;
MDXButtonGroup.DIRECTION = DIRECTIONS;

MDXButtonGroup.propTypes = {
  alignment: PropTypes.oneOf(Object.values(MDXButtonGroup.ALIGNMENT)),
  direction: PropTypes.oneOf(Object.values(MDXButtonGroup.DIRECTION)),
  children: PropTypes.node.isRequired,
};

export default MDXButtonGroup;
