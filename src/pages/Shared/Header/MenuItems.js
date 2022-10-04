import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = ({menu}) => {
    const {menuName,menuRoute} = menu;
    return (
        <div>
            <li>
            <NavLink
                to={menuRoute}
                className={({ isActive }) =>
                    isActive ? "bg-[#3A4256] text-white" : undefined
                }>
                {menuName}
            </NavLink>
        </li>
        </div>
    );
};

export default MenuItems;