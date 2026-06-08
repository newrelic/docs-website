// Search API utilities for future Netlify Functions integration
// This provides a consistent interface for both static and dynamic search

class SearchAPI {
  constructor() {
    this.baseURL = typeof window !== 'undefined' ? window.location.origin : '';
  }

  // Static search (Phase 1)
  async staticSearch(query, options = {}) {
    const searchParams = new URLSearchParams({
      q: query,
      ...options
    });

    // For now, this returns mock data structure that matches our static search
    // In Phase 2, this will call Netlify Functions
    return {
      results: [],
      total: 0,
      query,
      source: 'static'
    };
  }

  // Enhanced search with analytics (Phase 2 - Future)
  async enhancedSearch(query, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}/.netlify/functions/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          options,
          timestamp: new Date().toISOString(),
        })
      });

      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        ...data,
        source: 'enhanced'
      };
    } catch (error) {
      console.warn('Enhanced search failed, falling back to static:', error);
      return this.staticSearch(query, options);
    }
  }

  // Track search analytics (Phase 2 - Future)
  async trackSearch(query, results, userAction = 'search') {
    try {
      // Only track in production and if functions are available
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      await fetch(`${this.baseURL}/.netlify/functions/search-analytics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          resultCount: results.length,
          userAction,
          timestamp: new Date().toISOString(),
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        })
      });
    } catch (error) {
      // Fail silently for analytics
      console.debug('Analytics tracking failed:', error);
    }
  }

  // Get search suggestions (Phase 2 - Future)
  async getSuggestions(partialQuery) {
    try {
      const response = await fetch(`${this.baseURL}/.netlify/functions/search-suggestions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: partialQuery
        })
      });

      if (!response.ok) {
        throw new Error(`Suggestions API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.debug('Enhanced suggestions failed:', error);
      return [];
    }
  }

  // Submit user feedback (Phase 2 - Future)
  async submitFeedback(query, resultId, feedback) {
    try {
      await fetch(`${this.baseURL}/.netlify/functions/search-feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          resultId,
          feedback, // 'helpful', 'not-helpful', 'irrelevant'
          timestamp: new Date().toISOString(),
        })
      });
    } catch (error) {
      console.debug('Feedback submission failed:', error);
    }
  }
}

// Export singleton instance
const searchAPI = new SearchAPI();

export default searchAPI;

// Helper functions for search integration

// Debounce function for search input
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Format search results for display
export const formatSearchResult = (result, query) => {
  return {
    ...result,
    // Truncate content for display
    excerpt: result.content 
      ? result.content.substring(0, 200) + (result.content.length > 200 ? '...' : '')
      : result.description,
    
    // Generate breadcrumb from URL
    breadcrumb: result.url
      .split('/')
      .filter(segment => segment && segment !== 'docs')
      .map(segment => segment.replace(/-/g, ' '))
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' › '),
      
    // Format last modified date
    lastModifiedFormatted: result.lastModified 
      ? new Date(result.lastModified).toLocaleDateString()
      : null
  };
};

// Search result click tracking
export const trackResultClick = (result, query, position) => {
  searchAPI.trackSearch(query, [result], 'click');
  
  // Additional client-side analytics can go here
  if (typeof gtag !== 'undefined') {
    gtag('event', 'search_result_click', {
      search_term: query,
      result_url: result.url,
      result_position: position
    });
  }
};