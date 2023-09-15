import "./App.css";
//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
//import About from "./Pages/About";
// import SignUp from "./Pages/SignUp";






function App() {
  // const [isLoggedIn ,setIsLoggedIn] =useState(false);
  return (

    <div className=' app'>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </div>

  );
}

export default App;
