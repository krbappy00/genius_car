import React from 'react';
import banner from '../../assets/Rectangle 1539.svg';
import b2 from '../../assets/Rectangle 1540.svg'
import { Link, useLoaderData } from 'react-router-dom';
import { BiRightArrowAlt } from "react-icons/bi";
import f from '../../assets/Frame.svg';
import logo from '../../assets/Group 2 (1).svg';
import { useState } from 'react';

const ServiceDetails = () => {
    const  service  = useLoaderData();
    let names = ['BASIC SERVICE', 'MAJOR SERVICE', 'FULL SERVICE'];
    const re = names.filter(name => service.name !== name)
    
    return (
      <div>
        <div className="w-full mb-16 relative">
          <img className="w-full" src={banner} alt="" />
          <h2 className="rounded-t-xl text-xl bottom-0 right-[50%] p-3 absolute text-white font-inter bg-default">
            Service Details
          </h2>
        </div>
        <div className="w-full flex mb-8">
          <div className="w-[70%] ">
            <div className="h-[400px] overflow-hidden rounded-xl">
              <img className="w-full" src={b2} alt="" />
            </div>
            <div className="mt-12">
              <h1 className="font-bold font-inter text-4xl">{service.name}</h1>
              <p className="mt-8 font-inter text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                alteration in some form, by injected humour, or randomised words
                which don't look even
                <br />
                alteration in some form, by injected humour, or randomised words
                which don't look even alteration in some form, by injected
                humour, or randomised words which don't look even
                <br />
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there <br />
                isn't anything embarrassing hidden in the middle of text.{" "}
              </p>
            </div>
            <div>
              <div className="flex mt-4 mb-4">
                <div className="bg-neutral-200 p-8 w-[50%] mr-2 text-center rounded-xl border-t-8 border-t-default">
                  <h2 className="font-inter font-bold text-2l">
                    {service.facility[0].name}
                  </h2>
                  <p className="font-inter text-xl mt-2">
                    It uses a dictionary of over 200
                    <br /> Latin words, combined with a model <br />
                    sentence structures.
                  </p>
                </div>
                <div className="bg-neutral-200 p-8 w-[50%] ml-2 text-center rounded-xl border-t-8 border-t-default">
                  <h2 className="font-inter font-bold text-2l">
                    {service.facility[1].name}
                  </h2>
                  <p className="font-inter text-xl mt-2">
                    It uses a dictionary of over 200
                    <br /> Latin words, combined with a model <br />
                    sentence structures.
                  </p>
                </div>
              </div>
              <div className="flex mt-4 mb-4">
                <div className="bg-neutral-200 p-8 w-[50%] mr-2 text-center rounded-xl border-t-8 border-t-default">
                  <h2 className="font-inter font-bold text-2l">
                    {service.facility[2].name}
                  </h2>
                  <p className="font-inter text-xl mt-2">
                    It uses a dictionary of over 200
                    <br /> Latin words, combined with a model <br />
                    sentence structures.
                  </p>
                </div>
                <div className="bg-neutral-200 p-8 w-[50%] ml-2 text-center rounded-xl border-t-8 border-t-default">
                  <h2 className="font-inter font-bold text-2l">
                    {service.facility[3].name}
                  </h2>
                  <p className="font-inter text-xl mt-2">
                    It uses a dictionary of over 200
                    <br /> Latin words, combined with a model <br />
                    sentence structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] ml-8">
            <div className="bg-neutral-200 rounded-lg p-8">
              <h1 className="font-bold font-inter text-2xl text-center">
                Services
              </h1>

              <div className="flex rounded justify-between p-4 mt-4 bg-default text-white">
                <h1 className="font-bold font-inter text-lg ml-4">
                  {service.name}
                </h1>
                <BiRightArrowAlt className="text-3xl mr-4"></BiRightArrowAlt>
              </div>
              <Link to='/services'>
                <div className="flex bg-white rounded justify-between p-4 mt-4 hover:bg-default hover:text-white">
                  <h1 className="font-bold font-inter text-lg ml-4">{re[0]}</h1>
                  <BiRightArrowAlt className="text-3xl mr-4"></BiRightArrowAlt>
                </div>
              </Link>
              <Link to='/services'>
                <div className="flex bg-white rounded justify-between p-4 mt-4 hover:bg-default hover:text-white">
                  <h1 className="font-bold font-inter text-lg ml-4">{re[1]}</h1>
                  <BiRightArrowAlt className="text-3xl mr-4"></BiRightArrowAlt>
                </div>
              </Link>

            
            </div>
            <div className="mt-8 bg-black p-8 rounded-lg">
              <h1 className="font-bold font-inter text-2xl text-white rounded-lg text-center">
                Download
              </h1>
              <div className="flex mt-8 justify-between hover:cursor-pointer">
                <div className="flex items-center">
                  <div>
                    <img className="w-[45px] h-[45px] mr-1" src={f} alt="" />
                  </div>
                  <div>
                    <h1 className="text-white font-inter font-bold">
                      Package Information
                    </h1>
                    <p className="font-inter text-slate-300	">Download</p>
                  </div>
                </div>
                <div className="bg-default p-2 rounded">
                  <BiRightArrowAlt className="text-white text-3xl"></BiRightArrowAlt>
                </div>
              </div>
              <div className="flex mt-4 justify-between hover:cursor-pointer">
                <div className="flex items-center">
                  <div>
                    <img className="w-[45px] h-[45px] mr-1" src={f} alt="" />
                  </div>
                  <div>
                    <h1 className="text-white font-inter font-bold">
                      Company Details
                    </h1>
                    <p className="font-inter text-slate-300	">Download</p>
                  </div>
                </div>
                <div className="bg-default p-2 rounded">
                  <BiRightArrowAlt className="text-white text-3xl"></BiRightArrowAlt>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-lg mt-8 p-24 relative">
              <div className="">
                <img className="mx-auto" src={logo} alt="" />
              </div>
              <div>
                <h1 className="font-inter font-bold text-2xl text-white text-center mt-8">
                  Need Help? We Are Here <br />
                  To Help You
                </h1>
              </div>
              <div className="bg-white rounded-lg pb-8">
                <h1 className="font-inter font-bold text-2xl  text-center mt-8 p-8">
                  <span className="text-default">Car Genius</span> Special{" "}
                  <br />
                  <span className="text-sm">Save Up To</span>{" "}
                  <span className="text-default text-xl">60% OFF</span>
                </h1>
              </div>
              <div className="bg-default p-4 rounded-lg w-2/5 mx-auto mb-8 absolute top-[81%] right-[29%]">
                <h2 className="text-xl text-center text-white">Get A Quote</h2>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-3xl font-inter font-extrabold">
                Price:${service.price}
              </h1>
            </div>
            <Link to={`/checkout/${service._id}`}>
              <div className="bg-default p-4 rounded-lg mx-auto mb-8 mt-2 flex justify-center">
                <h2 className="text-xl text-center font-inter text-white">
                  Proceed Checkout
                </h2>
                <BiRightArrowAlt className="text-3xl ml-2 text-white"></BiRightArrowAlt>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;