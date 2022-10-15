import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServicesAvailable from '../ServicesAvailable/ServicesAvailable';
import { useQuery } from 'react-query'
import Loading from '../../../Shared/Loading/Loading';

const AvailableAppointments = ({ date }) => {
    const [serviceName, setServiceName] = useState("Teeth Orthodontics");
    const [serviceInfo, setServiceInfo] = useState({});

    const selectDate = format(date, 'PPP');

    const { data: services, isLoading , refetch } = useQuery(['available', selectDate], () =>
        fetch(`https://evening-cove-89940.herokuapp.com/available?date=${selectDate}`)
            .then(res => res.json())
    )

    useEffect(() => {
        const selectNewServiceInfo = services?.find(service => service.name === "Teeth Orthodontics");
        if (selectNewServiceInfo) {
            setServiceInfo(selectNewServiceInfo);
        }
    }, [services, date]);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleService = name => {
        setServiceName(name);
        const selectNewServiceInfo = services?.find(service => service.name === name);
        setServiceInfo(selectNewServiceInfo)
    }

    return (
        <div className='mx-12 mb-40 text-center'>
            <h1 className='text-2xl text-secondary   mt-20'>Available Services on {selectDate}</h1>
            <p className='text-2xl     mt-3'>Please select a service. Total Service: {services?.length}</p>
            <div className='grid grid-cols-3 mt-14 gap-7 text-secondary cursor-pointer'>
                {
                    services?.map(service => <div
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

            <h1 className='text-2xl text-secondary   my-20'>Available {serviceInfo?.slots?.length} slots for {serviceName} </h1>
            {
                Object.keys(serviceInfo)?.length && (
                    <ServicesAvailable
                        serviceInfo={serviceInfo}
                        serviceDate={selectDate}
                        refetch={refetch}
                    ></ServicesAvailable>
                )
            }
        </div>
    );
};

export default AvailableAppointments;