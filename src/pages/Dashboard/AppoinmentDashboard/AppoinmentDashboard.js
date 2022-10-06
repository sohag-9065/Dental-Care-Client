import React from 'react';
import doctorSmall from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const AppoinmentDashboard = () => {

    
    return (
        <div className="hero relative h-[540px] px-12 mt-40"  style={{backgroundImage: `url(${appointment})`}} >
            <div className="hero-content flex-col lg:flex-row absolute bottom-0 pb-0">
                <img src={doctorSmall} className=" rounded-lg " alt=''/>
                <div className='text-white pr-12 pt-20'>
                    <h1 className='font-bold text-xl text-secondary mb-5'>Appoinment</h1>
                    <h2 className="text-4xl font-semibold">Make an appointment Today</h2>
                    <p className="py-6">Each of our specialists is backed with extensive training and professional experience from across the world. We handpick our team through a detailed selection process to make sure you are always in the best hands.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentDashboard;