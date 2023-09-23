import React from "react";
import ew1 from '../assets/ewaste1-1.png';
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai';
function Pickup(){
    return(
        <div className="w-full bg-[#f7f9e9] py-10">
            <div className='w-[70%] mx-auto flex space-x-20 items-center '>
            <div>
                <img src={ew1} width={300}></img>
            </div>
            <div className='flex flex-col space-y-4'>
                <div className='text-4xl font-bold'>Schedule a pick-up for your e-waste!</div>
                <div>
                <Link to="/pickupForm">
                <button className='flex items-center space-x-1 px-4 py-2 rounded-full font-bold bg-[#55545442]' >
                    <div>Schedule now</div>
                    <div><AiOutlineArrowRight/></div>
                </button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Pickup;