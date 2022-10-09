import React, { useState } from 'react';

const ServicesAvailable = ({ serviceInfo, serviceDate }) => {
    const { slots, name } = serviceInfo;
    const [seclectTime, setSelectTime] = useState("");




    const handleTime = () => {
        const dateAndTime = new Date();
        let time = dateAndTime.toLocaleTimeString();
        setSelectTime(time);
    }

    console.log(seclectTime);
    return (
        <div className='grid grid-cols-3  gap-7 '>
            {
                !(slots.length) ? <h1 className='col-span-3  text-4xl font-semibold'>Not Available Slot</h1> : (
                    slots.map(slot => <div
                        key={slot._id}
                        className='py-10 shadow-lg rounded-xl'>

                        <h1 className=' text-secondary font-semibold mb-3'>{name}</h1>
                        <p className='mb-10'>{slot.time}</p>
                        <label
                            onClick={handleTime}
                            htmlFor="my-modal-6"
                            className="btn modal-button bg-gradient-to-r from-secondary to-primary border-0 text-white">
                            Book Appointment
                        </label>

                    </div>)
                )

            }


            {/* Modal Show  */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="card flex-shrink-0 w-full  ">
                        <div className="card-body p-2">
                            <p className='text-left font-semibold text-xl mb-12'>Cavity Protection</p>
                            <div className="form-control">
                                <input type="text" value={serviceDate} className="input  mb-3 bg-info" readOnly />
                                <input type="text" value={seclectTime} className="input  mb-3 bg-info" readOnly />
                                <input type="text" placeholder="Full Name" className="input input-bordered mb-3" />
                                <input type="text" placeholder="Phone Number" className="input input-bordered mb-3" />
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control ">
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <label htmlFor="my-modal-6" className="btn w-full ">Submit</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ServicesAvailable;