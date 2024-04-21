import React, { useState, useEffect, useContext, Children } from "react";
import "../css/SignIn.css";
import facade from "../util/apifacade";


function AdminPage() {

    const handleClick = () => {
        console.log("FUUUUUUUUUUUUUUUUUUUUUUUUCK")
    }
            return (
                
                <div>                    
                    <h1>{} Admin Page</h1>
                    <button onClick={handleClick}>FUCK</button>
                    <p>Du er logget ind, {facade.getUserRoles()}</p>
                    
                </div>
              );
        

        }
    

export default AdminPage;