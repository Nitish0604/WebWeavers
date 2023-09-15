import React from 'react'
import Navbar from "../Components/Navbar"
import pic1 from "../assets/ewaste13.png"
import pic2 from "../assets/ewaste14.png"
import pic3 from "../assets/ewaste10.png"
import pic4 from "../assets/leaf1.webp"
import pic5 from "../assets/ewastelogo.png"
import pic6 from "../assets/circle1.png"

//import ImageSlider from '../Components/ImageSlider';


function Home( props ) {
//   //const navigate = useNavigate();
//     let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;
//     //const navigate = useNavigate();
   
  return (
    
      <div className='flex '>
        <div>
      <Navbar />
        </div>
        
        <div >
        <img className='mr-72  -ml-20  mt-28 opacity-30'
            src={pic6} alt='ewaste' width={130} height={180}></img>
        </div>
        <div>
        <img className='absolute top-60 left-14 opacity-40'
            src={pic6} alt='ewaste' width={160} height={180}></img>
        </div> 
        <div>
        <img className=' absolute bottom-0 left-3'
            src={pic4} alt='ewaste' width={120} height={380}></img>
        </div>
        <div>
        <img className=' absolute bottom-4 left-96  rotate-90'
            src={pic4} alt='ewaste' width={120} height={380}></img>
      </div>
      <div>
        <img className=' absolute bottom-12 right-96 mr-72  '
            src={pic4} alt='ewaste' width={120} height={380}></img>
        </div>
        <div>

        <img className=' absolute bottom-0 right-0'
            src={pic5} alt='ewaste' width={640} height={380}></img>
        </div>
        
      </div>
     
   
    
   );
}
export default Home;
