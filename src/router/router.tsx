import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/app';
import Login from 'src/pages/auth/login';
import Registration from 'src/pages/auth/registration';
import Home from 'src/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
