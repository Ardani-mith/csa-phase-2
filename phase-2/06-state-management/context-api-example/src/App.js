import React from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext'; // Import provider dan hook

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme(); // Menggunakan hook
  return (
    <div style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#333' : '#eee', padding: '20px' }}>
      <h3>Tema Saat Ini: {theme}</h3>
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider> {/* Bungkus aplikasi dengan ThemeProvider */}
      <div className="App">
        <h1>Aplikasi dengan Tema</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;