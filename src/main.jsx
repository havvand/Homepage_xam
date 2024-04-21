import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Behandling from './pages/Behandling.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import AdminPage from './pages/AdminPage.jsx';
import EditTreatments from './pages/EditTreatments.jsx';



{/*const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/"} element={<Home />}></Route> 
        <Route path={"behandling"} element={<Behandling />}></Route> 
        <Route path={"signin"} element={<SignIn /> }></Route>     
      </Route>
      
      <Route element={<Layout />}>
        <Route path={"admin"} element={<AdminPage /> }>
          <Route path={"rediger"} element={<EditTreatments />}></Route>
        </Route>
        
      </Route>
    </>
  )
  )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />    
  </React.StrictMode>
);*/}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

