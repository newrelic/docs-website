import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Icon,
} from '@newrelic/gatsby-theme-newrelic';
import useKeyboardShortcut from '../../hooks/useKeyboardShortcut';
import CustomSearchModal from './CustomSearchModal';

const CustomSearchInput = ({ 
  placeholder = "Search docs...", 
  showShortcut = true,
  variant = "default" // "default", "compact", "header"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Keyboard shortcut to open search (Cmd/Ctrl + K)
  useKeyboardShortcut(['cmd', 'k'], () => {
    setIsModalOpen(true);
  });
  useKeyboardShortcut(['ctrl', 'k'], () => {
    setIsModalOpen(true);
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchInputContainer variant={variant} onClick={openModal}>
        <SearchIcon>
          <Icon name="fe-search" size="1rem" />
        </SearchIcon>
        <SearchInputPlaceholder variant={variant}>
          {placeholder}
        </SearchInputPlaceholder>
        {showShortcut && (
          <KeyboardShortcut>
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </KeyboardShortcut>
        )}
      </SearchInputContainer>

      <CustomSearchModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

// Styled components
const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: ${props => {
    switch (props.variant) {
      case 'compact': return '0.5rem 0.75rem';
      case 'header': return '0.375rem 0.75rem';
      default: return '0.75rem 1rem';
    }
  }};
  background: var(--secondary-background-color);
  border: 1px solid var(--border-color);
  border-radius: ${props => props.variant === 'compact' ? '4px' : '6px'};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: ${props => {
    switch (props.variant) {
      case 'compact': return '200px';
      case 'header': return '240px';
      default: return '300px';
    }
  }};
  
  &:hover {
    border-color: var(--brand-button-primary-accent);
    background: var(--primary-background-color);
  }
  
  &:focus-within {
    border-color: var(--brand-button-primary-accent);
    box-shadow: 0 0 0 2px var(--brand-button-primary-accent-transparent);
  }

  @media (max-width: 768px) {
    min-width: auto;
    flex: 1;
  }
`;

const SearchIcon = styled.div`
  color: var(--secondary-text-color);
  display: flex;
  align-items: center;
`;

const SearchInputPlaceholder = styled.div`
  flex: 1;
  color: var(--secondary-text-color);
  font-size: ${props => {
    switch (props.variant) {
      case 'compact': return '0.875rem';
      case 'header': return '0.875rem';
      default: return '1rem';
    }
  }};
  user-select: none;
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

export default CustomSearchInput;