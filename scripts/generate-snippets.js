const fs = require('fs');
const path = require('path');
const { LOCALES } = require('./actions/utils/constants');

const snippetsDir = path.join(__dirname, '../src/components/snippets');
const generatedDir = path.join(snippetsDir, '.generated');
const indexFile = path.join(__dirname, '../src/components/Snippets.js');
const pageMetaContextPath = path.join(
  __dirname,
  '../src/components/PageMetaContext.js'
);

// Each locale (docs-website-jp, docs-website-es, ...) is a SEPARATE Netlify
// site/build, not one build serving every locale - gatsby-config.js's
// ignoreI18nFolders() already excludes every i18n locale except BUILD_LANG
// from being sourced at all. So there is at most one non-English locale in
// play for any given build - resolve it here at generate time, the same
// BUILD_LANG convention env.js and the RSS plugins already use, rather than
// bundling every locale's content into every build and picking at render
// time (which would ship, say, French and Korean snippet text to the
// Japanese site for nothing).
// Read fresh on each call (not cached at module load) - a real build only
// ever runs this once in a fresh process, but tests exercise multiple
// BUILD_LANG values within one process.
const getTargetLocale = () =>
  LOCALES.includes(process.env.BUILD_LANG) ? process.env.BUILD_LANG : null;

// Translated snippet content mirrors the same convention every other
// translated page already uses: src/content/docs/X <-> src/i18n/content/<locale>/docs/X.
// A snippet's translation lives at the identical relative path, just under
// src/i18n/content/<locale>/components/snippets/ instead of src/components/snippets/.
const i18nSnippetsDir = (locale) =>
  path.join(__dirname, `../src/i18n/content/${locale}/components/snippets`);

async function generateSnippets() {
  const targetLocale = getTargetLocale();

  if (!fs.existsSync(snippetsDir)) {
    fs.mkdirSync(snippetsDir, { recursive: true });
  }

  const mdxFiles = findMdxFiles(snippetsDir);

  if (mdxFiles.length === 0) {
    console.log('⚠️  No MDX snippets found');
    return;
  }

  // @mdx-js/mdx is ESM-only; this script is CommonJS (required from gatsby-node.js
  // and run directly as a CLI script), so it has to load the compiler dynamically.
  const { default: compile } = await import('@mdx-js/mdx');

  const reserved = getReservedComponentNames();
  const componentNames = new Set();
  const snippets = [];
  // { `${componentName}.${locale}.js` => fileContent } across every snippet,
  // for stale-file cleanup and writing below.
  const perLocaleFiles = new Map();

  for (const { filePath, relativePath } of mdxFiles) {
    const componentName = pathToComponentName(relativePath);

    // Guard: duplicate name within the snippets folder
    if (componentNames.has(componentName)) {
      throw new Error(
        `Duplicate snippet name: "${componentName}"\n` +
          `   Conflicts with an existing snippet file.\n` +
          `   Rename one of the files to resolve.`
      );
    }

    // Guard: name collision with an existing MDX component in MDXContainer.js
    if (reserved.has(componentName)) {
      throw new Error(
        `Name collision: "${componentName}" is already registered in MDXContainer.js defaultComponents.\n` +
          `   Rename the snippet file: ${relativePath}`
      );
    }
    componentNames.add(componentName);

    // Props/defaults are a structural contract of the snippet, not localized
    // content - always taken from the English source, regardless of whether
    // a translated variant exists for this build's locale.
    const englishContent = fs.readFileSync(filePath, 'utf-8');
    const props = extractProps(englishContent);

    const englishFile = await compileSnippetSource(
      englishContent,
      filePath,
      compile
    );
    perLocaleFiles.set(`${componentName}.en.js`, englishFile);

    // A locale variant lives at the identical relative path under the same
    // parallel-tree convention every other translated page already uses -
    // see i18nSnippetsDir above. Only compiled when this build actually
    // targets that locale (see targetLocale above) and a translation exists;
    // falls back to the English file otherwise.
    let usesTranslation = false;
    if (targetLocale) {
      const localeFilePath = path.join(
        i18nSnippetsDir(targetLocale),
        relativePath
      );
      if (fs.existsSync(localeFilePath)) {
        const localeContent = fs.readFileSync(localeFilePath, 'utf-8');
        const localeFile = await compileSnippetSource(
          localeContent,
          localeFilePath,
          compile
        );
        perLocaleFiles.set(`${componentName}.${targetLocale}.js`, localeFile);
        usesTranslation = true;
      }
    }

    snippets.push({
      componentName,
      props,
      locale: usesTranslation ? targetLocale : 'en',
    });
  }

  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
  }

  // Remove stale generated files (e.g. a snippet that was renamed/deleted, or
  // a locale translation that was removed) so .generated/ never drifts from
  // the current state of snippets/ and its i18n mirrors.
  fs.readdirSync(generatedDir).forEach((file) => {
    if (!perLocaleFiles.has(file)) fs.unlinkSync(path.join(generatedDir, file));
  });

  let changed = false;
  perLocaleFiles.forEach((fileContent, filename) => {
    const outputPath = path.join(generatedDir, filename);
    const existing = fs.existsSync(outputPath)
      ? fs.readFileSync(outputPath, 'utf-8')
      : '';
    if (fileContent !== existing) {
      fs.writeFileSync(outputPath, fileContent);
      changed = true;
    }
  });

  const index = `// AUTO-GENERATED - DO NOT EDIT
// Run: yarn generate:snippets
${
  targetLocale
    ? `// Built for BUILD_LANG=${targetLocale} - snippets below use their ${targetLocale} translation where one exists, English otherwise.`
    : ''
}

