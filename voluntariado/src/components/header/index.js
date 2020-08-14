import React from 'react';
import Logo from '../../images/white_logo.png';
import '../../styles/header.css';
const header = ({color}) => (
    
    <div className="header" style={{
        backgroundColor: color,
      }}>
          <img src={Logo} className="logo"></img>
    </div>
);

export default header;