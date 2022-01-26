import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const CaretUpIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 100 100"
    css={css`
      fill: black;

      .dark-mode & {
        fill: white;
      }
    `}
  >
    <polygon points="0,75 50,25 100,75" />
  </SVG>
);

CaretUpIcon.propTypes = {
  size: PropTypes.string,
};

export default CaretUpIcon;
