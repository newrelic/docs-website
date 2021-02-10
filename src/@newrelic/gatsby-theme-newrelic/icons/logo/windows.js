import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const WindowsIcon = (props) => {
  return (
    <SVG {...props} viewBox="0 0 32 32">
      <g fill="#00ADEF" fillRule="evenodd">
        <path d="M4 7.4v8.2l9.8-.1V6.1zM15 16.7v9.5L28 28V16.7zM28 4L15 5.9v9.6l13-.1zM4 16.5v8.2l9.8 1.3v-9.4z" />
      </g>
    </SVG>
  );
};

export default WindowsIcon;
