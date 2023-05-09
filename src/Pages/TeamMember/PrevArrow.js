import React from 'react';
import { VscArrowLeft } from "react-icons/vsc";


const PrevArrow = (props) => {
    const { onClick } = props;

    return (
        <div onClick={onClick} >
            <button className="transition ease-in-out hover:translate-x-1 absolute mr-8 top-[50%] z-10 left-0 bg-default text-white w-12 h-12 rounded-full">
                <VscArrowLeft className='w-8 h-8 mx-auto'></VscArrowLeft>
            </button>
        </div>
    );
};

export default PrevArrow;