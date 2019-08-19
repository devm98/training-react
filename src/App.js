import React, { Component } from "react";
import Person from "./components/Person/Person";
import "./App.css";

export default class App extends Component {
  state = {
    persons: [
      { name: "Minh", age: 19 },
      { name: "Quí", age: 21 },
      { name: "Tuấn", age: 30 }
    ],
    showPer: false
  };
  switchNameHandler = () => {
    this.setState({ person: (this.state.persons[0].name = "Thong minh") });
  };
  changeNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 19 },
        { name: newName, age: 21 },
        { name: newName, age: 30 }
      ]
    });
  };
  enterNameHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 19 },
        { name: "minh", age: 21 },
        { name: "minh01", age: 30 }
      ]
    });
  };
  showPersHandler = () => {
    this.setState({ showPer: !this.state.showPer });
  };
  render() {
    return (
      <div className="App">
        <button style={{ marginRight: "10px" }} onClick={this.showPersHandler}>
          {this.state.showPer ? "Hide" : "Show"}
        </button>
        {this.state.showPer
          ? this.state.persons.map(person => (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.changeNameHandler("Thog minh qua !")}
                change={this.enterNameHandler}
              />
            ))
          : null}
      </div>
    );
  }
}
