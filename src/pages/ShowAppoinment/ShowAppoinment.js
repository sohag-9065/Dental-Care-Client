import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const ShowAppoinment = () => {
    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);

    // console.log(admin);


    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <h2 className='text-3xl text-orange-300'>ShowAppoinment</h2>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to="/showappoinment">My Appoinments</Link></li>
                    <li><Link to="/showappoinment/myreviews">My Review</Link></li>
                    <li><Link to="/showappoinment/history">My History</Link></li>
                    {admin && <li><Link to="/showappoinment/users">All Users</Link></li>}
                </ul>

            </div>
        </div>

    );
};

export default ShowAppoinment;