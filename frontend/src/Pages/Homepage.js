import React from 'react'
import Navbar from "../Components/Navbar"
import Info from '../Components/Info';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../Components/variants';
import pic4 from "../assets/leaf1.webp"
import pic5 from "../assets/ewastelogo.png"
import pic6 from "../assets/circle1.png"
import Flowchart from '../Components/Flowchart';
import Stats from '../Components/Stats';
import Footer from '../Components/Footer';
import { useToast } from '@chakra-ui/react';
// import ScrollText from '../Components/ScrollText';
import data from '../Components/data';
import Locate from '../Components/Locate';
import Pickup from '../Components/Pickup';
import { useEffect } from 'react';
function Home(props) {

  return (
    <div>
      <div className='flex flex-col'>
        <div>
          <Navbar />
        </div>
        <div className='min-h-[100vh] overflow-hidden'>
          {/* edfbfd b4eced9d */}
          <div className=' absolute h-[595px] w-72 top-28  bg-[#edfbfd]'></div>
          <div className='relative  top-32 left-40 text-[#298080] font-o'>
            <div className='text-[30px] font-semibold'>REDUCE</div>
            <div className='absolute top-6 text-[50px] font-semibold'>RECYCLE</div>
            <div className=' absolute top-20 text-[30px] font-semibold'>REUSE</div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.4)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='absolute top-72  left-72 text-[36px] lg:text[60px] uppercase font-serif font-semibold leading-[1] text-deepgreen bg-beige  h-45 border-b-4 px-10 py-12 border shadow-xl  '>
            <span className=' font-serif text-deepgreen mr-3'>"From gadgets to goldmines<br />Recycle
            </span>
            <TypeAnimation
              className=''
              sequence={['E-waste"  ',
                1000,
                '',
                1000,
              ]}
              speed={50}
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <div >
            <div>
              <img className='absolute top-28 -left-11 opacity-30 '
                src={pic6} alt='ewaste' width={110} height={180}></img>
            </div>
            <div>
              <img className='absolute top-60 left-9 opacity-40'
                src={pic6} alt='ewaste' width={120} ></img>
            </div>
          </div>
          <div>
            <img className=' absolute top-[77vh] left-3'
              src={pic4} alt='ewaste' width={120} height={380}></img>
          </div>
          <div>
            <img className=' absolute top-[78vh] left-96  rotate-90'
              src={pic4} alt='ewaste' width={120} height={380}></img>
          </div>
          <div>
            <img className=' absolute top-[75vh] right-[25rem] mr-72 -z-1'
              src={pic4} alt='ewaste' width={120} height={380}></img>
          </div>
          <div>
            <img className=' absolute top-32 right-0'
              src={pic5} alt='ewaste' width={670} height={380}></img>
          </div>
        </div>
        <div>
          <Flowchart />
        </div>
        <div>
          <Locate />
        </div>
        <div>
          <Stats />
        </div>
        <div>
          <Info />
        </div>
        <div>
          <Pickup/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
export default Home;
