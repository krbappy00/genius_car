import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Product = () => {
    const [p, setP] = useState();
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch('https://genius-cars-service.onrender.com/products') 
            .then(res => res.json())

            .then(data=>setP(data))
    }, [])
    
    return (
      <div className=" mt-16">
        <h2 className="font-inter font-bold text-3xl text-default pb-8 text-center">
          Popular Products
        </h2>
        <h1 className="font-inter font-bold text-6xl text-center pb-2">
          Browse Our Product
        </h1>
        <p className="text-center font-inter mt-4 text-slate-500">
          Serving you with the best Backed by the professionals, best among all
          the garage engineers. As a supervisor, you will get the finest
          mechanical and automobile engineers.
          <br /> With an unmatched experience of the past 30 years, we have
          catered to various clients.
        </p>
        <div className="lg:grid lg:grid-cols-4 gap-4 my-8 sm:grid-cols-1 md:grid-cols-3 ">
          {show ? (
            <>
              {p?.map((pr) => (
                <div
                  key={pr._id}
                  className="w-[364px] border rounded-lg mx-auto shadow-md"
                >
                  <div className="bg-img_bg rounded-lg m-6 mx-auto w-[314px] h-[314px] overflow-hidden">
                    <Link to={`/checkout/product/${pr._id}`}>
                      <img className="" src={pr.img_url} alt="" />
                    </Link>
                  </div>
                  <div className="justify-end">
                    <div className="flex justify-center">
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                    </div>

                    <h2 className="font-bold text-dark02 font-inter text-center text-2xl ">
                      {pr.name}
                    </h2>
                    <h3 className="text-center font-inter font-bold text-2xl text-default mb-2">
                      ${pr.price}
                    </h3>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {p?.slice(0, 8).map((pr) => (
                <div
                  key={pr._id}
                  className="w-[364px] border rounded-lg mx-auto shadow-md"
                >
                  <div className="bg-img_bg rounded-lg m-6 mx-auto w-[314px] h-[314px] overflow-hidden">
                    <Link to={`/checkout/product/${pr._id}`}>
                      <img className="" src={pr.img_url} alt="" />
                    </Link>
                  </div>
                  <div className="justify-end">
                    <div className="flex justify-center">
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                      <HiStar className="font-bold text-2xl text-default "></HiStar>
                    </div>

                    <h2 className="font-bold text-dark02 font-inter text-center text-2xl ">
                      {pr.name}
                    </h2>
                    <h3 className="text-center font-inter font-bold text-2xl text-default mb-2">
                      ${pr.price}
                    </h3>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setShow(!show)}
            className="text-center mb-16 border font-semibold hover:bg-default hover:text-white rounded border-default p-4 w-44 font-inter text-default mt-4"
          >
            {show ? "Less Product" : "More Product"}
          </button>
        </div>
      </div>
    );
};

export default Product;