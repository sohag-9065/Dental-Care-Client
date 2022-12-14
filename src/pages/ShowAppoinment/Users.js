import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {

    // console.log(localStorage.getItem('accessToken'));
    const { data: users, isLoading , refetch } = useQuery('users', () => fetch('https://evening-cove-89940.herokuapp.com/user',{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => res.json()), );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>All Users {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;