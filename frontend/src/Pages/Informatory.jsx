import React from 'react'
import { Link } from 'react-router-dom'
export const Informatory = () => {
  return (
    <div>
        <div className='flex bg-[#e6ab77] content-center  justify-center overflow-x-hidden  overflow-y-hidden items-center w-[100vw] max-w-[1640px] mx-auto'>
            <nav className='py-3 font-semibold'>
                <ul className=' text-[#000000] flex gap-x-6'>
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
          </div>
        <p className='bg-[#f5ece3d8] mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum magnam cum aut dolorem maxime velit in harum tempore deserunt esse eaque, excepturi molestiae! Natus, numquam sunt adipisci repellat ea omnis, doloremque recusandae officiis eos nesciunt atque dolorum ullam placeat? Minus blanditiis nam ut necessitatibus minima? Quidem sed eum consequuntur error, a molestias laborum adipisci dolore quasi, accusantium ducimus minima assumenda!</p>
    </div>
  )
}
