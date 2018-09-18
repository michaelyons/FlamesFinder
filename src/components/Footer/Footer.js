import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <NavLink exact to={'/'} className="home-link">
        <p>
          <i className="fas fa-home" />
        </p>
      </NavLink>
    </footer>
  );
};

export default Footer;
