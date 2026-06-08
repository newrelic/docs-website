import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import our custom search components
import SearchInput from '../../../components/CustomSearch/SearchInput';

const GlobalSearch = ({ onClose }) => {
  return (
    <SearchInput 
      placeholder="Search New Relic documentation..." 
      showShortcut={true}
    />
  );
};

GlobalSearch.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default GlobalSearch;