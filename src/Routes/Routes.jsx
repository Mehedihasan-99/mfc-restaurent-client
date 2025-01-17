import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/HomePage/Home/Home';
import Menu from '../Pages/MenuPage/Menu/Menu';
import Order from '../Pages/OrderPage/Order/Order';
import Login from '../Pages/LoginPage/Login';
import SignUp from '../Pages/SignUpPage/SignUp';
import DashboardLayout from '../Layout/DashboardLayout';
import MyCart from '../Pages/DashboardPage/MyCart/MyCart';
import Privateroutes from './Privateroutes';
import AdminRoutes from './AdminRoutes'
import AllUsers from '../Pages/DashboardPage/AllUsers/AllUsers';
import AddItems from '../Pages/DashboardPage/AddItems/AddItems';
import { GiAbdominalArmor } from 'react-icons/gi';
import ManageItems from '../Pages/DashboardPage/ManageItems/ManageItems';
import UpdateItem from '../Pages/DashboardPage/UpdateItem/UpdateItem';
import axios from 'axios';
import Payment from '../Pages/DashboardPage/Payment/Payment';

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
                element: <Menu />
            },
            {
                path: "/order/:category",
                element: <Order />
            },
            {
                path: "/contact",
                element: <h2 className='text-6xl'>contact</h2>
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
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            // admin routes 
            {
                path: "admin-home",
                element: <h2>home</h2>
            },
            {
                path: 'add-items',
                element: <AdminRoutes>
                    <AddItems />
                </AdminRoutes>
            },
            {
                path: 'manage-items',
                element: <AdminRoutes>
                    <ManageItems />
                </AdminRoutes>
            },
            {
                path: 'update/:id',
                element: <AdminRoutes>
                    <UpdateItem />
                </AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "users",
                element: <AdminRoutes>
                    <AllUsers />
                </AdminRoutes>
            },

            // users routes 
            {
                path: "home",
                element: <h2>Home</h2>
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: "cart",
                element: <Privateroutes>
                    <MyCart />
                </Privateroutes>
            },
            {
                path: "reservation",
                element: <h2>reservation</h2>
            },
            {
                path: "payment-history",
                element: <h2>payment-history</h2>
            },
            {
                path: "review",
                element: <h2>review</h2>
            },
            {
                path: "booking",
                element: <h2>booking</h2>
            }
        ]
    }
])

export default Routes;