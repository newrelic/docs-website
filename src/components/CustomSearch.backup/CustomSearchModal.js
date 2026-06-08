import React, { useState, useEffect, useRef, useCallback } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Icon,
  Button,
  Spinner,
} from '@newrelic/gatsby-theme-newrelic';
import useKeyboardShortcut from '../../hooks/useKeyboardShortcut';
import { navigate } from '@reach/router';
import useSearch from '../../utils/search/useSearch';
import { debounce, formatSearchResult, trackResultClick } from '../../utils/search/searchApi';

const CustomSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  const {
    isLoading,
    error,
    searchResults,
    suggestions,
    totalResults,
    hasMore,
    categories,
    popularTags,
    performSearch,
    getSuggestions,
    clearSearch,
    searchInCategory,
    highlightMatches,
    isInitialized,
    isEmpty,
  } = useSearch();

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      if (searchQuery.trim()) {
        if (selectedCategory) {
          searchInCategory(searchQuery, selectedCategory);
        } else {
          performSearch(searchQuery);
        }
      } else {
        clearSearch();
      }
    }, 300),
    [selectedCategory, performSearch, searchInCategory, clearSearch]
  );

  // Debounced suggestions
  const debouncedSuggestions = useCallback(
    debounce((searchQuery) => {
      if (searchQuery.length > 1) {
        getSuggestions(searchQuery);
      }
    }, 150),
    [getSuggestions]
  );

  // Handle search input changes
  useEffect(() => {
    debouncedSearch(query);
    debouncedSuggestions(query);
  }, [query, debouncedSearch, debouncedSuggestions]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Keyboard shortcuts
  useKeyboardShortcut('Escape', () => {
    if (isOpen) {
      onClose();
    }
  });

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          Math.min(prev + 1, searchResults.length - 1)
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (searchResults[selectedIndex]) {
          handleResultClick(searchResults[selectedIndex], selectedIndex);
        }
        break;
    }
  };

  // Handle result click
  const handleResultClick = (result, index) => {
    trackResultClick(result, query, index);
    navigate(result.url);
    onClose();
  };

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedIndex(0);
    if (query.trim()) {
      if (category) {
        searchInCategory(query, category);
      } else {
        performSearch(query);
      }
    }
  };

  // Format search results
  const formattedResults = searchResults.map(result => formatSearchResult(result, query));

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <Header>
          <SearchInputContainer>
            <Icon name="fe-search" size="1rem" />
            <SearchInput
              ref={inputRef}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            <FilterToggle
              onClick={() => setShowFilters(!showFilters)}
              active={showFilters}
            >
              <Icon name="fe-filter" size="1rem" />
            </FilterToggle>
            <CloseButton onClick={onClose}>
              <Icon name="fe-x" size="1rem" />
            </CloseButton>
          </SearchInputContainer>

          {showFilters && (
            <FiltersContainer>
              <FilterGroup>
                <FilterLabel>Category:</FilterLabel>
                <CategorySelect
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  <option value="">All categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </CategorySelect>
              </FilterGroup>
            </FiltersContainer>
          )}
        </Header>

        <Content>
          {!isInitialized && (
            <LoadingContainer>
              <Spinner size="2rem" />
              <LoadingText>Initializing search...</LoadingText>
            </LoadingContainer>
          )}

          {error && (
            <ErrorContainer>
              <Icon name="fe-alert-circle" size="2rem" color="red" />
              <ErrorText>{error}</ErrorText>
            </ErrorContainer>
          )}

          {isInitialized && query.length === 0 && (
            <EmptyState>
              <EmptyStateTitle>Search New Relic Documentation</EmptyStateTitle>
              <EmptyStateText>
                Start typing to find docs, guides, and API references
              </EmptyStateText>
              {popularTags.length > 0 && (
                <PopularTagsContainer>
                  <PopularTagsTitle>Popular topics:</PopularTagsTitle>
                  <TagsList>
                    {popularTags.slice(0, 10).map(({ tag, count }) => (
                      <Tag
                        key={tag}
                        onClick={() => setQuery(tag)}
                      >
                        {tag} ({count})
                      </Tag>
                    ))}
                  </TagsList>
                </PopularTagsContainer>
              )}
            </EmptyState>
          )}

          {isEmpty && (
            <EmptyResults>
              <Icon name="fe-search" size="3rem" color="gray" />
              <EmptyResultsTitle>No results found for "{query}"</EmptyResultsTitle>
              <EmptyResultsText>
                Try adjusting your search terms or removing filters
              </EmptyResultsText>
            </EmptyResults>
          )}

          {formattedResults.length > 0 && (
            <ResultsContainer ref={resultsRef}>
              <ResultsHeader>
                <ResultsCount>
                  {totalResults} result{totalResults !== 1 ? 's' : ''} for "{query}"
                  {selectedCategory && ` in ${selectedCategory}`}
                </ResultsCount>
              </ResultsHeader>

              <ResultsList>
                {formattedResults.map((result, index) => (
                  <ResultItem
                    key={result.id}
                    selected={index === selectedIndex}
                    onClick={() => handleResultClick(result, index)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <ResultContent>
                      <ResultTitle
                        dangerouslySetInnerHTML={{
                          __html: highlightMatches(result.title)
                        }}
                      />
                      <ResultBreadcrumb>{result.breadcrumb}</ResultBreadcrumb>
                      <ResultExcerpt
                        dangerouslySetInnerHTML={{
                          __html: highlightMatches(result.excerpt)
                        }}
                      />
                      <ResultMeta>
                        {result.tags.length > 0 && (
                          <ResultTags>
                            {result.tags.slice(0, 3).map(tag => (
                              <ResultTag key={tag}>{tag}</ResultTag>
                            ))}
                          </ResultTags>
                        )}
                        {result.lastModifiedFormatted && (
                          <LastModified>
                            Updated {result.lastModifiedFormatted}
                          </LastModified>
                        )}
                      </ResultMeta>
                    </ResultContent>
                    <ResultIcon>
                      <Icon name="fe-arrow-right" size="1rem" />
                    </ResultIcon>
                  </ResultItem>
                ))}
              </ResultsList>

              {hasMore && (
                <LoadMoreContainer>
                  <LoadMoreText>
                    Showing {formattedResults.length} of {totalResults} results
                  </LoadMoreText>
                </LoadMoreContainer>
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
    border-color: var(--brand-button-primary-accent);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  color: var(--primary-text-color);
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: var(--secondary-text-color);
  }
`;

const FilterToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? 'var(--brand-button-primary-accent)' : 'var(--secondary-text-color)'};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  
  &:hover {
    background: var(--tertiary-background-color);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--secondary-text-color);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  
  &:hover {
    background: var(--tertiary-background-color);
  }
`;

const FiltersContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: var(--tertiary-background-color);
  border-radius: 6px;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: var(--primary-text-color);
`;

const CategorySelect = styled.select`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--primary-background-color);
  color: var(--primary-text-color);
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

const LoadingText = styled.p`
  color: var(--secondary-text-color);
  margin: 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  gap: 1rem;
`;

const ErrorText = styled.p`
  color: var(--secondary-text-color);
  margin: 0;
  text-align: center;
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
  margin: 0 0 2rem 0;
  color: var(--secondary-text-color);
`;

const PopularTagsContainer = styled.div`
  text-align: left;
`;

const PopularTagsTitle = styled.h4`
  margin: 0 0 1rem 0;
  color: var(--primary-text-color);
  font-size: 0.875rem;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.button`
  padding: 0.25rem 0.5rem;
  background: var(--tertiary-background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--primary-text-color);
  cursor: pointer;
  
  &:hover {
    background: var(--brand-button-primary-accent);
    color: white;
  }
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
  
  .search-highlight {
    background: var(--brand-button-primary-accent);
    color: white;
    padding: 0.125rem 0.25rem;
    border-radius: 2px;
  }
`;

const ResultBreadcrumb = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 0.75rem;
  color: var(--secondary-text-color);
`;

const ResultExcerpt = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: var(--primary-text-color);
  line-height: 1.4;
  
  .search-highlight {
    background: var(--brand-button-primary-accent);
    color: white;
    padding: 0.125rem 0.25rem;
    border-radius: 2px;
  }
`;

const ResultMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ResultTags = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const ResultTag = styled.span`
  padding: 0.125rem 0.375rem;
  background: var(--tertiary-background-color);
  border-radius: 3px;
  font-size: 0.625rem;
  color: var(--secondary-text-color);
`;

const LastModified = styled.span`
  font-size: 0.625rem;
  color: var(--secondary-text-color);
`;

const ResultIcon = styled.div`
  color: var(--secondary-text-color);
  margin-left: 0.5rem;
  margin-top: 0.25rem;
`;

const LoadMoreContainer = styled.div`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
`;

const LoadMoreText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--secondary-text-color);
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

export default CustomSearchModal;