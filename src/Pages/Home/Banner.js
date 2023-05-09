import React, { useState } from 'react';
import { VscArrowLeft,VscArrowRight } from "react-icons/vsc";
import slide1 from '../../assets/images/banner/1.jpg'
import slide2 from '../../assets/images/banner/2.jpg'
import slide3 from '../../assets/images/banner/3.jpg'
import slide4 from '../../assets/images/banner/4.jpg'
import slide5 from '../../assets/images/banner/5.jpg'
import slide6 from '../../assets/images/banner/6.jpg'
import './Banner/banner.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh();
    }, []);


    const [currentIndex,setCurrentIndex] = useState(0)
    const slide = [slide1, slide2, slide3, slide4, slide5, slide6]
    const handleSliderLeft = () => {
        if (currentIndex === 0) {
            const newIndex = slide.length - 1;
            setCurrentIndex(newIndex)
        } else {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex)
        }
    }
    const handleSliderRight = () => {
        if (currentIndex === 5) {
            const newIndex = slide.length - 6;
            setCurrentIndex(newIndex);
        } else {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
        }
    }
    return (
        <div className='h-600 w-full mb-20 truncate relative rounded-lg ' data-aos="zoom-in-down">
            <div className='img' >
                <img className='' src={slide[currentIndex]} alt=''></img>
            </div>
            <div className='absolute top-32 left-20'>
                <p className='font-inter font-bold text-white text-6xl pb-4'>Affordable </p>
                <p className='font-inter font-bold text-white text-6xl pb-4'> Price For Car</p>
                <p className='font-inter font-bold text-white text-6xl pb-4'>Servicing</p>
                <p className='font-inter text-white font-normal text-lg pb-4'>There are many variations of passages of  available, but<br/> the majority have suffered alteration in some form</p>

                <button className="hover:border hover:border-white font-semibold bg-default text-white rounded border-default p-4 w-44 font-inter text-default">Discover More</button>
                <button className="border border-white font-semibold bg-transparent text-white rounded border-default p-4 ml-4 w-44 font-inter text-default">Latest Project</button>
            </div>

            <button onClick={handleSliderLeft} className="transition ease-in-out hover:-translate-x-1 absolute top-3/4 right-44 bg-default text-white w-12 h-12 rounded-full">
                <VscArrowLeft className='w-8 h-8 mx-auto'></VscArrowLeft>
            </button>
            <button onClick={handleSliderRight} className="transition ease-in-out hover:translate-x-1 absolute mr-8 top-3/4 right-10 bg-default text-white w-12 h-12 rounded-full">
                <VscArrowRight className='w-8 h-8 mx-auto'></VscArrowRight>
            </button>
        </div>
        
    );
};

export default Banner;