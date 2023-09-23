import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ew8 from "../assets/envlogo11-1.png";
import logoFinal from "../assets/logoFinal.png";
import "./Form.css";
import image1 from "../assets/back.jpg";
import image2 from "../assets/facility.jpg";
import image3 from "../assets/chat.jpg";
import image4 from "../assets/rewards.jpg";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";

const Form = () => {
  // Use multiple instances of useState for all the variables of formData
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  function changeHandler(event) {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "pincode":
        setPincode(value);
        break;
      case "landmark":
        setLandmark(value);
        break;
      case "phoneno":
        setPhoneno(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      address,
      pincode,
      landmark,
      phoneno,
      date,
    });

    // Use object shorthand notation to create data object

    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:5000/api/api/schedule-pickup",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          pincode,
          pickupTime: date,
          firstName,
          lastName,
          address,
          landmark,
          phoneno,
        }),
      };
      const data = await axios.request(config);
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //localStorage.setItem("userInfo", JSON.stringify(data));
      // setPicLoading(false);
      //navigate("/");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setPicLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="w-full h-screen bg-green-400 bg-[#d6f2f6]">
      <div>
        <div className="flex bg-[#edfbfd] opacity-1 z-10 fixed justify-between items-center w-full h-[55px] mx-auto px-2">
          {/* <div className='font-semibold'><Link to='/'>E-Swachh</Link></div> */}
          <Link to="/">
            <img className="h-[50px] ml-2 mb-2" src={logoFinal} />
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

          <div className="flex flex-row-reverse justify-between items-center">
            <Link to="https://parivesh.nic.in/About.aspx">
              <img
                className="text-black"
                src={ew8}
                alt="Logo"
                width={50}
                height={15}
                loading="lazy"
              ></img>
            </Link>
            <Link to="https://parivesh.nic.in/About.aspx">
              <h5 className=" text-[#000000] text-xs font-semibold">
                Ministry of Environment , Forest
                <br />
                and Climate Change
              </h5>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[80%] flex shadow-r2 bg-[white] rounded-lg p-3 relative top-[6rem] left-[10%]">
        <div class="box w-[50%] h-[100%] overflow-hidden rounded-[1rem]">
          <div class="wrapper w-[400%] h-[100%] flex animate-wiggle hover:animate-paused">
            <div class="img1 w-full h-full relative flex">
              <img
                src={image1}
                alt=""
                className="w-[100%] h-[100%] absolute opacity-50 object-cover"
              />
              <div class="content absolute font-sans w-[90%] h-[90%] flex justify-center flex-col">
                <div class="head-section w-full text-[1.9rem] ml-1 my-1">
                  Discover Your Location
                </div>
                <div class="mid-section w-full text-[1.2rem] mt-8 mb-4 ml-4">
                  Discover the world, one location at a time. 'Explore your
                  surroundings and let the world surprise you.' Grant us access
                  to your device's location to unlock personalized
                  recommendations and experiences.
                </div>
                <Link to="../map">
                  {" "}
                  <button
                    type="button"
                    className="w-[10rem] h-[3rem] absolute bottom-0 right-8 font-medium text-base rounded-xl shadow-r3 cursor-pointer hover:bg-[#d6f2f6]"
                  >
                    Search Near Me
                  </button>
                </Link>
              </div>
            </div>

            <div class="img1 w-full h-full relative flex">
              <img
                src={image2}
                alt=""
                className="w-[100%] h-[100%] absolute opacity-50 object-cover"
              />
              <div class="content absolute font-sans w-[90%] h-[90%] flex justify-center flex-col">
                <div class="head-section w-full text-[1.9rem] ml-1 my-1">
                  Enjoy PickUp Facility
                </div>
                <div class="mid-section w-full text-[1.2rem] mt-8 mb-4 ml-4">
                  I must say, the convenience of the pickup facility has truly
                  enhanced my experience. It's so convenient to simply schedule
                  a pickup and have my items ready without any hassle.
                </div>
                <Link to="../map">
                  {" "}
                  <button
                    type="button"
                    className="w-[10rem] h-[3rem] absolute bottom-0 right-8 font-medium text-base rounded-xl shadow-r3 cursor-pointer hover:bg-[#d6f2f6]"
                  >
                    Search Near Me
                  </button>
                </Link>
              </div>
            </div>

            <div class="img1 w-full h-full relative flex">
              <img
                src={image3}
                alt=""
                className="w-[100%] h-[100%] absolute opacity-50 object-cover"
              />
              <div class="content">
                <div class="head-section w-full text-[1.9rem] ml-1 my-1">
                  Your Personal Assistant,
                  <br /> Always Ready
                </div>
                <div class="mid-section w-full text-[1.2rem] mt-8 mb-4 ml-4">
                  Our 24/7 Chatbot is your round-the-clock companion, ready to
                  simplify your life and provide solutions whenever you need
                  them.
                </div>
                <Link to="/">
                  {" "}
                  <button
                    type="button"
                    className="w-[10rem] h-[3rem] absolute bottom-0 right-8 font-medium text-base rounded-xl shadow-r3 cursor-pointer hover:bg-[#d6f2f6]"
                  >
                    Chat With us
                  </button>
                </Link>
              </div>
            </div>

            <div class="img1 w-full h-full relative flex">
              <img
                src={image4}
                alt=""
                className="w-[100%] h-[100%] absolute opacity-50 object-cover"
              />
              <div class="content absolute font-sans w-[90%] h-[90%] flex justify-center flex-col">
                <div class="head-section w-full text-[1.9rem] ml-1 my-1">
                  Earn More Rewards:
                  <br />
                  Your Pathway to Greater Benefits and Perks
                </div>
                <div class="mid-section w-full text-[1.2rem] mt-8 mb-4 ml-4">
                  Maximize your rewards potential with our exclusive program.
                  Unlock exciting opportunities and benefits, and watch your
                  earnings grow as you engage with our platform.
                </div>
                <Link to="../rewards">
                  {" "}
                  <button
                    type="button"
                    className="w-[10rem] h-[3rem] absolute bottom-0 right-8 font-medium text-base rounded-xl shadow-r3 cursor-pointer hover:bg-[#d6f2f6]"
                  >
                    Redeem point
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-evenly gap-5 h-[100%] w-[50%] p-2 bg-[white] relative"
        >
          <div className="flex justify-between w-[100%] h-[15%] text-[1.1rem] ">
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                className="... ring-2  ring-inset rounded-md text-center h-[80%]"
                type="text"
                placeholder="first name"
                onChange={changeHandler}
                name="firstName"
                id="firstName"
                required
                value={firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                className="... ring-2  ring-inset rounded-md text-center h-[80%]"
                type="text"
                placeholder="last name"
                onChange={changeHandler}
                name="lastName"
                id="lastName"
                required
                value={lastName}
              />
            </div>
          </div>
          <div className="w-[100%] h-[15%] text-[1.1rem] ">
            <label htmlFor="address"> Your Address</label>
            <br />
            <input
              className="... ring-2  ring-inset rounded-md text-center  h-[80%] w-full"
              type="text"
              placeholder="address"
              onChange={changeHandler}
              name="address"
              id="address"
              required
              value={address}
            />
          </div>
          <div className="flex justify-between w-[100%] h-[15%] text-[1.1rem]">
            <div>
              <label htmlFor="phoneno">Phone Number</label>
              <br />
              <input
                className="... ring-2  ring-inset rounded-md text-center  h-[80%]"
                type="number"
                placeholder="phoneno"
                onChange={changeHandler}
                name="phoneno"
                id="phoneno"
                // min="0" // Minimum value
                // max="9999999999" // Maximum value (represents 10 digits)

                required
                value={phoneno}
              />
            </div>
            <div>
              <label htmlFor="pincode">Pincode</label>
              <br />
              <input
                className="... ring-2  ring-inset rounded-md text-center  h-[80%]"
                type="number"
                placeholder="pincode"
                onChange={changeHandler}
                name="pincode"
                id="pincode"
                required
                value={pincode}
              />
            </div>
          </div>
          <div className="w-[100%] h-[40%] ">
            <label htmlFor="landmark " className="text-[1.1rem]">
              Landmark
            </label>{" "}
            <br />
            <textarea
              className="... ring-2  ring-inset rounded-md  h-[70%] w-full p-2"
              type="text"
              placeholder="landmark"
              onChange={changeHandler}
              name="landmark"
              id="landmark"
              required
              value={landmark}
            />
          </div>
          <div className="flex items-center  w-full h-[15%] justify-around">
            <div className="w-[40%] h-[100%]">
              <label htmlFor="date" className="text-[1.1rem]">
                Schedule Date:
              </label>
              <input
                className="p-2 rounded-md shadow-r2"
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="w-[40%] ">
              <button className="w-[10rem] h-[3rem] absolute bottom-0 right-8 font-medium text-base rounded-xl shadow-r3 cursor-pointer hover:bg-[#d6f2f6]">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
