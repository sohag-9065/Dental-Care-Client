import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'

const Testimonials = () => {
    const comments = [
        {
            id: 1,
            img: people1,
            name: "Brett Lee",
            location: "Australia",
            review: "Been blown away by how professional it is, the cleanliness, everything is sterilized. It's a wonderful centre. It's been a lot of fun to see the quality and the first class way that I have been treated."
        },
        {
            id: 2,
            img: people2,
            name: "Daisy Shah",
            location: "India",
            review: "Experienced one of the best Dental care services at Dentzz Dental. The clinic is bestowed with superior technology & prolific experts on board."
        },
        {
            id: 3,
            img: people3,
            name: "Soha Ali Khan",
            location: "India",
            review: "I was so conscious of my smile earlier, until I got my teeth done with these Magicians - Dr Shantanu and Karishma. I am so much more confident and I smile with ease now.The ambience at Dentzz is very relaxing and soothing, with the soft music playing in the background, its almost like being in a lounge, whilst I am being grilled, with no pain.The result – I am a new laughing Buddha, amongst my family and friends."
        }
    ]

    return (
       
        <section className='my-24 mx-12'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-xl text-secondary mb-5'>Testimonial</h1>
                    <h2 className='text-4xl font-semibold'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt=""  classNamse='h-48'/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 justify-items-center mt-20'>
                {
                    comments.map(comment => <TestimonialsCard
                    key={comment.id}
                    comment={comment}
                    ></TestimonialsCard>)
                }
                
            </div>
        </section>
    );
};

export default Testimonials;