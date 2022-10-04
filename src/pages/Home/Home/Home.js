import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Home = () => {
    const navItems = useLoaderData();
    
    return (
        <div>
            <Header navItems={navItems}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;