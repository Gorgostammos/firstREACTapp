import logo from './logo.svg';
import './App.css';
import bil from './sun-svgrepo-com.svg';
import React, { useState } from 'react'; 

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={bil} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="button" onClick={() => setCount(count + 1)}>
          <span>Hover </span>
        </button>
        <p>Antall trykk: {count}</p> 
        <h1>dette er mitt første React app</h1>
        <p>hei på deg jeg er jojo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
