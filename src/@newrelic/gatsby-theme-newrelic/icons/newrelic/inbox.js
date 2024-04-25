import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const InboxIcon = (props) => (
  <SVG
    {...props}
    viewBox="-.5 -.5 16 18"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      d="M4.446 1h7.108c.377 0 .747.114 1.067.327a2.131 2.131 0 01.747.882l2.576 5.534A.61.61 0 0116 8v4.82c0 .578-.213 1.133-.594 1.541-.38.41-.895.639-1.433.639H2.027c-.538 0-1.053-.23-1.433-.639A2.267 2.267 0 010 12.82V8c0-.09.02-.177.056-.257L2.632 2.21c.168-.363.426-.669.747-.883.32-.213.69-.327 1.067-.327zm0 1.148a.91.91 0 00-.505.155 1.01 1.01 0 00-.354.418v.001l-2.19 4.704h3.616c.179 0 .345.096.444.256l1.335 2.154h2.416l1.335-2.154a.524.524 0 01.444-.256h3.616l-2.19-4.704v-.001a1.009 1.009 0 00-.354-.418.91.91 0 00-.505-.155m3.38 6.426h-3.662l-1.335 2.154a.524.524 0 01-.444.256H6.507a.524.524 0 01-.444-.256L4.728 8.574H1.067v4.246c0 .274.1.536.28.73.18.194.425.302.68.302h11.946a.928.928 0 00.68-.302c.18-.194.28-.456.28-.73V8.574z"
      clipRule="evenodd"
    />
  </SVG>
);

InboxIcon.propTypes = {
  size: PropTypes.string,
};

export default InboxIcon;