${snippets
  .map(
    ({ componentName, locale }) =>
      `import ${componentName}_content from './snippets/.generated/${componentName}.${locale}';`
  )
  .join('\n')}

${snippets
  .map(({ componentName, props }) => {
    const defaultsEntries = Object.entries(props)
      .map(([name, { default: def, type }]) =>
        type === 'boolean' ? `${name}: ${def}` : `${name}: '${def}'`
      )
      .join(', ');

    return `export const ${componentName} = (props) => (
  <${componentName}_content {...{ ${defaultsEntries} }} {...props} />
);`;
  })
  .join('\n\n')}
`;

  const existingIndex = fs.existsSync(indexFile)
    ? fs.readFileSync(indexFile, 'utf-8')
    : '';
  if (index !== existingIndex) {
    fs.writeFileSync(indexFile, index);
    changed = true;
  }

  if (!changed) {
    console.log(`⏭️  No changes — Snippets.js is already up to date`);
    return;
  }

  const translated = snippets.filter(({ locale }) => locale !== 'en');
  console.log(
    `✅ Generated ${mdxFiles.length} snippet(s) for locale "${
      targetLocale || 'en'
    }": ${[...componentNames].join(', ')}${
      translated.length
        ? ` (${
            translated.length
          } using a ${targetLocale} translation: ${translated
            .map(({ componentName }) => componentName)
            .join(', ')})`
        : ''
    }`
  );
}

// Compiles one snippet source file (English or a locale variant) into a
// self-contained module exporting the compiled component as its default
// export. Each locale variant gets its own file/module for the same reason
// the English one already did: compile() emits its own makeShortcode/
// MDXLayout consts, so two compiled snippets can never share one file.
async function compileSnippetSource(content, sourceFilePath, compile) {
  // Snippets read page frontmatter via usePageMeta() (see PageMetaContext.js).
  // Writers call it directly (e.g. `{usePageMeta().prodName === "X" ? ... : ...}`)
  // without importing it themselves - inject the import here, using the real
  // path from THIS source file's own location, so it's always correct
  // regardless of how deeply nested the snippet (or its locale mirror) is.
  const usesPageMeta = /\busePageMeta\s*\(/.test(content);
  const pageMetaImport = usesPageMeta
    ? `import { usePageMeta } from '${relativeImportPath(
        sourceFilePath,
        pageMetaContextPath
      )}';\n\n`
    : '';

  const compiled = await compile(pageMetaImport + content, { jsx: true });

  // Matches the exact preamble gatsby-plugin-mdx generates for every real page
  // (node_modules/gatsby-plugin-mdx/utils/gen-mdx.js) - `mdx` is the pragma
  // function that resolves <Callout>-style tags against the ambient
  // MDXProvider, exactly like any hand-written .mdx page already does.
  // React is needed too: JSX fragment shorthand (<>...</>) compiles to
  // React.Fragment regardless of the @jsx pragma override.
  //
  // compile()'s output already starts with its own `/* @jsx mdx */` line -
  // insert the imports right after it instead of prepending a second copy.
  // Every occurrence of the compiled module's default component name (the
  // function declaration AND the trailing `X.isMDXComponent = true`
  // assignment) needs renaming, not just the declaration - otherwise the
  // assignment references an identifier that no longer exists, which throws
  // a ReferenceError the moment this file is loaded.
  const renamed = compiled.replace(/\bMDXContent\b/g, 'RawContent');
  return renamed.replace(
    '/* @jsx mdx */\n',
    "/* @jsx mdx */\nimport React from 'react';\nimport { mdx } from '@mdx-js/react';\n"
  );
}

