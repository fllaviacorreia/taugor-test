import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import Root from '@/pages/root';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import Home from '@/pages/home';
import ErrorPage from '@/pages/errorPage';
import ForgotPassword from '@/pages/auth/forgotPassword';
import Employees from '@/pages/employee';

import { isAuthenticated } from '@/config/auth';
import CreateEmployee from '@/pages/employee/create';

const PrivateRoute = () => (
  isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
);

const Routes1 = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path='/home' element={<PrivateRoute />}>
        <Route exact path='/home' element={<Home />} />
      </Route>
      <Route path='/employees' element={<PrivateRoute />}>
        <Route exact path='/employees' element={<Employees />} />
      </Route>
      <Route path='/employees/create' element={<PrivateRoute />}>
        <Route exact path='/employees/create' element={<CreateEmployee />} />
      </Route>
      <Route path='/employees/edit/:id' element={<PrivateRoute />}>
        <Route exact path='/employees/edit/:id' element={<Employees />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Routes1;