import { NavLink } from "react-router-dom";
import facade from "../util/apifacade";

function LogInNav( {loggedIn, token, setLoggedIn} ) {
    return (
    <div className="LogButton">
        {loggedIn ? (

            <NavLink
            id="navLink"
            to="/signin"
            onClick={() => {facade.logout(setLoggedIn)}}
            exact="true"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            Log Out
          </NavLink>

             ) : (
                
            <NavLink
            id="navLink"
            to="/signin"
            exact="true"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            Sign in {console.log("LOGGING IN", loggedIn, token)}
          </NavLink>
             )}
    </div>
    )
  
       
}

export default LogInNav;