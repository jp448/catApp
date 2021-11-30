import React, { useState } from 'react';
import Footer from './Footer';
import Button from './Button';
import { GlobalStyles } from './../global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../Themes/theme';

function App() {
    const [theme, setTheme] = useState('light');

    // The function that toggles between themes
        const toggleTheme = () => {
            // if the theme is not light, then set it to dark
            if (theme === 'light') {
                setTheme('dark');
                // otherwise, it should be light
            } else {
                setTheme('light');
            }
        }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyles />
              <Button raiseFunction={toggleTheme} text={"Toggle Theme"}/>
              <h1>It's a light theme!</h1>
              <Footer/>
          </>
      </ThemeProvider>
  );
}

export default App;
