import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/HomePage/Home/Home';
import Menu from '../Pages/MenuPage/Menu/Menu';
import Order from '../Pages/OrderPage/Order/Order';
import Login from '../Pages/LoginPage/Login';

const Routes = createBrowserRouter ([
    {
        path : "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/order/:category",
                element: <Order />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default Routes;