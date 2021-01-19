import processor from '../../../scripts/actions/serialize-mdx';
import fs from 'fs';

test('serializes Button to html', async () => {
  const file = await processor.process(`
<Button
  variant="normal"
>
  View all C SDK docs
</Button>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes ButtonLink to html', async () => {
  const file = await processor.process(`
<ButtonLink
  to="/docs/agents/ruby-sdk"
  variant="normal"
>
  View all C SDK docs
</ButtonLink>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Callouts with title to html', async () => {
  const file = await processor.process(`
<Callout
  title="Life tips #1"
  variant="tip"
>
  Don't walk down that dark alleyway
</Callout>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Callouts without title to html', async () => {
  const file = await processor.process(`
<Callout variant="tip">
  Always tip your waiter
</Callout>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Collapser with plain text title to html', async () => {
  const file = await processor.process(`
<Collapser
  title="Collapse me yo"
>
  These tests are hard to write docs for
</Collapser>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Collapser with JSX title to html', async () => {
  const file = await processor.process(`
<Collapser
  title={<><InlineCode>agent.report_custom_attribute</InlineCode> API</>}
>
  Some API docs about \`agent.report_custom_attribute\`
</Collapser>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes CollapserGroup to html', async () => {
  const file = await processor.process(`
<CollapserGroup>
  <Collapser
    title="Easy peasy"
  >
    Par-cheesy
  </Collapser>
</CollapserGroup>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes ExternalLink to html', async () => {
  const file = await processor.process(`
<ExternalLink
  href="https://developer.newrelic.com"
>
  Go to developer site
</ExternalLink>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Link to html', async () => {
  const file = await processor.process(`
<Link
  to="/docs/agents/ruby-sdk"
>
  Check out our Ruby agent docs
</Link>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Table to html', async () => {
  const file = await processor.process(`
<Table>
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
</Table>
  `);

  expect(file.contents).toMatchSnapshot();
});

test('serializes LandingPageTile to html', async () => {
  const file = await processor.process(`
<LandingPageTile
  title="Get started."
  icon="fe-check-square"
>
  * [Learn](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) about the wealth of APM data automatically available to you.
  * [Install your APM language agent](/docs/agents/manage-apm-agents/installation/installing-agent) from New Relic One, then start seeing actionable performance data in the [APM UI](/docs/apm/apm-ui-pages).
  * Monitor your own [business-critical key transactions](/docs/apm/transactions/key-transactions/introduction-key-transactions).
</LandingPageTile>
`);

  expect(file.contents).toMatchSnapshot();
});

test('serializes LandingPageTileGrid to html', async () => {
  const file = await processor.process(`
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

  expect(file.contents).toMatchSnapshot();
});

test('serializes InlineCode to html', async () => {
  const file = await processor.process(`
<InlineCode>agent.report_custom_event()</InlineCode>
`);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Video to html', async () => {
  const file = await processor.process(`
<Video id="abcd" type="wistia" />
`);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Video with title to html', async () => {
  const file = await processor.process(`
<Video id="abcd" type="wistia" title="The video title" />
`);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Icon to html', async () => {
  const file = await processor.process(`
<Icon name="fe-external-link" size="1rem" />
`);

  expect(file.contents).toMatchSnapshot();
});

test('serializes Icon to html', async () => {
  const file = await processor.process(`
<Icon name="fe-external-link" size="1rem" />
`);

  expect(file.contents).toMatchSnapshot();
});

test('kitchen sink', async () => {
  const file = await processor.process(
    fs.readFileSync(`${__dirname}/kitchen-sink.mdx`, 'utf-8')
  );

  expect(file.contents).toMatchSnapshot();
});
