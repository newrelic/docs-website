import { useEffect } from 'react';

const GlobalKeyboardShortcuts = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyPress = (event) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        
        // First, try to find our custom SearchInput component in the header
        const customSearchInput = document.querySelector('[data-search-input]');
        if (customSearchInput) {
          customSearchInput.click();
          return;
        }
        
        // Fallback: look for any search input with "Search" in placeholder
        const fallbackSearchInput = document.querySelector('[placeholder*="Search"]');
        if (fallbackSearchInput) {
          fallbackSearchInput.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return null; // This component renders nothing
};

export default GlobalKeyboardShortcuts;