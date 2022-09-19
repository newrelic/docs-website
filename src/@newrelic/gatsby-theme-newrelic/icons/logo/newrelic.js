import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NewRelicIcon = (props) => {
  return (
    <SVG {...props} viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd">
        <path d="M16 11c-2.7 0-5 2.3-5 5s2.2 5 5 5 5-2.3 5-5-2.3-5-5-5z" />
        <path
          d="M29.8 13.1c-1.3-5.9-8.6-9.3-16.2-7.7C6 7 .9 13 2.2 18.9c1.3 5.9 8.6 9.3 16.2 7.7C26 25 31.1 18.9 29.8 13.1zM17 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
          fill="#008C99"
          fillRule="nonzero"
        />
        <path
          d="M17 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1 13c-2.8 0-5-2.3-5-5s2.2-5 5-5c2.7 0 5 2.3 5 5s-2.2 5-5 5z"
          fill="#72CCD2"
          fillRule="nonzero"
        />
      </g>
    </SVG>
  );
};

export default NewRelicIcon;
