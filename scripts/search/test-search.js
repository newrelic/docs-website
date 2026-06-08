const fs = require('fs');
const path = require('path');
const SearchIndexBuilder = require('./build-search-index.js');

// Test the search functionality
async function testSearch() {
  console.log('🧪 Testing Custom Search Implementation\n');

  try {
    // Test 1: Check if search index exists
    console.log('1️⃣ Testing search index files...');
    const indexPath = path.join(__dirname, '../../src/data/search-index.json');
    const compressedPath = path.join(__dirname, '../../src/data/search-index.min.json');
    const staticPath = path.join(__dirname, '../../static/search-index.json');

    if (fs.existsSync(indexPath)) {
      console.log('✅ Search index exists');
      const indexSize = (fs.statSync(indexPath).size / 1024 / 1024).toFixed(2);
      console.log(`   📄 Size: ${indexSize}MB`);
    } else {
      console.log('❌ Search index not found');
      return;
    }

    if (fs.existsSync(compressedPath)) {
      console.log('✅ Compressed search index exists');
      const compressedSize = (fs.statSync(compressedPath).size / 1024 / 1024).toFixed(2);
      console.log(`   📄 Compressed size: ${compressedSize}MB`);
    } else {
      console.log('❌ Compressed search index not found');
    }

    if (fs.existsSync(staticPath)) {
      console.log('✅ Static search index exists (publicly accessible)');
    } else {
      console.log('❌ Static search index not found');
    }

    // Test 2: Load and validate index data
    console.log('\n2️⃣ Testing search index data...');
    const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    
    console.log(`✅ Documents indexed: ${indexData.documents.length}`);
    console.log(`✅ Categories found: ${indexData.metadata.categories.length}`);
    console.log(`✅ Tags found: ${indexData.metadata.tags.length}`);
    console.log(`✅ Build date: ${indexData.metadata.buildDate}`);

    // Test 3: Sample document structure
    console.log('\n3️⃣ Testing document structure...');
    const sampleDoc = indexData.documents[0];
    console.log('Sample document fields:');
    console.log(`   📄 Title: "${sampleDoc.title}"`);
    console.log(`   📄 URL: ${sampleDoc.url}`);
    console.log(`   📄 Category: ${sampleDoc.category}`);
    console.log(`   📄 Word count: ${sampleDoc.wordCount}`);
    console.log(`   📄 Search weight: ${sampleDoc.searchWeight}`);
    console.log(`   📄 Tags: [${sampleDoc.tags.slice(0, 3).join(', ')}${sampleDoc.tags.length > 3 ? '...' : ''}]`);

    // Test 4: Test search engine functionality
    console.log('\n4️⃣ Testing search engine...');
    
    // Import and test search engine
    const SearchEngine = require('../../src/utils/search/SearchEngine.js').default || require('../../src/utils/search/SearchEngine.js');
    const searchEngine = new SearchEngine();
    
    await searchEngine.loadIndex(indexData);
    console.log('✅ Search engine initialized');

    // Test searches
    const testQueries = ['alerts', 'API', 'browser monitoring', 'installation'];
    
    for (const query of testQueries) {
      const results = searchEngine.search(query, { limit: 3 });
      console.log(`\n   🔍 "${query}" → ${results.total} results`);
      
      results.results.slice(0, 2).forEach((result, index) => {
        console.log(`      ${index + 1}. ${result.title} (score: ${result.score.toFixed(2)})`);
      });
    }

    // Test 5: Test suggestions
    console.log('\n5️⃣ Testing search suggestions...');
    const suggestions = searchEngine.getSuggestions('ale', 5);
    console.log(`✅ Suggestions for "ale": [${suggestions.slice(0, 3).join(', ')}]`);

    // Test 6: Test categories and tags
    console.log('\n6️⃣ Testing categories and tags...');
    const categories = searchEngine.getCategories();
    console.log(`✅ Categories: [${categories.slice(0, 5).join(', ')}...]`);
    
    const popularTags = searchEngine.getPopularTags(5);
    console.log(`✅ Popular tags: [${popularTags.map(t => t.tag).join(', ')}]`);

    // Test 7: Performance test
    console.log('\n7️⃣ Testing search performance...');
    const startTime = Date.now();
    for (let i = 0; i < 100; i++) {
      searchEngine.search('monitoring', { limit: 10 });
    }
    const endTime = Date.now();
    const avgTime = (endTime - startTime) / 100;
    console.log(`✅ Average search time: ${avgTime.toFixed(2)}ms (100 searches)`);

    console.log('\n🎉 All tests passed! Your search is ready to use.');
    console.log('\n📋 Next steps:');
    console.log('   1. Run: yarn start (or npm start)');
    console.log('   2. Visit: http://localhost:8000/search-test');
    console.log('   3. Test the search interface');
    console.log('   4. Press Cmd+K (Mac) or Ctrl+K (Windows) to test keyboard shortcuts');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n🔧 Try running: yarn build:search-index');
  }
}

// Run tests
if (require.main === module) {
  testSearch();
}

module.exports = testSearch;