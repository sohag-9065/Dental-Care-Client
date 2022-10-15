import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(false);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>Manage Doctors {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}

                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <DeleteConfirmationModal
                    deleteDoctor={deleteDoctor}
                    setDeleteDoctor={setDeleteDoctor}
                    refetch={refetch}
                >
                </DeleteConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;