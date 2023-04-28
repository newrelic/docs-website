import { createContext, useContext } from 'react';

export const MainLayoutContext = createContext();
export const useMainLayoutContext = () => useContext(MainLayoutContext);
