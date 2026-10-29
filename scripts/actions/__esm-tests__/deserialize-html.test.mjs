import esmock from 'esmock';
import fs from 'fs';
import { createRequire } from 'module';
import path, { dirname } from 'path';
import { expect } from 'expect';
import { fileURLToPath } from 'url';
import { test } from 'uvu';

import serializeMDX from '../serialize-mdx.mjs';

// the MDX compiler the site builds with
const { sync: compileMDX } = createRequire(import.meta.url)('@mdx-js/mdx');

const deserializeHTML = await esmock('../deserialize-html.mjs', {
  '../configuration.js': {
    configuration: {
      TRANSLATION: {
        TYPE: 'human',
      },
    },
  },
});

const __dirname = dirname(fileURLToPath(import.meta.url));

test('deserializes mdx with DNT', async () => {
  const input = `
<DNT>
# Not all who wander are lost...

but some probably are...
</DNT>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('serializes DNT wrapping a Collapser', async () => {
  const input = `
<DNT>
<Collapser title="Collapse me yo">
These tests are hard to write docs for
</Collapser>
</DNT>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes mdx with frontmatter', async () => {
  const input = `---
title: The doc
translationType: human
---

This is an MDX doc
`;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes mdx with import statements', async () => {
  const input = `
import { Link } from '@newrelic/gatsby-theme-newrelic'

This is an MDX doc
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes simple components', async () => {
  const input = `
<Button to="/docs/agents/ruby-sdk">
Go to Ruby docs
</Button>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes components with text props', async () => {
  const input = `
<Callout title="Life tip #3">
There are 10 types of people in this world. Those that understand binary and those that don&apos;t.
</Callout>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes components with text props as JSX expressions', async () => {
  const input = `
<Collapser
  title={<>
    <InlineCode>
      agent.send_custom_event
    </InlineCode>

    API
  </>
  }
>
All about that API
</Collapser>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes components with children', async () => {
  const input = `
<CollapserGroup>
<Collapser
  title={<>
    <InlineCode>
      agent.send_custom_event
    </InlineCode>

    API
  </>
  }
>
All about that API
</Collapser>
</CollapserGroup>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes InlineCode components', async () => {
  const input = `
<InlineCode>
agent.send_custom_event
</InlineCode>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes Side components', async () => {
  const input = `
<Side>
This is one side for the SideBySide component
</Side>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes SideBySide components', async () => {
  const input = `
<SideBySide>
<Side>
This will be displayed on the left hand-side
</Side>

<Side>
This will be displayed on the right hand-side
</Side>
</SideBySide>
  `;

  const html = await serializeMDX(input);
  const mdx = await deserializeHTML(html);

  expect(mdx).toEqual(input.trim());
});

test('deserializes TechTileGrid components', async () => {
  const input = `
<TechTileGrid>
<TechTile name="iOS" icon="logo-apple" to="/agents/ios-agent" />
</TechTileGrid>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('kitchen sink', async () => {
  const input = fs.readFileSync(
    path.resolve(`${__dirname}/../__tests__/kitchen-sink.mdx`),
    'utf-8'
  );

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserialize html with <strong> element', async () => {
  const input = `
The Varnish Cache integration collects both metrics(<strong>M</strong>) and inventory(<strong>I</strong>) information.
`;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserialize html with <b> element', async () => {
  const input = `
The Varnish Cache integration collects both metrics(<b>M</b>) and inventory(<b>I</b>) information.
`;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserialize html with backticks as <code>', async () => {
  const input = `
\`test\`
`;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes Tabs Component', async () => {
  const input = `
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

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes InlinePopover component', async () => {
  const input = '<InlinePopover />';

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

test('deserialize iframes', async () => {
  const input = `<iframe width="560" height="315" src="https://www.youtube.com/embed/04JP0ky_hjI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />`;

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

test('deserializes InlineSignup component', async () => {
  const input = '<InlineSignup />';

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

test('deserializes headers as a span element', async () => {
  const input = `<h5>test</h5>`;

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

// from vulnerability-management/agent/overview.mdx, see #26073
test('keeps inline elements inline in a single-line table cell', async () => {
  const input = `
<table>
  <thead>
    <tr>
      <th>Trigger</th>
      <th>How it works</th>
      <th>Use this for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><DNT>**Comment (trigger phrase)**</DNT></td>
      <td>The Security RX Agent posts a comment containing a trigger phrase you configure (for example, <code>@claude fix</code>). Your agent watches for that phrase and starts working.</td>
      <td>Claude, and custom agents that respond to a comment phrase.</td>
    </tr>
  </tbody>
</table>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toContain(
    'a trigger phrase you configure (for example, <code>@claude fix</code>). Your agent watches for that phrase and starts working.'
  );
});

// from opentelemetry/integrations/haproxy/metrics-reference.mdx, see #24918
test('round-trips MDX expressions verbatim', async () => {
  const input = `
<table>
  <tr>
    <td>\`haproxy.connections.errors\`</td>
    <td>Total number of connection errors (backend and server only)</td>
    <td>Sum (cumulative)</td>
    <td>{'{errors}'}</td>
  </tr>
</table>

Inline {'{requests}'} too.
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toContain(`<td>\n{'{errors}'}\n</td>`);
  expect(mdx).toContain(`Inline {'{requests}'} too.`);
});

test('round-trips custom heading ids that contain underscores', async () => {
  const input = '## Review goals [#review_goals]';

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

test('keeps heading text after inline code when a custom id is present', async () => {
  const input = '## Use the `pkg` package [#use-pkg]';

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

// from opentelemetry/db360/mysql/hosted.mdx and 15 sibling pages, see #26334
test('keeps a Callout with a list closed after a list inside a component', async () => {
  const input = `
<Steps>
<Step>

1. Validate the configuration:

  \`\`\`bash
  sudo nrdot-collector validate
  \`\`\`

<Callout variant="tip">
  You can also:
  * Configure multiple receivers
  * Link your database with APM
</Callout>

</Step>
</Steps>
  `;

  const output = await deserializeHTML(await serializeMDX(input));

  expect(() => compileMDX(output)).not.toThrow();
});

// from release-notes/docs-release-notes/docs-4-11-2025.mdx, see #26334
test('separates adjacent lists without an HTML comment', async () => {
  const input = `
* NRAI Fixes:
- Enhanced the Ask AI feature with dynamic prompts.
  `;

  const output = await deserializeHTML(await serializeMDX(input));

  expect(output).not.toContain('<!---->');
  expect(() => compileMDX(output)).not.toThrow();
});

test('separates adjacent ordered lists with an MDX comment', async () => {
  const input = `
1. one
2. two

1) three
2) four
  `;

  const output = await deserializeHTML(await serializeMDX(input));

  expect(output).toEqual('1. one\n2. two\n\n{/* */}\n\n1. three\n2. four');
  expect(() => compileMDX(output)).not.toThrow();
});

// from nrql/nrql-syntax-clauses-functions.mdx and kafka-integration.mdx, see #26334
test('round-trips expressions in JSX attributes with single braces', async () => {
  const input = `
<Collapser
  id="func-cardinality"
  title={<InlineCode>cardinality(include:{\`{attribute_list}\`})</InlineCode>
  }
>
body
</Collapser>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test.run();
