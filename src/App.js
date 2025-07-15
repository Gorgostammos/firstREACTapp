import logo from './logo.svg';
import './App.css';
import bil from './sun-svgrepo-com.svg';
import React, { useState, useEffect } from 'react'; 

function App() {
  const [count, setCount] = useState(0); 
  const [isHopActive, setIsHopActive] = useState(false);

  useEffect(() => {
    // Hvis count er et nytt multiplum av 100 (men ikke 0)
    if (count % 25 === 0 && count !== 0) {
      setIsHopActive(true);
      // Slå av etter 4 sekunder
      const timer = setTimeout(() => setIsHopActive(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={bil}
          className={
            isHopActive
              ? "App-logo App-logo-hop no-spin App-logo-hop-color"
              : "App-logo"
          }
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <section>
          <button className="button" onClick={() => setCount(count + 1)}>
            <span>Plus </span>
          </button>
          <button className="button" onClick={() => setCount(count - 1)}>
            <span>minus</span>
          </button>
        </section>
        <section className="antall">
          <p>Antall trykk: {count}</p> 
        </section>
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
