import React, { Children } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-lg text-accent"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate>
};

export default Privateroutes;