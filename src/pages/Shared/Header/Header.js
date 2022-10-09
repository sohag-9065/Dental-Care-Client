import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MenuItems from './MenuItems';

const Header = ( ) => {
    const navItems = useLoaderData();

    return (
        <div className="navbar justify-between bg-base-100 w-11/12 mx-auto">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            navItems.map(menu => <MenuItems
                                key={menu.id}
                                menu={menu}
                            ></MenuItems>)
                        }

                    </ul>
                </div>
                <Link to={"/dashboard"} className="btn btn-ghost normal-case text-xl">Dental Care</Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navItems.map(menu => <MenuItems
                            key={menu.id}
                            menu={menu}
                        ></MenuItems>)
                    }
                </ul>
            </div>
            
        </div>
    );
};

export default Header;