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
          path.join(snippetsDir, '.generated', 'TableCheck.en.js'),
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
          path.join(snippetsDir, '.generated', 'ApmMetaCheck.en.js'),
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

  describe('locale-aware builds (BUILD_LANG)', () => {
    // Each locale is a separate Netlify build (docs-website-jp, etc.), not one
    // build serving every locale - see the comment on getTargetLocale in
    // generate-snippets.js. So there's at most one non-English locale per
    // generateSnippets() call, resolved fresh from BUILD_LANG each time.
    const i18nSnippetsDir = path.join(
      __dirname,
      '../../src/i18n/content/jp/components/snippets'
    );

    const withBuildLang = async (locale, run) => {
      const original = process.env.BUILD_LANG;
      process.env.BUILD_LANG = locale;
      try {
        await run();
      } finally {
        if (original === undefined) delete process.env.BUILD_LANG;
        else process.env.BUILD_LANG = original;
        await generateSnippets();
      }
    };

    test('uses the translated variant when BUILD_LANG matches and a translation exists', async () => {
      const localeFile = path.join(i18nSnippetsDir, 'locale-check.mdx');
      fs.mkdirSync(i18nSnippetsDir, { recursive: true });
      fs.writeFileSync(localeFile, '## 翻訳済み\n');

      await withTempSnippet('locale-check.mdx', '## English\n', async () => {
        await withBuildLang('jp', async () => {
          await generateSnippets();

          const index = fs.readFileSync(
            path.join(snippetsDir, '../Snippets.js'),
            'utf-8'
          );
          expect(index).toContain("from './snippets/.generated/LocaleCheck.jp'");

          const jpFile = fs.readFileSync(
            path.join(snippetsDir, '.generated', 'LocaleCheck.jp.js'),
            'utf-8'
          );
          expect(jpFile).toContain('翻訳済み');

          // English is still generated too - it's the fallback for every
          // other snippet on a jp build, and the source of truth for props.
          expect(
            fs.existsSync(path.join(snippetsDir, '.generated', 'LocaleCheck.en.js'))
          ).toBe(true);
        });
        fs.unlinkSync(localeFile);
      });
    });

    test('falls back to English when BUILD_LANG is set but no translation exists yet', async () => {
      await withTempSnippet('no-translation-check.mdx', '## English only\n', async () => {
        await withBuildLang('jp', async () => {
          await generateSnippets();

          const index = fs.readFileSync(
            path.join(snippetsDir, '../Snippets.js'),
            'utf-8'
          );
          expect(index).toContain("from './snippets/.generated/NoTranslationCheck.en'");
          expect(
            fs.existsSync(path.join(snippetsDir, '.generated', 'NoTranslationCheck.jp.js'))
          ).toBe(false);
        });
      });
    });
  });
});
