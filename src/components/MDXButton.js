import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
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
      className="MDXButton"
      css={css`
        display: flex;
        ${styles.alignment[alignment]}
        margin-bottom: 2rem;
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
