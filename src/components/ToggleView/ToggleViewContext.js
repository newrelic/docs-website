import { createContext, useContext } from 'react';

export const ToggleViewContext = createContext();
export const useToggleViewContext = () => useContext(ToggleViewContext);
