import React, { useState } from 'react';
import Footer from './Footer';
import Button from './Button';
import Nav from './Nav';
import styled from "styled-components";
import { GlobalStyles } from './../global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../Themes/theme';

const Header = styled.h1`
    background-color: #fff;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: Purple;
`;

const Wrapper = styled.div`
    text-align: center;
`;

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
