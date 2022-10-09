import React, { useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import AvailableAppointments from '../../AvailableAppointments/AvailableAppointments/AvailableAppointments';
import BannerAppointment from '../../BannerAppointment/BannerAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    
    return (
        <div>
            <BannerAppointment
                date={date}
                setDate={setDate}
            ></BannerAppointment>
            <AvailableAppointments
                date={date}
            ></AvailableAppointments>









            <Footer></Footer>
        </div>
    );
};

export default Appointment;