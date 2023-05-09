import React from 'react';
import { VscArrowRight } from "react-icons/vsc";

const NextArrow = (props) => {
    const { onClick } = props;


    return (
        <div onClick={onClick} >
            <button className="transition ease-in-out hover:translate-x-1 absolute  top-[50%] right-0 bg-default text-white w-12 h-12 rounded-full">
                <VscArrowRight className='w-8 h-8 mx-auto'></VscArrowRight>
            </button>
        </div>
    );
};

export default NextArrow;