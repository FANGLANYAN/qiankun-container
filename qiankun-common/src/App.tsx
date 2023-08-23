import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RouterView from "./router";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        我是/home/common
        <img src={logo} className="App-logo" alt="logo1" />
      </header> */}
      <RouterView />
    </div>
  );
}

export default App;
