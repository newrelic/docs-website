import React from 'react';

import TabsContext from '../Context';

const StatelessTabs = ({ children, currentTab, onTabChange }) => {
  console.log('current', currentTab);
  return (
    <TabsContext.Provider value={[currentTab, onTabChange]}>
      {children}
    </TabsContext.Provider>
  );
};

export default StatelessTabs;
