import React from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavLink to="/micro-react-app1">应用一</NavLink>
          <NavLink to="/micro-react-app2">应用二</NavLink>
          <NavLink to="/micro-vue-app3">应用三</NavLink>
        </div>
       我是qiankun主应用容器
       <div id='container'></div>
       {/* <div id='micro-react-app2'></div>
       <div id='micro-vue-app3'></div> */}
      </header>
    </div>
  );
}

export default App;
