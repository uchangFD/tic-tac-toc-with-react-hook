import React, { useState } from "react";
import ReactDOM from "react-dom";

import Board from "./components/Board";
import Input from "./components/Input";
import tictactoc from "./lib/tictactoc";

import "./styles.scss";

function App() {
  const [size, setSize] = useState(5);
  tictactoc.setSize(size);

  return (
    <div className="App">
      {/* <Input size={size} onChange={setSize} /> */}
      <Board size={size} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
