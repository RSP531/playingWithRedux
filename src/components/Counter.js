import React from "react";
import { connect } from "react-redux";
import { increment } from "../actions/index";

const Counter = ({ counter, increment }) => {
  return (
    <div>
      <header className="App-header">
        <p>Current Count is {counter}.</p>
        <button onClick={increment}>Increase</button>
        <button>Decrease</button>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps, { increment })(Counter);
