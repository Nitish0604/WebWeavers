import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage";
import { Informatory } from "./Pages/Informatory";
// import Rewards from "./Pages/Rewards";
import Auth from "./Pages/Auth"
import About from "./Pages/About";
import Map from "./Pages/Map";
function App() {
  // const [isLoggedIn ,setIsLoggedIn] =useState(false);
  return (

    <div className=' app'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/informatory' element={<Informatory />}></Route>
        {/* //<Route path="/about" element = {<About  />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path='/rewards' element={<Rewards/>}></Route> */}
        <Route path="/map" element={<Map/>}></Route>
      </Routes>

    </div>

  );
}

export default App;
