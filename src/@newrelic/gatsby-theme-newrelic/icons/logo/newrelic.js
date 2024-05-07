import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';
import styled from '@emotion/styled';

const Character = styled.path`
  fill: var(--primary-text-color);
`;

const NewRelicIcon = (props) => (
  <SVG {...props} viewBox="0 0 32 32">
    <path
      d="M23.2043 11.0778V20.9232L14.6196 25.8469V32.0005L28.5741 24.001V8L23.2043 11.0778Z"
      fill="#00AC69"
    />
    <path
      d="M14.6209 6.15563L23.2056 11.0773L28.5754 7.9995L14.6209 0L0.666504 7.9995L6.03422 11.0773L14.6209 6.15563Z"
      fill="#1CE783"
    />
    <Character
      className="text-color"
      d="M9.25323 19.0793V28.9247L14.6209 32.0005V16.0015L0.666504 8V14.1556L9.25323 19.0793Z"
    />
  </SVG>
);

export default NewRelicIcon;
