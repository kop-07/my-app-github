import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar-brand">WE Terminal Hotel</a>
        <ul className="navbar-links">
          <li><a href="#">หน้าแรก</a></li>
          <li><a href="#">เกี่ยวกับเรา</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
