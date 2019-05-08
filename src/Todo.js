import React from 'react'

export default class Todo extends React.Component {
    render() {
        return (
            <li style={{listStyle}}>
                <input type="checkbox" id="checks" defaultChecked={this.props.todo.completed}/>
                {this.props.todo.description}
            </li>
        )
    }
}

const listStyle = {
        padding: '8px 0px 0px 50px',
        marginLeft: '10px',
        textAlign: 'left'
      
}