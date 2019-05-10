import React from 'react'
import styled from 'styled-components'

const Head = styled.h1`
  width: 50%;
  margin-top: 100px;
  padding-left: 30px;
  margin-bottom: 8px;
`

export default function Header() {
  return (
    <header>
        <Head>ToDo List</Head>
    </header>
  )
}