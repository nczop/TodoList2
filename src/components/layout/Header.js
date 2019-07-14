import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style = {headerSyle}>
            <h1>TodoList</h1>
            <Link style= {linkStyle} to="/">Home</Link> | 
            <Link style= {linkStyle} to="/about"> About</Link>
        </header>
    )
}

const headerSyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header