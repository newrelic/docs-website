import React from 'react';
import { FeaturedContent } from '../components/IntroductionApm';

import browserAjaxDetails from 'images/browser_screenshot-full_ajax-details.png';

const introTextInput = [
  'Our application performance monitoring (APM) provides a unified monitoring service for all your apps and microservices.',
  "Monitor everything from the hundreds of dependencies of a modern stack down to simple web-transaction times and throughput of an app. Keep track of your app's health in real-time by monitoring your metrics, events, logs, and transactions (MELT) through pre-built and custom dashboards",
];

const introTitle = 'Complete visibility and analytics at your fingertips';

const IntroductionApm = () => (
  <>
    <FeaturedContent
      text={introTextInput}
      title={introTitle}
      img={browserAjaxDetails}
    />

    <FeaturedContent
      list={introTextInput}
      subTitle={introTitle}
      img={browserAjaxDetails}
    />
  </>
);

export default IntroductionApm;
