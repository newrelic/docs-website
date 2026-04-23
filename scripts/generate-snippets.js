const fs = require('fs');
const path = require('path');

const snippetsDir = path.join(__dirname, '../src/components/snippets');
const outputFile = path.join(__dirname, '../src/components/Snippets.js');

function generateSnippets() {
  if (!fs.existsSync(snippetsDir)) {
    fs.mkdirSync(snippetsDir, { recursive: true });
  }

  const mdxFiles = fs.readdirSync(snippetsDir).filter(f => f.endsWith('.mdx'));

  if (mdxFiles.length === 0) {
    console.log('⚠️  No MDX snippets found');
    return;
  }

  let components = {};

  mdxFiles.forEach(file => {
    const name = path.basename(file, '.mdx');
    const componentName = name.charAt(0).toUpperCase() + name.slice(1);
    const content = fs.readFileSync(path.join(snippetsDir, file), 'utf-8');
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

try {
  generateSnippets();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}
