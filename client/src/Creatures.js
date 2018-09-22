import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Update from "./UpdateForm.js";

const BASE_URL = "http://localhost:3005";

class Creatures extends Component {
  deleteCreature = id => {
    axios.delete(`${BASE_URL}/creatures/${id}`).then(response => {
      console.log("Going to delete", id, response);
      this.props.updateState(response.data);
    });
  };
  render() {
    return (
      <div>
        {this.props.creatures.map(creature => {
          return (
            <div key={creature.id} className="creature-block">
              <p>{creature.name}</p>
              <p>Scary Level : {creature.scary.level}</p>
              <img src={creature.image_url} />
              <button
                onClick={() => this.deleteCreature(creature.id)}
                id={creature.id}
              >
                Delete
              </button>
              <div className="edit-block">
                <Update
                  updateState={this.props.updateState}
                  creature={creature}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Creatures;
