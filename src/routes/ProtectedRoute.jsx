import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = ({role}) => {
    const { token } = useAuth();
    console.log("PROTECTED ROUTE: ", token, role())
   

    if(!token || role() !== "admin") {
        return <Navigate to="/home" />
    }

    return <Outlet />
}