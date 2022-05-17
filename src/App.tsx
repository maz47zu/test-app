import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputForm } from './InputForm';


function App() {
  const [letters, setLetters] = useState<string>("Here will appear 'Hello react!' when you'll push button below.")

  return (
    <div className="App">
      
      <header className="App-header">
        <InputForm defaultValue={'hello Form'}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>{letters}</p>
        <button className='button-click' onClick={() => setLetters('Hello react!')}>Show 'Hello react!'</button>
        <a
          className="App-link"
          href="https://github.com/maz47zu/test-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to test-app repository
        </a> */}
      </header>
    </div>
  );
}

export default App;
