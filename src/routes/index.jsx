import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import { ProtectedRoute } from './ProtectedRoute';
import Home from '../pages/Home';
import Behandling from '../pages/Behandling';
import SignIn from '../pages/SignIn';
import AdminPage from '../pages/AdminPage';
import EditTreatments from '../pages/EditTreatments';
import Header  from '../components/Header';
import Footer  from '../components/Footer';
import facade from '../util/apifacade';

const AppRoutes = () => {
  const { token } = useAuth();
  console.log("APP ROUTES: ", token)

  return (
    <Router>
        <div className='appDiv'>
            <Header />
        <div className='appOutletDiv'>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/behandling" element={<Behandling />} />
                {!token && <Route path="/signin" element={<SignIn />} />}
                <Route path="*" element={<ProtectedRoute role={facade.getUserRoles} />}>
                    <Route path="admin" element={<AdminPage />} />
                    <Route path="rediger" element={<EditTreatments />} />
                </Route>
            </Routes>
        </div>
            <Footer />
        </div>
    </Router>
  );
};

export default AppRoutes;