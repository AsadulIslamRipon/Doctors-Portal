import React from 'react';
import Appointment from './MakeAppointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Submit from './Submit';
import Testimonials from './Testimonials';
import Treatment from './Treatment';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Submit></Submit>
            <Footer></Footer>
        </div>
    );
};

export default Home;