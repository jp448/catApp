import React from 'react';
import Footer from './Footer'
import Button from './Button'
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

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
  return (
      <React.Fragment>
          <GlobalStyle />
          <Wrapper>
              <Header>
                  Welcome to Cat App!
                  <Button text="Get Started"/>
              </Header>
              <Footer/>
          </Wrapper>
      </React.Fragment>
  );
}

export default App;
