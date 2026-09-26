const fs = require('fs');
const path = require('path');

const snippetsDir = path.join(__dirname, '../src/components/snippets');
const generatedDir = path.join(snippetsDir, '.generated');
const indexFile = path.join(__dirname, '../src/components/Snippets.js');
const pageMetaContextPath = path.join(__dirname, '../src/components/PageMetaContext.js');

async function generateSnippets() {
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
  const generatedFiles = [];

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

    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const props = extractProps(rawContent);

    // Snippets read page frontmatter via usePageMeta() (see PageMetaContext.js).
    // Writers call it directly (e.g. `{usePageMeta().prodName === "X" ? ... : ...}`)
    // without importing it themselves - inject the import here, using the real
    // path from THIS snippet's own location, so it's always correct regardless
    // of how deeply nested the snippet is.
    const usesPageMeta = /\busePageMeta\s*\(/.test(rawContent);
    const pageMetaImport = usesPageMeta
      ? `import { usePageMeta } from '${relativeImportPath(filePath, pageMetaContextPath)}';\n\n`
      : '';

    const compiled = await compile(pageMetaImport + rawContent, { jsx: true });

    // Matches the exact preamble gatsby-plugin-mdx generates for every real page
    // (node_modules/gatsby-plugin-mdx/utils/gen-mdx.js) - `mdx` is the pragma
    // function that resolves <Callout>-style tags against the ambient
    // MDXProvider, exactly like any hand-written .mdx page already does.
    // React is needed too: JSX fragment shorthand (<>...</>) compiles to
    // React.Fragment regardless of the @jsx pragma override.
    const defaultsEntries = Object.entries(props)
      .map(([name, { default: def, type }]) =>
        type === 'boolean' ? `${name}: ${def}` : `${name}: '${def}'`
      )
      .join(', ');

    // compile()'s output already starts with its own `/* @jsx mdx */` line -
    // insert the imports right after it instead of prepending a second copy.
    // Every occurrence of the compiled module's default component name
    // (the function declaration AND the trailing `X.isMDXComponent = true`
    // assignment) needs renaming, not just the declaration - otherwise the
    // assignment references an identifier that no longer exists, which
    // throws a ReferenceError the moment this file is loaded.
    const renamed = compiled.replace(/\bMDXContent\b/g, 'RawContent');
    const withImports = renamed.replace(
      '/* @jsx mdx */\n',
      "/* @jsx mdx */\nimport React from 'react';\nimport { mdx } from '@mdx-js/react';\n"
    );

    const fileContent = `${withImports}

export const ${componentName} = (props) => (
  <RawContent {...{ ${defaultsEntries} }} {...props} />
);
`;

    generatedFiles.push({ componentName, fileContent });
  }

  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
  }

  // Remove stale generated files (e.g. a snippet that was renamed or deleted)
  // so the .generated/ folder never drifts from the current snippets/ folder.
  const currentFiles = new Set(generatedFiles.map(({ componentName }) => `${componentName}.js`));
  fs.readdirSync(generatedDir).forEach((file) => {
    if (!currentFiles.has(file)) fs.unlinkSync(path.join(generatedDir, file));
  });

  let changed = false;
  generatedFiles.forEach(({ componentName, fileContent }) => {
    const outputPath = path.join(generatedDir, `${componentName}.js`);
    const existing = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, 'utf-8') : '';
    if (fileContent !== existing) {
      fs.writeFileSync(outputPath, fileContent);
      changed = true;
    }
  });

  const index = `// AUTO-GENERATED - DO NOT EDIT
// Run: yarn generate:snippets

${generatedFiles
  .map(({ componentName }) => `export { ${componentName} } from './snippets/.generated/${componentName}';`)
  .join('\n')}
`;

  const existingIndex = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf-8') : '';
  if (index !== existingIndex) {
    fs.writeFileSync(indexFile, index);
    changed = true;
  }

  if (!changed) {
    console.log(`⏭️  No changes — Snippets.js is already up to date`);
    return;
  }

  console.log(`✅ Generated ${mdxFiles.length} snippet(s): ${[...componentNames].join(', ')}`);
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
  'Callout', 'Code', 'CollapserGroup', 'Collapser', 'InlineCode',
  'Steps', 'Step', 'Tabs', 'Table', 'Video', 'Icon',
]);

// Parse MDXContainer.js and extract all component names registered in defaultComponents.
// Combined with THEME_COMPONENT_NAMES, these form the full reserved names set.
function getReservedComponentNames() {
  const mdxContainerPath = path.join(__dirname, '../src/components/MDXContainer.js');
  const content = fs.readFileSync(mdxContainerPath, 'utf-8');

  const start = content.indexOf('const defaultComponents = {');
  const end = content.indexOf('\n};', start);
  if (start === -1 || end === -1) return new Set(THEME_COMPONENT_NAMES);

  const block = content.slice(start, end);
  const reserved = new Set(THEME_COMPONENT_NAMES);

  // Match only top-level keys (exactly 2-space indent) to avoid false positives
  // from nested style objects inside component definitions
  const pattern = /^  ([A-Za-z][A-Za-z0-9]*)\s*[:,]/gm;
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
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
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
      ? findMdxFiles(snippetsDir).map(({ relativePath }) => pathToComponentName(relativePath))
      : [];
  }
  return cachedSnippetComponentNames;
}

module.exports = { generateSnippets, pathToComponentName, listSnippetComponentNames };

// Run directly (CLI / npm script), as opposed to being required by gatsby-node.js
if (require.main === module) {
  generateSnippets().catch((error) => {
    console.error('❌', error.message);
    process.exit(1);
  });
}
