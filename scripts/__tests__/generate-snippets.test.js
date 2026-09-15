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
  const outputFile = path.join(snippetsDir, '../Snippets.js');

  const withTempSnippet = (filename, content, run) => {
    const file = path.join(snippetsDir, filename);
    const originalOutput = fs.readFileSync(outputFile, 'utf-8');
    fs.writeFileSync(file, content);
    try {
      run();
    } finally {
      fs.unlinkSync(file);
      // Restore the committed Snippets.js — a passing run regenerates it
      // without this temp fixture, so this just guards a failed assertion.
      fs.writeFileSync(outputFile, originalOutput);
    }
  };

  test('throws on a name collision with a reserved/theme component', () => {
    withTempSnippet('Callout.mdx', 'This should never compile.\n', () => {
      expect(() => generateSnippets()).toThrow(/Name collision/);
    });
  });

  test('escapes a stray literal brace in plain text so it stays valid JSX', () => {
    withTempSnippet(
      '__brace-check.mdx',
      'The payload looks like { foo: bar } when decoded.\n',
      () => {
        generateSnippets();
        const output = fs.readFileSync(outputFile, 'utf-8');
        expect(output).toContain("{'{'} foo: bar {'}'}");
      }
    );
  });
});
