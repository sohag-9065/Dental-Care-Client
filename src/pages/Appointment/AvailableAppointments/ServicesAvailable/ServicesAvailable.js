import React, { useState } from 'react';
import ModalBooking from '../ModalBooking/ModalBooking';

const ServicesAvailable = ({ serviceInfo, serviceDate }) => {
    const { _id, slots, name } = serviceInfo;
    // const [seclectTime, setSelectTime] = useState("");
    const [slottTime, setSlotTime] = useState("");
    const [openModal, setOpenModal] = useState(false);




    const handleTime = slot => {
        setSlotTime(slot)
        setOpenModal(true);
        // const dateAndTime = new Date();
        // let time = dateAndTime.toLocaleTimeString();
        // setSelectTime(time);
    }

    // console.log(seclectTime);
    return (
        <div className='grid grid-cols-3  gap-7 '>
            {
                !(slots.length) ? <h1 className='col-span-3  text-4xl font-semibold'>Not Available Slot</h1> : (
                    slots.map((slot, index) => <div
                        key={index}
                        className='py-10 shadow-lg rounded-xl'>

                        <h1 className=' text-secondary font-semibold mb-3'>{name}</h1>
                        <p className='mb-10'>{slot}</p>
                        <label
                            onClick={() => handleTime(slot)}
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
                    _id={_id}
                    name={name}
                    slottTime={slottTime}
                    serviceDate={serviceDate}
                    setOpenModal={setOpenModal}
                ></ModalBooking>
            }

        </div >
    );
};

export default ServicesAvailable;