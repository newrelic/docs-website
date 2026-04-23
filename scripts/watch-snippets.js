const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const snippetsDir = path.join(__dirname, '../src/components/snippets');

console.log('👀 Watching for snippet changes...');

// Run generation once at start
console.log('🔄 Initial generation...');
spawn('node', [path.join(__dirname, 'generate-snippets.js')], {
  stdio: 'inherit'
});

// Watch for changes
fs.watch(snippetsDir, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.mdx')) {
    console.log(`\n📝 Detected change in ${filename}`);
    console.log('🔄 Regenerating snippets...');

    spawn('node', [path.join(__dirname, 'generate-snippets.js')], {
      stdio: 'inherit'
    });
  }
});

console.log(`✅ Watching: ${snippetsDir}`);
console.log('💡 Edit any .mdx file in snippets/ to see auto-regeneration\n');
