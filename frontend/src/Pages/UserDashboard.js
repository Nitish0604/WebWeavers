/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import logo from "../assets/userdash2.png";
import { Link } from "react-router-dom";
import SearchBar from "../Components/miscellaneous/SearchBar";
import logoFinal from "../assets/logoFinal.png";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import Coins from "../assets/coins.png"

const UserDashboard = () => {
  const toast = useToast();
  const [userInfo, setUserInfo] = useState({
    name: "Kolkata Municipal Corporation",
  });
  const [dob, setdob] = useState('19-jan-2001');
  const [name, setname] = useState('tanmay');
  const [contact, setcontact] = useState(9546959970);
  const [gender, setgender] = useState('male');
  const [coins, setcoins] = useState();
  // const [others, setOthers] = useState();
  const { user, setUser } = ChatState();
  console.log({ user });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(name, email, password, pic);
    //console.log(name);
    console.log(user_id);
    try {
      const config = {
        method: "put",
        maxBodyLength: Infinity,
        //url: "http://localhost:5000/api/user/updateProfile",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          dob,
          contact,
          gender,
          coins,
        }),
      };
      const data = await axios.request(config);
      console.log(data);
      toast({
        title: "data send",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "data send",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  const {
    //setSelectedChat,

    user_id,
    setuser_id,
  } = ChatState();
  return (
    <div className="">
      <div className="  flex  fixed bg-[#edfbfd] justify-between  overflow-x-hidden  overflow-y-hidden items-center w-[100vw] max-w-[1640px]  mx-auto h-[60px] z-50">
        <img className="h-[50px] ml-2" src={logoFinal} />
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
          {/* <SearchBar /> */}
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
      <div className="flex  overflow-x-hidden overflow-y-hidden">
        <div className="w-[530px] absolute right-48 mt-20 p-6  rounded shadow-lg">
          <div className="mb-4 flex justify-center">
            {/* <img
              src={user.pic}
              alt="User"
              className="max-w-md h-32 rounded-full"
            /> */}
          </div>
          <div className="flex justify-between">
            <h2 className="text-2xl mb-4 text-center font-bold">Your Profile</h2>
            <div className="rounded-md border w-28 font-bold flex justify-center items-center px-1">
              <div>
                <img className="rounded-full" src={Coins} />
              </div>
              <div>{user.credits}</div>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700 font-bold mb-2"
              >
                dob
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={dob}
                onChange={(e) => setdob(e.target.value)}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Silver Extracted"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Copper Extracted"
                className="block text-gray-700 font-bold mb-2"
              >
                gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="coins"
                className="block text-gray-700 font-bold mb-2"
              >
                Coins:
              </label>
              <input
                type="text"
                id="coins"
                name="coins"
                value={coins}
                onChange={(e) => setcoins(e.target.value)}
                //disabled={isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div> */}
            <div className="flex justify-center">
              <button
                type="submit"
                className=" hover:bg-blue-700 text-white font-bold py-2 px-4 hover:bg-[#d6f2f6] border-2 rounded mr-2"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleEditClick}
                className=" hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 hover:bg-[#d6f2f6]  border-2 rounded"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>
          </form>
        </div>
        <div className="absolute top-28 left-10 ">
          <img src={logo} width={500} height={400}></img>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
