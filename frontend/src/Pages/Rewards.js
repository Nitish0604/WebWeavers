import React from 'react'

import { Link } from "react-router-dom"
import Rewardsec from '../Components/Rewardsec';
import logoFinal from "../assets/logoFinal.png"
import ew8 from '../assets/envlogo11-1.png';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

// import Recard from '../Components/Recard';
const Rewards = () => {
    return (
        <div>
            <div className=''>
                <div >
                  <Navbar/>
                </div>

                <div className=' absolute text-[33px] text-[#206955e2] font-semibold font-serif right-52 top-44'>CHECK THE EXPECTED COINS</div>
                <Rewardsec />
            </div>
            <div className='pt-10'>
                <Footer />
            </div>
        </div>
    )
}

export default Rewards;