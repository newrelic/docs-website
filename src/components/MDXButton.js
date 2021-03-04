import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button } from '@newrelic/gatsby-theme-newrelic';

const ALIGNMENTS = {
  LEFT: 'left',
  CENTER: 'center',
  INLINE: 'inline',
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
};

const MDXButton = ({ alignment = 'center', ...props }) => {
  if (alignment === ALIGNMENTS.INLINE) {
    return <Button {...props} />;
  }

  return (
    <div
      css={css`
        display: flex;
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
        ${styles.alignment[alignment]}
      `}
    >
      <Button {...props} />
    </div>
  );
};
MDXButton.ALIGNMENT = ALIGNMENTS;

MDXButton.propTypes = {
  alignment: PropTypes.oneOf(Object.values(MDXButton.ALIGNMENT)),
};

export default MDXButton;
