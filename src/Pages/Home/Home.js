import React from 'react';
import About from '../About/About';
import Service from '../Service/Service';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Product from '../Product/Product';
import Team from '../TeamMember/Team';
import TeamCard from '../TeamMember/TeamCard';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
            <Product></Product>
            <TeamCard></TeamCard>
        </div>
    );
};

export default Home;