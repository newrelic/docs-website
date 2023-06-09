import deserializeHTML from '../deserialize-html';
import serializeMDX from '../serialize-mdx';
import fs from 'fs';

const { configuration } = require('../configuration');

jest.mock('../configuration', () => ({
  configuration: {
    TRANSLATION: {
      TYPE: 'human',
    },
  },
}));

test('deserializes mdx with DoNotTranslate', async () => {
  const input = `
<DoNotTranslate>
  # Not all who wander are lost...

  but some probably are...
</DoNotTranslate>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('serializes DoNotTranslate wrapping a Collapser', async () => {
  const input = `
<DoNotTranslate>
  <Collapser title="Collapse me yo">
    These tests are hard to write docs for
  </Collapser>
</DoNotTranslate>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes mdx with frontmatter', async () => {
  const input = `
---
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
  There are 10 types of people in this world. Those that understand binary and those that don't.
</Callout>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes components with text props as JSX expressions', async () => {
  const input = `
<Collapser title={<><InlineCode>agent.send_custom_event</InlineCode> API</>}>
  All about that API
</Collapser>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes components with children', async () => {
  const input = `
<CollapserGroup>
  <Collapser title={<><InlineCode>agent.send_custom_event</InlineCode> API</>}>
    All about that API
  </Collapser>
</CollapserGroup>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes InlineCode components', async () => {
  const input = `
<InlineCode>agent.send_custom_event</InlineCode>
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
  console.log('html', html);
  const mdx = await deserializeHTML(html);
  console.log('mdx', mdx.trim());

  expect(mdx).toEqual(input.trim());
});

test('deserializes TechTileGrid components', async () => {
  const input = `
<TechTileGrid>
  <TechTile
    name="iOS"
    icon="logo-apple"
    to="/agents/ios-agent"
  />
</TechTileGrid>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes block ImageSizing component', async () => {
  const input = `
<ImageSizing
  width="32px"
  height="32px"
>
  ![test.png](./images/test.png)
</ImageSizing>
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('deserializes inline ImageSizing component', async () => {
  const input = `
This is a test with an <ImageSizing width="32px" height="32px">![test.png](./images/test.png)</ImageSizing> inline image.
  `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});

test('kitchen sink', async () => {
  const input = fs.readFileSync(`${__dirname}/kitchen-sink.mdx`, 'utf-8');

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
  const input = '<InlinePopover/>';

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

test('deserialize iframes', async () => {
  const input = `<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/04JP0ky_hjI"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>`;

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

test('deserializes InlineSignup component', async () => {
  const input = '<InlineSignup/>';

  const mdx = await deserializeHTML(await serializeMDX(input));
  expect(mdx).toEqual(input);
});

test('deserializes MDXComment component', async () => {
  const input = `
<WARNING>
  This is a note to future authors about the MDX content.

  It does not render in the UI
</WARNING>
    `;

  const mdx = await deserializeHTML(await serializeMDX(input));

  expect(mdx).toEqual(input.trim());
});
