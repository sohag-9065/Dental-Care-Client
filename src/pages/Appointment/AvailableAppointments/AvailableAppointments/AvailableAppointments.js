import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'; 
import ServicesAvailable from '../ServicesAvailable/ServicesAvailable';

const AvailableAppointments = ({ date }) => {
    const [serviceName, setServiceName] = useState("Teeth Orthodontics");
    const [serviceInfo, setServiceInfo] = useState({});
    const [services, setServices] = useState([]);

    const selectDate =  format(date, 'PPP') ;
     
    useEffect( ()=>{
        console.log(selectDate);
         fetch(`http://localhost:5000/available?date=${selectDate}`)
         .then(res => res.json())
         .then(data => setServices(data))
    },[selectDate])

    useEffect(() => {
        const selectNewServiceInfo = services?.find(service => service.name === "Teeth Orthodontics");
        // console.log(selectNewServiceInfo);
        if(selectNewServiceInfo){
            setServiceInfo(selectNewServiceInfo);
        }
    }, [services, date]);

    const handleService = name => {
        setServiceName(name);
        const selectNewServiceInfo = services?.find(service => service.name === name);
        setServiceInfo(selectNewServiceInfo)
    }

    return (
        <div className='mx-12 mb-40 text-center'>
            <h1 className='text-2xl text-secondary   mt-20'>Available Services on {selectDate}</h1>
            <p className='text-2xl     mt-3'>Please select a service. Total Service: {services.length}</p>
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
                Object.keys(serviceInfo)?.length  && (
                    <ServicesAvailable
                        serviceInfo={serviceInfo}
                        serviceDate={selectDate}
                    ></ServicesAvailable>
                )
            }
        </div> 
    );
};

export default AvailableAppointments;