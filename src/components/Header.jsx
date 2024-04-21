import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import Navbar from "./NavBar.jsx";

function Header() {  

  return (
    <div className="headerDiv">
        <Navbar />
    </div>
  );
}

export default Header;
