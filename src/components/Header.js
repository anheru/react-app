import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

export default function Header () {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
    </header>
  )
}