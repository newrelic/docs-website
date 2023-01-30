import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'react-use';

import TabsContext from '../Context';

import Bar from './Bar';
import BarItem from './BarItem';
import Pages from './Pages';
import Page from './Page';

export const useTabs = (initialTab) => {
  const [currentTab, setCurrentTab] = useLocalStorage(
    'docs-website/homepage-selected-tab',
    initialTab
  );
  const TabsWithAppliedState = ({ children }) => (
    <StatelessTabs currentTab={currentTab} onTabChange={setCurrentTab}>
      {children}
    </StatelessTabs>
  );

  TabsWithAppliedState.Bar = Bar;
  TabsWithAppliedState.BarItem = BarItem;
  TabsWithAppliedState.Pages = Pages;
  TabsWithAppliedState.Page = Page;

  return [
    TabsWithAppliedState,
    { setTab: setCurrentTab, currentTab: currentTab },
  ];
};

const Tabs = ({ children, initialTab }) => {
  const [tabState, setTabState] = useState(initialTab);

  return (
    <TabsContext.Provider value={[tabState, setTabState]}>
      {children}
    </TabsContext.Provider>
  );
};

const StatelessTabs = ({ children, currentTab, onTabChange }) => {
  console.log('current', currentTab);
  return (
    <TabsContext.Provider value={[currentTab, onTabChange]}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * this should be the `id` of the tab.
   */
  initialTab: PropTypes.string,
};

Tabs.Bar = Bar;
Tabs.BarItem = BarItem;
Tabs.Pages = Pages;
Tabs.Page = Page;

export default Tabs;
