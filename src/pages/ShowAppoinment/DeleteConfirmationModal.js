import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ deleteDoctor, setDeleteDoctor, refetch }) => {
    const { name, email } = deleteDoctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is delete.`);
                    setDeleteDoctor(null)
                    refetch();
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-500">Are you sure you want to delete Dr. {name}.</h3>
                    <p className="py-4">Delte from dental care.</p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs ">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmationModal;