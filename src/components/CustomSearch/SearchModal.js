import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';

const SearchModal = ({ onClose }) => {
  const [searchEngine, setSearchEngine] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexLoaded, setIndexLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const resultsPerPage = 10;
  const [filters, setFilters] = useState({
    categories: [],
    searchScope: 'all', // 'all', 'titles', 'content'
    sortBy: 'relevance', // 'relevance', 'recent', 'alphabetical'
    contentType: 'all', // 'all', 'guides', 'api', 'tutorials'
    hasDescription: false
  });
  const [availableCategories, setAvailableCategories] = useState([]);
  const inputRef = useRef(null);

  // Detect current language from URL or locale
  const getCurrentLanguage = () => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      // Check if URL starts with language code (e.g., /es/, /fr/, etc.)
      const langMatch = pathname.match(/^\/([a-z]{2})\//);
      if (langMatch) {
        return langMatch[1];
      }
    }
    return 'en'; // Default to English
  };

  // Load search engine
  useEffect(() => {
    const loadSearchEngine = async () => {
      try {
        const currentLang = getCurrentLanguage();
        console.log(`Loading search engine for modal (language: ${currentLang})...`);
        
        let SearchEngine;
        try {
          const module = await import('../../utils/search/SearchEngine');
          SearchEngine = module.SearchEngine || module.default;
        } catch (importError) {
          console.error('Import error:', importError);
          return;
        }
        
        // Construct language-specific search index URLs with fallback strategy
        const indexFiles = currentLang === 'en' 
          ? ['/search-index.json', '/search-index.min.json']
          : [`/search-index-${currentLang}.json`, `/search-index-${currentLang}.min.json`];
        
        // Fallback to English index files if current language fails
        const fallbackIndexFiles = ['/search-index.json', '/search-index.min.json'];
        
        let searchIndex;
        let actualLanguage = currentLang;
        
        // Try to load current language index
        try {
          const response = await fetch(indexFiles[0]);
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          searchIndex = await response.json();
          console.log(`✅ Search index loaded for ${currentLang.toUpperCase()}:`, {
            documents: searchIndex.documents?.length || 0,
            language: searchIndex.metadata?.language
          });
        } catch (fetchError) {
          console.warn(`⚠️  Failed to fetch search index for ${currentLang}:`, fetchError);
          
          // Try compressed version of current language
          try {
            const response = await fetch(indexFiles[1]);
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            searchIndex = await response.json();
            console.log(`✅ Compressed search index loaded for ${currentLang.toUpperCase()}:`, {
              documents: searchIndex.documents?.length || 0,
              language: searchIndex.metadata?.language
            });
          } catch (compressedFetchError) {
            console.warn(`⚠️  Failed to fetch compressed search index for ${currentLang}:`, compressedFetchError);
            
            // Fallback to English index (production-ready approach)
            if (currentLang !== 'en') {
              console.log(`🔄 Falling back to English search index...`);
              try {
                const response = await fetch(fallbackIndexFiles[0]);
                if (!response.ok) {
                  throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                searchIndex = await response.json();
                actualLanguage = 'en';
                console.log(`✅ Fallback English search index loaded:`, {
                  documents: searchIndex.documents?.length || 0,
                  language: searchIndex.metadata?.language,
                  note: `Fallback from ${currentLang} to EN`
                });
              } catch (englishFetchError) {
                console.warn(`⚠️  Failed to fetch English fallback index:`, englishFetchError);
                
                // Try compressed English index as final fallback
                try {
                  const response = await fetch(fallbackIndexFiles[1]);
                  if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                  }
                  searchIndex = await response.json();
                  actualLanguage = 'en';
                  console.log(`✅ Compressed English fallback index loaded:`, {
                    documents: searchIndex.documents?.length || 0,
                    language: searchIndex.metadata?.language,
                    note: `Final fallback from ${currentLang} to EN (compressed)`
                  });
                } catch (finalFetchError) {
                  console.error('❌ All search index loading attempts failed:', finalFetchError);
                  return;
                }
              }
            } else {
              console.error('❌ Failed to load English search index:', compressedFetchError);
              return;
            }
          }
        }
        
        if (!searchIndex.documents || searchIndex.documents.length === 0) {
          console.error('No documents found in search index');
          return;
        }
        
        const engine = new SearchEngine();
        await engine.loadIndex(searchIndex);
        setSearchEngine(engine);
        
        // Extract unique categories for filter options
        const categories = [...new Set(searchIndex.documents.map(doc => doc.category))]
          .filter(Boolean)
          .sort();
        setAvailableCategories(categories);
        
        // Show fallback notification if applicable
        if (actualLanguage !== currentLang) {
          console.info(`🌐 Search results will be shown in English as ${currentLang.toUpperCase()} index is not available.`);
        }
        
        setIndexLoaded(true);
        console.log(`Search engine initialized in modal (${actualLanguage.toUpperCase()}) with categories:`, categories);
      } catch (error) {
        console.error('Failed to load search engine:', error);
      }
    };

    loadSearchEngine();
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);


  // Apply filters to search results
  const applyFilters = (rawResults) => {
    let filteredResults = [...rawResults];
    
    // Category filter
    if (filters.categories.length > 0) {
      filteredResults = filteredResults.filter(result => 
        filters.categories.includes(result.category)
      );
    }
    
    // Content type filter (basic categorization)
    if (filters.contentType !== 'all') {
      filteredResults = filteredResults.filter(result => {
        const path = result.path || result.url || '';
        switch (filters.contentType) {
          case 'api':
            return path.includes('/api') || result.title.toLowerCase().includes('api');
          case 'guides':
            return path.includes('/guide') || result.title.toLowerCase().includes('guide');
          case 'tutorials':
            return path.includes('/tutorial') || result.title.toLowerCase().includes('tutorial');
          default:
            return true;
        }
      });
    }
    
    // Description filter
    if (filters.hasDescription) {
      filteredResults = filteredResults.filter(result => 
        result.description && result.description.trim().length > 0
      );
    }
    
    // Sort results
    if (filters.sortBy !== 'relevance') {
      filteredResults.sort((a, b) => {
        switch (filters.sortBy) {
          case 'alphabetical':
            return a.title.localeCompare(b.title);
          case 'recent':
            return new Date(b.lastModified || 0) - new Date(a.lastModified || 0);
          default:
            return 0;
        }
      });
    }
    
    return filteredResults;
  };
  
  // Handle search with filtering and pagination
  const handleSearch = useCallback(async (searchQuery, page = 1) => {
    if (!searchEngine || !searchQuery.trim()) {
      setResults([]);
      setTotalResults(0);
      setCurrentPage(1);
      return;
    }

    setLoading(true);
    try {
      // Get all results first (no limit)
      const searchOptions = { 
        limit: 1000, // Get many results
        offset: 0
      };
      
      const searchResults = searchEngine.search(searchQuery, searchOptions);
      
      // Apply filters to all results
      const filteredResults = applyFilters(searchResults.results || []);
      
      // Calculate pagination
      const startIndex = (page - 1) * resultsPerPage;
      const endIndex = startIndex + resultsPerPage;
      const paginatedResults = filteredResults.slice(startIndex, endIndex);
      
      // Update state
      setResults(paginatedResults);
      setTotalResults(filteredResults.length);
      setCurrentPage(page);
      setSelectedIndex(0);
      
      console.log('Modal search results:', {
        total: searchResults.results?.length || 0,
        filtered: filteredResults.length,
        page: page,
        displayed: paginatedResults.length
      });
    } catch (error) {
      console.error('Search error in modal:', error);
      setResults([]);
      setTotalResults(0);
      setCurrentPage(1);
    }
    setLoading(false);
  }, [searchEngine, resultsPerPage, applyFilters]);
  
  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters };
    
    if (filterType === 'categories') {
      if (newFilters.categories.includes(value)) {
        newFilters.categories = newFilters.categories.filter(cat => cat !== value);
      } else {
        newFilters.categories = [...newFilters.categories, value];
      }
    } else {
      newFilters[filterType] = value;
    }
    
    setFilters(newFilters);
    
    // Re-run search with new filters if there's a query (reset to page 1)
    if (query.trim()) {
      handleSearch(query, 1);
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      categories: [],
      searchScope: 'all',
      sortBy: 'relevance',
      contentType: 'all',
      hasDescription: false
    });
    
    // Re-run search if there's a query (reset to page 1)
    if (query.trim()) {
      handleSearch(query, 1);
    }
  };

  // Pagination handlers with useCallback
  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      handleSearch(query, currentPage - 1);
    }
  }, [currentPage, query, handleSearch]);

  const handleNextPage = useCallback(() => {
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    if (currentPage < totalPages) {
      handleSearch(query, currentPage + 1);
    }
  }, [currentPage, totalResults, resultsPerPage, query, handleSearch]);

  const handlePageClick = useCallback((pageNumber) => {
    handleSearch(query, pageNumber);
  }, [query, handleSearch]);

  // Handle keyboard shortcuts - moved after pagination handlers to fix dependency order
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            Math.min(prev + 1, results.length - 1)
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            navigate(results[selectedIndex].url);
          }
          break;
        case 'ArrowLeft':
          if (totalResults > resultsPerPage) {
            e.preventDefault();
            handlePrevPage();
          }
          break;
        case 'ArrowRight':
          if (totalResults > resultsPerPage) {
            e.preventDefault();
            handleNextPage();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, results, selectedIndex, totalResults, resultsPerPage, handlePrevPage, handleNextPage]);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <SearchInputContainer>
            <SearchIcon>🔍</SearchIcon>
            <SearchInput
              ref={inputRef}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                handleSearch(e.target.value, 1); // Reset to page 1 on new search
              }}
              autoComplete="off"
            />
            <FilterToggle 
              onClick={() => setShowFilters(!showFilters)}
              active={showFilters || Object.values(filters).some(f => 
                Array.isArray(f) ? f.length > 0 : f !== 'all' && f !== 'relevance' && f !== false
              )}
            >
              ⚙️
            </FilterToggle>
            <CloseButton onClick={onClose}>×</CloseButton>
          </SearchInputContainer>
        </Header>

        {showFilters && (
          <FiltersPanel>
            <FiltersHeader>
              <FiltersTitle>Search Filters</FiltersTitle>
              <ClearFiltersButton onClick={clearFilters}>
                Clear all
              </ClearFiltersButton>
            </FiltersHeader>
            
            <FilterSection>
              <FilterLabel>Categories</FilterLabel>
              <FilterOptions>
                {availableCategories.slice(0, 8).map(category => (
                  <FilterChip
                    key={category}
                    active={filters.categories.includes(category)}
                    onClick={() => handleFilterChange('categories', category)}
                  >
                    {category}
                  </FilterChip>
                ))}
              </FilterOptions>
            </FilterSection>
            
            <FilterSection>
              <FilterLabel>Content Type</FilterLabel>
              <FilterSelect
                value={filters.contentType}
                onChange={(e) => handleFilterChange('contentType', e.target.value)}
              >
                <option value="all">All content</option>
                <option value="api">API docs</option>
                <option value="guides">Guides</option>
                <option value="tutorials">Tutorials</option>
              </FilterSelect>
            </FilterSection>
            
            <FilterSection>
              <FilterLabel>Sort by</FilterLabel>
              <FilterSelect
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="recent">Most recent</option>
                <option value="alphabetical">A-Z</option>
              </FilterSelect>
            </FilterSection>
            
            <FilterSection>
              <FilterCheckbox>
                <input
                  type="checkbox"
                  checked={filters.hasDescription}
                  onChange={(e) => handleFilterChange('hasDescription', e.target.checked)}
                />
                <FilterLabel>Has description</FilterLabel>
              </FilterCheckbox>
            </FilterSection>
          </FiltersPanel>
        )}
        
        <Content>
          {!indexLoaded && (
            <LoadingContainer>
              <LoadingSpinner>⏳</LoadingSpinner>
              <LoadingText>Loading search index...</LoadingText>
            </LoadingContainer>
          )}

          {indexLoaded && query.length === 0 && (
            <EmptyState>
              <EmptyStateTitle>Search New Relic Documentation</EmptyStateTitle>
              <EmptyStateText>
                Start typing to find docs, guides, and API references
              </EmptyStateText>
              <EmptyStateText>
                Use ↑↓ to navigate, Enter to select, Esc to close
              </EmptyStateText>
            </EmptyState>
          )}

          {loading && (
            <LoadingContainer>
              <LoadingSpinner>🔍</LoadingSpinner>
              <LoadingText>Searching...</LoadingText>
            </LoadingContainer>
          )}

          {query && !loading && results.length === 0 && indexLoaded && (
            <EmptyResults>
              <EmptyResultsTitle>No results found for "{query}"</EmptyResultsTitle>
              <EmptyResultsText>
                Try different search terms or check spelling
              </EmptyResultsText>
            </EmptyResults>
          )}

          {results.length > 0 && (
            <ResultsContainer>
              <ResultsHeader>
                <ResultsCount>
                  Showing {((currentPage - 1) * resultsPerPage) + 1}-{Math.min(currentPage * resultsPerPage, totalResults)} of {totalResults} results for "{query}"
                  {(filters.categories.length > 0 || filters.contentType !== 'all' || filters.hasDescription) && (
                    <FilterIndicator> (filtered)</FilterIndicator>
                  )}
                </ResultsCount>
              </ResultsHeader>

              <ResultsList>
                {results.map((result, index) => (
                  <ResultItem
                    key={result.id || index}
                    selected={index === selectedIndex}
                    onClick={() => navigate(result.url)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <ResultContent>
                      <ResultTitle 
                        dangerouslySetInnerHTML={{ 
                          __html: result.highlight?.title || result.title 
                        }}
                      />
                      <ResultDescription
                        dangerouslySetInnerHTML={{ 
                          __html: result.highlight?.body || result.description || 'No description available'
                        }}
                      />
                      <ResultMeta>
                        <ResultScore>Score: {result.score?.toFixed(2)}</ResultScore>
                        <ResultPath>{result.url}</ResultPath>
                      </ResultMeta>
                    </ResultContent>
                    <ResultArrow>→</ResultArrow>
                  </ResultItem>
                ))}
              </ResultsList>
              
              {totalResults > resultsPerPage && (
                <PaginationContainer>
                  <PaginationButton 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1}
                  >
                    ← Previous
                  </PaginationButton>
                  
                  <PaginationInfo>
                    Page {currentPage} of {Math.ceil(totalResults / resultsPerPage)}
                  </PaginationInfo>
                  
                  <PaginationButton 
                    onClick={handleNextPage} 
                    disabled={currentPage >= Math.ceil(totalResults / resultsPerPage)}
                  >
                    Next →
                  </PaginationButton>
                </PaginationContainer>
              )}
            </ResultsContainer>
          )}
        </Content>

        <Footer>
          <KeyboardHints>
            <KeyboardHint>
              <kbd>↑↓</kbd> Navigate
            </KeyboardHint>
            <KeyboardHint>
              <kbd>Enter</kbd> Select
            </KeyboardHint>
            <KeyboardHint>
              <kbd>Esc</kbd> Close
            </KeyboardHint>
            {totalResults > resultsPerPage && (
              <>
                <KeyboardHint>
                  <kbd>←→</kbd> Pages
                </KeyboardHint>
              </>
            )}
          </KeyboardHints>
        </Footer>
      </Modal>
    </Overlay>
  );
};

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5vh 1rem;
`;

const Modal = styled.div`
  background: var(--primary-background-color);
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--secondary-background-color);
  border-radius: 6px;
  border: 2px solid transparent;
  
  &:focus-within {
    border-color: #007cba;
  }
