import { expect } from 'expect';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { initSnapshots } from '../../../esm-test-utils.mjs';
import serializeMDX from '../serialize-mdx.js';
import deserializeHTML from '../deserialize-html.mjs';

const snapshot = await initSnapshots('serialize-mdx');
const __dirname = dirname(fileURLToPath(import.meta.url));

test('serializes DoNotTranslate wrapping a Collapser', async () => {
  const html = await serializeMDX(`
<DoNotTranslate>
  <Collapser
    title="Collapse me yo"
  >
    These tests are hard to write docs fo
  </Collapser>
</DoNotTranslate>
  `);

  await snapshot('serializes DoNotTranslate wrapping a Collapser', html);
});

test('serializes DoNotTranslate to html', async () => {
  const html = await serializeMDX(`
<DoNotTranslate>
  # Not all who wander are lost...
  Testing this line too
</DoNotTranslate>
  `);

  snapshot('serializes DoNotTranslate to html', html);
});

test('serializes DoNotTranslate to html inline', async () => {
  const html = await serializeMDX(`
This is an <DoNotTranslate>MDX</DoNotTranslate> file
  `);

  snapshot('serializes DoNotTranslate to html inline', html);
});

test('serializes Button to html', async () => {
  const html = await serializeMDX(`
<Button
  variant="normal"
>
  View all C SDK docs
</Button>
  `);

  snapshot('serializes Button to html', html);
});

test('serializes ButtonLink to html', async () => {
  const html = await serializeMDX(`
<ButtonLink
  to="/docs/agents/ruby-sdk"
  variant="normal"
>
  View all C SDK docs
</ButtonLink>
  `);

  snapshot('serializes ButtonLink to html', html);
});

test('serializes Callouts with title to html', async () => {
  const html = await serializeMDX(`
<Callout
  title="Life tips #1"
  variant="tip"
>
  Don't walk down that dark alleyway
</Callout>
  `);

  snapshot('serializes Callouts with title to html', html);
});

test('serializes Callouts without title to html', async () => {
  const html = await serializeMDX(`
<Callout variant="tip">
  Always tip your waiter
</Callout>
  `);

  snapshot('serializes Callouts without title to html', html);
});

test('serializes Collapser with plain text title to html', async () => {
  const html = await serializeMDX(`
<Collapser
  title="Collapse me yo"
>
  These tests are hard to write docs for
</Collapser>
  `);

  snapshot('serializes Collapser with plain text title to html', html);
});

test('serializes Collapser with JSX title to html', async () => {
  const html = await serializeMDX(`
<Collapser
  title={<><InlineCode>agent.report_custom_attribute</InlineCode> API</>}
>
  Some API docs about \`agent.report_custom_attribute\`
</Collapser>
  `);

  snapshot('serializes Collapser with JSX title to html', html);
});

test('serializes CollapserGroup to html', async () => {
  const html = await serializeMDX(`
<CollapserGroup>
  <Collapser
    title="Easy peasy"
  >
    Par-cheesy
  </Collapser>
</CollapserGroup>
  `);

  snapshot('serializes CollapserGroup to html', html);
});

test('serializes ExternalLink to html', async () => {
  const html = await serializeMDX(`
<ExternalLink
  href="https://developer.newrelic.com"
>
  Go to developer site
</ExternalLink>
  `);

  snapshot('serializes ExternalLink to html', html);
});

test('serializes Link to html', async () => {
  const html = await serializeMDX(`
<Link
  to="/docs/agents/ruby-sdk"
>
  Check out our Ruby agent docs
</Link>
  `);

  snapshot('serializes Link to html', html);
});

test('serializes Side components to html', async () => {
  const html = await serializeMDX(`
<Side>
  This is one side for the SideBySide component
</Side>
  `);

  snapshot('serializes Side components to html', html);
});

test('serializes SideBySide to html', async () => {
  const html = await serializeMDX(`
<SideBySide>
  <Side>
    This will be displayed on the left hand-side
  </Side>
  <Side>
    This will be displayed on the right hand-side
  </Side>
</SideBySide>
  `);

  snapshot('serializes SideBySide to html', html);
});

