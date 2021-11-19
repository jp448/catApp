import React from 'react';
import Footer from './Footer'
import Button from './Button'
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            Welcome to Cat App!
            <Button />
        </header>
        <Footer/>
    </div>
  );
}

export default App;
