import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main } from '../pages/Main';
import { AdminPanel } from '../pages/AdminPanel';
import { Basket } from '../pages/basket/Basket';
import { Products } from '../pages/products/Products';
import { Auth } from '../pages/Auth';
import { Device } from '../pages/Device';
import { Order } from '../pages/order/Order';
import { useAppSelector } from '../store/hooksStore';
import { Routing } from '../constanst/const';

export const AppRouting: React.FC = () => {
  const { MAIN, ADMIN_PANEL, BASKET, PRODUCTS, SIGNUP, SIGNIN, DEVICE, ORDER } = Routing;
  const { isAuth } = useAppSelector((state) => state.user);

  const authRoutes = [
    {
      path: ADMIN_PANEL,
      element: <AdminPanel />,
    },
    {
      path: BASKET,
      element: <Basket />,
    },
  ];

  const publicRoutes = [
    {
      path: MAIN,
      element: <Main />,
    },
    {
      path: PRODUCTS,
      element: <Products />,
    },

    {
      path: SIGNUP,
      element: <Auth />,
    },
    {
      path: SIGNIN,
      element: <Auth />,
    },
    {
      path: DEVICE,
      element: <Device />,
    },
    {
      path: ORDER,
      element: <Order />,
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
