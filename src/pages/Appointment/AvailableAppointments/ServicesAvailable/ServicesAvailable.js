import React, { useState } from 'react';
import ModalBooking from '../ModalBooking/ModalBooking';

const ServicesAvailable = ({ serviceInfo, serviceDate }) => {
    const { slots, name } = serviceInfo;
    const [seclectTime, setSelectTime] = useState("");
    const [openModal, setOpenModal] = useState(false);




    const handleTime = () => {
        const dateAndTime = new Date();
        let time = dateAndTime.toLocaleTimeString();
        setOpenModal(true);
        setSelectTime(time);
    }

    // console.log(seclectTime);
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
                            htmlFor="modalBooking"
                            className="btn modal-button bg-gradient-to-r from-secondary to-primary border-0 text-white">
                            Book Appointment
                        </label>

                    </div>)
                )

            }


            {/* Modal Show  */}
            {
                openModal
                &&
                <ModalBooking
                    serviceDate={serviceDate}
                    seclectTime={seclectTime}
                    setOpenModal={setOpenModal}
                ></ModalBooking>
            }

        </div >
    );
};

export default ServicesAvailable;