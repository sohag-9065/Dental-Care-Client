import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://evening-cove-89940.herokuapp.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an error')
                }
                return res.json()
            })
            .then(data => {
                if (data?.result?.modifiedCount> 0) {
                    toast.success('Make admin')
                    refetch()
                }
                console.log(data)

            })
    }
    return (
        <tr>

            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove user</button></td>
        </tr>
    );
};

export default UserRow;