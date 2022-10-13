import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const MenuItems = ({ menu }) => {
    const { menuName, menuRoute } = menu;
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <li>
                {
                    user && menuName === "Login" ?
                        <NavLink
                            onClick={logout}
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? undefined : undefined
                            }>
                            Sign Out
                        </NavLink>
                        :
                        <NavLink
                            to={menuRoute}
                            className={({ isActive }) =>
                                isActive ? "bg-[#3A4256] text-white" : undefined
                            }>
                            {menuName}
                        </NavLink>
                }

            </li>
        </div>
    );
};

export default MenuItems;