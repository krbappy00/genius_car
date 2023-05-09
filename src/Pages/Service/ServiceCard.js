import React from 'react';
import '../Service/service.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://genius-cars-service.onrender.com/services')
            .then((res) => res.json())
            .then(data => {
            setService(data);
        })
            
    
    }, [])
    
    
    
    const first = (service[0]);
    const second = (service[1]);
    const third = (service[2]);
    
     
    
    
     
            
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='lg:flex lg:justify-center  sm:flex-none'>   
            <div data-aos="fade-right" className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">BASIC SERVICE</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">199</span>
                </div>
                <ul className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Collection & Delivery</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">360 Degree Health Check</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Car Wash</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Tyre Check & Air Pressure</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Filter Replacement (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Change (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Air Filter Replacement (Labour)</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Brake Check</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Windscreen Washer Fluid</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Power Steering Fluid</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">AC Checkup</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Filter</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Air Filter</span>
                    </li>
                </ul>
                <Link to={`/service/${first && first._id}`}><button type="button" className="text-white bg-default focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button></Link>
            </div>

            {/* STANDARD PACKAGES */}
            <div data-aos="fade-up" className="w-full relative max-w-sm p-4 lg:mr-8 lg:ml-8 border border-gray-200 rounded-lg shadow-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="ribbon ribbon-top-right"><span>Most Popular</span></div>

                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">MAJOR SERVICE</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">499</span>
                </div>
                <ul className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Collection & Delivery</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">360 Degree Health Check</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Car Wash</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Tyre Check & Air Pressure</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Filter Replacement (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Change (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Air Filter Replacement (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Brake Check</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Windscreen Washer Fluid</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Power Steering Fluid</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">AC Checkup</span>
                    </li>

                    {/* ------------------NOT PROVIDED----------- */}

                    <li className="flex space-x-3 ">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Filter</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Air Filter</span>
                    </li>
                </ul>
                <Link to={`/service/${second && second._id}`}><button type="button" className="text-white bg-default focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button></Link>
            </div>
            <div data-aos="fade-left" className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">FULL SERVICE</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">349</span>
                </div>
                <ul className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Collection & Delivery</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">360 Degree Health Check</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Car Wash</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Tyre Check & Air Pressure</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Filter Replacement (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Change (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Air Filter Replacement (Labour)</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Brake Check</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Windscreen Washer Fluid</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Power Steering Fluid</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-default" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">AC Checkup</span>
                    </li>

                    {/* ------------------NOT PROVIDED----------- */}

                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Oil Filter</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Air Filter</span>
                    </li>
                </ul>
                <Link to={`/service/${third && third._id}`}><button type="button" className="text-white bg-default focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button></Link>
            </div>

        </div>
    );
};

export default ServiceCard;