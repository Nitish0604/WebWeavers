import React, { useState } from "react";
import logo from "../assets/userdash3.jpg";
import { Link } from "react-router-dom";
import SearchBar from "../Components/miscellaneous/SearchBar";
import logoFinal from "../assets/logoFinal.png";

const FacilityDashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    gender: "Male",
    age: 30,
    password: "********",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

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
                  <SearchBar/>
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
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="max-w-md h-32 rounded-full"
            />
          </div>
          <h2 className="text-2xl mb-4 text-center font-bold">Facility Profile</h2>
          <form onSubmit={handleSubmit}>
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
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2"
              >
                Gender:
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={userInfo.gender}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-gray-700  font-bold mb-2"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={userInfo.age}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-gray-300 hover:bg-[#d6f2f6]  p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-gray-300  hover:bg-[#d6f2f6] p-2 rounded"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" hover:bg-blue-700 text-white font-bold py-2 px-4 hover:bg-[#d6f2f6] border-2 rounded mr-2"
              >
                Save
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
          <img src={logo} width={650} height={400}></img>
        </div>
      </div>
    </div>
  );
};

export default FacilityDashboard;
