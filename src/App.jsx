import './css/App.css'
import { Outlet } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import AuthProvider from './provider/authProvider';
import Routes from './routes';
import facade from './util/apifacade';


function App() {
 return (
        console.log("APP", facade.getToken(),  ),
  <AuthProvider>    
          <Routes />     
  </AuthProvider>
  )
 }

export default App 
