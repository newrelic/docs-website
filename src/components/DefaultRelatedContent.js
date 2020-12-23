import React from 'react';
import { Link, Icon, ExternalLink } from '@newrelic/gatsby-theme-newrelic';

const DefaultRelatedContent = () => {
  return (
    <div data-swiftype-index={false}>
      <h2 id="for-more-help" style={{ position: 'relative' }}>
        <Link
          aria-label="for more help permalink"
          to="#for-more-help"
          className="anchor before"
        >
          <Icon focusable={false} name="fe-link-2" size="1rem" />
        </Link>
        For more help
      </h2>
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

export default DefaultRelatedContent;
