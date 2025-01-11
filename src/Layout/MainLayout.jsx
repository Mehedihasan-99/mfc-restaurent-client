import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    const location = useLocation()

    const noHeaderFooter = location.pathname.includes("/sign-up") || location.pathname.includes("/login");
    
    return (
        <div className=''>
            { noHeaderFooter || <Navbar />}
            <Outlet />
            { noHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;