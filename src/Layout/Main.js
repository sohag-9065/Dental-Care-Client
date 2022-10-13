import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;