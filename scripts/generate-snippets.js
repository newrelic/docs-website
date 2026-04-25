const fs = require('fs');
const path = require('path');

const snippetsDir = path.join(__dirname, '../src/components/snippets');
const outputFile = path.join(__dirname, '../src/components/Snippets.js');

function generateSnippets() {
  if (!fs.existsSync(snippetsDir)) {
    fs.mkdirSync(snippetsDir, { recursive: true });
  }

  const mdxFiles = findMdxFiles(snippetsDir);

  if (mdxFiles.length === 0) {
    console.log('⚠️  No MDX snippets found');
    return;
  }

  let components = {};
  const reserved = getReservedComponentNames();

  mdxFiles.forEach(({ filePath, relativePath }) => {
    const componentName = pathToComponentName(relativePath);

    // Guard: duplicate name within the snippets folder
    if (components[componentName]) {
      console.error(`❌ Duplicate snippet name: "${componentName}"`);
      console.error(`   Conflicts with an existing snippet file.`);
      console.error(`   Rename one of the files to resolve.`);
      process.exit(1);
    }

    // Guard: name collision with an existing MDX component in MDXContainer.js
    if (reserved.has(componentName)) {
      console.error(`❌ Name collision: "${componentName}" is already registered in MDXContainer.js defaultComponents.`);
      console.error(`   Rename the snippet file: ${relativePath}`);
      process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    // Warn about unsupported markdown patterns before converting
    validateSnippet(content, relativePath);

    components[componentName] = {
      jsx: convertMdxToJsx(content),
      props: extractProps(content),
      jsxComponents: detectJsxComponents(content),
      metaFields: extractMeta(content),
    };
  });

  // Determine which imports the generated file needs
  const anyJsxComponents = Object.values(components).some(c => c.jsxComponents.length > 0);
  const anyMetaFields = Object.values(components).some(c => c.metaFields.length > 0);

  // Generate component exports with React import for SSR
  const output = `// AUTO-GENERATED - DO NOT EDIT
// Run: yarn generate:snippets

import React from 'react';
${anyJsxComponents ? "import { useMDXComponents } from '@mdx-js/react';\n" : ''}${anyMetaFields ? "import { usePageMeta } from './PageMetaContext';\n" : ''}
${Object.entries(components).map(([name, { jsx, props, jsxComponents, metaFields }]) => {
  const propsSignature = props.length > 0
    ? `({ ${props.map(p => p.type === 'boolean'
        ? `${p.name} = ${p.default}`
        : `${p.name} = '${p.default}'`).join(', ')} })`
    : '()';

  // Snippets that use MDX components or page meta need a function body for hook calls
  if (jsxComponents.length > 0 || metaFields.length > 0) {
    const hookLines = [];
    if (jsxComponents.length > 0) {
      hookLines.push(`  const { ${jsxComponents.join(', ')} } = useMDXComponents();`);
    }
    if (metaFields.length > 0) {
      hookLines.push(`  const { ${metaFields.join(', ')} } = usePageMeta();`);
    }
    return `export const ${name} = ${propsSignature} => {
${hookLines.join('\n')}
  return (${jsx});
};`;
  }

  return `export const ${name} = ${propsSignature} => (${jsx});`;
}).join('\n\n')}
`;

  fs.writeFileSync(outputFile, output);
  console.log(`✅ Generated ${mdxFiles.length} snippet(s): ${Object.keys(components).join(', ')}`);
}

function convertMdxToJsx(mdx) {
  let lines = mdx.trim().split('\n');
  let jsx = [];

  // Stack tracking whether each open IF block has a matching ELSE.
  // Used to decide whether to emit a null else-arm on ENDIF.
  let ifStack = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Skip generator directive comments
    if (line.startsWith('{/* PROPS:') || line.startsWith('<!-- PROPS:')) continue;
    if (line.startsWith('{/* META:')) continue;

    // Conditional block — boolean: {/* IF: propName */}
    const ifBoolMatch = line.match(/^\{\/\*\s*IF:\s*(\w+)\s*\*\/\}$/);
    if (ifBoolMatch) {
      ifStack.push({ hasElse: false });
      jsx.push(`    {${ifBoolMatch[1]} ? (<>`);
      continue;
    }

    // Conditional block — string comparison: {/* IF: field === "value" */} or {/* IF: field !== "value" */}
    const ifEqMatch = line.match(/^\{\/\*\s*IF:\s*(\w+)\s*(===|!==)\s*"([^"]+)"\s*\*\/\}$/);
    if (ifEqMatch) {
      ifStack.push({ hasElse: false });
      jsx.push(`    {${ifEqMatch[1]} ${ifEqMatch[2]} '${ifEqMatch[3]}' ? (<>`);
      continue;
    }

    // Else block: {/* ELSE */} — closes true branch, opens false branch
    if (/^\{\/\*\s*ELSE\s*\*\/\}$/.test(line)) {
      if (ifStack.length > 0) ifStack[ifStack.length - 1].hasElse = true;
      jsx.push(`    </>) : (<>`);
      continue;
    }

    // End conditional: {/* ENDIF */}
    // If no ELSE was seen, emit a null false-arm so the ternary is valid JSX.
    if (/^\{\/\*\s*ENDIF\s*\*\/\}$/.test(line)) {
      const block = ifStack.pop();
      jsx.push(block && block.hasElse ? `    </>)}` : `    </>) : null}`);
      continue;
    }

    // Pass through lines that are raw JSX (component tags, closing tags, JSX expressions)
    if (line.startsWith('<') || (line.startsWith('{') && !line.startsWith('{{'))) {
      jsx.push(`    ${escapeJsxWithProps(line)}`);
      continue;
    }

    if (line.startsWith('# ')) {
      jsx.push(`    <h1>${escapeJsxWithProps(line.substring(2))}</h1>`);
    } else if (line.startsWith('## ')) {
      jsx.push(`    <h2>${escapeJsxWithProps(line.substring(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      jsx.push(`    <h3>${escapeJsxWithProps(line.substring(4))}</h3>`);
    } else if (line.startsWith('#### ')) {
      jsx.push(`    <h4>${escapeJsxWithProps(line.substring(5))}</h4>`);
    } else if (line.startsWith('* **')) {
      const match = line.match(/\* \*\*(.+?):\*\* (.+)/);
      if (match) {
        jsx.push(`      <li><strong>${escapeJsxWithProps(match[1])}:</strong> ${escapeJsxWithProps(match[2])}</li>`);
      } else {
        jsx.push(`      <li>${escapeJsxWithProps(line.substring(2))}</li>`);
      }
    } else if (line.startsWith('* ')) {
      jsx.push(`      <li>${escapeJsxWithProps(line.substring(2))}</li>`);
    } else if (/^\d+\. /.test(line)) {
      jsx.push(`      <li data-ol>${escapeJsxWithProps(line.replace(/^\d+\. /, ''))}</li>`);
    } else {
      jsx.push(`    <p>${escapeJsxWithProps(line)}</p>`);
    }
  }

  // Wrap list items in <ul> or <ol>, handling transitions between list types
  let result = [];
  let currentList = null; // null | 'ul' | 'ol'

  for (let line of jsx) {
    const isOl = line.includes('<li data-ol>');
    const isUl = !isOl && (line.includes('<li>') || line.includes('<li><strong>'));

    if (isOl || isUl) {
      const listType = isOl ? 'ol' : 'ul';
      if (currentList !== listType) {
        if (currentList) result.push(`    </${currentList}>`);
        result.push(`    <${listType}>`);
        currentList = listType;
      }
      result.push(line.replace(' data-ol', ''));
    } else {
      if (currentList) {
        result.push(`    </${currentList}>`);
        currentList = null;
      }
      result.push(line);
    }
  }

  if (currentList) {
    result.push(`    </${currentList}>`);
  }

  return `\n  <>\n${result.join('\n')}\n  </>\n`;
}

// Escape JSX and convert markdown formatting to JSX
function escapeJsxWithProps(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')                        // inline code
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')     // markdown links
    .replace(/\{\{\s*(\w+)\s*\}\}/g, '{$1}');                       // {{propName}} -> {propName}
}

// Extract prop definitions from MDX comments.
// Supports string props:  {/* PROPS: name="default" */}
// Supports boolean props: {/* PROPS: showSection=false */}
// Also supports HTML comment syntax: <!-- PROPS: ... -->
function extractProps(mdx) {
  const propsMatch = mdx.match(/\{\/\*\s*PROPS:\s*(.+?)\s*\*\/\}/) ||
                     mdx.match(/<!--\s*PROPS:\s*(.+?)\s*-->/);
  if (!propsMatch) return [];

  const propsString = propsMatch[1];
  const props = [];

  // String props: name="default"
  const stringRegex = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = stringRegex.exec(propsString)) !== null) {
    props.push({ name: match[1], default: match[2], type: 'string' });
  }

  // Boolean props: name=true or name=false (no quotes)
  const boolRegex = /(\w+)=(true|false)/g;
  while ((match = boolRegex.exec(propsString)) !== null) {
    props.push({ name: match[1], default: match[2] === 'true', type: 'boolean' });
  }

  return props;
}

// Extract page metadata field names declared in a snippet.
// {/* META: prodName, agentVersion */} → ['prodName', 'agentVersion']
// These fields are read from PageMetaContext at render time (populated from page frontmatter.pageMeta).
function extractMeta(content) {
  const match = content.match(/\{\/\*\s*META:\s*(.+?)\s*\*\/\}/);
  if (!match) return [];
  return match[1].split(/\s*,\s*/).map((s) => s.trim()).filter(Boolean);
}

// Warn about markdown patterns the converter cannot handle.
// These would produce broken or literal-text output without an error — fail loudly instead.
function validateSnippet(content, relativePath) {
  const lines = content.split('\n');
  const warnings = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    const lineNum = i + 1;

    // Skip comment lines
    if (trimmed.startsWith('{/*') || trimmed.startsWith('<!--')) return;

    if (/^```/.test(trimmed)) {
      warnings.push(`   Line ${lineNum}: Fenced code block (\`\`\`). Use a JSX <code> block or <InlineCode> component instead.`);
    } else if (/^\|/.test(trimmed)) {
      warnings.push(`   Line ${lineNum}: Markdown table (|). Use a JSX <table> element instead.`);
    } else if (/^!\[/.test(trimmed)) {
      warnings.push(`   Line ${lineNum}: Markdown image (![). Use a JSX <img> element instead.`);
    } else if (/^> /.test(trimmed)) {
      warnings.push(`   Line ${lineNum}: Blockquote (>). Use a <Callout> component instead.`);
    }
  });

  if (warnings.length > 0) {
    console.warn(`⚠️  Unsupported syntax in ${relativePath} — output may be incorrect:`);
    warnings.forEach(w => console.warn(w));
  }
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

// Scan snippet content for PascalCase JSX component names (e.g. <Callout>, <DNT>)
// These will be resolved via useMDXComponents() at render time
function detectJsxComponents(content) {
  const tagPattern = /<([A-Z][a-zA-Z0-9]*)/g;
  const found = new Set();
  let match;
  while ((match = tagPattern.exec(content)) !== null) {
    found.add(match[1]);
  }
  return [...found];
}

// Recursively find all .mdx files
function findMdxFiles(dir, baseDir = dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip README and common non-snippet directories
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
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

try {
  generateSnippets();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}
