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
      isChanged: false,
      isDecimal: false
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

  buttonHandler = value => {
    if (value === ".") {
      if (this.state.isDecimal) {
        return;
      } else {
        this.setState(state => ({
          isDecimal: true
        }));
      }
    }

    if (this.isNumber(value) || value === ".") {
      this.setState(state => ({
        currentValue: state.isChanged ? state.currentValue + value : value,
        isChanged: true
      }));
    }

    if (value === "c") {
      this.resetState();
    }

    if (this.isOperator(value) && this.state.isChanged) {
      this.makeOperation(value);
    }

    if (value === "=" && this.state.isChanged) {
      this.getResult();
    }
  };

  isNumber(str) {
    return /\d/.test(str);
  }

  isOperator(str) {
    return /[/*+-]/.test(str);
  }

  resetState() {
    this.setState(state => ({
      oldValue: null,
      operator: null,
      currentValue: "Set Value",
      isChanged: false,
      isDecimal: false
    }));
  }

  makeOperation(operator) {
    if (this.state.oldValue !== null) {
      this.getResult();
    }
    this.setState(state => ({
      oldValue: state.currentValue,
      operator: operator,
      currentValue: "",
      isDecimal: false
    }));
  }

  getResult() {
    if (this.state.currentValue === "") return;

    const oldValue = parseFloat(this.state.oldValue);
    const currentValue = parseFloat(this.state.currentValue);
    const operator = this.state.operator;
    this.resetState();
    this.setState(state => ({
      currentValue: this.calculate(oldValue, operator, currentValue)
    }));
  }

  calculate(operand1, operator, operand2) {
    if (operator === "+") {
      return operand1 + operand2;
    } else if (operator === "-") {
      return operand1 - operand2;
    } else if (operator === "*") {
      return operand1 * operand2;
    } else if (operator === "/" && operand2 !== 0) {
      return operand1 / operand2;
    }
  }
}

export default App;
