import React, { useState } from "react";

const TextField = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

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
    </div>
  );
};

export default TextField;
