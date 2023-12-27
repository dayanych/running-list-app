import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/app';
import { About } from 'src/pages/about';
import Login from 'src/pages/auth/login';
import Registration from 'src/pages/auth/registration';
import { Home } from 'src/pages/home';
import { NotFoundPage } from 'src/pages/not-found-page';

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
        element: <About />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
