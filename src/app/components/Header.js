import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 15px 0;
`

const ListItem = styled.li`
  padding: 0 2rem;
`

export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <List>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/comics">Comics</Link></ListItem>
        </List>
      </nav>
    </header>
  )
}
