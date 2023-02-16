import React from 'react';
import { FeaturedContent, StackedContent } from '../components/IntroductionApm';
import { Side, SideBySide } from '@newrelic/gatsby-theme-newrelic';

import browserAjaxDetails from 'images/browser_screenshot-full_ajax-details.png';

const introTextInput = [
  'Our application performance monitoring (APM) provides a unified monitoring service for all your apps and microservices.',
  "Monitor everything from the hundreds of dependencies of a modern stack down to simple web-transaction times and throughput of an app. Keep track of your app's health in real-time by monitoring your metrics, events, logs, and transactions (MELT) through pre-built and custom dashboards",
];

const introTitle = 'Complete visibility and analytics at your fingertips';

const firstList = [
  'Observe the performance of your application by installing one of our agents - it takes just minutes!',
  'Monitor the performance and health of all your services in one place',
  'Pair New Relic with OpenTelemetry or other open source tools',
];

const IntroductionApm = () => (
  <>
    <FeaturedContent
      text={introTextInput}
      title={introTitle}
      img={browserAjaxDetails}
    />

    <FeaturedContent
      list={firstList}
      subTitle={introTitle}
      img={browserAjaxDetails}
    />
    <SideBySide>
      <Side>
        <StackedContent
          list={firstList}
          subTitle={introTitle}
          img={browserAjaxDetails}
        />
      </Side>
      <Side>
        <StackedContent
          list={firstList}
          subTitle={introTitle}
          img={browserAjaxDetails}
        />
      </Side>
    </SideBySide>
  </>
);

export default IntroductionApm;
