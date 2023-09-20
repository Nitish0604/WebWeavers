import React from 'react'

import { Link } from "react-router-dom"
import Rewardsec from '../Components/Rewardsec';
import logoFinal from "../assets/logoFinal.png"
import ew8 from '../assets/envlogo11-1.png';
import Footer from '../Components/Footer';

// import Recard from '../Components/Recard';
const Rewards = () => {
    return (
        <div>
            <div className=''>
                <div >
                    <div className=' flex bg-[#edfbfd] opacity-1 z-10 fixed justify-between items-center w-full h-[55px] mx-auto px-2'>
                        {/* <div className='font-semibold'><Link to='/'>E-Swachh</Link></div> */}
                        <Link to="/">
                            <img className='h-[50px] ml-2' src={logoFinal} />
                        </Link>

                        <nav className="flex items-center mx-auto justify-between">
                            <ul className=" text-[#000000] flex gap-x-6 font-semibold">
                                {/* <img className='  w-20 h-14'
                            src={logo2} alt="Logo" width={50} height={15} loading="lazy">
                            </img>  */}
                                <li className=" hover:text-deepgreen hover:underline">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className=" hover:text-deepgreen hover:underline">
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li className="  hover:text-deepgreen hover:underline ">
                                    <Link to="/informatory">Informatory</Link>
                                </li>
                                <li className=" hover:text-deepgreen hover:underline ">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className=" hover:text-deepgreen hover:underline ">
                                    <Link to="/rewards">Rewards</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='flex flex-row-reverse justify-between items-center'>
                            <Link to="https://parivesh.nic.in/About.aspx">
                                <img
                                    className='text-black'
                                    src={ew8} alt="Logo" width={50} height={15} loading="lazy"></img>
                            </Link>
                            <Link to="https://parivesh.nic.in/About.aspx">
                                <h5 className=' text-[#000000] text-xs font-semibold'>Ministry of Environment , Forest<br />
                                    and Climate Change
                                </h5>
                            </Link>
                        </div>
                    </div>
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