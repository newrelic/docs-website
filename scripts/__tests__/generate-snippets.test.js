'use strict';

const fs = require('fs');
const path = require('path');

const { generateSnippets, pathToComponentName } = require('../generate-snippets');

const snippetsDir = path.join(__dirname, '../../src/components/snippets');

describe('pathToComponentName', () => {
  test('maps a nested path to PascalCase, per the AC example', () => {
    expect(pathToComponentName('apm/nodejs/prerequisites.mdx')).toBe(
      'ApmNodejsPrerequisites'
    );
  });

  test('treats hyphens the same as path separators', () => {
    expect(pathToComponentName('shared/api-limits.mdx')).toBe(
      'SharedApiLimits'
    );
  });
});

describe('generateSnippets', () => {
  // Writes a temp snippet, runs the callback, then removes it and regenerates
  // - the generator's own stale-file cleanup (see generate-snippets.js) puts
  // .generated/ and Snippets.js back to their real state, so no manual
  // snapshot/restore is needed here.
  const withTempSnippet = async (filename, content, run) => {
    const file = path.join(snippetsDir, filename);
    fs.writeFileSync(file, content);
    try {
      await run();
    } finally {
      fs.unlinkSync(file);
      await generateSnippets();
    }
  };

  test('throws on a name collision with a reserved/theme component', async () => {
    await withTempSnippet('Callout.mdx', 'This should never compile.\n', async () => {
      await expect(generateSnippets()).rejects.toThrow(/Name collision/);
    });
  });

  test('fails loudly on a stray unescaped brace, same as any other page on the site', async () => {
    // Real MDX (used for every hand-written page too) treats a bare `{` as
    // the start of a JS expression - it doesn't get silently auto-escaped.
    // Compiling should reject with a clear error rather than produce broken
    // or silently-wrong output.
    await withTempSnippet(
      '__brace-check.mdx',
      'The payload looks like { foo: bar } when decoded.\n',
      async () => {
        await expect(generateSnippets()).rejects.toThrow();
      }
    );
  });

  test('supports a real markdown table, unlike the old hand-rolled parser', async () => {
    await withTempSnippet(
      'table-check.mdx',
      '| Header A | Header B |\n| --- | --- |\n| Cell 1 | Cell 2 |\n',
      async () => {
        await generateSnippets();
        const generated = fs.readFileSync(
          path.join(snippetsDir, '.generated', 'TableCheck.js'),
          'utf-8'
        );
        expect(generated).toContain('<table>');
        expect(generated).toContain('Cell 1');
      }
    );
  });

  test('injects a working usePageMeta import without the writer typing one', async () => {
    await withTempSnippet(
      'apm/meta-check.mdx',
      '{usePageMeta().prodName}\n',
      async () => {
        await generateSnippets();
        const generated = fs.readFileSync(
          path.join(snippetsDir, '.generated', 'ApmMetaCheck.js'),
          'utf-8'
        );
        // Computed from this snippet's own nested location, not hand-typed -
        // apm/meta-check.mdx is one level down from snippets/, so it should
        // resolve up to src/components/PageMetaContext.
        expect(generated).toContain(
          "import { usePageMeta } from '../../PageMetaContext';"
        );
      }
    );
  });
});
