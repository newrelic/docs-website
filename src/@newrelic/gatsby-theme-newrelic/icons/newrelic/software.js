import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const SoftwareIcon = (props) => (
  <SVG
    {...props}
    viewBox="5 0 16 26"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      d="M12.1712 7.5L14.8635 14.0385L16.2097 11.5385H19.6712V13.4615H17.3635L14.8635 18.6538L11.7866 11.7308L9.6712 15.3846H6.20966V13.4615H8.51735L12.1712 7.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5943 0H4.28658C2.1712 0 0.44043 1.73077 0.44043 3.84615V21.1538C0.44043 23.2692 2.1712 25 4.28658 25H21.5943C23.7097 25 25.4404 23.2692 25.4404 21.1538V3.84615C25.4404 1.73077 23.7097 0 21.5943 0ZM23.5174 21.1538C23.5174 22.3077 22.7481 23.0769 21.5943 23.0769H4.28658C3.13274 23.0769 2.36351 22.3077 2.36351 21.1538V3.84615C2.36351 2.69231 3.13274 1.92308 4.28658 1.92308H21.5943C22.7481 1.92308 23.5174 2.69231 23.5174 3.84615V21.1538Z"
    />
  </SVG>
);

SoftwareIcon.propTypes = {
  size: PropTypes.string,
};

export default SoftwareIcon;
