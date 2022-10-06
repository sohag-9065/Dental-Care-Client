import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../assets/images/footer.png'

const Footer = () => {

    return (
        // , width: "100%" , height: "100px"
        <div className='bg-auto bg-no-repeat bg-center' style={{ backgroundImage: `url(${footerBg})` }}>
            <footer className="footer p-16  " >
                <div>
                    <span className="footer-title">SERVICES</span>
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </footer>
            <p className='text-center pb-10'>Copyright 2022 All Rights Reserved</p>
        </div>
    );
};

export default Footer;