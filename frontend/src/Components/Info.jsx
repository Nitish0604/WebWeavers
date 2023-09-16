import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai';
function Info() {
  return (
    <div className='w-[90%] mx-auto mt-10'>
        {/* heading  */}
        <div>
            <div className='text-3xl font-bold'>Myths about E-waste : </div>
            <div className='w-52 h-1 bg-[#d09e72] mt-1'></div>
        </div>
        {/* flip cards  */}
        <div className='flex flex-row space-x-10 mt-8'>
            {/* flip card 1 */}
            <div className='flip-card'>
                <div class="flip-card-inner shadow-xl">
                    <div class="flip-card-front  bg-[#c1e9e9] flex items-center justify-center">
                        <div className='text-xl font-bold px-2'> Only Large Electronic Devices Such as Computers and TVs are worth Recycling?</div>
                    </div>
                    <div class="flip-card-back bg-[#c2fdfd] flex items-center justify-center">
                        <p className='font-semibold px-2'>A lot of us have this misconception that small devices are not worth recycling as they are so small. But in reality, it is the opposite.
                        The small components of such devices use a lot of toxic chemicals, which should be prevented from ending up at landfills at all costs</p>
                    </div>
                </div>
            </div>
            {/* flipcard2 */}
            <div className='flip-card'>
                <div class="flip-card-inner shadow-xl">
                    <div class="flip-card-front bg-[#e7d2e5] flex items-center justify-center">
                        <div className='text-xl font-bold px-2'> Electronic Recycling Wastes a lot of Resources and Energy?</div>
                    </div>
                    <div class="flip-card-back bg-[#fdccf8] flex items-center justify-center">
                        <p className='font-semibold px-2'>This is one of the biggest myths when it comes to e-waste management. But in reality, recycling old electronic devices helps us recover and recycle a lot of valuable metals.
                        This makes e-waste recycling and e-waste management in India especially important because India imports a lot of its metals.</p>
                    </div>
                </div>
            </div>
            {/* flipcard3 */}
            <div className='flip-card'>
                <div class="flip-card-inner shadow-xl">
                    <div class="flip-card-front bg-[#e9ebc4] flex items-center justify-center">
                        <div className='text-xl font-bold px-2'> Recycling Electronic Devices Can Lead to Data Theft? </div>
                    </div>
                    <div class="flip-card-back bg-[#f8fbbe] flex items-center justify-center">
                        <p className='font-semibold px-2'>This is actually a very legitimate concern and there have been a lot of instances where people have fallen prey to data theft when they gave their electronic devices for recycling.
                        But today, we have ITAD companies, which stand for IT Asset Disposal. They help you not only safely wipe out your data but also help you in safely disposing of/ recycling your electronic devices.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* learn more button  */}
        <div className='my-12 flex justify-center'>
            <Link to='/informatory'><button className='flex items-center space-x-1 px-4 py-2 rounded-full font-bold bg-[#55545442]'>
                <div>Learn More </div>
                <div className='font-bold'><AiOutlineArrowRight/></div>
            </button></Link>
        </div>
    </div>
  )
}
export default Info;