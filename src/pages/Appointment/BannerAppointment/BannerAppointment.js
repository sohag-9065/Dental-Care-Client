import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [dateC, setDateC] = useState(new Date());
    return (
        <div className="hero min-h-[90vh] bg-img-custom-tailwind px-12  "   >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='pr-16'>
                    <DayPicker 
                     mode="single"
                     selected={dateC}
                     onSelect={setDateC}
                    />
                    <p>You selected {format(dateC, 'PPP')}.</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;