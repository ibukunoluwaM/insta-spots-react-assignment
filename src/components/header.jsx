import React from "react";
import "./header.css";
import logo from "../Assets/icons/Spots-Logo.svg"; 

function Header() {
  return (
    <header>
      <img src={logo} alt="Insta Spot Logo" />
    </header>
  );
}

export default Header;