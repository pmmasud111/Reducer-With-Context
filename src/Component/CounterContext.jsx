// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer } from "react";
import CounterReducer from "./CounterReducer";
export const CounterContext = createContext();

// eslint-disable-next-line react/prop-types
export const CounterContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(CounterReducer, 1);
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
