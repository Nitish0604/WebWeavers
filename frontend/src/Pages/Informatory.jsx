import React from 'react'
import { Link } from 'react-router-dom';
import ew1 from '../assets/ewaste5-removebg-preview.png';
import ew2 from '../assets/ewaste2.png';
import logo from '../assets/Govlogo.png'
export const Informatory = () => {
  return (
    <div>
        <div className='flex bg-[#e6ab77] justify-between items-center w-[100vw] max-w-[1640px] h-[55px] mx-auto px-2'>
            <div className='font-semibold'><Link to='/'>E-Swacch</Link></div>
            <div className='font-bold'>INFORMATORY</div>
            <div className='flex flex-row-reverse justify-between items-center'>
                <Link to="#"> 
                    <img 
                    className='text-black'
                    src={logo} alt="Logo" width={50} height={15} loading="lazy"></img>
                </Link>
                <h5 className=' text-[#000000] text-xs font-semibold'>Ministry of Environment , Forest<br />
                    and Climate Change   
                </h5>
            </div>
        </div>
        <div className='bg-[#f4c8a2ab] mx-auto rounded-lg min-h-[100vh] px-8'>
          <p className='text-5xl pb-10 mx-10 pt-14'>Here's all you need to know about e-waste : </p>
          <div className='w-[95%] mx-auto flex flex-col space-y-7'>
            <div className='bg-[#f4f1ee] p-4 flex flex-row justify-center items-center rounded-xl w-full space-x-10'>
              <div className='py-2'>
                <img src={ew1} width={350} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%]'>
                <div className='text-4xl font-bold'>What is E-Waste?</div>
                <div className='pl-1 pt-2'>Electronic waste, or e-waste, encompasses items equipped with plugs, cords, and electronic components. Common origins of e-waste encompass televisions, computers, mobile phones, and a variety of household appliances, spanning from air conditioners to children's toys.The valuable metals like copper, silver, gold, and platinum can be reused from e-wastes once they are scientifically processed. The presence of toxic substances like liquid crystal, lithium, mercury, nickel, selenium, polychlorinated biphenyls (PCBs), arsenic, barium, brominates flame retardants, cadmium, chrome, cobalt, copper, and lead makes it very hazardous, in case e-waste get dismantled and processed in a crude manner with the rudimentary techniques. </div>
              </div>
            </div>
            <div className='bg-[#f4f1ee] p-4 flex flex-row-reverse justify-center items-center rounded-xl w-full'>
              <div className='py-2'>
                <img src={ew2} width={400} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%] pr-10 py-3'>
                <div className='text-4xl font-bold'>Why does it needs to be recycled?</div>
                <div className='pl-1 pt-2'>E-waste must be recycled primarily to prevent environmental harm. Electronic devices contain hazardous materials that can pollute soil and water if disposed of improperly. Recycling recovers valuable resources like metals and reduces the energy required for manufacturing, lowering carbon emissions. It also lessens the strain on landfills, extending their lifespan.<br/>
                Additionally, recycling e-waste can create jobs and support local economies. Complying with regulations ensures responsible disposal. Proper recycling prevents data breaches by securely erasing sensitive information. It promotes sustainability and aligns with the circular economy, reducing waste and environmental impact. Ultimately, recycling e-waste is a multifaceted solution with economic, environmental, and social benefits. </div>
              </div>
            </div>
          </div>
        </div>
        


    </div>
  )
}
