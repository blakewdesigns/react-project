import React from 'react'

const headerStyle = {
  width: '50%',
  marginTop: '100px',
  paddingLeft: '30px',
  marginBottom: '8px'
}

export default function Header() {
  return (
    <header>
        <h1 style ={headerStyle}>ToDo List</h1>
    </header>
  )
}

