import React from 'react'

import { Link } from "react-router-dom"
import Rewardsec from '../Components/Rewardsec';
import Recard from '../Components/Recard';
const Rewards = () => {
  return (
    <div>
        <div>
                <div className='flex fixed  bg-[#edfbfd] justify-between overflow-x-hidden overflow-y-hidden items-center w-[100vw] max-w-[1640px]  mx-auto h-[60px]'>

                    <nav className='flex items-center mx-auto justify-between'>

                        <ul className=' text-[#000000] flex gap-x-6 font-semibold'>
                            {/* <img className='  w-20 h-14'
                            src={logo2} alt="Logo" width={50} height={15} loading="lazy">
                            </img>  */}
                            <li className=' hover:text-deepgreen hover:text-lg  hover:px-2'>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className='  hover:text-deepgreen hover:text-lg  hover:px-2 '>
                                <Link to="/informatory">Informatory</Link>
                            </li>
                            <li className=' hover:text-deepgreen hover:text-lg hover:px-2 '>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className=' flex  items-center justify-between '>
                        <div className=' mr-5  bg-[#d6f2f6]'>
                            <select className='w-36  font-semibold h-8 items-center px-3 bg-[#d6f2f6] '>
                                <option className='bg-[#d6f2f6] hover:bg-[#f4c8a2ab] '>English</option>
                                <option className='bg-[#d6f2f6] hover:bg-[#f4c8a2ab] '>Bengali</option>
                                <option className='bg-[#d6f2f6] hover:bg-[#f4c8a2ab] '>Bengali</option>
                                <option className='bg-[#d6f2f6] hover:bg-[#f4c8a2ab] '>Bengali</option>
                                <option className='bg-[#d6f2f6] hover:bg-[#f4c8a2ab] '>Bengali</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
          <div className=' absolute text-[33px] text-[#206955e2] font-semibold font-serif right-52 top-44'>CHECK THE EXPECTED COINS</div>
          <Rewardsec/>
          {/* <div>
              <h3 className='flex justify-center text-[40px] text-[#1a6350e2] font-semibold font-serif mt-'>REWARDS</h3>
          </div> */}
          <div>
              {/* <Recard/> */}
          </div>
 </div>
        
  )
}

export default Rewards;