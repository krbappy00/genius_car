import React from 'react';
import logo1 from '../../../assets/Contact logo/001-timetable.svg'
import logo2 from '../../../assets/Contact logo/Group 34.svg'
import logo3 from '../../../assets/Contact logo/Group 35.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div data-aos="zoom-in-up" className='flex justify-between border bg-black rounded-lg p-24'>
            <div data-aos="fade-right" className='flex items-center'>
                <div>
                    <img src={logo1} alt="" />
                </div>
                <div className='ml-4'>
                    <p className='text-white font-inter font-semibold mb-2'>We are open monday-friday</p>
                    <p className='text-white font-inter font-bold text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div data-aos="fade-up" className='flex items-center'>
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div className='ml-4'>
                    <p className='text-white font-inter font-semibold mb-2'>Have a question?</p>
                    <p className='text-white font-inter font-bold text-2xl'>+2546 251 2658</p>
                </div>
            </div>
            <div data-aos="fade-left" className='flex items-center'>
                <div>
                    <img src={logo3} alt="" />
                </div>
                <div className='ml-4'>
                    <p className='text-white font-inter font-semibold mb-2'>Need a repair? our address</p>
                    <p className='text-white font-inter font-bold text-2xl'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;