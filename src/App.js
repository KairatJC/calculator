import React from "react";
import CalcContext from "./CalcContext";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldValue: null,
      operator: null,
      currentValue: "Set Value",
      isChanged: false
    };
  }

  render() {
    return (
      <CalcContext.Provider
        value={{
          oldValue: this.state.oldValue,
          currentValue: this.state.currentValue,
          operator: this.state.operator,
          insertValue: this.buttonHandler
        }}
      >
        <div className="App">
          <Display />
          <Keyboard />
        </div>
      </CalcContext.Provider>
    );
  }

  buttonHandler = clickedButton => {
    if (/\d/.test(clickedButton)) {
      this.numberButtonHandler(clickedButton);
    } else if (clickedButton === ".") {
      this.dotButtonHandler();
    } else if (/[/*+-]/.test(clickedButton)) {
      this.operatorButtonHandler(clickedButton);
    } else if (clickedButton === "=" && this.state.isChanged) {
      this.getResult();
    } else if (clickedButton === "c") {
      this.resetState();
    }
  };

  numberButtonHandler(number) {
    let newValue = this.state.isChanged ? this.state.currentValue + number : number;
    this.setCurrentValue(newValue);
  }

  dotButtonHandler() {
    if (this.state.isChanged) {
      if (!this.state.currentValue.includes("."))
        this.setCurrentValue(this.state.currentValue + ".");
    } else {
      this.setCurrentValue("0.");
    }
  }

  operatorButtonHandler(operator) {
    if (this.state.oldValue !== null) {
      this.getResult();
    }

    this.setState(state => ({
      oldValue: state.oldValue !== null ? state.oldValue : state.currentValue,
      operator: operator,
      currentValue: state.oldValue === null ? "" : state.currentValue,
      isChanged: false
    }));
  }

  setCurrentValue(value) {
    this.setState(() => ({
      currentValue: value,
      isChanged: true
    }));
  }

  resetState() {
    this.setState(() => ({
      oldValue: null,
      operator: null,
      currentValue: "Set Value",
      isChanged: false
    }));
  }

  getResult() {
    if (this.state.currentValue === "" || this.state.operator === null) return;

    const oldValue = parseFloat(this.state.oldValue);
    const currentValue = parseFloat(this.state.currentValue);
    const operator = this.state.operator;
    this.resetState();
    this.setState(() => ({
      currentValue: this.calculate(oldValue, operator, currentValue),
      isChanged: true
    }));
  }

  calculate(operand1, operator, operand2) {
    if (operator === "/" && operand2 === 0) {
      return "";
    }
    return eval(operand1 + operator + operand2).toString();
  }
}

export default App;
