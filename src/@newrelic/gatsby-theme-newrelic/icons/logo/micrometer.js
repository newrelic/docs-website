import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const MicrometerIcon = (props) => {
  return (
    <SVG {...props} viewBox="0 0 32 32">
      <g fillRule="nonzero" fill="none">
        <path
          d="M5.33 9.583l1.215 2.76 2.685.822 1.996 9.392 4.833-5.468 4.72 5.378 2.208-7.914 1.45.339 2.958 5.943 2.138 1.64c-2.396 5.045-7.537 8.534-13.494 8.534-8.245 0-14.93-6.684-14.93-14.93 0-2.45.591-4.762 1.637-6.802l2.585.306z"
          fill="#1BA89C"
        />
        <path
          d="M28.796 19.68l-3.146-6.32-3.91-.915-1.786 6.401-3.891-4.432-3.837 4.342-1.483-6.977-2.905-.89-1.296-2.943-2.8-.332C6.433 3.71 10.937 1.15 16.038 1.15c8.246 0 14.93 6.684 14.93 14.93a14.91 14.91 0 01-.753 4.69l-1.42-1.09z"
          fill="#117A71"
        />
      </g>
    </SVG>
  );
};

export default MicrometerIcon;
