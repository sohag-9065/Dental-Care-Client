import React from 'react';

const ServiceCart = ({serviceDetail}) => {
    const {img, heading, details} =serviceDetail;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{heading}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCart;