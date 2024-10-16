// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const { count, dispatch } = useContext(CounterContext);

  const handleIncrement = () => {
    dispatch({
      type: "Increment",
    });
  };
  const handleDicrement = () => {
    dispatch({
      type: "Dicrement",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "Reset",
    });
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDicrement}>Dicrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