test('serializes Table to html', async () => {
  const html = await serializeMDX(`
<table>
  <thead>
    <tr>
      <td>Column A</td>
      <td>Column B</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1a</td>
      <td>Data 2a</td>
    </tr>
    <tr>
      <td>Data 1b</td>
      <td>Data 2b</td>
    </tr>
  </tbody>
</table>
  `);

  snapshot('serializes Table to html', html);
});

test('serializes LandingPageTile to html', async () => {
  const html = await serializeMDX(`
<LandingPageTile
  title="Get started."
  icon="fe-check-square"
>
  * [Learn](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) about the wealth of APM data automatically available to you.
  * [Install your APM language agent](/docs/agents/manage-apm-agents/installation/installing-agent) from New Relic One, then start seeing actionable performance data in the [APM UI](/docs/apm/apm-ui-pages).
  * Monitor your own [business-critical key transactions](/docs/apm/transactions/key-transactions/introduction-key-transactions).
</LandingPageTile>
`);

  snapshot('serializes LandingPageTile to html', html);
});

test('serializes LandingPageTileGrid to html', async () => {
  const html = await serializeMDX(`
<LandingPageTileGrid>
  <LandingPageTile
    title="Get started."
    icon="fe-check-square"
  >
    * [Learn](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) about the wealth of APM data automatically available to you.
    * [Install your APM language agent](/docs/agents/manage-apm-agents/installation/installing-agent) from New Relic One, then start seeing actionable performance data in the [APM UI](/docs/apm/apm-ui-pages).
    * Monitor your own [business-critical key transactions](/docs/apm/transactions/key-transactions/introduction-key-transactions).
  </LandingPageTile>
</LandingPageTileGrid>
`);

  snapshot('serializes LandingPageTileGrid to html', html);
});

test('serializes InlineCode to html', async () => {
  const html = await serializeMDX(`
<InlineCode>agent.report_custom_event()</InlineCode>
`);

  snapshot('serializes InlineCode to html', html);
});

test('serializes Video to html', async () => {
  const html = await serializeMDX(`
<Video id="abcd" type="wistia" />
`);

  snapshot('serializes Video to html', html);
});

test('serializes Video with title to html', async () => {
  const html = await serializeMDX(`
<Video id="abcd" type="wistia" title="The video title" />
`);

  snapshot('serializes Video with title to html', html);
});

test('serializes Icon to html', async () => {
  const html = await serializeMDX(`
<Icon name="fe-external-link" size="1rem" />
`);

  snapshot('serializes Icon to html', html);
});

test('serialize Icon inline with text to HTML', async () => {
  const html = await serializeMDX(`
This is some text with a star <Icon name="fe-star" size="1rem" /> and some more text after it
`);

  snapshot('serialize Icon inline with text to HTML', html);
});

test('serializes Icon to html', async () => {
  const html = await serializeMDX(`
<Icon name="fe-external-link" size="1rem" />
`);

  snapshot('serializes Icon to html', html);
});

test('serializes var to html', async () => {
  const html = await serializeMDX(`<var>JAVA_AGENT_VERSION</var>`);

  snapshot('serializes var to html', html);
});

test('serializes mark to html', async () => {
  const html = await serializeMDX(`<mark>PDF</mark>`);

  snapshot('serializes mark to html', html);
});

test('serializes TechTileGrid to html', async () => {
  const html = await serializeMDX(`
<TechTileGrid>
  <TechTile
    name="iOS"
    icon="logo-apple"
    to="/agents/ios-agent"
  />
</TechTileGrid>
`);

  snapshot('serializes TechTileGrid to html', html);
});

test('kitchen sink', async () => {
  const html = await serializeMDX(
    fs.readFileSync(
      path.resolve(`${__dirname}/../__tests__/kitchen-sink.mdx`),
      'utf-8'
    )
  );

  snapshot('kitchen sink', html);
});

test('test <strong> element serializes', async () => {
  const mdx = `
The Varnish Cache integration collects both metrics(<strong>M</strong>) and inventory(<strong>I</strong>) information.
`;

  const html = await serializeMDX(mdx);

  snapshot('test <strong> element serializes', html);
});

