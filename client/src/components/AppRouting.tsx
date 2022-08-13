import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main } from '../pages/Main';
import { AdminPanel } from '../pages/AdminPanel';
import { Basket } from '../pages/Basket';
import { Products } from '../pages/Products';
import { Auth } from '../pages/Auth';

export const AppRouting: React.FC = () => {
  const isAuth = true;

  const authRoutes = [
    {
      path: 'admin',
      element: <AdminPanel />,
    },
    {
      path: 'basket',
      element: <Basket />,
    },
  ];

  const publicRoutes = [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: 'products',
      element: <Products />,
    },

    {
      path: 'signup',
      element: <Auth />,
    },
    {
      path: 'signin',
      element: <Auth />,
    },
  ];
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}

      {publicRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};
