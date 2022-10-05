import React from 'react';

const InfoCard = ({ infoDetail }) => {
    const {img, details, heading, bgColor  } = infoDetail;
    return (
        <div className={`card lg:card-side  shadow-xl ${bgColor}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{heading}</h2>
                <p>{details}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;