`;

const SearchIcon = styled.div`
  font-size: 1rem;
  color: var(--secondary-text-color);
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  color: var(--primary-text-color);
  outline: none;
  
  &::placeholder {
    color: var(--secondary-text-color);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--secondary-text-color);
  padding: 0.25rem;
  
  &:hover {
    color: var(--primary-text-color);
  }
`;

const FilterToggle = styled.button`
  background: ${props => props.active ? '#007cba' : 'none'};
  border: 1px solid ${props => props.active ? '#007cba' : 'var(--border-color)'};
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  color: ${props => props.active ? 'white' : 'var(--secondary-text-color)'};
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#005a85' : 'var(--tertiary-background-color)'};
  }
`;

const FiltersPanel = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--tertiary-background-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FiltersTitle = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  color: var(--primary-text-color);
  font-weight: 600;
`;

const ClearFiltersButton = styled.button`
  background: none;
  border: none;
  color: #007cba;
  cursor: pointer;
  font-size: 0.75rem;
  text-decoration: underline;
  
  &:hover {
    color: #005a85;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-size: 0.75rem;
  color: var(--secondary-text-color);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterChip = styled.button`
  background: ${props => props.active ? '#007cba' : 'var(--primary-background-color)'};
  border: 1px solid ${props => props.active ? '#007cba' : 'var(--border-color)'};
  border-radius: 16px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  cursor: pointer;
  color: ${props => props.active ? 'white' : 'var(--primary-text-color)'};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#005a85' : 'var(--tertiary-background-color)'};
  }
`;

const FilterSelect = styled.select`
  background: var(--primary-background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: var(--primary-text-color);
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #007cba;
  }
`;

const FilterCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  input[type="checkbox"] {
    margin: 0;
  }
`;

const FilterIndicator = styled.span`
  color: #007cba;
  font-size: 0.75rem;
  font-weight: normal;
`;

const Content = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  gap: 1rem;
`;

const LoadingSpinner = styled.div`
  font-size: 2rem;
`;

const LoadingText = styled.p`
  color: var(--secondary-text-color);
  margin: 0;
`;

const EmptyState = styled.div`
  padding: 3rem 2rem;
  text-align: center;
`;

const EmptyStateTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: var(--primary-text-color);
`;

const EmptyStateText = styled.p`
  margin: 0 0 1rem 0;
  color: var(--secondary-text-color);
`;

const EmptyResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  gap: 1rem;
`;

const EmptyResultsTitle = styled.h3`
  margin: 0;
  color: var(--primary-text-color);
`;

const EmptyResultsText = styled.p`
  margin: 0;
  color: var(--secondary-text-color);
  text-align: center;
`;

const ResultsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ResultsHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const ResultsCount = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--secondary-text-color);
`;

const ResultsList = styled.div`
  /* Results list styles */
  
  em {
    color: var(--search-dropdown-emphasis, #007cba);
    font-style: normal;
    font-weight: 500;
    background-color: rgba(0, 124, 186, 0.1);
    padding: 0 2px;
    border-radius: 2px;
  }
`;

const ResultItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  background: ${props => props.selected ? 'var(--tertiary-background-color)' : 'transparent'};
  
  &:hover {
    background: var(--tertiary-background-color);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ResultContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultTitle = styled.h4`
  margin: 0 0 0.25rem 0;
  color: var(--primary-text-color);
  font-size: 1rem;
`;

const ResultDescription = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: var(--primary-text-color);
  line-height: 1.4;
`;

const ResultMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ResultScore = styled.span`
  font-size: 0.625rem;
  color: var(--secondary-text-color);
`;

const ResultPath = styled.span`
  font-size: 0.625rem;
  color: var(--secondary-text-color);
`;

const ResultArrow = styled.div`
  color: var(--secondary-text-color);
  margin-left: 0.5rem;
  margin-top: 0.25rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  background: var(--tertiary-background-color);
`;

const PaginationButton = styled.button`
  background: ${props => props.disabled ? 'var(--tertiary-background-color)' : '#007cba'};
  border: 1px solid ${props => props.disabled ? 'var(--border-color)' : '#007cba'};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: ${props => props.disabled ? 'var(--secondary-text-color)' : 'white'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #005a85;
    border-color: #005a85;
  }
`;

const PaginationInfo = styled.span`
  font-size: 0.875rem;
  color: var(--primary-text-color);
  font-weight: 500;
`;

const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  background: var(--tertiary-background-color);
`;

const KeyboardHints = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const KeyboardHint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--secondary-text-color);
  
  kbd {
    padding: 0.125rem 0.375rem;
    background: var(--primary-background-color);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    font-family: monospace;
    font-size: 0.625rem;
  }
`;

export default SearchModal;