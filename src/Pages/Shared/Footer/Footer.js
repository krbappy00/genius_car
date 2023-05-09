import React from 'react';
import footer_logo from '../../../assets/footer_logo.svg'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='w-full' data-aos="fade-up">
            <footer className="footer bg-black text-white p-20">
                <div className=''>
                    <img className='' src={footer_logo} alt=''></img>
                    <p>Edwin Diaz is a software and web <br/> technologies engineer, a life coach <br/>trainer who is also a serial .</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover">Branding </Link> 
                    <Link className="link link-hover">Design</Link> 
                    <Link className="link link-hover">Marketing</Link> 
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <Link className="link link-hover">About us</Link> 
                    <Link className="link link-hover">Contact</Link> 
                    <Link className="link link-hover">Jobs</Link> 
                    <Link className="link link-hover">Press kit</Link>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <Link className="link link-hover">Terms of use</Link> 
                    <Link className="link link-hover">Privacy policy</Link> 
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;