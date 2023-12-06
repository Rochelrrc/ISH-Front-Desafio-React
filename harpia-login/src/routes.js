
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import ForgotPass from './pages/forgotPass';

function MainRoutes() {
  return (
    <Routes>

      <Route element={<Login />} path="/" />
      <Route element={<ForgotPass />} path="/forgot_password" />

    </Routes>
  );
}

export default MainRoutes;
