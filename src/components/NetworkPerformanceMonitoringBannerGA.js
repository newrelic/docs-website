import React from 'react';
import { css } from '@emotion/react';
import fsBanner from '../images/NPM_banner.png';

const NetworkPerformanceMonitoringBannerGA = () => {
  return (
    <section>
      <a href="/docs/full-stack-observability/observe-everything/get-started/new-relic-quickstarts-overview/">
        <img
          css={css`
            width: 100%;
          `}
          src={fsBanner}
          alt="Get started with New Relic Instant Observability."
        />
      </a>
    </section>
  );
};

export default NetworkPerformanceMonitoringBannerGA;
