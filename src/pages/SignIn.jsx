import React, { useState, useEffect } from "react";
import "../css/SignIn.css";
import facade from "../util/apifacade";
import {Navigate, useNavigate} from 'react-router-dom';
import { useAuth } from '../provider/authProvider';



function SignIn() {
  const token = useAuth();
  const navigate = useNavigate();
  const init = { username: '', password: ''} // These are the initial values, they will be changed when a user types in the input fields
  const [loginCredentials, setLoginCredentials] = useState(init) //This is the useState that will be updated with init, when a user types in the input fields
  const [isLoggedIn, setIsLoggedIn] = useState(false) //This is the useState that will be updated with a boolean, when a user clicks the login button
  const [dataFromServer, setDataFromServer] = useState('Loading...') // This is the useState that will be updated with data from the server, when a user clicks the login button


  //useEffect(() => {
    //facade.fetchData().then((data) => setDataFromServer(data.msg)) // The data.msg contains info about the user, if the user is logged in
  //}, [isLoggedIn]) //This useEffect will run when the isLoggedIn state is updated

  const performLogin = (event) => {
    event.preventDefault()
     facade.login(
      loginCredentials.username, 
      loginCredentials.password, // This is the login method from the facade, which gets the info from the input fields
      setIsLoggedIn, // This will update the isLoggedIn state to true, which will trigger the useEffect    
     )
  }
    

  const onChange = (event) => { // This method will run when a user types in the input fields
    setLoginCredentials({
      ...loginCredentials, // This is a spread operator, which will spread the loginCredentials state to all the input fields
      [event.target.id]: event.target.value, //  The event.target.id is the id of the input field which will trigger the onChange method, and the event.target.value is the value that will be updated in the input field
    })
  }

  useEffect(() => {
    if(isLoggedIn) {
      token.setToken(facade.getToken)
      if(facade.getUserRoles() === "admin") {
        console.log("Inside useEffect", facade.getUserRoles())
        navigate("/admin", {replace: true}); 
      } else if(facade.getUserRoles() === "user") {
          navigate("/behandling", {replace: true});
      } else {
        navigate("/home", {replace: true});
      }
    }
  }, [isLoggedIn, navigate, token]); // This useEffect will run when the isLoggedIn state is updated



  return (
    <div className="signInDiv-Main">
      <div className="signInDiv-Content">
          <h1 className="loginHeader">Login</h1>

          <form onChange={onChange}>
            <input placeholder="Enter Username" id="username" />
            <input placeholder="Enter Password" id="password" type="password" required />
              <div className="signInButtons">
                <button className="loginButton" onClick={performLogin}>Login</button>
                <button className="registerButton" onClick={performLogin}>Register</button>
              </div>            
          </form>

          <div>
         
        </div>
      </div>
    </div>
  );

}

export default SignIn;
