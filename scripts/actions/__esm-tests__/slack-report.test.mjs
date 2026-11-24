import { expect } from 'expect';
import { test } from 'uvu';

import { buildReport } from '../utils/slack-report.mjs';

test('lists each failed file with its locale and reason', () => {
  const report = buildReport({
    title: 'Translations received (machine)',
    attempted: 2,
    succeeded: 1,
    failures: [
      {
        slug: 'src/content/docs/page.mdx',
        locale: 'ja-JP',
        error: 'Unexpected end of file in element <Callout>\n    at line 3',
      },
    ],
  });

  expect(report).toContain('🌐 Translations received (machine) — ');
  expect(report).toContain('• ❌ Failed: 1');
  expect(report).toContain(
    '• src/content/docs/page.mdx (ja-JP) — Unexpected end of file in element <Callout>'
  );
  expect(report).not.toContain('at line 3');
});

test('keeps the default title for the send report', () => {
  const report = buildReport({ attempted: 0, succeeded: 0, failures: [] });

  expect(report).toContain('🌐 Translation Pipeline Report — ');
  expect(report).toContain('• ✅ Failed: 0');
});

test.run();
