import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const AzureIcon = (props) => {
  return (
    <SVG {...props} viewBox="0 0 32 32">
      <path
        d="M17.298 5l-8.254 7.158L2 24.801h6.351L17.298 5zm1.098 1.675l-3.523 9.929 6.755 8.486-13.104 2.252H30L18.396 6.675z"
        fill="#0072C6"
        fillRule="nonzero"
      />
    </SVG>
  );
};

export default AzureIcon;
