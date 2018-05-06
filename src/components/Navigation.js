import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <Link to="/" className="navigation__link">Posts</Link>
    <Link to="/create" className="navigation__link">New Post</Link>
  </nav>
);

export default Navigation;
