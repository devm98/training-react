import React from "react";
import "./person.css";

class Person extends React.Component {
  render() {
    return (
      <div onClick={this.props.click} className="person">
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
export default Person;
