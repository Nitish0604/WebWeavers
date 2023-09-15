import React from 'react'
import logo from "../assets/Govlogo.png"

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
        <div className='flex bg-[#d09e72] overflow-x-hidden overflow-y-hidden items-center w-[100vw] max-w-[1640px]  h-[50px]'>
        <Link to="/"> 
            <img 
            className=' text-black  mt-3'
            src={logo} alt="Logo" width={50} height={15} loading="lazy" ></img>
        </Link>
        <div className='flex '>
          <h5 className=' text-[#000000] text-xs items-center font-semibold'> Ministry of Environment , Forest<br />
              and Climate Change
              
          </h5>
              {/* <select className=' w-36'> Language
                  <options>Bengali</options>
                  <options>Bengali</options>
                  <options>Bengali</options>
                  <options>Bengali</options>
                  <options>Bengali</options>
          </select> bfbfbf  a2a2a2 6185ca*/}
        </div>
        </div>
        <div className='flex bg-[#ccae92ab] content-center  justify-center overflow-x-hidden  overflow-y-hidden items-center w-[100vw] max-w-[1640px] mx-auto'>
            <nav className='py-3 font-semibold'>
                <ul className=' text-[#000000] flex gap-x-6'>
                      {/* <img className='  w-20 h-14'
                          src={logo2} alt="Logo" width={50} height={15} loading="lazy">
                          
                      </img> */}
                <li>
                    <Link to="/about">About Us</Link>
                      </li>
                      <li>
                    <Link to="/contact">Informatory</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                
            
            </ul>
              </nav>
          </div>
          
        {/* <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/Login">
                    <button onClick={onClickhandler} className='bg-richblack-800 text-white py-[6px] 
                    px-[10px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            
            
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[6px] 
                    px-[10px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[6px] 
                    px-[10px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div> */} 
      
    </div>
  )
} 
       

export default Navbar