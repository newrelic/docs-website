import { expect } from 'expect';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { test } from 'uvu';

import { initSnapshots } from '../../../esm-test-utils.mjs';
import serializeMDX from '../serialize-mdx.mjs';
import deserializeHTML from '../deserialize-html.mjs';

const snapshot = await initSnapshots('serialize-mdx');
const __dirname = dirname(fileURLToPath(import.meta.url));

test('serializes DNT wrapping a Collapser', async () => {
  const html = await serializeMDX(`
<DNT>
  <Collapser
    title="Collapse me yo"
  >
    These tests are hard to write docs fo
  </Collapser>
</DNT>
  `);

  await snapshot('serializes DoNotTranslate wrapping a Collapser', html);
});

test('serializes DNT to html', async () => {
  const html = await serializeMDX(`
<DNT>
  # Not all who wander are lost...
  Testing this line too
</DNT>
  `);

  await snapshot('serializes DoNotTranslate to html', html);
});

test('serializes DNT to html inline', async () => {
  const html = await serializeMDX(`
This is an <DNT>MDX</DNT> file
  `);

  await snapshot('serializes DoNotTranslate to html inline', html);
});

test('serializes Button to html', async () => {
  const html = await serializeMDX(`
<Button
  variant="normal"
>
  View all C SDK docs
</Button>
  `);

  await snapshot('serializes Button to html', html);
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

  await snapshot('serializes ButtonLink to html', html);
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

  await snapshot('serializes Callouts with title to html', html);
});

test('serializes Callouts without title to html', async () => {
  const html = await serializeMDX(`
<Callout variant="tip">
  Always tip your waiter
</Callout>
  `);

  await snapshot('serializes Callouts without title to html', html);
});

test('serializes Collapser with plain text title to html', async () => {
  const html = await serializeMDX(`
<Collapser
  title="Collapse me yo"
>
  These tests are hard to write docs for
</Collapser>
  `);

  await snapshot('serializes Collapser with plain text title to html', html);
});

test('serializes Collapser with JSX title to html', async () => {
  const html = await serializeMDX(`
<Collapser
  title={<><InlineCode>agent.report_custom_attribute</InlineCode> API</>}
>
  Some API docs about \`agent.report_custom_attribute\`
</Collapser>
  `);

  await snapshot('serializes Collapser with JSX title to html', html);
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

  await snapshot('serializes CollapserGroup to html', html);
});

test('serializes ExternalLink to html', async () => {
  const html = await serializeMDX(`
<ExternalLink
  href="https://developer.newrelic.com"
>
  Go to developer site
</ExternalLink>
  `);

  await snapshot('serializes ExternalLink to html', html);
});

test('serializes Link to html', async () => {
  const html = await serializeMDX(`
<Link
  to="/docs/agents/ruby-sdk"
>
  Check out our Ruby agent docs
</Link>
  `);

  await snapshot('serializes Link to html', html);
});

test('serializes Side components to html', async () => {
  const html = await serializeMDX(`
<Side>
  This is one side for the SideBySide component
</Side>
  `);

  await snapshot('serializes Side components to html', html);
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

  await snapshot('serializes SideBySide to html', html);
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

  await snapshot('serializes Table to html', html);
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

  await snapshot('serializes LandingPageTile to html', html);
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

  await snapshot('serializes LandingPageTileGrid to html', html);
});

test('serializes InlineCode to html', async () => {
  const html = await serializeMDX(`
<InlineCode>agent.report_custom_event()</InlineCode>
`);

  await snapshot('serializes InlineCode to html', html);
});

test('serializes Video to html', async () => {
  const html = await serializeMDX(`
<Video id="abcd" type="wistia" />
`);

  await snapshot('serializes Video to html', html);
});

test('serializes Video with title to html', async () => {
  const html = await serializeMDX(`
<Video id="abcd" type="wistia" title="The video title" />
`);

  await snapshot('serializes Video with title to html', html);
});

test('serializes Icon to html', async () => {
  const html = await serializeMDX(`
<Icon name="fe-external-link" size="1rem" />
`);

  await snapshot('serializes Icon to html', html);
});

test('serialize Icon inline with text to HTML', async () => {
  const html = await serializeMDX(`
This is some text with a star <Icon name="fe-star" size="1rem" /> and some more text after it
`);

  await snapshot('serialize Icon inline with text to HTML', html);
});

test('serializes Icon to html', async () => {
  const html = await serializeMDX(`
<Icon name="fe-external-link" size="1rem" />
`);

  await snapshot('serializes Icon to html', html);
});

test('serializes var to html', async () => {
  const html = await serializeMDX(`<var>JAVA_AGENT_VERSION</var>`);

  await snapshot('serializes var to html', html);
});

