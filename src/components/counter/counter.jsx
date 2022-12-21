import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  function incrementHandler() {
    setCounter(counter + 1);
  }
  function decrementHandler() {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;

// Explain useState()
