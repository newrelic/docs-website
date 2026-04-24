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

  mdxFiles.forEach(({ filePath, relativePath }) => {
    const componentName = pathToComponentName(relativePath);
    const content = fs.readFileSync(filePath, 'utf-8');
    components[componentName] = convertMdxToJsx(content);
  });

  // Generate component exports with React import for SSR
  const output = `// AUTO-GENERATED - DO NOT EDIT
// Run: yarn generate:snippets

import React from 'react';

${Object.entries(components).map(([name, jsx]) =>
  `export const ${name} = () => (${jsx});`
).join('\n\n')}
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

    if (line.startsWith('## ')) {
      jsx.push(`    <h2>${escapeJsx(line.substring(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      jsx.push(`    <h3>${escapeJsx(line.substring(4))}</h3>`);
    } else if (line.startsWith('* **')) {
      const match = line.match(/\* \*\*(.+?):\*\* (.+)/);
      if (match) {
        jsx.push(`      <li><strong>${escapeJsx(match[1])}:</strong> ${escapeJsx(match[2])}</li>`);
      } else {
        jsx.push(`      <li>${escapeJsx(line.substring(2))}</li>`);
      }
    } else if (line.startsWith('* ')) {
      jsx.push(`      <li>${escapeJsx(line.substring(2))}</li>`);
    } else {
      jsx.push(`    <p>${escapeJsx(line)}</p>`);
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
