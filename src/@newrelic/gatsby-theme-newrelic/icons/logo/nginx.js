import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NginxIcon = (props) => {
  return (
    <SVG {...props} viewBox="0 0 32 32">
      <path
        d="M9.7 5L3.6 16.2 9.8 27h12.7l5.9-11.9h-13c-1.2 0-2.3 1.1-2.3 2.3 0 1.2 1.1 2.3 2.3 2.3H21l-1.4 2.8h-7.2l-3.6-6.3 3.6-6.5h7.7l1.8 3.7h4.6L23 5H9.7"
        fill="#090"
        fillRule="evenodd"
      />
    </SVG>
  );
};

export default NginxIcon;
