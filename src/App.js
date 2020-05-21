import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Counter from "./components/Counter";
import TextField from "./components/TextField";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Counter />
        <TextField />
      </div>
    </Provider>
  );
};

export default App;
