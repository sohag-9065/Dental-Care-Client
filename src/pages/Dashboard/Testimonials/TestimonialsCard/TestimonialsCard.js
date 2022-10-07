import React from 'react';

const TestimonialsCard = ({comment}) => {
    const {img, name, location, review,} = comment;
    // console.log(comment);
    return (
        
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <p>{review}</p>
            </div>
            <div className='flex items-center'>
                <figure className='m-7 border-secondary rounded-full border-4'>
                    <img src={img} alt="Shoes" className="rounded-xl p-1" />
                </figure>
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <h1>{location}</h1>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;