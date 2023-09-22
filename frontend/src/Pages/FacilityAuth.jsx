import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import Signup from "../Components/Authentication/Signup";
// import Login from "../Components/Authentication/Login";
import Login from '../Components/FacilityAuthentication/Login';
import { Link } from "react-router-dom";
import bglogin from "../assets/bglogin.webp";
import logo2 from "../assets/weblogo2.png";

const FacilityAuth = () => {
  return (
    <div>
      <div className="  flex fixed bg-[#edfbfd] justify-between  overflow-x-hidden  overflow-y-hidden items-center w-[100vw] max-w-[1640px]  mx-auto h-[60px] z-50">
        <nav className="flex items-center mx-auto justify-between">
          <ul className=" text-[#000000] flex gap-x-6 font-semibold">
            {/* <img className='  w-20 h-14'bg-[#ead67bd7]
                            src={logo2} alt="Logo" width={50} height={15} loading="lazy">
                            
                            </img>  */}

            <li className="  hover:text-deepgreen hover:text-xl  hover:px-2 ">
              <Link to="/informatory">Informatory</Link>
            </li>
            <li className=" hover:text-deepgreen hover:text-xl hover:px-2 ">
              <Link to="/contact">Contact</Link>
            </li>
            <li className=" hover:text-deepgreen hover:text-xl  hover:px-2 ">
              <Link to="/rewards">Rewards</Link>
            </li>
          </ul>
        </nav>
        <div className="  flex  items-center justify-between ">
          <div className=" mr-5 ">
            <select className="w-36  font-semibold h-8 items-center px-3 bg-[#dcf0f5]">
              <option className="bg-[#f4c8a2ab] hover:bg-[#f4c8a2ab] ">
                English
              </option>
              <option className="bg-[#f4c8a2ab] hover:bg-[#f4c8a2ab] ">
                Bengali
              </option>
              <option className="bg-[#f4c8a2ab] hover:bg-[#f4c8a2ab] ">
                Bengali
              </option>
              <option className="bg-[#f4c8a2ab] hover:bg-[#f4c8a2ab] ">
                Bengali
              </option>
              <option className="bg-[#f4c8a2ab] hover:bg-[#f4c8a2ab] ">
                Bengali
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="imagee">
        {/* <div className=" bg-cover fixed ">
          <img className=" relative" src={bglogin} width={1550}></img>
        </div> */}
        <div className=" mt-48 ml-44 ">
          <Container maxW="xl">
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
              <Tabs isFitted variant="soft-rounded">
                <TabList mb="1em">
                  <Tab _selected={{ color: "black", bg: "#edfbfd" }}>Login</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Login />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </div>
        <img className=" absolute right-40 top-40 z-[50]" src={logo2}></img>
      </div>
    </div>
  );
};

export default FacilityAuth;