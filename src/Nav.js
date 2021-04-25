import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo goes here</h3>
      <ul className="nav-links">
          <Link to='/About'><li>Douglas Ede</li></Link>
          <Link to='/Coaching'><li>Coaching</li></Link>
          <Link to='/Programing'><li>Programing</li></Link>
          <Link to='/Home'><li>Home</li></Link>
          
          
      </ul>  
    </nav>
  );
}

export default Nav;