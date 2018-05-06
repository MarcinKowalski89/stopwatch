import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to="/stopwatch">Stopwatch</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/globaltime">Global Time</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
