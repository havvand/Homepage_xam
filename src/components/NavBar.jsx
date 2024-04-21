import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import facade from "../util/apifacade"
import { useAuth } from "../provider/authProvider";
import AdminNav from "./AdminNav"; import UserNav from "./UserNav"; import LogInNav from "./LoginNav";


function Navbar() {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const token = useAuth();

    useEffect(() => {
      console.log(facade.getUserRoles(), "NVABAR USERROELLELE")
        if (facade.getUserRoles() === "admin") {
            console.log("NavBar Switch Nav - Setting True", isAdmin, token)
            setIsAdmin(true)
        } else {
            console.log("NavBar Switch Nav - Setting False", isAdmin, token)
            setIsAdmin(false)
        }
    }), [token];

    useEffect(() => {
      console.log(facade.getUserRoles(), "NVABAR IS LOGGED IN")
        if (facade.getUserRoles() === "admin" || facade.getUserRoles() === "user") {
            console.log("NavBar Switch Nav - LOGGED IN", loggedIn, token);
            setLoggedIn(true);
        } else {
            console.log("NavBar Switch Nav - LOGGED OUT", loggedIn, token)
            setLoggedIn(false);
            token.setToken("");
        }
    }), [token];

    return (
        <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                </div>
            <div className="logo">
              <h1>Thaidan</h1>
            </div>
            <div className="menu-items">
              <NavLink
                id="navLink"
                to="/home"
                exact="true"
                className={({ isActive }) => (isActive ? "active" : "none")}
              >
                Home
              </NavLink>

              {isAdmin ? <AdminNav /> : <UserNav />}

              <LogInNav loggedIn={loggedIn} token={token} setLoggedIn={setLoggedIn}/>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar