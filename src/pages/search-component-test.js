import React from 'react';
import Layout from '../components/Layout';
import SearchInput from '../components/CustomSearch/SearchInput';

const SearchComponentTest = () => {
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
        <h1>Search Component Test</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <p>Testing the new SearchInput component with keyboard shortcuts.</p>
          <p><strong>Try:</strong></p>
          <ul>
            <li>Click the search input below</li>
            <li>Press <kbd>Cmd/Ctrl + K</kbd> from anywhere on the page</li>
            <li>Press <kbd>Escape</kbd> to close the modal</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Unified responsive search component:</h3>
          <SearchInput placeholder="Search New Relic documentation..." showShortcut={true} />
        </div>

        <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4>Test different screen sizes:</h4>
          <p>Resize your browser window to see responsive behavior:</p>
          <ul>
            <li><strong>Desktop (>1200px):</strong> Max 400px width, full padding</li>
            <li><strong>Tablet (768-1200px):</strong> Max 320px width, medium padding</li>
            <li><strong>Mobile (480-768px):</strong> Max 280px width, compact padding</li>
            <li><strong>Small mobile (&lt;480px):</strong> Full width, minimum 200px</li>
          </ul>
        </div>

        <div style={{ 
          marginTop: '3rem',
          padding: '1rem',
          backgroundColor: '#f0f7ff',
          borderRadius: '4px',
          border: '1px solid #cce7ff'
        }}>
          <h4>Unified Search Progress:</h4>
          <ul>
            <li>✅ Removed 3 variants (header/default/compact)</li>
            <li>✅ Single responsive component that adapts to screen size</li>
            <li>✅ SearchModal integration working</li>
            <li>⏳ Next: Add advanced filtering capabilities</li>
            <li>🔄 Then: Phase 3 header integration</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SearchComponentTest;