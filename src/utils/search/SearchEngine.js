class SearchEngine {
  constructor() {
    this.index = null;
    this.documents = [];
    this.metadata = {};
    this.initialized = false;
  }

  // Load search index data
  async loadIndex(indexData) {
    try {
      if (indexData) {
        this.documents = indexData.documents || [];
        this.metadata = indexData.metadata || {};
        this.initialized = true;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to load search index:', error);
      return false;
    }
  }

  // Normalize search query
  normalizeQuery(query) {
    return query
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, ' ') // Remove special characters except hyphens
      .replace(/\s+/g, ' ') // Normalize whitespace
      .split(' ')
      .filter(term => term.length > 1); // Remove single character terms
  }

  // Calculate relevance score for a document
  calculateScore(doc, queryTerms, options = {}) {
    let score = 0;
    const { 
      titleWeight = 3,
      headingWeight = 2,
      descriptionWeight = 1.5,
      contentWeight = 1,
      tagWeight = 2
    } = options;

    const title = doc.title.toLowerCase();
    const description = doc.description.toLowerCase();
    const content = doc.content.toLowerCase();
    const tags = (doc.tags || []).map(tag => tag.toLowerCase());
    const headings = (doc.headings || []).map(h => h.text.toLowerCase());

    queryTerms.forEach(term => {
      // Exact title match gets highest score
      if (title.includes(term)) {
        score += titleWeight * (title === term ? 3 : 1);
      }

      // Description matches
      if (description.includes(term)) {
        score += descriptionWeight;
      }

      // Heading matches
      headings.forEach(heading => {
        if (heading.includes(term)) {
          score += headingWeight;
        }
      });

      // Content matches
      const contentMatches = (content.match(new RegExp(term, 'g')) || []).length;
      score += contentMatches * contentWeight;

      // Tag matches
      tags.forEach(tag => {
        if (tag.includes(term)) {
          score += tagWeight;
        }
      });
    });

    // Apply document weight from indexing
    score *= doc.searchWeight || 1;

    // Boost score for documents with better metadata
    if (doc.hasMetaDescription) score *= 1.1;
    if (doc.tags && doc.tags.length > 0) score *= 1.05;

    return score;
  }

  // Perform fuzzy matching for typo tolerance
  fuzzyMatch(term, text, threshold = 0.7) {
    const words = text.split(' ');
    return words.some(word => {
      if (word.length < 3) return word === term;
      
      const similarity = this.calculateSimilarity(term, word);
      return similarity >= threshold;
    });
  }

  // Calculate string similarity (Levenshtein distance based)
  calculateSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    
    if (len1 === 0) return len2 === 0 ? 1 : 0;
    if (len2 === 0) return 0;

    const matrix = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) matrix[i][0] = i;
    for (let j = 0; j <= len2; j++) matrix[0][j] = j;

    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }

    const maxLen = Math.max(len1, len2);
    return (maxLen - matrix[len1][len2]) / maxLen;
  }

  // Main search function
  search(query, options = {}) {
    if (!this.initialized || !query.trim()) {
      return {
        results: [],
        total: 0,
        query: query,
        metadata: this.metadata
      };
    }

    const {
      limit = 10,
      offset = 0,
      categoryFilter = null,
      tagFilter = null,
      enableFuzzy = true,
      minScore = 0.1
    } = options;

    const queryTerms = this.normalizeQuery(query);
    let results = [];

    // Score all documents
    this.documents.forEach(doc => {
      // Apply filters
      if (categoryFilter && doc.category !== categoryFilter) return;
      if (tagFilter && !doc.tags.some(tag => 
        tag.toLowerCase().includes(tagFilter.toLowerCase())
      )) return;

      const score = this.calculateScore(doc, queryTerms, options);

      // Add fuzzy matching for typo tolerance
      if (enableFuzzy && score < minScore) {
        const fuzzyScore = queryTerms.reduce((acc, term) => {
          const titleFuzzy = this.fuzzyMatch(term, doc.title.toLowerCase()) ? 1 : 0;
          const descFuzzy = this.fuzzyMatch(term, doc.description.toLowerCase()) ? 0.5 : 0;
          return acc + titleFuzzy + descFuzzy;
        }, 0);
        
        if (fuzzyScore > 0) {
          const highlight = this.createHighlights(doc, queryTerms);
          results.push({ ...doc, score: fuzzyScore * 0.5, fuzzy: true, highlight });
        }
      } else if (score >= minScore) {
        // Create highlight structure for Swiftype compatibility
        const highlight = this.createHighlights(doc, queryTerms);
        results.push({ ...doc, score, fuzzy: false, highlight });
      }
    });

    // Sort by relevance score
    results.sort((a, b) => b.score - a.score);

    // Apply pagination
    const total = results.length;
    const paginatedResults = results.slice(offset, offset + limit);

    return {
      results: paginatedResults,
      total,
      query,
      queryTerms,
      hasMore: offset + limit < total,
      metadata: this.metadata
    };
  }

  // Get search suggestions/autocomplete
  getSuggestions(query, limit = 5) {
    if (!this.initialized || query.length < 2) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();
    const suggestions = new Set();

    // Collect suggestions from titles and tags
    this.documents.forEach(doc => {
      // Title suggestions
      if (doc.title.toLowerCase().includes(normalizedQuery)) {
        suggestions.add(doc.title);
      }

      // Tag suggestions
      doc.tags.forEach(tag => {
        if (tag.toLowerCase().includes(normalizedQuery)) {
          suggestions.add(tag);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }

  // Get categories for filtering
  getCategories() {
    return this.metadata.categories || [];
  }

  // Get popular tags
  getPopularTags(limit = 20) {
    if (!this.initialized) return [];

    const tagCounts = {};
    this.documents.forEach(doc => {
      doc.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit)
      .map(([tag, count]) => ({ tag, count }));
  }

  // Search within a specific category
  searchInCategory(query, category, options = {}) {
    return this.search(query, { ...options, categoryFilter: category });
  }

  // Get recent documents
  getRecentDocuments(limit = 10) {
    if (!this.initialized) return [];

    return [...this.documents]
      .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
      .slice(0, limit);
  }

  // Create highlight structure for Swiftype compatibility
  createHighlights(doc, queryTerms) {
    const highlightTitle = this.highlightMatches(doc.title, queryTerms, '');
    const highlightBody = this.highlightMatches(
      doc.description || doc.content.substring(0, 400), 
      queryTerms, 
      ''
    );
    
    return {
      title: highlightTitle,
      body: highlightBody
    };
  }

  // Highlight search terms in text
  highlightMatches(text, queryTerms, className = 'search-highlight') {
    if (!queryTerms || queryTerms.length === 0) return text;

    let highlightedText = text;
    // Sort terms by length (longest first) to avoid nested highlighting issues
    const sortedTerms = [...queryTerms].sort((a, b) => b.length - a.length);
    
    sortedTerms.forEach(term => {
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedTerm})`, 'gi');
      const replacement = className 
        ? `<em class="${className}">$1</em>`
        : '<em>$1</em>';
      highlightedText = highlightedText.replace(regex, replacement);
    });

    return highlightedText;
  }

  // Get search statistics
  getStats() {
    return {
      totalDocuments: this.documents.length,
      categories: this.getCategories().length,
      tags: this.metadata.tags?.length || 0,
      lastUpdated: this.metadata.buildDate,
      initialized: this.initialized
    };
  }
}

// Export both as ES module and CommonJS for compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SearchEngine;
}

export default SearchEngine;