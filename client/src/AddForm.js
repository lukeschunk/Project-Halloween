import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

class AddForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image_url: "",
      scary: {
        level: 0
      }
    };
  }
  handleScaryLevel = event => {
    const { scary } = this.state.scary;
    const newScary = Object.assign({}, scary);
    newScary.level = event.target.value;
    this.setState({ scary: newScary });
  };
  handleChange = (event, key) => {
    // console.log("Event : ", event);
    this.setState({
      [key]: event.target.value
    });
    // const { name, image_url, scary } = this.state;
    // this.setState({
    //   name: name || this.state.name,
    //   image_url: image_url || this.state.image_url,
    //   scary: scary || this.state.scary
    // const category = { ...this.state[cat] };
    // category[key] = event.target.value;
    // this.setState({ [cat]: category });
  };

  handleClick = () => {
    let newCreature = {
      name: this.state.name,
      image_url: this.state.image_url,
      scary: {
        level: this.state.scary.level
      }
    };
    console.log("Adding to list", newCreature);

    axios.post(`${BASE_URL}/creatures`, newCreature).then(response => {
      console.log("Posted", response);
      this.props.updateState(response.data);
      this.setState({
        name: "",
        image_url: "",
        scary: {
          level: 0
        }
      });
    });
  };
  render() {
    return (
      <div className="creature-add-box">
        <input
          type="text"
          placeholder="Creature Name"
          value={this.state.name}
          onChange={event => this.handleChange(event, "name")}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={this.state.image_url}
          onChange={event => this.handleChange(event, "image_url")}
        />
        <div className="sliderContainer">
          <input
            type="number"
            name="Scary"
            placeholder="1 to 10"
            min="1"
            max="10"
            className="slider"
            id=""
            value={this.state.scary.level}
            onChange={event => this.handleScaryLevel(event)}
          />
        </div>
        <button onClick={this.handleClick} className="btn btn-primary">
          Add Creature
        </button>
      </div>
    );
  }
}

export default AddForm;
