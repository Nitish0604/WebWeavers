import "./App.css";
import { useState ,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage";
import { Informatory } from "./Pages/Informatory";
import Rewards from "./Pages/Rewards";
import Auth from "./Pages/Auth"
import About from "./Pages/About";
import Map from "./Pages/Map";
import { useToast } from "@chakra-ui/react";
import data from "./Components/data"
import Facility from "./Pages/Facility";
import Direction from "./Pages/Direction";
import FacilityAuth from "./Pages/FacilityAuth";
import FacilityDashboard from "./Pages/FacilityDashboard";
import UserDashboard from "./Pages/UserDashboard";
import Form from "./Pages/Form"


function App() {
    const toast = useToast();
    function popup() {
      toast({
        title: `${data[i].text}`,
        status: "info",
        duration: 5000,
        isClosable: true,
        variant: "top-accent",
        position: "bottom",
      });
    }
    let i = 0;
    useEffect(() => {
      const popupInterval = setInterval(() => {
        popup();
        i++;
        if (i == 4) {
          i = 0;
        }
      }, 100000);
      return () => {
        clearInterval(popupInterval);
      };
    }, []);
  return (
    <div className=" app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informatory" element={<Informatory />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/map" element={<Map />} />
        {/* <Route path="/facility" element={<Facility />} /> */}
        <Route path="/direction" element={<Direction />}></Route>
        <Route path="/facilitylogin" element={<FacilityAuth />}></Route>
        <Route path="/facilitydashboard" element={<FacilityDashboard />}></Route>
        <Route path="/Userdashboard" element={<UserDashboard/>}></Route>
        <Route path ="/pickupForm" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
