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

    <div className=' app'>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/informatory' element={<Informatory />}/>
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/rewards' element={<Rewards/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>

    </div>

  );
}

export default App;
