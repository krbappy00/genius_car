import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { SocialIcon } from 'react-social-icons';



const TeamCard = () => {

    
    const [member, setMember] = useState();
    useEffect(() => {
        fetch('https://genius-cars-service.onrender.com/teams')
            .then(res => res.json())
            .then(data=>setMember(data))
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow></NextArrow>,
        prevArrow: <PrevArrow></PrevArrow>,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className='mb-16'>
            <h2 className='font-inter font-bold text-3xl text-default pb-8 text-center'>Team Member</h2>
            <h1 className='font-inter font-bold text-6xl text-center pb-2'>Meet Our Team</h1>
            <p className='text-center font-inter mt-4 mb-8 text-slate-500'>Serving you with the best
                Backed by the professionals, best among all the garage engineers.
                As a supervisor, you will get the finest mechanical and automobile engineers.
               <br/> With an unmatched experience of the past 30 years,
                we have catered to various clients.</p>
                <Slider className=' border relative' {...settings}>
                    {
                        member?.map(m =>
                            <>
                                <div className='w-[450px] h-[600px] border hover:border-2 hover:border-default rounded-lg '>
                                    <img className='rounded-lg' src={m.img_url} alt="" />
                                    <div className='mt-16'>
                                        <h1 className='text-center mt-8 text-3xl font-inter font-bold '>{m.name}</h1>
                                        <h1 className='text-center mt-2 text-2xl font-inter font-bold text-slate-500'>{m.designation}</h1>
                                        <div className='flex justify-center'>
                                            <SocialIcon className='m-4' network="twitter" />
                                            <SocialIcon className='m-4' network="facebook" />
                                            <SocialIcon className='m-4' network="instagram" />
                                            <SocialIcon className='m-4' network="linkedin" />
                                            <SocialIcon className='m-4' network="github" />
                                        </div>
                                    </div>
                                </div>
                                
                            </>
                            )
                    }
                </Slider>
        
        </div>
  );
};

export default TeamCard;