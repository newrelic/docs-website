import { useState, useEffect, useCallback, useMemo } from 'react';
import SearchEngine from './SearchEngine';

// Cache for search index to avoid reloading
let searchIndexCache = null;
let searchEngineInstance = null;

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  // Initialize search engine
  useEffect(() => {
    const initializeSearch = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Create search engine instance if not exists
        if (!searchEngineInstance) {
          searchEngineInstance = new SearchEngine();
        }

        // Load search index if not cached
        if (!searchIndexCache) {
          // Try to load compressed version first, fallback to regular
          try {
            const response = await fetch('/search-index.min.json');
            if (!response.ok) {
              throw new Error('Compressed index not found');
            }
            searchIndexCache = await response.json();
          } catch {
            // Fallback to regular index
            const response = await fetch('/search-index.json');
            if (!response.ok) {
              throw new Error('Search index not found');
            }
            searchIndexCache = await response.json();
          }
        }

        // Initialize engine with cached data
        await searchEngineInstance.loadIndex(searchIndexCache);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to initialize search:', err);
        setError('Failed to load search functionality');
        setIsLoading(false);
      }
    };

    initializeSearch();
  }, []);

  // Perform search
  const performSearch = useCallback((searchQuery, options = {}) => {
    if (!searchEngineInstance || !searchEngineInstance.initialized) {
      return;
    }

    try {
      const results = searchEngineInstance.search(searchQuery, options);
      
      setSearchResults(results.results);
      setTotalResults(results.total);
      setHasMore(results.hasMore);
      setQuery(searchQuery);
      
      return results;
    } catch (err) {
      console.error('Search failed:', err);
      setError('Search failed');
      return null;
    }
  }, []);

  // Get search suggestions
  const getSuggestions = useCallback((searchQuery, limit = 5) => {
    if (!searchEngineInstance || !searchEngineInstance.initialized) {
      return [];
    }

    try {
      const newSuggestions = searchEngineInstance.getSuggestions(searchQuery, limit);
      setSuggestions(newSuggestions);
      return newSuggestions;
    } catch (err) {
      console.error('Failed to get suggestions:', err);
      return [];
    }
  }, []);

  // Clear search results
  const clearSearch = useCallback(() => {
    setSearchResults([]);
    setQuery('');
    setTotalResults(0);
    setHasMore(false);
    setSuggestions([]);
  }, []);

  // Get categories for filtering
  const categories = useMemo(() => {
    if (!searchEngineInstance || !searchEngineInstance.initialized) {
      return [];
    }
    return searchEngineInstance.getCategories();
  }, [isLoading]);

  // Get popular tags
  const popularTags = useMemo(() => {
    if (!searchEngineInstance || !searchEngineInstance.initialized) {
      return [];
    }
    return searchEngineInstance.getPopularTags();
  }, [isLoading]);

  // Search in specific category
  const searchInCategory = useCallback((searchQuery, category, options = {}) => {
    return performSearch(searchQuery, { ...options, categoryFilter: category });
  }, [performSearch]);

  // Get recent documents
  const getRecentDocuments = useCallback((limit = 10) => {
    if (!searchEngineInstance || !searchEngineInstance.initialized) {
      return [];
    }
    return searchEngineInstance.getRecentDocuments(limit);
  }, [isLoading]);

  // Highlight search terms
  const highlightMatches = useCallback((text, className = 'search-highlight') => {
    if (!searchEngineInstance || !query) {
      return text;
    }
    const queryTerms = searchEngineInstance.normalizeQuery(query);
    return searchEngineInstance.highlightMatches(text, queryTerms, className);
  }, [query]);

  // Get search statistics
  const getStats = useCallback(() => {
    if (!searchEngineInstance || !searchEngineInstance.initialized) {
      return null;
    }
    return searchEngineInstance.getStats();
  }, [isLoading]);

  return {
    // State
    isLoading,
    error,
    searchResults,
    query,
    suggestions,
    totalResults,
    hasMore,
    categories,
    popularTags,

    // Actions
    performSearch,
    getSuggestions,
    clearSearch,
    searchInCategory,
    getRecentDocuments,
    highlightMatches,
    getStats,

    // Computed
    hasResults: searchResults.length > 0,
    isEmpty: !isLoading && searchResults.length === 0 && query.length > 0,
    isInitialized: !isLoading && !error,
  };
};

export default useSearch;