import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    const navItems = useLoaderData();
    return (
        <div>
            <Header navItems={navItems}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;