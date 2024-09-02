import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const BookmarkIcon = (props) => (
  <SVG
    {...props}
    viewBox="-.5 -.5 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      d="M8 9.91l-4.756 4.053c-.035.03-.058.035-.073.036a.141.141 0 01-.075-.014.171.171 0 01-.069-.06.187.187 0 01-.027-.107V2.18c0-.12.09-.18.154-.18h9.692c.064 0 .154.06.154.18v11.638a.187.187 0 01-.027.107.172.172 0 01-.07.06.14.14 0 01-.074.014c-.015-.001-.038-.006-.073-.036L8 9.911zm0 1.315l-4.107 3.5c-.752.64-1.893.093-1.893-.907V2.18C2 1.528 2.517 1 3.154 1h9.692C13.483 1 14 1.528 14 2.18v11.638c0 1-1.141 1.547-1.893.906L8 11.224z"
      clipRule="evenodd"
    />
  </SVG>
);

BookmarkIcon.propTypes = {
  size: PropTypes.string,
};

export default BookmarkIcon;
