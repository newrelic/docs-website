// AUTO-GENERATED - DO NOT EDIT
// Run: yarn generate:snippets

import React from 'react';
import { useMDXComponents } from '@mdx-js/react';
import { usePageMeta } from './PageMetaContext';

export const ReuseableWarning = () => (
  <>
    <p><strong>System Requirement</strong></p>
    <p>This content is being reused from a central file. If you see this, the test is successful.</p>
    <ul>
      <li><strong>Minimum Node Version:</strong> 18.x</li>
      <li><strong>Memory:</strong> 4GB RAM</li>
    </ul>
  </>
);

export const TestReuse = () => (
  <>
    <p>My first component</p>
  </>
);

export const TestSnippet = ({ capabilityName = '' }) => {
  const { Callout, DNT } = useMDXComponents();
  return (
  <>
    <Callout variant="important" title="Feature availability and support">
    <DNT><strong>{capabilityName}</strong></DNT> isn't available in the Japan data center/region. For a complete list of capabilities not available in Japan, refer to <a href="#">Features not supported in Japan</a>.
    </Callout>
  </>
);
};

export const ApmNodejsPrerequisites = ({ agentName = 'Node.js' }) => (
  <>
    <h2>Prerequisites for APM {agentName}</h2>
    <ul>
      <li><strong>{agentName} Version:</strong> 14.x or higher</li>
      <li><strong>NPM:</strong> 6.x or higher</li>
      <li><strong>Supported frameworks:</strong> Express, Koa, Fastify</li>
    </ul>
  </>
);

export const ApmSharedPrerequisites = ({ agentName = 'APM Agent', minVersion = 'X.X' }) => (
  <>
    <h2>Prerequisites for {agentName}</h2>
    <p>Before installing the {agentName} agent:</p>
    <ul>
      <li><strong>{agentName} Version:</strong> {minVersion} or higher</li>
      <li><strong>Operating System:</strong> Linux, Windows, or macOS</li>
      <li><strong>Memory:</strong> 512MB minimum</li>
    </ul>
  </>
);

export const PpCalloutPublicPreview = () => {
  const { Callout } = useMDXComponents();
  return (
  <>
    <Callout title="preview">
    <p>We're still working on this feature, but we'd love for you to try it out!</p>
    <p>This feature is currently provided as part of a preview program pursuant to our <a href="/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy">pre-release policies</a>.</p>
    </Callout>
  </>
);
};

export const TestPageMeta = () => {
  const { prodName } = usePageMeta();
  return (
  <>
    {prodName}
  </>
);
};
