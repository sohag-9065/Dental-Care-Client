import React from 'react';
import AppoinmentDashboard from '../AppoinmentDashboard/AppoinmentDashboard';
import Banner from '../Banner/Banner';
import Info from '../Info/Info/Info';
import Services from '../Services/Services/Services';

const Dashboard = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppoinmentDashboard></AppoinmentDashboard>
        </div>
    );
};

export default Dashboard;