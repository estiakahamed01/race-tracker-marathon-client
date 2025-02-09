import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { div } from 'motion/react-client';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='flex flex-row justify-center items-center'>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>

    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
    
};

export default PrivateRoute;