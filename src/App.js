import React from 'react';
import './App.css';
import img from './images/list.png'

let todos = [
{
  id: 1,
  description: "your description",
  completed: false
},
{
  id: 2,
  description: "your description",
  completed: false
},
{
  id: 3,
  description: "your description",
  completed: false
}
]

function App() {
  return (
    <div className="App">
      <img src={img} alt="img" id="menuIcon"/>
      <div id="container">
        <h1 id="listHeader">ToDo List</h1>
        <div id="divider">
        </div>
        <div className="list">
          <ul className="listItems">
            {todos.map(todo => (
              <li key={todos.id} id="item">
                <input type="checkbox" id="checks" defaultChecked={todo.completed}/>
                {todo.description}
            </li>
            ))
            }
          </ul>
          <ul className="listItems">
            <input type="text" id="textInput" placeholder="Add item"></input>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
