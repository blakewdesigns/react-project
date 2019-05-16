import React from 'react'
import styled from 'styled-components'


const List = styled.li`
    padding-top: 8px;
    margin-left: 60px;
    text-align: left;
    list-style: none;
    text-decoration: ${props => props.completed ? "line-through" : "none"};
`

const Checkbox = styled.input`
    margin: 0px 15px;
    `

export default class Todo extends React.Component {
    render() {
        return (
            <List completed = {this.props.todo.completed}>
                <Checkbox type="checkbox" defaultChecked={this.props.todo.completed}/>
                {this.props.todo.description}
            </List>
        )
    }
}