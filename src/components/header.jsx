import React from "react";
import './header.component.css'

const Header = ({ userName }) => {
  return (
    <header className="header-component">
      
      <div className="header-name">{userName}'s To do List</div>
      <p className="header-description">Add Description...</p>  
      <hr style={{ borderWidth: "2px", borderColor:"#00000069"}}/>
    </header>
    
  );
};

export default Header;
