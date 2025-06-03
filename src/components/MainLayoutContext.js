import { createContext, useContext } from 'react';

export const MainLayoutContext = createContext();
/**
 * exposes whether the site's left nav sidebar is currently open
 *
 * @example
 *
 * ```js
 * const [sidebar] = useMainLayoutContext(); // true | false
 * ```
 */
export const useMainLayoutContext = () => useContext(MainLayoutContext);
