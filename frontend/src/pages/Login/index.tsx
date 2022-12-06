import { Route, Routes } from 'react-router-dom';
import LoginView from './Login';
import './Login.css';
import RegisterView from './Register';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route index path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  );
};

export default LoginRoutes;
