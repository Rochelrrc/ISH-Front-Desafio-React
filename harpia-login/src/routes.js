import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login'
import ForgotPass from './components/forgotPass';

function MainRoutes() {
  return (
    <Routes>

      <Route element={<Login />} path="/" />
      <Route element={<ForgotPass />} path="/forgot_password" />

    </Routes>
  );
}

export default MainRoutes;
