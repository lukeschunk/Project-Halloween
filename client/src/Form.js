import React, { Component } from "react";
import "./App.css";

const Form = props => {
  return (
    <div>
      <input
        value={props.name}
        onChange={event => props.handleChange(event, "name")}
        placeholder="Enter Creature Name"
      >
        Name
      </input>
    </div>
  );
};

export default Form;
