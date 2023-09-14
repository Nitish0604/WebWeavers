import React from 'react'
import Navbar from "../Components/Navbar"
import ImageSlider from '../Components/ImageSlider';


function Home( props ) {
//   //const navigate = useNavigate();
//     let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;
//     //const navigate = useNavigate();
   
  return (
    
    
     <div>
     
        <Navbar />
      <div className=''>
           <ImageSlider />
           </div>
     </div>
   
    
   );
}
export default Home;