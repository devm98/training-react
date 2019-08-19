import React, { Component } from "react";
import Person from "./components/Person/Person";
import "./App.css";

export default class App extends Component {
  state = {
    persons: [
      { name: "Minh", age: 19 },
      { name: "Quí", age: 21 },
      { name: "Tuấn", age: 30 }
    ]
  };
  switchNameHandler = () => {
    this.setState({ person: (this.state.persons[0].name = "Thong minh") });
  };
  render() {
    return (
      <div className="App">
        {this.state.persons.map(person => (
          <Person
            name={person.name}
            age={person.age}
            click={this.switchNameHandler}
          />
        ))}
      </div>
    );
  }
}
