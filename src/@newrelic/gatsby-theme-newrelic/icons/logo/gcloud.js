import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const GCloudIcon = (props) => {
  return (
    <SVG {...props} viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd">
        <path
          d="M11.9 23.2L7.7 16 5 11.2l-2.2 3.9c-.3.6-.3 1.2 0 1.8l5.9 10.2c.3.6.9.9 1.6.9h7.2l2.8-4.8h-8.4z"
          fill="#EEBD2C"
        />
        <path
          d="M29.3 15.1l-3.7-6.3h-6.2L24 16l-3.9 7.2-2.7 4.8h4.5c.6 0 1.2-.3 1.6-.9l5.9-10.2c.2-.6.2-1.2-.1-1.8z"
          fill="#DC4536"
        />
        <path
          d="M25.6 8.8l-2.2-3.9c-.3-.6-.9-.9-1.5-.9H10.2c-.7 0-1.3.3-1.6.9L5 11.2 7.7 16l4.1-7.2h13.8z"
          fill="#508CF4"
        />
        <path
          d="M7.7 16l4.1 7.2h8.3l4.1-7.2-4.1-7.2h-8.3L7.7 16zm8.3-3.6c2 0 3.6 1.6 3.6 3.6S18 19.6 16 19.6 12.4 18 12.4 16s1.6-3.6 3.6-3.6z"
          fill="#E0E0E0"
          fillRule="nonzero"
        />
      </g>
    </SVG>
  );
};

export default GCloudIcon;
