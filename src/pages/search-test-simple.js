import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const SimpleSearchTest = () => {
  const [searchEngine, setSearchEngine] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexLoaded, setIndexLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const resultsPerPage = 15;

  useEffect(() => {
    const loadSearchEngine = async () => {
      try {
        console.log('Starting to load search engine...');
        
        let SearchEngine;
        try {
          const module = await import('../utils/search/SearchEngine');
          SearchEngine = module.SearchEngine || module.default;
        } catch (importError) {
          console.error('Import error:', importError);
          return;
        }
        
        console.log('SearchEngine imported successfully:', SearchEngine);
        
        let searchIndex;
        try {
          console.log('Fetching search index...');
          const response = await fetch('/search-index.json');
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          searchIndex = await response.json();
          console.log('Search index loaded:', {
            documents: searchIndex.documents?.length || 0,
            categories: searchIndex.categories?.length || 0
          });
        } catch (fetchError) {
          console.error('Failed to fetch search index:', fetchError);
          try {
            const response = await fetch('/search-index.min.json');
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            searchIndex = await response.json();
            console.log('Search index (min) loaded:', {
              documents: searchIndex.documents?.length || 0
            });
          } catch (altFetchError) {
            console.error('Failed to fetch search index (both paths):', altFetchError);
            return;
          }
        }
        
        if (!searchIndex.documents || searchIndex.documents.length === 0) {
          console.error('No documents found in search index');
          return;
        }
        
        const engine = new SearchEngine();
        await engine.loadIndex(searchIndex);
        setSearchEngine(engine);
        setIndexLoaded(true);
        console.log('Search engine initialized successfully with', searchIndex.documents.length, 'documents');
      } catch (error) {
        console.error('Failed to load search engine:', error);
      }
    };

    loadSearchEngine();
  }, []);

  const handleSearch = async (searchQuery, page = 1) => {
    if (!searchEngine || !searchQuery.trim()) {
      setResults([]);
      setTotalResults(0);
      setCurrentPage(1);
      return;
    }

    setLoading(true);
    try {
      const offset = (page - 1) * resultsPerPage;
      const searchResults = searchEngine.search(searchQuery, { 
        limit: resultsPerPage,
        offset: offset 
      });
      setResults(searchResults.results || []);
      setTotalResults(searchResults.total || 0);
      setCurrentPage(page);
      console.log('Search results:', searchResults);
      console.log(`Showing ${searchResults.results?.length || 0} of ${searchResults.total || 0} results`);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
      setTotalResults(0);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div style={{ 
        width: '100vw', 
        maxWidth: 'none',
        padding: '2rem', 
        margin: '0',
        marginLeft: 'calc(-1 * var(--sidebar-width, 280px))',
        paddingLeft: 'calc(2rem + var(--sidebar-width, 280px))'
      }}>
        <h1>Simple Search Test</h1>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong>Status:</strong> {indexLoaded ? '✅ Search engine loaded' : '⏳ Loading...'}
        </div>

        <div style={{ marginBottom: '2rem', width: '100%' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value, 1);
            }}
            placeholder="Search documentation..."
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.125rem',
              border: '2px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'border-color 0.2s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#007cba'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>

        {loading && <div>🔍 Searching...</div>}

        {results.length > 0 && (
          <div>
            <div style={{ marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#f0f7ff', borderRadius: '4px', border: '1px solid #cce7ff' }}>
              <strong>Found {totalResults.toLocaleString()} results</strong>
              {totalResults > resultsPerPage && (
                <span style={{ marginLeft: '1rem', color: '#666' }}>
                  Showing {((currentPage - 1) * resultsPerPage) + 1}-{Math.min(currentPage * resultsPerPage, totalResults)} of {totalResults.toLocaleString()}
                </span>
              )}
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1rem',
              width: '100%'
            }}>
              {results.map((result, index) => (
                <div key={index} style={{
                  padding: '1rem 0',
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <h3 style={{ 
                    margin: '0', 
                    fontSize: '1.125rem',
                    fontWeight: '600'
                  }}>
                    <a href={result.path} style={{ 
                      color: '#0066cc',
                      textDecoration: 'none'
                    }}>
                      {result.title}
                    </a>
                  </h3>
                  <p style={{ 
                    margin: '0', 
                    color: '#666', 
                    fontSize: '0.875rem',
                    lineHeight: '1.4'
                  }}>
                    {result.description || 'No description available'}
                  </p>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: '#888',
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <span>Score: {result.score.toFixed(2)}</span>
                    <span>Path: {result.path}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {totalResults > resultsPerPage && (
              <div style={{ 
                marginTop: '2rem', 
                textAlign: 'center', 
                padding: '1rem',
                borderTop: '1px solid #eee' 
              }}>
                <div style={{ marginBottom: '1rem', color: '#666' }}>
                  Page {currentPage} of {Math.ceil(totalResults / resultsPerPage)}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleSearch(query, currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: currentPage === 1 ? '#f5f5f5' : '#007cba',
                      color: currentPage === 1 ? '#999' : 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    ← Previous
                  </button>
                  
                  <span style={{ padding: '0.5rem 1rem', alignSelf: 'center' }}>
                    {currentPage} / {Math.ceil(totalResults / resultsPerPage)}
                  </span>
                  
                  <button
                    onClick={() => handleSearch(query, currentPage + 1)}
                    disabled={currentPage >= Math.ceil(totalResults / resultsPerPage)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: currentPage >= Math.ceil(totalResults / resultsPerPage) ? '#f5f5f5' : '#007cba',
                      color: currentPage >= Math.ceil(totalResults / resultsPerPage) ? '#999' : 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: currentPage >= Math.ceil(totalResults / resultsPerPage) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {query && !loading && results.length === 0 && (
          <div style={{ color: '#666', fontStyle: 'italic' }}>
            No results found for "{query}"
          </div>
        )}

        <div style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#666' }}>
          <h4>Test Queries:</h4>
          <ul>
            <li>Try searching for: <strong>alerts</strong></li>
            <li>Try searching for: <strong>API</strong></li>
            <li>Try searching for: <strong>browser</strong></li>
            <li>Try searching for: <strong>monitoring</strong></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SimpleSearchTest;