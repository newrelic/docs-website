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
    components[componentName] = {
      jsx: convertMdxToJsx(content),
      props: extractProps(content),
      jsxComponents: detectJsxComponents(content),
    };
  });

  // Check if any snippet uses external JSX components
  const anyJsxComponents = Object.values(components).some(c => c.jsxComponents.length > 0);

  // Generate component exports with React import for SSR
  const output = `// AUTO-GENERATED - DO NOT EDIT
// Run: yarn generate:snippets

import React from 'react';
${anyJsxComponents ? "import { useMDXComponents } from '@mdx-js/react';\n" : ''}
${Object.entries(components).map(([name, { jsx, props, jsxComponents }]) => {
  const propsSignature = props.length > 0
    ? `({ ${props.map(p => `${p.name} = '${p.default}'`).join(', ')} })`
    : '()';

  if (jsxComponents.length > 0) {
    // Use function body so we can call the useMDXComponents hook
    return `export const ${name} = ${propsSignature} => {
  const { ${jsxComponents.join(', ')} } = useMDXComponents();
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

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Skip prop definition comments (supports both {/* PROPS: */} and <!-- PROPS: --> formats)
    if (line.startsWith('{/* PROPS:') || line.startsWith('<!-- PROPS:')) continue;

    // Pass through lines that are raw JSX (component tags, closing tags, JSX expressions)
    if (line.startsWith('<') || (line.startsWith('{') && !line.startsWith('{{'))) {
      jsx.push(`    ${escapeJsxWithProps(line)}`);
      continue;
    }

    if (line.startsWith('## ')) {
      jsx.push(`    <h2>${escapeJsxWithProps(line.substring(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      jsx.push(`    <h3>${escapeJsxWithProps(line.substring(4))}</h3>`);
    } else if (line.startsWith('* **')) {
      const match = line.match(/\* \*\*(.+?):\*\* (.+)/);
      if (match) {
        jsx.push(`      <li><strong>${escapeJsxWithProps(match[1])}:</strong> ${escapeJsxWithProps(match[2])}</li>`);
      } else {
        jsx.push(`      <li>${escapeJsxWithProps(line.substring(2))}</li>`);
      }
    } else if (line.startsWith('* ')) {
      jsx.push(`      <li>${escapeJsxWithProps(line.substring(2))}</li>`);
    } else {
      jsx.push(`    <p>${escapeJsxWithProps(line)}</p>`);
    }
  }

  // Wrap list items
  let result = [];
  let inList = false;

  for (let line of jsx) {
    if (line.includes('<li>')) {
      if (!inList) {
        result.push('    <ul>');
        inList = true;
      }
      result.push(line);
    } else {
      if (inList) {
        result.push('    </ul>');
        inList = false;
      }
      result.push(line);
    }
  }

  if (inList) {
    result.push('    </ul>');
  }

  return `\n  <>\n${result.join('\n')}\n  </>\n`;
}

function escapeJsx(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

// Escape JSX and convert {{propName}} to {propName}
function escapeJsxWithProps(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\{\{\s*(\w+)\s*\}\}/g, '{$1}'); // {{agentName}} or {{ agentName }} -> {agentName}
}

// Extract prop definitions from MDX comments
// Supports: {/* PROPS: agentName="APM", minVersion="X.X" */} (preferred MDX syntax)
// Also supports: <!-- PROPS: agentName="APM", minVersion="X.X" --> (HTML comment syntax)
function extractProps(mdx) {
  const propsMatch = mdx.match(/\{\/\*\s*PROPS:\s*(.+?)\s*\*\/\}/) ||
                     mdx.match(/<!--\s*PROPS:\s*(.+?)\s*-->/);
  if (!propsMatch) return [];

  const propsString = propsMatch[1];
  const props = [];

  // Parse prop definitions: name="default"
  const propRegex = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = propRegex.exec(propsString)) !== null) {
    props.push({
      name: match[1],
      default: match[2]
    });
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
