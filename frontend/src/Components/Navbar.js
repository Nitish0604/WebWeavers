import React from 'react'
    import logo from "../assets/emblem.png"
     import logo2 from "../assets/envlogo11.png"
    import { Link } from "react-router-dom"
    //import Login from "./Login"

    //import {toast} from "react-hot-toast"
    //import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    // let isLoggedIn = props.isLoggedIn;
    // let setIsLoggedIn = props.setIsLoggedIn;
    // const navigate = useNavigate();
    // function onClickhandler() {
    //     navigate("/login");
    // }
    // 33363b 3a5985
        return (

            <div className='flex flex-col fixed'>
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
                        <div className='flex justify-between'>
                        <Link to="/">
                            <img
                                className=' text-black mt-1'
                                src={logo2} alt="Logo" width={25} height={10} loading="lazy" ></img>
                        </Link>
                        <h5 className=' text-[#000000] text-xs font-semibold ml-2'> Ministry of Environment , Forest<br />
                            and Climate Change
                            </h5>
                            </div>
                    </div>
                
                {/* bfbfbf  a2a2a2 6185ca    ccae92ab */}
            </div>
            
               <div>
                <div className='flex fixed  bg-[#f4c8a2ab] justify-between  overflow-x-hidden  overflow-y-hidden items-center w-[100vw] max-w-[1640px]  mx-auto h-[60px]'>
                     
                <nav className='flex items-center mx-auto justify-between'>
                
                    <ul className=' text-[#000000] flex gap-x-6 font-semibold'>
                         {/* <img className='  w-20 h-14'
                            src={logo2} alt="Logo" width={50} height={15} loading="lazy">
                            
                            </img>  */}
                        <li className=' hover:text-[#1d6788] hover:text-xl hover:outline-double hover:px-2'>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className='  hover:text-[#1d6788] hover:text-xl hover:outline-double hover:px-2 '>
                            <Link to="/informatory">Informatory</Link>
                            </li>
                            <li className=' hover:text-[#1d6788] hover:text-xl hover:outline-double hover:px-2 '>
                            <Link to="/contact">Contact</Link>
                            </li>
                        <li className=' hover:text-[#1d6788] hover:text-xl hover:outline-double hover:px-2 '>
                            <Link to="/rewards">Rewards</Link>
                            </li>
                        </ul>
                        
                        </nav>
                        <div className=' flex  items-center justify-between '>
                        <div>
                            <button className='px-10 mr-6 outline-double bg-[#f4c8a2ab] '> Login</button>
                            </div>
                        <div className=' mr-5  bg-[#f4c8a2ab]'>
                        <select className='w-36 h-8 items-center px-3 bg-[#f4c8a2ab] '>
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