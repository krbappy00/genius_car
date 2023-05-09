import React from 'react';
import about1 from '../../assets/images/about_us/person.jpg'
import about2 from '../../assets/images/about_us/parts.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='w-full flex mb-20 '>
            <div className='w-1/2 relative' data-aos="fade-right">
                <img className='rounded-lg w-4/5' src={about1} alt=''></img> 
                <img className='absolute border-8 border-white rounded-lg bottom-12 right-5 w-2/3' src={about2} alt=''></img>
            </div>
            <div className='ml-16' data-aos="fade-left">
                <h2 className='font-inter font-bold text-3xl text-default pb-8'>About us</h2>
                <h1 className='font-inter font-bold text-6xl pb-2'>We are qualified</h1>
                <h1 className='font-inter font-bold text-6xl pb-2'>& of experience</h1>
                <h1 className='font-inter font-bold text-6xl pb-2'>in this field</h1>
                <p className='font-inter mt-8 text-slate-500'>We offer full range of garage services<br />
                    to vehicle owners in Tucson.<br />
                    Our professionals know how to handle a wide range of car services.<br />
                    Whether you drive a passenger car or <br />
                    </p>
                    <p className='font-inter mt-4 text-slate-500'>medium sized truck or SUV, our mechanics strive to ensure that your vehicle will <br />
                    be performing at its best before leaving our car shop. <br />
                    Whether you drive a medium sized truck<br />
                    or passenger car or SUV,<br />
                    our mechanics strive to ensure.</p>
                <button className=" mt-8 font-semibold bg-default text-white rounded border-default p-4 w-40 font-inter text-default">Get More info</button>

            </div>
        </div>
    );
};

export default About;