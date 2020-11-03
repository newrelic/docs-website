import React from 'react';
import { ExternalLink } from '@newrelic/gatsby-theme-newrelic';

const RelatedContent = () => {
  return (
    <div data-swiftype-index={false}>
      <h2>For more help</h2>
      <p>
        If you need more help, check out these support and learning resources:
      </p>
      <ul>
        <li>
          Browse the{' '}
          <ExternalLink href="https://discuss.newrelic.com">
            Explorers Hub
          </ExternalLink>{' '}
          to get help from the community and join in discussions.
        </li>
        <li>
          Find{' '}
          <a href="/docs/using-new-relic/welcome-new-relic/get-started/find-help-use-support-portal">
            answers on our sites and learn how to use our support portal
          </a>
          .
        </li>
        <li>
          Run{' '}
          <a href="/docs/using-new-relic/cross-product-functions/troubleshooting/new-relic-diagnostics">
            New Relic Diagnostics
          </a>
          , our troubleshooting tool for Linux, Windows, and macOS.
        </li>
        <li>
          Review New Relic's <a href="/docs/security">data security</a> and{' '}
          <a href="/docs/licenses">licenses</a> documentation.
        </li>
      </ul>
    </div>
  );
};

export default RelatedContent;
