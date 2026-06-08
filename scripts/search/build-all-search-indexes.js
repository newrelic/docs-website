#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const SearchIndexBuilder = require('./build-search-index.js');

async function buildAllSearchIndexes() {
  console.log('🔍 Building search indexes for ALL languages...');
  
  // Define all supported languages
  const supportedLanguages = ['en', 'es', 'fr', 'jp', 'kr', 'pt'];
  
  // Check which languages actually have content
  const availableLanguages = [];
  for (const lang of supportedLanguages) {
    let contentPath;
    if (lang === 'en') {
      contentPath = path.join(__dirname, '../../src/content/docs');
    } else {
      contentPath = path.join(__dirname, `../../src/i18n/content/${lang}/docs`);
    }
    
    if (fs.existsSync(contentPath)) {
      availableLanguages.push(lang);
      console.log(`📂 Found content for language: ${lang.toUpperCase()}`);
    } else {
      console.log(`⚠️  No content found for language: ${lang.toUpperCase()} (path: ${contentPath})`);
    }
  }
  
  console.log(`📚 Building search indexes for ${availableLanguages.length} languages: ${availableLanguages.join(', ')}`);
  
  // Build indexes for all available languages in parallel
  const buildPromises = availableLanguages.map(async (lang) => {
    try {
      console.log(`🔨 Building index for ${lang.toUpperCase()}...`);
      const builder = new SearchIndexBuilder(lang);
      await builder.build();
      console.log(`✅ Search index built for ${lang.toUpperCase()}`);
      return { lang, success: true };
    } catch (error) {
      console.error(`❌ Failed to build search index for ${lang.toUpperCase()}:`, error);
      return { lang, success: false, error };
    }
  });
  
  const results = await Promise.all(buildPromises);
  
  // Report results
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`\n📊 Build Summary:`);
  console.log(`✅ Successful: ${successful.length} (${successful.map(r => r.lang.toUpperCase()).join(', ')})`);
  if (failed.length > 0) {
    console.log(`❌ Failed: ${failed.length} (${failed.map(r => r.lang.toUpperCase()).join(', ')})`);
  }
  
  if (failed.length === 0) {
    console.log(`🎉 All search indexes built successfully!`);
  } else {
    console.error(`⚠️  Some search indexes failed to build`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  buildAllSearchIndexes()
    .then(() => {
      console.log('🎉 Multi-language search index build complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Multi-language search index build failed:', error);
      process.exit(1);
    });
}

module.exports = buildAllSearchIndexes;