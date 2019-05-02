import React from 'react';
import './App.css';
import img from './images/list.png'

function App() {
  return (
    <div className="App">
      <img src={img} alt="img" id="menuIcon"/>
      <div id="container">
        <h1 id="listHeader">ToDo List</h1>
        <div id="divider">
          <div className="list">
            <ul className="listItems">
              <input type="checkbox"></input><li>List example 1</li>
            </ul>
            <ul className="listItems">
              <input type="checkbox"></input><li>List example 2</li>
            </ul>
            <ul className="listItems">
              <input type="checkbox"></input><input type="text" id="textInput" placeholder="Add item"></input>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
