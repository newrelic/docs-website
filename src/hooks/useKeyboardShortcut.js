import { useEffect } from 'react';

/**
 * Custom hook for keyboard shortcuts
 */
const useKeyboardShortcut = (keys, callback, options = {}) => {
  const { 
    target = typeof window !== 'undefined' ? document : null,
    preventDefault = true,
    enabled = true 
  } = options;

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const handleKeyPress = (event) => {
      const pressedKeys = [];
      
      if (event.ctrlKey) pressedKeys.push('ctrl');
      if (event.metaKey) pressedKeys.push('cmd');
      if (event.altKey) pressedKeys.push('alt');
      if (event.shiftKey) pressedKeys.push('shift');
      
      // Add the main key
      pressedKeys.push(event.key.toLowerCase());

      // Check if the pressed combination matches our target keys
      const keyArray = Array.isArray(keys) ? keys : [keys];
      const keysMatch = keyArray.every(key => pressedKeys.includes(key.toLowerCase()));
      
      if (keysMatch) {
        if (preventDefault) {
          event.preventDefault();
        }
        callback(event);
      }
    };

    const targetElement = target === document ? document : target.current;
    if (targetElement) {
      targetElement.addEventListener('keydown', handleKeyPress);
      
      return () => {
        targetElement.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [keys, callback, target, preventDefault, enabled]);
};

export default useKeyboardShortcut;