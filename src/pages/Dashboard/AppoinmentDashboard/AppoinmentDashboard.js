import React from 'react';
import doctorSmall from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const AppoinmentDashboard = () => {

    
    return (
        <div className="hero relative h-[540px] px-12 mt-40"  style={{backgroundImage: `url(${appointment})`}} >
            <div className="hero-content flex-col lg:flex-row absolute bottom-0 pb-0">
                <img src={doctorSmall} className=" rounded-lg " alt=''/>
                <div className='text-white pr-12 pt-20'>
                    <h1 className='font-bold text-xl text-secondary mb-5'>Appoinment</h1>
                    <h2 className="text-4xl font-semibold">Make an appointment Today</h2>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white font-semibold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentDashboard;