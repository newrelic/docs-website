import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const containsImage = (child) => {
  if (child.props?.className === 'gatsby-resp-image-wrapper') {
    return true;
  }

  return Children.toArray(child.props?.children).some(containsImage);
};

const LandingPageHero = ({ children }) => {
  children = Children.toArray(children);

  const imgIdx = children.findIndex(containsImage);
  const leftColumn = children.slice(0, imgIdx);
  const rightColumn = children.slice(imgIdx);

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: var(--site-content-padding);

        @media screen and (max-width: 1200px) {
          grid-template-columns: 1fr;
        }
      `}
    >
      <div>{leftColumn}</div>
      <div>{rightColumn}</div>
    </div>
  );
};

LandingPageHero.propTypes = {
  children: PropTypes.node,
};

export default LandingPageHero;
