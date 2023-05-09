import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className=''>
            <div className='w-4/5 mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div >
                <Footer></Footer>
            </div>
        </div>
        
        
    );
};

export default Main;