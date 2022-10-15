import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, email, img, specialty } = doctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`,{
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is delete.`);
                refetch();
            }
            
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;