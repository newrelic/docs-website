import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const AppleColorIcon = (props) => {
  return (
    <SVG {...props} viewBox="0 0 32 32">
      <g fill="#999" fillRule="evenodd">
        <path d="M19.662 6.48C21.414 4.24 21.086 2 21.086 2s-2.52 0-4.272 2.464c-1.643 2.128-1.204 4.032-1.204 4.032s2.08.336 4.052-2.016zM23.057 16.784c0-3.808 2.957-5.264 2.957-5.264s-1.533-2.8-5.366-2.8c-2.19 0-3.943 1.344-4.929 1.344-1.095 0-2.738-1.232-4.71-1.232-3.176 0-6.57 2.912-6.57 8.512C4.438 22.944 8.49 30 11.666 30c1.095 0 2.847-1.12 4.49-1.12 1.643 0 2.957 1.12 4.49 1.12 3.505 0 6.024-7.392 6.024-7.392s-3.614-1.568-3.614-5.824z" />
      </g>
    </SVG>
  );
};

export default AppleColorIcon;
