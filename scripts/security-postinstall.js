#!/usr/bin/env node
/**
 * Security postinstall: overlay safe top-level package versions onto
 * vulnerable nested copies that yarn 1.x classic cannot selectively
 * resolve.
 *
 * Runs after `patch-package`. Idempotent: skipped if target already
 * matches source.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const nodeModules = path.join(repoRoot, 'node_modules');

const readVersion = (dir) => {
  try {
    return JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')).version;
  } catch {
    return null;
  }
};

const overlays = [
  {
    advisory: 'CVE-2022-3517 (Dependabot alert #83)',
    source: 'minimatch',
    targets: [
      'recursive-readdir/node_modules/minimatch',
      'graphql-config/node_modules/minimatch',
    ],
  },
];

let appliedCount = 0;
let skippedCount = 0;

for (const { advisory, source, targets } of overlays) {
  const sourceDir = path.join(nodeModules, source);
  const sourceVersion = readVersion(sourceDir);
  if (!sourceVersion) {
    console.warn(`[security-postinstall] source ${source} not found, skipping ${advisory}`);
    continue;
  }
  for (const rel of targets) {
    const targetDir = path.join(nodeModules, rel);
    const targetVersion = readVersion(targetDir);
    if (targetVersion === null) continue; // not installed, nothing to do
    if (targetVersion === sourceVersion) {
      skippedCount++;
      continue;
    }
    fs.rmSync(targetDir, { recursive: true, force: true });
    fs.cpSync(sourceDir, targetDir, { recursive: true });
    console.log(`[security-postinstall] ${advisory}: ${rel} ${targetVersion} -> ${sourceVersion}`);
    appliedCount++;
  }
}

console.log(`[security-postinstall] ${appliedCount} overlay(s) applied, ${skippedCount} already in sync`);
