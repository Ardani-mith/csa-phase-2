// src/App.js
import React from 'react';
import ItemList from './components/ItemList'; // Import komponen ItemList
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🚀 Aplikasi Frontend-Backend Integration</h1>
      <p style={{ color: '#6c757d', marginBottom: '30px' }}>
        Demo integrasi React dengan berbagai API (Internal + External)
      </p>
      
      {/* Komponen untuk internal API */}
      <ItemList />
    </div>
  );
}

export default App;