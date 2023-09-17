import React from 'react'
import ewmap from '../assets/ewaste-map1.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
function Locate() {
    // const navigate=useNavigate();
    // function openMap(){ 
    //     navigate('/map');
    // } onClick={openMap}
  return (
    <div className='w-[80%] mx-auto flex space-x-10 items-center '>
        <div>
            <img src={ewmap} width={500}></img>
        </div>
        <div className='flex flex-col space-y-4'>
            <div className='text-4xl font-bold'>Locate your nearest e-waste facility!</div>
            <div>
            {/* <Link to="/map"> */}
            <button className='flex items-center space-x-1 px-4 py-2 rounded-full font-bold bg-[#55545442]' >
                <div>Find now</div>
                <div><AiOutlineArrowRight/></div>
            </button>
            {/* </Link> */}
            </div>
        </div>
    </div>
  )
}
export default Locate