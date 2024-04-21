import { NavLink } from "react-router-dom";

function UserNav() { 
    return (
        <NavLink
            id="navLink"
            to="behandling"
            exact="true"
            className={({ isActive }) => (isActive ? "active" : "none")}
              >
            Behandlinger
            </NavLink>       
    )
}

export default UserNav;