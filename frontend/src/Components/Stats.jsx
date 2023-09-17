import React from 'react'
import CountUp from 'react-countup';
import ew18 from '../assets/ewaste-head.png';
function Stats() {
  return (
    // b9ecf4ab
    <div className='w-full bg-[#edfbfd] min-h-[300px] '>
      <div className='w-[80%] h-full mx-auto flex flex-row items-center justify-between py-8'>
        <div className='flex flex-col w-[55%] justify-center items-center space-y-10'>
          <div className='flex flex-row w-full space-x-10'>
            {/* first  bg-[#f0fafb] bg-[#f4f1ee]*/}
            <div className='w-[50%] h-[150px] rounded-xl shadow-lg border flex flex-col space-y-1 items-center justify-center'>
                <div className='font-semibold text-lg'>Number of Registered Users : </div>
                <div className='text-3xl font-bold text-center px-2'>20</div>
            </div>
            <div className='w-[50%] rounded-xl shadow-lg h-[150px] border flex flex-col space-y-1 items-center justify-center'>
                <div className='font-semibold text-lg text-center px-2'>Number of E-waste recycling facilities : </div>
                <div className='text-3xl font-bold text-center px-2'>20</div>
            </div>
          </div>
          <div className='w-[50%] h-[150px] rounded-xl shadow-lg border flex flex-col space-y-1 items-center justify-center'>
              <div className='font-semibold text-lg text-center px-2'>Kilograms of metal extracted : </div>
              <div className='text-3xl font-bold'>20</div>
          </div>
        </div>
        <div className=''>
          <img src={ew18} width={450} className=''></img>
        </div>
      </div>
    </div>
  )
}

export default Stats;