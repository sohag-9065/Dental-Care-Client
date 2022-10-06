import React from 'react';
import AppoinmentDashboard from '../AppoinmentDashboard/AppoinmentDashboard';
import Banner from '../Banner/Banner';
import Info from '../Info/Info/Info';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Dashboard = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppoinmentDashboard></AppoinmentDashboard>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Dashboard;