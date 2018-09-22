import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      scary: {
        level: 1
      }
    };
  }
  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  handleScaryLevel = event => {
    const { scary } = this.state.scary;
    const newScary = Object.assign({}, scary);
    newScary.level = event.target.value;
    this.setState({ scary: newScary });
  };

  handleClick = id => {
    let newCreature = {
      id: id,
      name: this.state.name,
      image_url: this.state.image_url,
      scary: {
        level: this.state.scary.level
      }
    };
    console.log("Updating the list", newCreature);

    axios.put(`${BASE_URL}/creatures/${id}`, newCreature).then(response => {
      console.log("Updated", response);

      this.props.updateState(response.data);
    });
  };

  componentDidMount() {
    console.log("Component mounted");
    this.setState({
      id: this.props.creature.id,
      name: this.props.creature.name,
      image_url: this.props.creature.image_url,
      scary: this.props.creature.scary
    });
  }
  render() {
    return (
      <div className="edit-block">
        {/* <label htmlFor="input">Edit Creature Details</label> */}
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
        <input
          type="number"
          name="Scary"
          placeholder="1 to 10"
          id=""
          value={this.state.scary.level}
          onChange={event => this.handleScaryLevel(event)}
        />
        <button onClick={() => this.handleClick(this.state.id)}>Edit</button>
      </div>
    );
  }
}

export default UpdateForm;
