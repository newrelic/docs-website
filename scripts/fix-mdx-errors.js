#!/usr/bin/env node

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const yaml = require('js-yaml');

/**
 * Auto-fix common MDX errors based on patterns found in translation PRs
 */

const fixes = {
  htmlCommentsAroundJSX: 0,
  escapedJSXComments: 0,
  blockCommentsInJSX: 0,
  missingReleaseDate: 0,
};

/**
 * Fix 1: Remove HTML comments around JSX components
 */
function fixHTMLCommentsAroundJSX(content) {
  const htmlCommentPattern = /<!--\s*(<[A-Z][^>]*>)/g;

  if (htmlCommentPattern.test(content)) {
    content = content.replace(/<!--\s*(<[A-Z])/g, '$1');
    content = content.replace(/(<\/[A-Z][a-zA-Z]*>)\s*-->/g, '$1');
    fixes.htmlCommentsAroundJSX++;
  }

  return content;
}

/**
 * Fix 2: Remove backslash escapes from JSX comments
 */
function fixEscapedJSXComments(content) {
  const escapedCommentPattern = /\{\/\\?\*|\*\\?\/\}/g;

  if (escapedCommentPattern.test(content)) {
    content = content.replace(/\{\/\\\*/g, '{/*');
    content = content.replace(/\\\*\/\}/g, '*/}');
    fixes.escapedJSXComments++;
  }

  return content;
}

/**
 * Fix 3: Wrap standalone block comments in JSX with curly braces
 */
function fixBlockCommentsInJSX(content) {
  const lines = content.split('\n');
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('/*') && !trimmed.startsWith('{/*')) {
      const prevLines = lines.slice(Math.max(0, i - 5), i).join('\n');
      const isInCodeBlock = prevLines.includes('```');

      if (!isInCodeBlock) {
        const indent = line.match(/^\s*/)[0];
        lines[i] = indent + '{' + trimmed + '}';
        modified = true;
        fixes.blockCommentsInJSX++;
      }
    }
  }

  return modified ? lines.join('\n') : content;
}

/**
 * Fix 4: Add missing releaseDate to frontmatter
 */
function fixMissingReleaseDate(content, filePath) {
  if (!filePath.includes('release-notes')) {
    return content;
  }

  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return content;
  }

  try {
    const frontmatter = yaml.load(frontmatterMatch[1]);

    if (!frontmatter.releaseDate) {
      const today = new Date().toISOString().split('T')[0];
      let frontmatterText = frontmatterMatch[1];
      if (!frontmatterText.endsWith('\n')) {
        frontmatterText += '\n';
      }
      const updatedFrontmatter = frontmatterText + `releaseDate: '${today}'\n`;
      content = content.replace(
        frontmatterMatch[0],
        `---\n${updatedFrontmatter}---`
      );
      fixes.missingReleaseDate++;
      console.log(
        `  ⚠️  Added placeholder releaseDate to ${path.basename(
          filePath
        )} - please verify!`
      );
    }
  } catch (e) {
    // Invalid YAML, skip
  }

  return content;
}

/**
 * Apply all fixes to a file
 */
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  content = fixHTMLCommentsAroundJSX(content);
  content = fixEscapedJSXComments(content);
  content = fixBlockCommentsInJSX(content);
  content = fixMissingReleaseDate(content, filePath);

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  let filePaths = [];

  if (args.length === 0) {
    console.log('No files specified, processing all MDX files...\n');
    filePaths = glob.sync(
      `${__dirname}/../src{/content/**/*.mdx,/i18n/content/**/*.mdx,/install/**/*.mdx}`
    );
  } else if (args[0] === '--staged') {
    const { execSync } = require('child_process');
    const stagedFiles = execSync(
      'git diff --cached --name-only --diff-filter=d',
      {
        encoding: 'utf8',
      }
    );
    filePaths = stagedFiles
      .split('\n')
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => path.join(__dirname, '..', file));
  } else {
    filePaths = args.flatMap((arg) => {
      const fullPath = path.resolve(arg);
      if (fs.existsSync(fullPath)) {
        if (fs.statSync(fullPath).isDirectory()) {
          return glob.sync(`${fullPath}/**/*.mdx`);
        } else if (fullPath.endsWith('.mdx')) {
          return [fullPath];
        }
      }
      return [];
    });
  }

  if (filePaths.length === 0) {
    console.log('No MDX files found to process.');
    return;
  }

  console.log(`🔧 Processing ${filePaths.length} MDX files...\n`);

  let fixedCount = 0;

  for (const filePath of filePaths) {
    const wasFixed = fixFile(filePath);
    if (wasFixed) {
      fixedCount++;
      console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${filePaths.length}`);
  console.log(`   Files modified: ${fixedCount}`);
  console.log(`\n🔧 Fixes applied:`);
  console.log(`   HTML comments around JSX: ${fixes.htmlCommentsAroundJSX}`);
  console.log(`   Escaped JSX comments: ${fixes.escapedJSXComments}`);
  console.log(`   Block comments in JSX: ${fixes.blockCommentsInJSX}`);
  console.log(`   Missing releaseDate: ${fixes.missingReleaseDate}`);

  if (fixedCount > 0) {
    console.log('\n✨ Files fixed successfully!');
  } else {
    console.log('\n✨ No fixes needed - all files are clean!\n');
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
