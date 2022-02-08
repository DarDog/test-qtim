import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='main-navigation'>
      <div className='menu-menu-1-container'>
        <ul className='menu nav-menu'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/'>about</Link>
          </li>
          <li>
            <Link to='/'>shop</Link>
          </li>
          <li>
            <Link to='/'>blog</Link>
          </li>
          <li>
            <Link to='/'>elements</Link>
          </li>
          <li>
            <Link to='/'>pages</Link>
          </li>
          <li>
            <Link to='/'>contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
