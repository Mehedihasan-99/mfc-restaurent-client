import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/HomePage/Home/Home';
import Menu from '../Pages/MenuPage/Menu/Menu';
import Order from '../Pages/OrderPage/Order/Order';
import Login from '../Pages/LoginPage/Login';
import SignUp from '../Pages/SignUpPage/SignUp';
import Privateroutes from './Privateroutes';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Privateroutes>
                    <Menu />
                </Privateroutes>
            },
            {
                path: "/order/:category",
                element: <Order />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            }
        ]
    }
])

export default Routes;