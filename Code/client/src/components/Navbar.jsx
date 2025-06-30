import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Book Nest</h1>
    <input type="text" placeholder="Search for books..." />
    <div className="nav-links">
      <a href="/wishlist">Wishlist</a>
      <a href="/cart">Cart</a>
      <a href="/login">Login</a>
    </div>
  </nav>
);

export default Navbar;