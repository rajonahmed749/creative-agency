import React from 'react';
import Menubar from '../Shared/Menubar/Menubar';
import Header from './Header/Header';
import Commitment from './Our Commitment/Commitment';
import Services from './Our Services/Services';


const Home = () => {
    return (
        <div>
            <Menubar />
            <Header/>
            <Commitment/>
            <Services/>
        </div>
    );
};

export default Home;