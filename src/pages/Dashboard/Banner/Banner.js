import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
// import bgImg from '../../../assets/images/bg.png' ;

const Banner = () => {
    return (
        // <div className="hero min-h-screen px-12  "  style={{backgroundImage: `url(${bgImg})`}}>
        <div className="hero min-h-[90vh] bg-img-custom-tailwind px-12  "   >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='pr-16'>
                    <h1 className="text-5xl font-bold">Box Office News!Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;