import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Toggle from './Toggle';
import CatList from './CatList';
import {getCats} from '../Services/CatService';
import { GlobalStyles } from './../global';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../Themes/theme';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center; 
`;

const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 2rem 0;
    padding: 0 2rem;
`;

const Header = styled.h1`
    font-size: 2.5rem;
    margin: 0;
`;

const Content = styled.div`
   flex-grow: 1;
`;

function App() {
    interface Provider {
        id: string,
        created: string,
        tags: string[]
    }
    const [theme, setTheme] = useState('light');
    const [results, setResults] = useState<Provider[]>([]);

    useEffect(() => {
        const getCatPictures = async () => {
            const cats = await getCats();
            setResults(cats);
        };

        getCatPictures();
    }, []);

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
              <Main>
                  <Heading>
                      <Header>Cat App</Header>
                      <Toggle theme={theme} toggleTheme={toggleTheme} />
                  </Heading>

                  <Content>
                      <CatList cats={results} />
                  </Content>
                  <Footer/>
              </Main>
          </>
      </ThemeProvider>
  );
}

export default App;
