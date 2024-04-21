const URL = 'http://localhost:7070/api/company/'
const AUTHENTICATION_ROUTE = 'auth/login'
import Cookies from 'js-cookie'


function apiFacade() {

    const setCookie = (cookie) => {
        Cookies.set('Cookie', cookie, {expires: 2, secure: true})
    }

    const getCookie = () => {
        return Cookies.get('Cookie')
    }

    const setToken = (token) =>
    {
        localStorage.setItem('jwtToken', token)
    }
    
    const getToken = () =>
    {
        return localStorage.getItem('jwtToken')
    }

    const logout = (callback) =>
    {
        localStorage.removeItem('jwtToken')
        callback(false)
    }
    
    const handleHttpErrors = (res) =>
    {
    
        if (!res.ok) // The !res.ok is the same as res.status >= 400 || res.status < 600
        {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json()
    }
    
    const login = (user, password, callback) =>
    {
        console.log("Jeg er fanget inde i login funktionen", user, password)
    
        const payload = { username: user, password: password }
    
        const options = makeOptions("POST", payload)
    
        return fetch(URL + AUTHENTICATION_ROUTE, options)
            .then(handleHttpErrors)
            .then((json) => 
            {
                callback(true)
                setToken(json.token)
            })
            .catch((error) =>
            {
                if (error.status)
                {
                    error.fullError.then(e => console.log(JSON.stringify(e)))
                } else
                {
                    console.log("seriøs fejl", error)
                }
            })
    }
    

    const fetchData = (endpoint, method, payload) =>
    {
        const options = makeOptions(method, payload, true); //True add's the token
        return fetch(URL + endpoint, options).then(handleHttpErrors);
    }
    


    const makeOptions = (method, payload) =>
    {
    
        const opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        }
    
        if (payload)
        {
            opts.body = JSON.stringify(payload)
        }
    
        return opts;
    }
    
    const getUserRoles = () =>
    {
        const token = getToken()
        if (token != null)
        {
            const payloadBase64 = getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const roles = decodedClaims.roles
            return roles
        } else return ""
    }
    
    const hasUserAccess = (neededRole, loggedIn) => 
    {
        const roles = getUserRoles().split(',')
        return loggedIn && roles.includes(neededRole)
    }

    return {
        makeOptions,
        setToken,
        getToken,
        logout,
        login,
        getUserRoles,
        hasUserAccess,
        fetchData,
        handleHttpErrors}
}

const facade = apiFacade(); // instantiates the apiFacade
export default facade // exports the apiFacade
