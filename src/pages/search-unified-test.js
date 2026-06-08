import React from 'react';
import Layout from '../components/Layout';
import SearchInput from '../components/CustomSearch/SearchInput';

const SearchUnifiedTest = () => {
  return (
    <Layout>
      <div style={{ 
        width: '100vw', 
        maxWidth: 'none',
        padding: '2rem', 
        margin: '0',
        marginLeft: 'calc(-1 * var(--sidebar-width, 280px))',
        paddingLeft: 'calc(2rem + var(--sidebar-width, 280px))'
      }}>
        <h1>Unified Search with Advanced Filtering</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <p>Testing the unified search component with advanced filtering capabilities.</p>
          <p><strong>Features to test:</strong></p>
          <ul>
            <li>Single responsive search input (no variants)</li>
            <li>Click the settings gear (⚙️) to toggle advanced filters</li>
            <li>Filter by categories (alerts, apis, browser, etc.)</li>
            <li>Filter by content type (API docs, guides, tutorials)</li>
            <li>Sort by relevance, recent, or alphabetical</li>
            <li>Filter to show only documents with descriptions</li>
            <li>Press <kbd>Cmd/Ctrl + K</kbd> from anywhere on the page</li>
            <li>Press <kbd>Escape</kbd> to close the modal</li>
          </ul>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '2rem' 
        }}>
          <SearchInput 
            placeholder="Search New Relic docs with advanced filtering..." 
            showShortcut={true} 
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>How to use advanced filters:</h3>
          <ol>
            <li><strong>Open search:</strong> Click the search box or press Cmd+K</li>
            <li><strong>Type your query:</strong> Enter any search term</li>
            <li><strong>Click the gear icon (⚙️):</strong> Opens the filters panel</li>
            <li><strong>Select filters:</strong> Choose categories, content types, sort options</li>
            <li><strong>See filtered results:</strong> Results update automatically</li>
            <li><strong>Clear filters:</strong> Click "Clear all" to reset</li>
          </ol>
        </div>

        <div style={{ 
          marginTop: '3rem',
          padding: '1.5rem',
          backgroundColor: '#f0f7ff',
          borderRadius: '8px',
          border: '1px solid #cce7ff'
        }}>
          <h4>🎉 Unified Search Complete!</h4>
          <div style={{ marginBottom: '1rem' }}>
            <strong>✅ Completed Features:</strong>
            <ul style={{ marginBottom: '1rem' }}>
              <li>Single responsive component (replaces 3 variants)</li>
              <li>Advanced filtering by categories, content type, and sort options</li>
              <li>Filter indicator shows when filters are active</li>
              <li>Real-time filter application</li>
              <li>Keyboard shortcuts (Cmd+K, arrow navigation, Enter, Escape)</li>
              <li>Full search functionality with 6,741 indexed documents</li>
            </ul>
          </div>
          
          <div>
            <strong>🔄 Next Phase:</strong>
            <ul>
              <li>Phase 3: Header integration for production use</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#fff3cd',
          borderRadius: '4px',
          border: '1px solid #ffeaa7'
        }}>
          <h4>💡 Why Unified Search is Better:</h4>
          <ul>
            <li><strong>Simpler maintenance:</strong> One component instead of three</li>
            <li><strong>Consistent experience:</strong> Same behavior everywhere</li>
            <li><strong>Better UX:</strong> Advanced filters provide power when needed</li>
            <li><strong>Responsive design:</strong> Adapts to all screen sizes automatically</li>
            <li><strong>Future-proof:</strong> Easy to add new filters and features</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SearchUnifiedTest;