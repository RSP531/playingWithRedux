import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Counter from "./components/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
