import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchModal from './SearchModal';

const SearchInput = ({ 
  placeholder = "Search documentation...", 
  showShortcut = true
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Keyboard shortcut handler (Cmd/Ctrl + K)
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchInputContainer onClick={openModal} data-search-input>
        <SearchIcon>
          🔍
        </SearchIcon>
        <SearchInputPlaceholder>
          {placeholder}
        </SearchInputPlaceholder>
        {showShortcut && (
          <KeyboardShortcut>
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </KeyboardShortcut>
        )}
      </SearchInputContainer>

      {isModalOpen && (
        <SearchModal onClose={closeModal} />
      )}
    </>
  );
};


// Styled components
const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--secondary-background-color);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 400px;
  
  &:hover {
    border-color: #007cba;
    background: var(--primary-background-color);
  }
  
  &:focus-within {
    border-color: #007cba;
    box-shadow: 0 0 0 2px rgba(0, 124, 186, 0.2);
  }

  /* Responsive design for different screen sizes */
  @media (max-width: 1200px) {
    max-width: 320px;
    padding: 0.625rem 0.875rem;
  }
  
  @media (max-width: 768px) {
    max-width: 280px;
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    min-width: 200px;
    padding: 0.5rem 0.75rem;
  }
`;

const SearchIcon = styled.div`
  color: var(--secondary-text-color);
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const SearchInputPlaceholder = styled.div`
  flex: 1;
  color: var(--secondary-text-color);
  font-size: 0.875rem;
  user-select: none;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const KeyboardShortcut = styled.div`
  display: flex;
  gap: 0.125rem;
  align-items: center;
  
  kbd {
    padding: 0.125rem 0.375rem;
    background: var(--tertiary-background-color);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    font-family: monospace;
    font-size: 0.625rem;
    color: var(--secondary-text-color);
    min-width: 1.25rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


export default SearchInput;