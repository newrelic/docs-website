import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const MediaStreamingIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path d="M9 3.00003H2C0.895431 3.00003 0 3.89547 0 5.00004V13C0 14.1046 0.89543 15 2 15H12C13.1046 15 14 14.1046 14 13V8.00003H13V13C13 13.5523 12.5523 14 12 14H2C1.44772 14 1 13.5523 1 13V5.00004C1 4.44775 1.44772 4.00003 2 4.00003H9V3.00003Z" />
    <path d="M9 9L6 10.7321V7.26795L9 9Z" />
    <path d="M16 6C16 3.23858 13.7614 1 11 1V2C13.2091 2 15 3.79086 15 6H16Z" />
    <path d="M14 6C14 4.34315 12.6569 3 11 3V4C12.1046 4 13 4.89543 13 6H14Z" />
    <path d="M11.5 6C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5C11.2239 5 11 5.22386 11 5.5C11 5.77614 11.2239 6 11.5 6Z" />
  </SVG>
);

MediaStreamingIcon.propTypes = {
  size: PropTypes.string,
};

export default MediaStreamingIcon;
