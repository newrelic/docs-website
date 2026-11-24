import { expect } from 'expect';
import { test } from 'uvu';

import { repair } from '../../repair-translations.mjs';

const fix = (input, english = '') => repair(input, english).text;

// from es/docs/apis/nerdgraph/examples/nerdgraph-rag.mdx
test('joins an inline element that was split into its own paragraph', () => {
  const input = `<td>
  Define el contexto organizacional; el tipo debe ser 

  <strong>ORGANIZATION</strong>

  .
</td>`;

  expect(fix(input)).toEqual(`<td>
  Define el contexto organizacional; el tipo debe ser <strong>ORGANIZATION</strong>.
</td>`);
});

// from es/docs/browser/.../browser-summary-page.mdx
test('puts a split element back into its list item or step', () => {
  const input = `1. Vaya a

   <DNT>
     **Browser**
   </DNT>

   .

* <DNT>
    **Throughput**
  </DNT>

  : este gráfico muestra el rendimiento`;

  expect(fix(input)).toEqual(`1. Vaya a <DNT>**Browser**</DNT>.

* <DNT>**Throughput**</DNT>: este gráfico muestra el rendimiento`);
});

test('keeps a paragraph that is only an inline element in the English too', () => {
  const english = `Run:

<DNT>**Grok:**</DNT>

Done`;
  const input = `Ejecute:

<DNT>
  **Grok:**
</DNT>

Hecho`;

  expect(fix(input, english)).toEqual(`Ejecute:

<DNT>**Grok:**</DNT>

Hecho`);
});

test('leaves code fences alone', () => {
  const input = '```bash\n<code>\n  x\n</code>\n```';

  expect(fix(input)).toEqual(input);
});

// from es/docs/alerts/get-notified/notification-integrations.mdx and
// jp/docs/logs/ui-data/drop-data-drop-filter-rules.mdx
test('repairs heading ids', () => {
  expect(fix('### Destino [#set-mobile\\_push-destination][#set-mobile_push-destination]')).toEqual(
    '### Destino [#set-mobile_push-destination]'
  );
  expect(fix('### Pare \\[#streaming example]')).toEqual('### Pare [#streaming example]');
  expect(fix('## [NerdGraph \\[#nerdgraph\\]](#drop-attributes)')).toEqual(
    '## [NerdGraph](#drop-attributes) [#nerdgraph]'
  );
});

// from pt/docs/apm/agents/ruby-agent/.../ruby-agent-requirements-supported-frameworks.mdx
test('restores escaped MDX expressions', () => {
  expect(fix("Versões \\{&apos;&lt;&apos;} 4.x")).toEqual("Versões {'<'} 4.x");
  expect(fix('* \\{&lt;&gt;Debian &lt;img style=\\{\\{ height: &apos;32px&apos; }}/&gt;&lt;/&gt;}')).toEqual(
    "* {<>Debian <img style={{ height: '32px' }}/></>}"
  );
});

test('never changes words and is idempotent', () => {
  const input = `<td>
  <InlineCode>
    state
  </InlineCode> (cualquiera)
</td>`;
  const once = fix(input);

  expect(once).toEqual('<td>\n  <InlineCode>state</InlineCode> (cualquiera)\n</td>');
  expect(fix(once)).toEqual(once);
});

// from es/docs/accounts/.../eligibility-guidelines-new-relic-nonprofit-program.mdx
test('keeps a DNT label that English also writes over several lines', () => {
  const label = `<DNT>
  **Ineligible nonprofits**
</DNT>`;
  const english = `Intro.\n\n${label}\n\nMore.`;
  const input = `Introducción.\n\n${label}\n\nMás.`;

  expect(fix(input, english)).toEqual(input);
});

test('still joins a DNT that English writes inline', () => {
  const english = 'See <DNT>**Debug console**</DNT> menu.';
  const input = `Vea el menú

<DNT>
  **Debug console**
</DNT>

.`;

  expect(fix(input, english)).toEqual('Vea el menú <DNT>**Debug console**</DNT>.');
});

test.run();
