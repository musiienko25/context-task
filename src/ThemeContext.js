import React, { createContext, useState } from 'react';

export const themes = {
  brandA: {
    backgroundColor: '#0077c2',
    textColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  brandB: {
    backgroundColor: '#e60000',
    textColor: '#ffffff',
    fontFamily: 'Times New Roman, serif',
  },
};

export const ThemeContext = createContext(themes.brandA);

export function ThemeProvider(props) {
  const [currentTheme, setCurrentTheme] = useState(themes.brandA);
  
  function toggleTheme() {
    setCurrentTheme(currentTheme === themes.brandA ? themes.brandB : themes.brandA);
  }
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