// Extract default prop values from an MDX comment, e.g.
// {/* PROPS: agentName="APM Agent", minVersion="X.X" */} or {/* PROPS: showAdvanced=false */}.
// The snippet body references these as real MDX expressions (`{props.agentName}`),
// not a custom placeholder syntax - this just supplies the defaults a plain
// function call wouldn't otherwise have.
function extractProps(mdx) {
  const propsMatch = mdx.match(/\{\/\*\s*PROPS:\s*(.+?)\s*\*\/\}/);
  if (!propsMatch) return {};

  const propsString = propsMatch[1];
  const props = {};

  const stringRegex = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = stringRegex.exec(propsString)) !== null) {
    props[match[1]] = { default: match[2], type: 'string' };
  }

  const boolRegex = /(\w+)=(true|false)/g;
  while ((match = boolRegex.exec(propsString)) !== null) {
    props[match[1]] = { default: match[2], type: 'boolean' };
  }

  return props;
}

// Component names provided by @newrelic/gatsby-theme-newrelic via its own MDXProvider.
// These don't appear in MDXContainer.js defaultComponents but are still available in
// all MDX pages, so snippets must not reuse these names.
const THEME_COMPONENT_NAMES = new Set([
  'Callout',
  'Code',
  'CollapserGroup',
  'Collapser',
  'InlineCode',
  'Steps',
  'Step',
  'Tabs',
  'Table',
  'Video',
  'Icon',
]);

// Parse MDXContainer.js and extract all component names registered in defaultComponents.
// Combined with THEME_COMPONENT_NAMES, these form the full reserved names set.
function getReservedComponentNames() {
  const mdxContainerPath = path.join(
    __dirname,
    '../src/components/MDXContainer.js'
  );
  const content = fs.readFileSync(mdxContainerPath, 'utf-8');

  const start = content.indexOf('const defaultComponents = {');
  const end = content.indexOf('\n};', start);
  if (start === -1 || end === -1) return new Set(THEME_COMPONENT_NAMES);

  const block = content.slice(start, end);
  const reserved = new Set(THEME_COMPONENT_NAMES);

  // Match only top-level keys (exactly 2-space indent) to avoid false positives
  // from nested style objects inside component definitions
  const pattern = /^ {2}([A-Za-z][A-Za-z0-9]*)\s*[:,]/gm;
  let m;
  while ((m = pattern.exec(block)) !== null) {
    reserved.add(m[1]);
  }

  return reserved;
}

// Recursively find all .mdx files
function findMdxFiles(dir, baseDir = dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip README, generated output, and common non-snippet directories
      if (['node_modules', '.git', '.generated'].includes(entry.name)) continue;
      results = results.concat(findMdxFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.mdx')) {
      // Skip README files
      if (entry.name === 'README.mdx') continue;

      const relativePath = path.relative(baseDir, fullPath);
      results.push({ filePath: fullPath, relativePath });
    }
  }

  return results;
}

// Convert file path to PascalCase component name
// Examples:
//   apm/nodejs/prerequisites.mdx -> ApmNodejsPrerequisites
//   shared/api-limits.mdx -> SharedApiLimits
//   ReuseableWarning.mdx -> ReuseableWarning
function pathToComponentName(relativePath) {
  // Remove .mdx extension
  const withoutExt = relativePath.replace(/\.mdx$/, '');

  // Split by path separators and hyphens
  const parts = withoutExt.split(/[\/\\-]/);

  // Convert each part to PascalCase and join
  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// POSIX-style relative import path (no file extension), for the import line
// injected ahead of a snippet's own content.
function relativeImportPath(fromFile, toFile) {
  const rel = path
    .relative(path.dirname(fromFile), toFile)
    .replace(/\.js$/, '')
    .split(path.sep)
    .join('/');
  return rel.startsWith('.') ? rel : `./${rel}`;
}

// The current set of valid snippet component names, e.g. "ApmSharedPrerequisites".
// Used by the translation serializer/deserializer (scripts/actions/serialize-mdx.mjs,
// deserialize-html.mjs) to recognize a snippet tag as translatable content without
// requiring a hand-written entry in handlers.mjs for every snippet - unlike that
// generation pipeline, this is a cheap, synchronous filesystem scan (no MDX
// compilation), so it's fine to memoize and call from a hot path.
let cachedSnippetComponentNames = null;
function listSnippetComponentNames() {
  if (!cachedSnippetComponentNames) {
    cachedSnippetComponentNames = fs.existsSync(snippetsDir)
      ? findMdxFiles(snippetsDir).map(({ relativePath }) =>
          pathToComponentName(relativePath)
        )
      : [];
  }
  return cachedSnippetComponentNames;
}

module.exports = {
  generateSnippets,
  pathToComponentName,
  listSnippetComponentNames,
};

// Run directly (CLI / npm script), as opposed to being required by gatsby-node.js
if (require.main === module) {
  generateSnippets().catch((error) => {
    console.error('❌', error.message);
    process.exit(1);
  });
}
