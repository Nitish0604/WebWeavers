import React, { useState } from "react";
import logo from "../assets/userdash3.jpg";
import { Link } from "react-router-dom";
import SearchBar from "../Components/miscellaneous/SearchBar";
import logoFinal from "../assets/logoFinal.png";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";

const FacilityDashboard = () => {
  const toast = useToast();
  const [userInfo, setUserInfo] = useState({
    name: "Kolkata Municipal Corporation",
  });
  const [gold, setGold] = useState();
  const [silver, setSilver] = useState();
  const [copper, setCopper] = useState();
  const [others, setOthers] = useState();

  const [isEditing, setIsEditing] = useState(true);

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

  function resetForm() {
    setGold(0);
    setSilver(0);
    setCopper(0);
    setOthers(0);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(name, email, password, pic);
    //console.log(name);
    console.log(user_id);
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:5000/api/user/pushform/650d9d12518165c2359379a8",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          gold,
          silver,
          copper,
          others,
        }),
      };
      const data = await axios.request(config);
      console.log(data);
      resetForm();
      toast({
        title: "data send",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "data not send",
        // description: error.res.data.message,

        status: "error",
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
          <SearchBar />
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
          {/* <div className="mb-4 flex justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="max-w-md h-32 rounded-full"
            />
          </div> */}
          <h2 className="text-2xl mb-4 text-center font-bold">Your Profile</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-gray-700  font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6] p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Gold Extracted"
                className="block text-gray-700 font-bold mb-2"
              >
                Gold Extracted:
              </label>
              <input
                type="text"
                id="gold"
                name="gold"
                value={gold}
                onChange={(e) => setGold(e.target.value)}
                //disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Silver Extracted"
                className="block text-gray-700 font-bold mb-2"
              >
                Silver Extracted:
              </label>
              <input
                type="text"
                id="silver"
                name="silver"
                value={silver}
                onChange={(e) => setSilver(e.target.value)}
                //disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Copper Extracted"
                className="block text-gray-700 font-bold mb-2"
              >
                Copper Extracted:
              </label>
              <input
                type="text"
                id="copper"
                name="copper"
                value={copper}
                onChange={(e) => setCopper(e.target.value)}
                //disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Gold Extracted"
                className="block text-gray-700 font-bold mb-2"
              >
                others:
              </label>
              <input
                type="text"
                id="others"
                name="others"
                value={others}
                onChange={(e) => setOthers(e.target.value)}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" hover:bg-blue-700 text-white font-bold py-2 px-4 hover:bg-[#d6f2f6] border-2 rounded mr-2"
              >
                Submit
              </button>
              {/* <button
                type="button"
                onClick={handleEditClick}
                className=" hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 hover:bg-[#d6f2f6]  border-2 rounded"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button> */}
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

export default FacilityDashboard;
