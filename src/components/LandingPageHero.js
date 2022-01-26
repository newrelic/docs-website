import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const LandingPageHero = ({ children }) => {
  children = Children.toArray(children);

  const content = children[0];

  if (content.props.mdxType !== 'HeroContent') {
    throw new Error(
      'The first child to `LandingPageHero` must be `HeroContent`'
    );
  }

  const rightColumn = children.slice(1);

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
      <div>{content}</div>
      <div>{rightColumn}</div>
    </div>
  );
};

LandingPageHero.propTypes = {
  children: PropTypes.node,
};

export default LandingPageHero;
