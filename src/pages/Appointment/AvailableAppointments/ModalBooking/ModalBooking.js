import React from 'react';

const ModalBooking = ({ serviceDate, seclectTime, setOpenModal }) => {

    const handleForm = event => {
        event.preventDefault();
        console.log("Hello");
        setOpenModal(false);
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

                                 
                                    <input type="text" value={serviceDate} className="input  mb-3 bg-info" readOnly />
                                    <input type="text" value={seclectTime} className="input  mb-3 bg-info" readOnly />
                                    <input type="text" placeholder="Full Name" className="input input-bordered mb-3" />
                                    <input type="text" placeholder="Phone Number" className="input input-bordered mb-3" />
                                    <input type="text" placeholder="Email" className="input input-bordered" />

                                    <label htmlFor="modalBooking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                    <input type="submit"  value="Submit" className='btn mt-6' />
                                 
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



