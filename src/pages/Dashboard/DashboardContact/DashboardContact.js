import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const DashboardContact = () => {
    return (
        <section className="hero py-16    mt-40" style={{ backgroundImage: `url(${appointment})` }} >
            
            <div className="card   w-full max-w-md  ">
                <div className="card-body">
                    <div className='text-center'>
                        <h1 className='font-bold text-xl text-secondary mb-2'>Contact Us</h1>
                        <h2 className="text-4xl font-semibold mb-10 text-white">Stay connected with us</h2>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Email" className="input input-bordered mb-5" />
                        <input type="text" placeholder="Subject" className="input input-bordered mb-5" />
                        <textarea name="address" placeholder="Your message" id="address" cols="30" rows="5" className='p-3 rounded-2xl'></textarea>
                    </div>
                    <div className="text-center mt-6">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardContact;