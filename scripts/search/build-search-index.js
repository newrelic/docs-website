const fs = require('fs');
const path = require('path');
const matter = require('@gr2m/gray-matter');

class SearchIndexBuilder {
  constructor(language = 'en') {
    this.documents = [];
    this.language = language;
    this.outputDir = path.join(__dirname, '../../src/data');
    
    // Define content directories for each language
    this.contentDirs = {
      'en': path.join(__dirname, '../../src/content/docs'),
      'es': path.join(__dirname, '../../src/i18n/content/es/docs'),
      'fr': path.join(__dirname, '../../src/i18n/content/fr/docs'),
      'jp': path.join(__dirname, '../../src/i18n/content/jp/docs'),
      'kr': path.join(__dirname, '../../src/i18n/content/kr/docs'),
      'pt': path.join(__dirname, '../../src/i18n/content/pt/docs')
    };
    
    this.contentDir = this.contentDirs[language] || this.contentDirs['en'];
  }

  // Extract clean text content from MDX (simplified approach)
  extractTextContent(content) {
    // Remove MDX components and keep only text
    let textContent = content
      // Remove JSX components
      .replace(/<[^>]+>/g, ' ')
      // Remove MDX imports
      .replace(/^import\s+.*$/gm, '')
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, ' ')
      // Remove inline code
      .replace(/`[^`]+`/g, ' ')
      // Remove links but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove image references
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
      // Remove HTML comments
      .replace(/<!--[\s\S]*?-->/g, '')
      // Clean up whitespace
      .replace(/\s+/g, ' ')
      .trim();

    return textContent;
  }

  // Extract headings using regex (simplified approach)
  extractHeadings(content) {
    const headings = [];
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        level: match[1].length,
        text: match[2].trim().replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links from headings
      });
    }

    return headings;
  }

  // Generate fallback title for files without explicit title
  generateFallbackTitle(frontmatter, relativePath) {
    // Try multiple fallback strategies
    if (frontmatter.subject) {
      // For release notes: "C SDK" + version info
      if (frontmatter.version) {
        return `${frontmatter.subject} ${frontmatter.version}`;
      }
      return frontmatter.subject;
    }
    
    if (frontmatter.version && frontmatter.releaseDate) {
      // Version + date for release notes without subject
      return `Version ${frontmatter.version} (${frontmatter.releaseDate})`;
    }

    // Use filename as last resort
    const fileName = path.basename(relativePath, '.mdx')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return fileName === 'Index' ? 
      `${path.dirname(relativePath).split('/').pop().replace(/-/g, ' ')} Index` : 
      fileName;
  }

  // Process a single MDX file
  processFile(filePath) {
    this.totalFiles++;
    try {
      const relativePath = path.relative(this.contentDir, filePath);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter, content } = matter(fileContent);

      // Generate title (use frontmatter.title or fallback)
      let title = frontmatter.title;
      if (!title) {
        title = this.generateFallbackTitle(frontmatter, relativePath);
        this.skippedFiles++; // Count as recovered, but track for statistics
        if (this.skippedFiles <= 5) { // Show fewer examples since we're recovering
          console.log(`Generated title for ${relativePath}: "${title}"`);
        }
      }

      const textContent = this.extractTextContent(content);
      const headings = this.extractHeadings(content);

      // Generate URL path (without trailing slash to match Gatsby routing)
      let urlPath;
      if (this.language === 'en') {
        urlPath = '/docs/' + relativePath.replace(/\.mdx?$/, '').replace(/\/index$/, '');
      } else {
        urlPath = `/${this.language}/docs/` + relativePath.replace(/\.mdx?$/, '').replace(/\/index$/, '');
      }

      // Calculate content metrics for ranking
      const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
      const hasMetaDescription = Boolean(frontmatter.metaDescription);
      
      return {
        id: relativePath.replace(/\.mdx?$/, '').replace(/\//g, '-'),
        title: title,
        description: frontmatter.metaDescription || '',
        url: urlPath,
        content: textContent.substring(0, 2000), // Limit content length
        headings: headings.slice(0, 10), // Limit headings
        tags: frontmatter.tags || [],
        category: relativePath.split('/')[0], // First directory as category
        language: this.language, // Add language metadata
        wordCount,
        hasMetaDescription,
        lastModified: fs.statSync(filePath).mtime.toISOString(),
        // Search ranking factors
        searchWeight: this.calculateSearchWeight(frontmatter, textContent, headings, relativePath)
      };
    } catch (error) {
      this.errorFiles++;
      if (this.errorFiles <= 10) { // Only show first 10 examples
        console.error(`Error processing file ${filePath}:`, error.message);
      }
      return null;
    }
  }

  // Calculate search weight for ranking
  calculateSearchWeight(frontmatter, content, headings, relativePath) {
    let weight = 1.0;

    // Boost based on content quality indicators
    if (frontmatter.metaDescription) weight += 0.2;
    if (frontmatter.tags && frontmatter.tags.length > 0) weight += 0.1;
    if (headings.length > 2) weight += 0.1;
    if (content.length > 500) weight += 0.1;
    
    // Boost important sections
    const category = relativePath.split('/')[0];
    const importantCategories = ['alerts', 'apis', 'browser', 'infrastructure', 'mobile', 'apm'];
    if (importantCategories.includes(category)) weight += 0.2;

    // Boost overview/introduction pages
    const fileName = path.basename(relativePath, '.mdx').toLowerCase();
    if (['overview', 'introduction', 'intro', 'getting-started'].includes(fileName)) {
      weight += 0.3;
    }

    return Math.min(weight, 2.0); // Cap at 2.0
  }

  // Recursively process all MDX files
  processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        this.processDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        const doc = this.processFile(fullPath);
        if (doc) {
          this.documents.push(doc);
        }
      }
    }
  }

  // Build the search index
  async build() {
    console.log('🔍 Building search index...');
    console.log(`📂 Processing directory: ${this.contentDir}`);

    this.totalFiles = 0;
    this.skippedFiles = 0;
    this.errorFiles = 0;

    // Check if content directory exists (may be filtered out by BUILD_LANG)
    if (!fs.existsSync(this.contentDir)) {
      console.warn(`⚠️  Content directory for ${this.language} does not exist: ${this.contentDir}`);
      console.log('📝 This is likely due to BUILD_LANG environment variable filtering.');
      return null; // Skip building for this language
    }

    // Process all MDX files
    this.processDirectory(this.contentDir);

    console.log(`📊 Index Statistics:`);
    console.log(`  Total MDX files found: ${this.totalFiles}`);
    console.log(`  Successfully indexed: ${this.documents.length}`);
    console.log(`  Generated titles: ${this.skippedFiles}`);
    console.log(`  Processing errors: ${this.errorFiles}`);
    console.log(`  Coverage: ${((this.documents.length / this.totalFiles) * 100).toFixed(1)}%`);

    // Sort by search weight for better ranking
    this.documents.sort((a, b) => b.searchWeight - a.searchWeight);

    // Get unique categories and tags
    const categories = [...new Set(this.documents.map(doc => doc.category))].sort();
    const allTags = [...new Set(this.documents.flatMap(doc => doc.tags))].sort();

    // Create search index
    const searchIndex = {
      documents: this.documents,
      metadata: {
        totalDocuments: this.documents.length,
        categories: categories,
        tags: allTags,
        language: this.language,
        buildDate: new Date().toISOString(),
        version: '1.0.0'
      }
    };

    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    // Write search index with language suffix
    const indexFilename = this.language === 'en' ? 'search-index.json' : `search-index-${this.language}.json`;
    const compressedFilename = this.language === 'en' ? 'search-index.min.json' : `search-index-${this.language}.min.json`;
    
    const indexPath = path.join(this.outputDir, indexFilename);
    fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2));

    // Write compressed version for production
    const compressedPath = path.join(this.outputDir, compressedFilename);
    fs.writeFileSync(compressedPath, JSON.stringify(searchIndex));

    // Copy files to static directory for public access
    const staticDir = path.join(__dirname, '../../static');
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }
    
    fs.copyFileSync(indexPath, path.join(staticDir, indexFilename));
    fs.copyFileSync(compressedPath, path.join(staticDir, compressedFilename));

    console.log(`✅ Search index built successfully for language: ${this.language.toUpperCase()}!`);
    console.log(`📄 Index size: ${(fs.statSync(indexPath).size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📄 Compressed size: ${(fs.statSync(compressedPath).size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📊 Categories: ${categories.length}`);
    console.log(`🏷️  Tags: ${allTags.length}`);
    console.log(`🌐 Language: ${this.language}`);

    return searchIndex;
  }

  // Build search index in memory only (for GraphQL integration)
  async buildInMemory() {
    console.log('🔍 Building search index in memory...');
    console.log(`📂 Processing directory: ${this.contentDir}`);

    this.totalFiles = 0;
    this.skippedFiles = 0;
    this.errorFiles = 0;

    // Check if content directory exists (may be filtered out by BUILD_LANG)
    if (!fs.existsSync(this.contentDir)) {
      console.warn(`⚠️  Content directory for ${this.language} does not exist: ${this.contentDir}`);
      console.log('📝 This is likely due to BUILD_LANG environment variable filtering.');
      
      // Return empty search index for this language
      return {
        documents: [],
        metadata: {
          totalDocuments: 0,
          categories: [],
          tags: [],
          language: this.language,
          buildDate: new Date().toISOString(),
          averageWordCount: 0,
          totalWordCount: 0,
          contentAvailable: false
        }
      };
    }

    // Process all MDX files
    this.processDirectory(this.contentDir);

    console.log(`📊 Index Statistics:`);
    console.log(`  Total MDX files found: ${this.totalFiles}`);
    console.log(`  Successfully indexed: ${this.documents.length}`);
    console.log(`  Generated titles: ${this.skippedFiles}`);
    console.log(`  Processing errors: ${this.errorFiles}`);
    console.log(`  Coverage: ${((this.documents.length / this.totalFiles) * 100).toFixed(1)}%`);

    // Sort by search weight for better ranking
    this.documents.sort((a, b) => b.searchWeight - a.searchWeight);

    // Get unique categories and tags
    const categories = [...new Set(this.documents.map(doc => doc.category))].sort();
    const allTags = [...new Set(this.documents.flatMap(doc => doc.tags))].sort();

    // Create search index (in memory only)
    const searchIndex = {
      documents: this.documents,
      metadata: {
        totalDocuments: this.documents.length,
        categories: categories,
        tags: allTags,
        language: this.language,
        buildDate: new Date().toISOString(),
        version: '1.0.0'
      }
    };

    console.log(`✅ Search index built successfully in memory for ${this.language.toUpperCase()}!`);
    console.log(`📊 Categories: ${categories.length}`);
    console.log(`🏷️  Tags: ${allTags.length}`);
    console.log(`🌐 Language: ${this.language}`);

    return searchIndex;
  }
}

// Run if called directly
if (require.main === module) {
  // Get language from BUILD_LANG environment variable, default to 'en'
  const language = process.env.BUILD_LANG || 'en';
  const builder = new SearchIndexBuilder(language);
  
  builder.build()
    .then(() => {
      console.log(`🎉 Search index build complete for ${language.toUpperCase()}!`);
      process.exit(0);
    })
    .catch((error) => {
      console.error(`❌ Search index build failed for ${language.toUpperCase()}:`, error);
      process.exit(1);
    });
}

module.exports = SearchIndexBuilder;