import React, { useState } from "react";
import { connect } from "react-redux";
import { submitMessage } from "../actions/index";

const TextField = ({ messages, submitMessage }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const submitAMessage = () => {
    if (message === "" || name === "") {
      console.log("Bad Request");
    } else {
      submitMessage({ message, name });
    }
  };

  return (
    <div className="App-header m-1 rounded border border-warning">
      Current Text From : {message}
      <div className="form-group-lg m-2 Input">
        <input
          className="form-control-lg m-2"
          value={message}
          placeholder="Message..."
          onChange={e => setMessage(e.target.value)}
        ></input>
        <input
          className="form-control-lg m-2"
          value={name}
          placeholder="Author..."
          onChange={e => setName(e.target.value)}
        ></input>
      </div>
      Written By: {name}
      <div>
        <button className="btn btn-warning m-3" onClick={submitAMessage}>
          Submit
        </button>
      </div>
      {messages.length !== 0 ? (
        messages.map((m, i) => (
          <div className="text-info" key={i}>
            {m.name.charAt(0).toUpperCase() + m.name.slice(1)} wrote:{" "}
            {m.message}
          </div>
        ))
      ) : (
        <div className="text-info">No Current Messages</div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps, { submitMessage })(TextField);
