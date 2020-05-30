import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/index";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <>
      <div className="App-header m-1 rounded border border-warning">
        <p>App Counter</p>
        <p>Current Count is {counter}.</p>
        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={decrement}
        >
          Decrease
        </button>
        <button
          type="button p10"
          className="btn btn-info m-2"
          onClick={increment}
        >
          Increase
        </button>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
