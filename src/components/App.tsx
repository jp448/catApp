import React, { useState } from 'react';
import Footer from './Footer';
import Toggle from './Toggle';
import Movies from './Movies'
import { GlobalStyles } from './../global';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../Themes/theme';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const Main = styled.div`
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 8rem auto 3rem;
`;

const Heading = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 2rem 0;
    padding: 0 2rem;
`;

const Header = styled.h1`
    font-size: 2.5rem;
    margin: 0;
    color: ${({ theme }) => theme.header};
`;

const Content = styled.div`
   grid-column: 2 / -1;
`;

const Title = styled.div`
    background: ${({ theme }) => theme.footer};
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
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <>
                  <GlobalStyles />
                  <Main>
                      <Heading>
                          <Header>Pick A Movie</Header>
                          <Toggle theme={theme} toggleTheme={toggleTheme} />
                      </Heading>
                      <Title></Title>
                      <Content>
                          <Movies />
                      </Content>
                      <Footer/>
                  </Main>
              </>
          </ThemeProvider>
      </QueryClientProvider>
  );
}

export default App;
