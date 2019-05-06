import React from 'react';
import './App.css';
import img from './images/list.png'

class App extends React.Component {

  state = {
    todos: [
    {
      description: "your description",
      completed: false
    },
    {
      description: "your description",
      completed: false
    },
    {
      description: "your description",
      completed: false
    }
    ],
  newTodoDesc: ''
}

newTodo = e => {
  this.setState ({newTodoDesc: e.target.value})
}

addTodo = e => {
  let todos = this.state.todos
  todos.push({
    description: this.state.newTodoDesc,
    completed: false
  })
  this.setState({todos: todos, newTodoDesc: ''})
}

render() {
  return (
    <div className="App">
      <img src={img} alt="img" id="menuIcon"/>
      <div id="container">
        <h1 id="listHeader">ToDo List</h1>
        <div id="divider">
        </div>
        <div className="list">
          <ul className="listItems">
            {this.state.todos.map((todo, index) => (
              <li key={index} id="item">
                <input type="checkbox" id="checks" defaultChecked={todo.completed}/>
                {todo.description}
            </li>
            ))
            }
          </ul>
          <ul className="listItems">
            <input type="text" id="textInput" placeholder="Add item" 
            value={this.state.newTodoDesc}
            onChange={this.newTodo}
            onKeyDown={(e) => e.key ==='Enter' ? this.addTodo(): ''}></input>
            <button id="btn"
            onClick={this.addTodo}
            >Add</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
}
export default App;
