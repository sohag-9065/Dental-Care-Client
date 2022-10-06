import React from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';
import cavity from '../../../../assets/images/cavity.png'
import fluoride from '../../../../assets/images/fluoride.png'
import whitening from '../../../../assets/images/whitening.png'
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';

const Services = () => {
    const serviceDetails = [
        {
            id: 1,
            img: fluoride,
            heading: "Fluoride Treatment",
            details: "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It's been an essential oral health treatment for decades."
        },
        {
            id: 2,
            img: cavity,
            heading: "Cavity Filling",
            details: "A cavity filling is when the dentist fills the opening in your tooth with some kind of material."
        },
        {
            id: 3,
            img: whitening,
            heading: "Teeth Whitening",
            details: "Teeth whitening involves bleaching your teeth to make them lighter."
        },
    ]
    return (
        <div>
            <h1 className="text-center mt-32 text-secondary text-xl font-bold">OUR SERVICES</h1>
            <h2 className='text-center text-4xl pt-2'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-center mx-auto mt-20'>
                {
                    serviceDetails.map(serviceDetail => <ServiceCart
                        key={serviceDetail.id}
                        serviceDetail={serviceDetail}
                    ></ServiceCart>)
                }
            </div>
            <div className="hero min-h-[80vh] ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                    <div className='pl-20'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;