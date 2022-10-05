import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const Info = () => {
    const infoDetails = [
        {
            id: 1,
            img: `${clock}`,
            heading: "Opening Hours",
            bgColor: "bg-gradient-to-r from-secondary to-primary",
            details: "Opening hours time: 9AM to 9PM. Weekly off day: Tuesday"
        },
        {
            id: 2,
            img: `${marker}`,
            heading: "Visit our location",
            bgColor: "bg-accent",
            details: "Brooklyn, NY 10036, United States"
        },
        {
            id: 3,
            img: `${phone}`,
            heading: "Contact us now",
            bgColor: "bg-gradient-to-r from-secondary to-primary",
            details: "+000 123 456789"
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-center mx-auto'>
            {
                infoDetails.map(infoDetail => <InfoCard
                key={infoDetail.id}
                infoDetail={infoDetail}
                ></InfoCard>)
                }
        </div>
    );
};

export default Info;