test('serializes mark to html', async () => {
  const html = await serializeMDX(`<mark>PDF</mark>`);

  await snapshot('serializes mark to html', html);
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

  await snapshot('serializes TechTileGrid to html', html);
});

test('kitchen sink', async () => {
  const html = await serializeMDX(
    fs.readFileSync(
      path.resolve(`${__dirname}/../__tests__/kitchen-sink.mdx`),
      'utf-8'
    )
  );

  await snapshot('kitchen sink', html);
});

test('test <strong> element serializes', async () => {
  const mdx = `
The Varnish Cache integration collects both metrics(<strong>M</strong>) and inventory(<strong>I</strong>) information.
`;

  const html = await serializeMDX(mdx);

  await snapshot('test <strong> element serializes', html);
});

test('test <b> element serializes', async () => {
  const mdx = `
The Varnish Cache integration collects both metrics(<b>M</b>) and inventory(<b>I</b>) information.
`;

  const html = await serializeMDX(mdx);

  await snapshot('test <b> element serializes', html);
});

test("test <InlineCode> element serializes and adds 'notranslate' class to element", async () => {
  const mdx = `
<InlineCode>This is a test</InlineCode>
`;

  const html = await serializeMDX(mdx);

  await snapshot(
    "test <InlineCode> element serializes and adds 'notranslate' class to element",
    html
  );
});

test("test <code> element serializes and adds 'notranslate' class to element as backticks in MDX", async () => {
  const mdx = `
\`agent.report_custom_element\`
`;

  const html = await serializeMDX(mdx);

  await snapshot(
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

  await snapshot('serialize Tabs Components', html);
});

test('serialize InlinePopover component', async () => {
  const mdx = '<InlinePopover/>';
  const html = await serializeMDX(mdx);
  await snapshot('serialize InlinePopover component', html);
});

test('serialize iframes', async () => {
  const mdx =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/04JP0ky_hjI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  const html = await serializeMDX(mdx);
  await snapshot('serialize iframes', html);
});

test('serialize InlineSignup component', async () => {
  const mdx = '<InlineSignup />';
  const html = await serializeMDX(mdx);
  await snapshot('serialize InlineSignup component', html);
});

test('serializing CONTRIBUTOR_NOTE removes it from translated files', async () => {
  const html = await serializeMDX(`
<CONTRIBUTOR_NOTE>
  This is a note to future authors about the MDX content.

  It does not render in the UI
</CONTRIBUTOR_NOTE>
  `);

  await snapshot(
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
  await snapshot(
    'serializing components with apostrophes in their props',
    html
  );
  expect(str.replace(/ |\n/g, '')).toBe(input.replace(/ |\n/g, ''));
  const html2 = await serializeMDX(input2);
  const str2 = await deserializeHTML(html2);
  await snapshot(
    'serializing components with apostrophes in their props 2',
    html2
  );
  expect(str2.replace(/ |\n/g, '')).toBe(input2.replace(/ |\n/g, ''));
});

test('EolPage', async () => {
  const input = `<EolPage agent='node' locale='ko' />`;
  const html = await serializeMDX(input);
  await snapshot('EolPage', html);
});

test('serializing headings with custom ids', async () => {
  const BACKTICK = '`';
  const input = `# regular text heading 1 [#test-id-1]
 
## regular text heading 2 [#test-id-2]

### regular text heading 3 [#test-id-3]

#### regular text heading 4 [#test-id-4]

##### regular text heading 5 [#test-id-5]

###### regular text heading 6 [#test-id-6]

# **bold text heading 1** [#bold-id-1]
 
## **bold text heading 2** [#bold-id-2]

### **bold text heading 3** [#bold-id-3]

#### **bold text heading 4** [#bold-id-4]

##### **bold text heading 5** [#bold-id-5]

###### **bold text heading 6** [#bold-id-6]

# _emphasis text heading 1_ [#emphasis-id-1]
 
## _emphasis text heading 2_ [#emphasis-id-2]

### _emphasis text heading 3_ [#emphasis-id-3]

#### _emphasis text heading 4_ [#emphasis-id-4]

##### _emphasis text heading 5_ [#emphasis-id-5]

###### _emphasis text heading 6_ [#emphasis-id-6]

# ${BACKTICK}code text heading 1${BACKTICK} [#code-id-1]
 
## ${BACKTICK}code text heading 2${BACKTICK} [#code-id-2]

### ${BACKTICK}code text heading 3${BACKTICK} [#code-id-3]

#### ${BACKTICK}code text heading 4${BACKTICK} [#code-id-4]

##### ${BACKTICK}code text heading 5${BACKTICK} [#code-id-5]

###### ${BACKTICK}code text heading 6${BACKTICK} [#code-id-6]
`;

  const html = await serializeMDX(input);
  await snapshot('serializing headings with custom ids', html);
});

test.run();
