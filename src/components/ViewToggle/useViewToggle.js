import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import useViewToggleContext from './useViewToggleContext';

const ToggleSelector = (onToggleChange) => {};

const ToggleView = (children, id) => {};

export const useViewToggle = () => {
  const [currentView, setCurrentView] = useLocalStorage(
    'docs-website/homepage-selected-tab',
    initialView
  );

  return [ToggleSelector, ToggleView, { onTabChange }];
};
