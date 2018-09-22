import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import Creatures from "./Creatures.js";
// import Form from "./Form.js";
import Add from "./AddForm.js";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor() {
    super();
    this.state = {
      creatures: [],
      name: "",
      image_url: "",
      scary: {
        level: 1
      }
    };
  }
  componentDidMount() {
    axios.get(`${BASE_URL}/creatures`).then(response => {
      console.log("Component mounted", response);
      this.setState({ creatures: response.data });
    });
  }

  // handleChange = (event, key) => {
  //   this.setState({
  //     [key]: event.target.value
  //   });
  // };

  // handleClick = () => {
  //   let newCreature = {
  //     name: this.state.name,
  //     image_url: this.state.image_url,
  //     scary: {
  //       level: this.state.scary.level
  //     }
  //   };
  //   console.log("Adding to list", newCreature);

  //   axios.post(`${BASE_URL}/creatures`, newCreature).then(response => {
  //     this.setState({ creatures: response.data });
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Add updateState={data => this.setState({ creatures: data })} />

        <Creatures
          creatures={this.state.creatures}
          updateState={data => this.setState({ creatures: data })}
        />
      </div>
    );
  }
}

export default App;
