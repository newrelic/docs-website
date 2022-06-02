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
