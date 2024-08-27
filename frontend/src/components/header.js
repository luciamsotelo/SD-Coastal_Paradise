import React from "react";
import { Link } from 'react-router-dom';
import sdcplogo from '../images/sdcplogo.jpg';

const Header = () => {
  return (
    <h1 className="title" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: '#0095b6',
      fontSize: '50px',
      color: '#ffb79d',
      textShadow: '2px 5px 10px #0dba86',
      padding: '10px',
      margin: 0,
      flexWrap: 'wrap'
    }}>
      <Link to="/">
      <img
        src={sdcplogo}
        alt="logo"
        style={{
          height: '15vh',
          marginRight: '20px',
          flexShrink: '0',
          borderRadius: '20%',
          border: '4px solid rgba(255, 255, 255, 0.5)'
        }}
      />
      </Link>
      San Diego Coastal Paradise
    </h1>
  );
};

export default Header;
