import React from 'react'

export default class Todo extends React.Component {
    render() {
        return (
            <li id="item">
                <input type="checkbox" id="checks" defaultChecked={this.props.todo.completed}/>
                {this.props.todo.description}
            </li>
        )
    }
}