import React from 'react';
import ServiceCard from './ServiceCard';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Service = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='mb-12' data-aos="fade-up">
            <div className='mb-12'>
                <h2 className='font-inter font-bold text-3xl text-default pb-4 text-center'>Service</h2>
                <h1 className='font-inter font-bold text-6xl text-center pb-2'>Our Service Area</h1>
                <p className='font-inter mt-4 text-slate-500 text-center pb-4'>
                    When it comes to car service centers in Bangladesh, <br/>
                    there are a plethora of options to choose from. From small,<br/>
                    family-owned shops to large, established centers, the options are endless.<br/>
                    But with so many choices, it can be difficult to know which service center<br/>
                    will provide the best service. That’s where this guide comes in!</p>
            </div>
            <div>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Service;