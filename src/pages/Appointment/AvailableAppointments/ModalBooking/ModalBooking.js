import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';


const ModalBooking = ({ _id, name, slottTime, serviceDate, setOpenModal , refetch}) => {
    const [user] = useAuthState(auth);
    // console.log(user );

    const handleForm = event => {
        event.preventDefault();

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: serviceDate,
            slot: slottTime,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,

        }

        fetch('https://evening-cove-89940.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Success Appoinment !", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    refetch();
                    setOpenModal(false);
                }
                else {
                    toast.error("Already Booking This !", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                console.log(data);

            })
            
            event.target.reset();
        //  console.log("Booking Done");
        // console.log(booking);

    }
    return (
        <div>
            <input type="checkbox" id="modalBooking" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="card flex-shrink-0 w-full  ">
                        <div className="card-body p-2">
                            <p className='text-left font-semibold text-xl mb-12'>Cavity Protection</p>
                            <form onSubmit={handleForm} className="form-control">

                                <input type="text" name='date' value={serviceDate} className="input  mb-3 bg-info" readOnly />
                                <input type="text" name='slot' value={slottTime} className="input  mb-3 bg-info" readOnly />
                                <input type="text" name='name' value={user.displayName} className="input mb-3 bg-info" readOnly />
                                <input type="text" name='email' value={user.email} className="input mb-3 bg-info" readOnly />
                                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered mb-3" />

                                <label htmlFor="modalBooking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <input type="submit" value="Submit" className='btn mt-6' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <form onSubmit={handleForm} >

                <div className="form-control">
                    <input type="text" value={serviceDate} className="input  mb-3 bg-info" readOnly />
                    <input type="text" value={seclectTime} className="input  mb-3 bg-info" readOnly />
                    <input type="text" placeholder="Full Name" className="input input-bordered mb-3" />
                    <input type="text" placeholder="Phone Number" className="input input-bordered mb-3" />
                    <input type="text" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control ">
                    <div className="modal-action">
                        <label htmlFor="modalBooking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <label htmlFor="modalBooking" className="btn w-full ">Submit</label>
                    </div>
                </div>
            </form> */}
        </div>
    );
};

export default ModalBooking;



