import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/auth/login';
import Registration from '../pages/auth/registration';
import Header from '@/components/header';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/about',
        element: <h1>About</h1>,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);
