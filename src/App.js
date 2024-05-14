import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  const minusOne = () => {
    setCounter(counter - 1);
  };

  const multi2 = () => {
    setCounter(0);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1> {counter}</h1>
        <button onClick={minusOne}> DON'T CLICK HERE! </button>
      </div>
      <div>
        <h1> {counter}</h1>
        <button onClick={addOne}> CLICK HERE! </button>
      </div>
      <div>
        <h1> {counter}</h1>
        <button onClick={multi2}> CLICK MORE HERE! </button>
      </div>
    </div>
  );
}

export default App;
