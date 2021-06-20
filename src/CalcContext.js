import React from "react";

const CalcContext = React.createContext({
  oldValue: null,
  currentValue: null,
  operator: null,
  insertValue: () => {}
});

export default CalcContext;
