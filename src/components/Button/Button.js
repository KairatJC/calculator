import React, { Component } from "react";
import CalcContext from "../../CalcContext";

class Button extends Component {
  componentDidMount() {
    document.addEventListener("keydown", event => {
      if (
        event.key === this.props.text ||
        (event.key === "Enter" && this.props.text === "=") ||
        (event.key === "Backspace" && this.props.text === "c")
      ) {
        event.preventDefault();
        this.btnElement.click();
        this.btnElement.focus();
      }
    });
  }

  render() {
    const sendButtonText = () => {
      this.context.insertValue(this.props.text);
    };

    return (
      <button
        id={"button-" + this.props.text}
        ref={btn => (this.btnElement = btn)}
        onClick={sendButtonText}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.contextType = CalcContext;

export default Button;
