import { Navigate, Outlet } from 'react-router-dom';
import Auth from './utils/auth';

const ProtectedRoutes = () => {
  return Auth.loggedIn() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