test('test <b> element serializes', async () => {
  const mdx = `
The Varnish Cache integration collects both metrics(<b>M</b>) and inventory(<b>I</b>) information.
`;

  const html = await serializeMDX(mdx);

  snapshot('test <b> element serializes', html);
});

test("test <InlineCode> element serializes and adds 'notranslate' class to element", async () => {
  const mdx = `
<InlineCode>This is a test</InlineCode>
`;

  const html = await serializeMDX(mdx);

  snapshot(
    "test <InlineCode> element serializes and adds 'notranslate' class to element",
    html
  );
});

test("test <code> element serializes and adds 'notranslate' class to element as backticks in MDX", async () => {
  const mdx = `
\`agent.report_custom_element\`
`;

  const html = await serializeMDX(mdx);

  snapshot(
    "test <code> element serializes and adds 'notranslate' class to element as backticks in MDX",
    html
  );
});

test('serialize Tabs Components', async () => {
  const mdx = `
  <Tabs>
    <TabsBar>
      <TabsBarItem id="grails-run-app">
        Pass with run-app
      </TabsBarItem>
  
      <TabsBarItem id="grails-run-war">
        Pass with run-war
      </TabsBarItem>
    </TabsBar>
  
    <TabsPages>
      <TabsPageItem id="grails-run-app">
        1. Begin with an unzipped version of Grails.
        2. Run this command:
      </TabsPageItem>
  
      <TabsPageItem id="grails-run-war">
        1. In your Grails app, open this file with your text editor:
        2. Add or edit the JVM arguments line:
      </TabsPageItem>
    </TabsPages>
  </Tabs>
`;

  const html = await serializeMDX(mdx);

  snapshot('serialize Tabs Components', html);
});

test('serialize InlinePopover component', async () => {
  const mdx = '<InlinePopover/>';
  const html = await serializeMDX(mdx);
  snapshot('serialize InlinePopover component', html);
});

test('serialize iframes', async () => {
  const mdx =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/04JP0ky_hjI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  const html = await serializeMDX(mdx);
  snapshot('serialize iframes', html);
});

test('serialize InlineSignup component', async () => {
  const mdx = '<InlineSignup />';
  const html = await serializeMDX(mdx);
  snapshot('serialize InlineSignup component', html);
});

test('serializing CONTRIBUTOR_NOTE removes it from translated files', async () => {
  const html = await serializeMDX(`
<CONTRIBUTOR_NOTE>
  This is a note to future authors about the MDX content.

  It does not render in the UI
</CONTRIBUTOR_NOTE>
  `);

  snapshot(
    'serializing CONTRIBUTOR_NOTE removes it from translated files',
    html
  );
});

test('serializing components with apostrophes in their props', async () => {
  const input = `
    <UserJourneyControls
    nextStep={{"path": "/docs/tutorial-dd-migration/making-the-switch/", "title": "Next step", "body": "Learn more about New Relic's other features and what you need to make the switch from Datadog"}}
    previousStep={{"path": "/docs/tutorial-dd-migration/installing-monitor/", "title": "Previous step", "body": "Learn more about ingesting data to monitor"}} />
    `;
  // `title` string has a colon
  const input2 = `
    <UserJourneyControls
        nextStep={{"path": "/docs/distributed-tracing/ui-data/trace-details/", "title": "Next step:", "body": "Understand the trace details UI"}}
    />
  `;
  const html = await serializeMDX(input);
  const str = await deserializeHTML(html);
  snapshot('serializing components with apostrophes in their props', html);
  expect(str.replace(/ |\n/g, '')).toBe(input.replace(/ |\n/g, ''));
  const html2 = await serializeMDX(input2);
  const str2 = await deserializeHTML(html2);
  snapshot('serializing components with apostrophes in their props 2', html2);
  expect(str2.replace(/ |\n/g, '')).toBe(input2.replace(/ |\n/g, ''));
});

test('EolPage', async () => {
  const input = `<EolPage agent='node' locale='ko' />`;
  const html = await serializeMDX(input);
  snapshot('EolPage', html);
});

test.run();
