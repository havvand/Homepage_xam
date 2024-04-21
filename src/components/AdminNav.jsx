import { NavLink } from "react-router-dom";

 function AdminNav() {
    return (
        <NavLink
            id="navLink"
            to="rediger"
            exact="true"
            className={({ isActive }) => (isActive ? "active" : "none")}
              >
            Rediger Behandlinger
            </NavLink>       
    )
}

export default AdminNav;