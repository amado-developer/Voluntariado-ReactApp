import React from 'react';

import '../../styles/header.css';
const Header = ({color, logo}) => (
    <div className="header" style={{
        backgroundColor: color,
      }}>
          <img src={logo} className="logo"></img>
    </div>
);

export default Header;