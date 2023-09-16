import React from 'react'
import logo from "../assets/Govlogo.png"

import { Link } from "react-router-dom"
const Navbar = (props) => {
    // 33363b 3a5985
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between bg-[#d09e72] items-center w-[100vw] max-w-[1640px] h-[50px] px-2'>
                <div className='flex flex-row items-center'>
                    <Link to="/">
                        <img
                            className=' text-black mt-1'
                            src={logo} alt="Logo" width={25} height={10} loading="lazy" ></img>
                    </Link>
                    <h5 className=' text-[#000000] text-xs font-semibold ml-2'> Ministry of Environment , Forest<br />
                        and Climate Change
                    </h5>
                </div>
                {/* bfbfbf  a2a2a2 6185ca    ccae92ab */}
            </div>
            <div>
                <div className='flex bg-[#f4c8a2ab] justify-between items-center w-[100vw] max-w-[1640px]  mx-auto h-[60px]'>
                <nav className='flex items-center mx-auto justify-between'>
                    <ul className=' text-[#000000] flex gap-x-6 font-semibold'>
                        {/* <img className='  w-20 h-14'
                            src={logo2} alt="Logo" width={50} height={15} loading="lazy">
                            
                            </img> */}
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/informatory">Informatory</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className=' flex  items-center justify-between'>
                        <div>
                            <button> Login</button>
                            </div>
                        <div >
                            <select className='w-36'>
                                <option>English</option>
                                <option>Bengali</option>
                                <option>Bengali</option>
                                <option>Bengali</option>
                                <option>Bengali</option>
                            </select>
                        </div>
                    </div>     
                </div>
                </div>  
        </div>
    )
}
export default Navbar;