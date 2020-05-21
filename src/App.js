import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current Count is {store.getState().counter}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h2>Counter</h2>
        <div>{store.getState().counter}</div>
      </div>
    </div>
  );
}

export default App;
