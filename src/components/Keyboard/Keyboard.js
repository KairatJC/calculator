import React, { Component } from "react";
import Button from "../Button/Button";
import "./Keyboard.css";

export default class Keyboard extends Component {
  numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  actions = ["c", "+", "-", "*", "/", "="];

  render() {
    const numpad = this.numbers.map(num =>
      <Button key={num} text={num} />
    );
    const operators = this.actions.map(action =>
      <Button key={action} text={action} />
    );
    return (
      <div className="keyboard wrap">
        <div className="numpad">
          {numpad}
        </div>
        <div className="actionpad">
          {operators}
        </div>
      </div>
    );
  }
}
