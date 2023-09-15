import React from "react";
import logo from "../assets/Govlogo.png";

import { Link } from "react-router-dom";
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
    <div className="flex flex-col fixed">
      <div className="flex justify-between bg-[#e2a978] items-center w-[100vw] max-w-[1640px] h-[50px] px-2">
        <div className="flex flex-row items-center ">
          <Link to="/">
            <img
              className=" text-black mt-3"
              src={logo}
              alt="Logo"
              width={50}
              height={15}
              loading="lazy"
            ></img>
          </Link>
          <h5 className=" text-[#000000] text-xs font-semibold">
            {" "}
            Ministry of Environment , Forest
            <br />
            and Climate Change
          </h5>
        </div>

        {/* bfbfbf  a2a2a2 6185ca    ccae92ab */}
      </div>

      <div className=" ">
        <div className="flex fixed  bg-[#e2c4a9cb]  overflow-x-hidden   overflow-y-hidden  w-[100vw] max-w-[1640px]  mx-auto h-[60px]">
          <div className="flex  items-center mx-auto space-x-80  ">
            <div>
              <ul className=" text-[#000000] flex gap-x-6 font-semibold">
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
            </div>

            <div>
              <select className="w-36">
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
  );
};

export default Navbar;
