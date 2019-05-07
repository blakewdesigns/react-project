import React from 'react';
import './App.css';
import img from './images/list.png'
import Todo from './Todo'
import Header from './Header'

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
        <Header />
        <div id="divider">
        </div>
        <div className="list">
          <ul className="listItems">
            {this.state.todos.map((todo, index) => (
              <Todo key={index} todo={todo}/>
            ))
            }
          </ul>
          <ul className="listItems">
            <input type="text" id="textInput" placeholder="Add item" 
            value={this.state.newTodoDesc}
            onChange={this.newTodo}
            onKeyDown={(e) => e.key ==='Enter' ? this.addTodo(): ''}></input>
            <button id="btn"
            >Add</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
}
export default App;
