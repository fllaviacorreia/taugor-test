import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import Root from '@/pages/root';
import Home from '@/pages/home';
import ErrorPage from '@/pages/errorPage';
import ForgotPassword from '@/pages/auth/forgotPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;