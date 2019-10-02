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

export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <List>
          <li className="px-3 md:px-5"><Link to="/">Home</Link></li>
          <li className="px-3 md:px-5"><Link to="/comics">Comics</Link></li>
          <li className="px-3 md:px-5"><Link to="/films">Star Wars</Link></li>
        </List>
      </nav>
    </header>
  )
}
