import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Menubar from '../Shared/Menubar/Menubar';
import Header from './Header/Header';
import Commitment from './Our Commitment/Commitment';
import Services from './Our Services/Services';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Menubar />
            <Header />
            <Commitment />
            <Services />
            <Testimonial />
            <Footer/>
        </div>
    );
};

export default Home;