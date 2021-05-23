import React from "react";
import Repositories from "./components/Repositories";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App bp3-dark">
      <h1>React Repositories</h1>

      <Repositories />
    </div>
  );
}

export default App;
