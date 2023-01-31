import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import useViewToggleContext from './useViewToggleContext';
import ToggleSelector from './ToggleSelector';
import { useLoggedIn } from '@newrelic/gatsby-theme-newrelic';

export const useViewToggle = (initialView) => {
  const [currentView, setCurrentView] = useLocalStorage(
    'docs-website/homepage-selected-view',
    initialView
  );

  const ToggleWithAppliedState = () => (
    <ToggleSelector currentView={currentView} onViewChange={setCurrentView} />
  );

  return [
    ToggleWithAppliedState,
    { setView: setCurrentView, currentView: currentView },
  ];
};
