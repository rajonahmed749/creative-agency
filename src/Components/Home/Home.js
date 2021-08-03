import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Menubar from '../Shared/Menubar/Menubar';
import Header from './Header/Header';
import Commitment from './Our Commitment/Commitment';
import Services from './Our Services/Services';
import Subscripiton from './Subscription/Subscripiton';
import Testimonial from './Testimonial/Testimonial';
import Work from './Work/Work';


const Home = () => {
    return (
        <div>
            {/* <Menubar /> */}
            <h1 className="text-center"> WOW! Its working without build</h1>
            <Header />
            <Commitment />
            <Services />
            <Work />
            <Testimonial />
            <Subscripiton />
            <Footer />
        </div>
    );
};

export default Home;