import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
    const { name, img, specialty } = doctor;

    
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
            <td>
                <label onClick={()=> setDeleteDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorRow;