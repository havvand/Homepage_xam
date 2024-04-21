import * as React from "react";
import facade from "../util/apifacade";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {  

const [token, setToken_] = React.useState("");

const setToken = (newToken) => {
    setToken_(newToken);
};

React.useEffect(() => {
    console.log("INSIDE USEAUTH", token)
    if(token) {
        localStorage.setItem("jwtToken", token);
        console.log("AUTHPROVIDER: ", token, "TOKEN")
    } else {
        console.log("ELSE STATEMENT")
        localStorage.removeItem("jwtToken");
    }
}, [token]);

const contextValue = React.useMemo(() => ({
    token,
    setToken,
}), 
    [token]
);

return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
);

};

export const useAuth = () => {
    return React.useContext(AuthContext);
}


export default AuthProvider;