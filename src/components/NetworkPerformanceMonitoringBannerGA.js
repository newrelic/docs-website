import React from 'react';
import { css } from '@emotion/react';
import fsBanner from '../images/NPM_banner.png';

const NetworkPerformanceMonitoringBannerGA = () => {
  return (
    <section>
      <a href="/docs/network-performance-monitoring/get-started/npm-introduction">
        <img
          css={css`
            width: 100%;
          `}
          src={fsBanner}
          alt="Get started with Network performance monitoring."
        />
      </a>
    </section>
  );
};

export default NetworkPerformanceMonitoringBannerGA;
