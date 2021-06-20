import React from "react";
import "./Display.css";
import CalcContext from "../../CalcContext";

function Display() {
  return (
    <CalcContext.Consumer>
      {value => {
        let result = getResult(value);
        return (
          <div className="calc wrap">
            {result}
          </div>
        );
      }}
    </CalcContext.Consumer>
  );
}

function getResult(value) {
  if (value.operator !== null || value.oldValue !== null) {
    return (
      <div className="calc-display">
        <span>
          {value.oldValue}
        </span>
        <span>
          {value.operator}
        </span>
        <span>
          {value.currentValue}
        </span>
      </div>
    );
  } else {
    return (
      <div className="calc-display">
        <span>
          {value.currentValue}
        </span>
      </div>
    );
  }
}

export default Display;
