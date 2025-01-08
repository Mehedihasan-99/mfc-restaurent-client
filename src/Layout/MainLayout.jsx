import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='px-2 md:px-10'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;