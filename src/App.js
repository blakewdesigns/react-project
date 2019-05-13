import React from 'react'
import './App.css'
import img from './images/list.png'
import Todo from './Todo'
import Header from './Header'
import styled from 'styled-components'

const Appwrap = styled.div`
  margin: 0px;
  padding: 0px;
  `

const Container = styled.div`
  text-align: left;
  `

const Divider = styled.div`
  max-width: 60%;
  height: 2px;
  background-color:rgb(62, 0, 231);
  margin: 0px 30px 0px 40px;
`

const Listcontainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`

const Listitems = styled.ul`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  padding: 0px;
  margin-left: 0px;
  `

const Buttonprimary = styled.button`
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  margin-left: 100px;
  margin-top: 10px;
  `

const Textfield = styled.input`
  width: 50%;
  padding: 8px 0px 8px 5px;
  margin-left: 100px;
  border-radius: 5px;
  border: solid 1px grey;
  `

const Menuicon = styled.img`
  width: 40px;
  padding: 30px 20px;
`

class App extends React.Component {

  state = {
    todos: [
    {
      description: "your description",
      completed: true
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
    <Appwrap>
      <Menuicon src={img} alt="img" id="menuIcon"/>
      <Container>
        <Header/>
        <Divider>
        </Divider>
        <Listcontainer>
          <Listitems>
            {this.state.todos.map((todo, index) => (
              <Todo key={index} todo={todo}/>
            ))}
          </Listitems>
          <Listitems>
            <Textfield placeholder="Add item" 
            value={this.state.newTodoDesc}
            onChange={this.newTodo}
            onKeyDown={(e) => e.key ==='Enter' ? this.addTodo(): ''}>
            </Textfield>
            <Buttonprimary>
            Add
            </Buttonprimary>
          </Listitems>
        </Listcontainer>
      </Container>
    </Appwrap>
  );
}
}
export default App;
