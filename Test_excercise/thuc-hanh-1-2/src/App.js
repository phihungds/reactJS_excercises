import React from "react";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <h1> Value</h1>
      <div className="value">{value}</div>
      <button className="increase" onClick={()=>setValue(value + 1)}>Increase</button>
      <button className="decrease" onClick={()=>setValue(value - 1)}>Decrease</button>
    </div>
  );
}

export default App;
