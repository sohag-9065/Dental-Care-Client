import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesAvailable from '../ServicesAvailable/ServicesAvailable';

const AvailableAppointments = ({ date }) => {
    const [serviceName, setServiceName] = useState("Teeth Orthodontics");
    const [serviceInfo, setServiceInfo] = useState({});
    const [serviceDate, setServiceDate] = useState('');
    const services = useLoaderData();

    useEffect(() => {
        const selectNewServiceInfo = services.find(service => service.name === "Teeth Orthodontics");
        setServiceInfo(selectNewServiceInfo)
        setServiceDate(format(date, 'PPP'))
    }, [services, date]);

    const handleService = name => {
        setServiceName(name);
        const selectNewServiceInfo = services.find(service => service.name === name);
        setServiceInfo(selectNewServiceInfo)
    }

    return (
        <div className='mx-12 mb-40 text-center'>
            <h1 className='text-2xl text-secondary   mt-20'>Available Services on {serviceDate}</h1>
            <p className='text-2xl     mt-3'>Please select a service.</p>
            <div className='grid grid-cols-3 mt-14 gap-7 text-secondary cursor-pointer'>
                {
                    services.map(service => <div
                        key={service._id}
                    >
                        <h1
                            onClick={() => handleService(service.name)}
                            className='  py-10 shadow-lg rounded-xl font-semibold'>
                            {service.name}
                        </h1>
                    </div>)
                }
            </div>

            <h1 className='text-2xl text-secondary   my-20'>Available slots for {serviceName}</h1>
            {
                Object.keys(serviceInfo).length  && (
                    <ServicesAvailable
                        serviceInfo={serviceInfo}
                        serviceDate={serviceDate}
                    ></ServicesAvailable>
                )
            }
        </div>
    );
};

export default AvailableAppointments;