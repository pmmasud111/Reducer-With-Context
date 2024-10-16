// eslint-disable-next-line no-unused-vars
import React from "react";
import Counter from "./Component/Counter";
import { CounterContextProvider } from "./Component/CounterContext";

const App = () => {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
};
export default App;
