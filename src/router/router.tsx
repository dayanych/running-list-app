import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from 'src/app';
import { About } from 'src/pages/about';
import Login from 'src/pages/auth/login';
import Registration from 'src/pages/auth/registration';
import { Home } from 'src/pages/home';
import { NotFoundPage } from 'src/pages/not-found-page';
import { WeekPage } from 'src/pages/week-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: ':year',
            element: <Outlet />,
            children: [
              {
                path: ':weekNumber',
                element: <WeekPage />,
              },
            ],
          },
        ],
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
