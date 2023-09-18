import React, { useEffect } from 'react'
import logo from "../assets/emblem.png"
import logo2 from "../assets/envlogo11-1.png"
import logoFinal from "../assets/logoFinal.png"
import { Link, useNavigate } from "react-router-dom";
import { ChatState } from "../Context/ChatProvider";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";

import { Button } from "@chakra-ui/react";
const Navbar = () => {
  const navigate = useNavigate();


  // 33363b 3a5985  57CC99  d09e72  d6c67a  e9da8f  final->b0c485  d6f2f6 ccf3f9
  function onClickhandler() {
    navigate("/auth");
  }

  const { user } = ChatState();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    navigate("/");
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) navigate("/");
  }, [user]);

  console.log(user);
  return (
    <div>
      <div className="flex flex-col fixed z-40">
        <div className="flex justify-between bg-[#d6f2f6] items-center w-[100vw] max-w-[1640px] h-[50px] px-4">
          <div className="flex flex-row items-center">
            <Link to="/">
              <img
                className=" text-black mt-1"
                src={logo}
                alt="Logo"
                width={25}
                height={10}
                loading="lazy"
              ></img>
            </Link>
            <h5 className=" text-[#000000] text-xs font-semibold ml-2">
              {" "}
              Goverment of India
              <br />
            </h5>
          </div>
          <div className="flex items-center">
            <div className=" m-5  bg-[#d6f2f6] ">
              <select className="w-20  font-semibold h-8 items-center bg-[#d6f2f6] ">
                <option className="bg-[#d6f2f6] hover:bg-[#f4c8a2ab] ">
                  English
                </option>
                <option className="bg-[#d6f2f6] hover:bg-[#f4c8a2ab] ">
                  Hindi
                </option>
                <option className="bg-[#d6f2f6] hover:bg-[#f4c8a2ab] ">
                  Bengali
                </option>
                <option className="bg-[#d6f2f6] hover:bg-[#f4c8a2ab] ">
                  Tamil
                </option>
                <option className="bg-[#d6f2f6] hover:bg-[#f4c8a2ab] ">
                  Marathi
                </option>
                <option className="bg-[#d6f2f6] hover:bg-[#f4c8a2ab] ">
                  Kannada
                </option>
                <option className="bg-[#d6f2f6] hover:bg-[#f4c8a2ab] ">
                  Malayalam
                </option>
              </select>
            </div>
            <Link to="https://parivesh.nic.in/About.aspx">
              <img
                className=" text-black mt-0 items-center"
                src={logo2}
                alt="Logo"
                width={45}
                loading="lazy"
              ></img>
            </Link>
            <h5 className=" text-[#000000] text-xs font-semibold ml-2">
              {" "}
              Ministry of Environment , Forest
              <br />
              and Climate Change
            </h5>
          </div>

          {/* bfbfbf  a2a2a2 6185ca    ccae92ab    f1d4bb 80ED99  ead67bd7 eee4b4 edfbfd b4eced9d final->e4f5c1 */}
        </div>

        <div>
          <div className="flex fixed  bg-[#edfbfd] justify-between items-center w-[100vw] max-w-[1640px]  mx-auto h-[60px] z-[50]">
            <Link to="/">
              <img className='h-[50px] ml-2' src={logoFinal} />
            </Link>
            <nav className="flex items-center mx-auto justify-between">
              <ul className=" text-[#000000] flex gap-x-6 font-semibold">
                {/* <img className='  w-20 h-14'
                            src={logo2} alt="Logo" width={50} height={15} loading="lazy">
                            </img>  */}
                <li className=" hover:text-deepgreen hover:underline">
                  <Link to="/">Home</Link>
                </li>
                <li className=" hover:text-deepgreen hover:underline">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="  hover:text-deepgreen hover:underline ">
                  <Link to="/informatory">Informatory</Link>
                </li>
                <li className=" hover:text-deepgreen hover:underline ">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className=" hover:text-deepgreen hover:underline ">
                  <Link to="/rewards">Rewards</Link>
                </li>
              </ul>
            </nav>
            <div className=" flex  items-center justify-between ">
              <div className=" z-[1000]">
                {user && (
                  <Menu>
                    <MenuButton
                      as={Button}
                      bg="#edfbfd"
                      rightIcon={<ChevronDownIcon />}
                    >
                      <Avatar
                        size="sm"
                        cursor="pointer"
                        name={user.name}
                        src={user.pic}
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>My Profile</MenuItem> <MenuDivider />
                      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                )}
                {!user && (
                  <Link to="/auth">
                    <button
                      onClick={onClickhandler}
                      className="px-10 mr-6 w-36 font-semibold h-8 bg-[#d6f2f6] "
                    >
                      {" "}
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;