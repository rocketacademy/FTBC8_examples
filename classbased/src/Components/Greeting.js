import React from "react";
import { ExampleContext } from "../App";

export default class Greeting extends React.Component {
  static contextType = ExampleContext;
  render() {
    return (
      <div>
        <h6>Welcome</h6>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.context}</p>
      </div>
    );
  }
}
