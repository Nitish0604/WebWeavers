import React from 'react'
import Navbar from "../Components/Navbar"
import Info from '../Components/Info';
import Statistics from '../Components/Statistics';
//import ImageSlider from '../Components/ImageSlider';


function Home( props ) {
//   //const navigate = useNavigate();
//     let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;
//     //const navigate = useNavigate();
  return (
     <div>
        <Navbar/>
        <Info/>
        {/* <Statistics/> */}
     </div>
   );
}
export default Home;