// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// 1. Buat Context
const ThemeContext = createContext();

// 2. Buat Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' atau 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Buat Custom Hook untuk mengkonsumsi Context (Opsional tapi direkomendasikan)
export const useTheme = () => {
  return useContext(ThemeContext);
};