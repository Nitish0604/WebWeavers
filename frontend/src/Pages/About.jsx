import React from "react";
import green from "../assets/img.jpg"
import mission from "../assets/mission.jpeg"
import logo from "../assets/Govlogo.png";
import { Link } from "react-router-dom";
import values from "../assets/values.jpeg";
import Navbar from "../Components/Navbar";
import about from "../assets/about.png"
import whatWeDo from "../assets/whatWeDo.jpeg"
import history from "../assets/history.jpeg"
import aboutWeb from "../assets/aboutWeb.jpg"
import logoFinal from "../assets/logoFinal.png"
import ew8 from '../assets/envlogo11-1.png';
import Footer from "../Components/Footer";

const About = () => {
    return (
      <div>
        <div>
          <div className='flex bg-[#edfbfd] opacity-1 z-10 fixed justify-between items-center w-full h-[55px] mx-auto px-2'>
            {/* <div className='font-semibold'><Link to='/'>E-Swachh</Link></div> */}
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
            <div className='flex flex-row-reverse justify-between items-center'>
              <Link to="https://parivesh.nic.in/About.aspx">
                <img
                  className='text-black'
                  src={ew8} alt="Logo" width={50} height={15} loading="lazy"></img>
              </Link>
              <Link to="https://parivesh.nic.in/About.aspx">
                <h5 className=' text-[#000000] text-xs font-semibold'>Ministry of Environment , Forest<br />
                  and Climate Change
                </h5>
              </Link>
            </div>
          </div>

        </div>
        <div className="mt-0 mx-10 flex-col pt-20 gap-y-4">
          <div className="mission h-[23.75rem] flex gap-x-5 justify-center items-center mb-3 ">
            <div className="text w-1/2">
              <h1 className="font-bold text-4xl ">Our Mission</h1>
              <p className="mt-2 text-left w-[31.25rem] space-y-3">
                The Ministry of Environment is the central government body
                responsible for planning, promoting, coordinating, and
                overseeing the implementation of environmental policies and
                programs in India. Our mission is to protect and improve the
                environment, conserve natural resources, and prevent and
                mitigate environmental pollution.
              </p>
            </div>
            <div className="image">
              <img className="h-[18.75rem] w-[25rem]" loading="lazy" src={mission} alt="img" />
            </div>
          </div>
          <div className="whatWeDo flex gap-x-8 justify-center items-center h-[480px] bg-gradient-to-r from-[#f4c8a2ab] to-[#d6f2f6]">
            <div className="image">
              <img className="h-[400px] w-[500px] rounded-md" loading="lazy" src={whatWeDo} alt="img" />
            </div>
            <div className="text w-1/2">
              <h1 className="font-bold text-4xl ">What We Do</h1>
              <p className="mt-2 text-left w-[37.5rem] pl-0 space-y-3">
                The Ministry of Environment provides guidance, technical
                assistance, and financial support to various stakeholders, such
                as state governments, local bodies, civil society organizations,
                and private sector entities, in implementing environmental laws
                and regulations. We also conduct research, monitoring,
                assessment, and evaluation of environmental issues and trends.
                Some of our key focus areas are biodiversity conservation,
                climate change mitigation and adaptation, waste management and
                recycling, environmental education and awareness, and
                international cooperation.
              </p>
            </div>
          </div>
          <div className="history flex gap-x-5 justify-center items-center h-[30rem]">
            <div className="text w-1/2">
              <h1 className="font-bold text-4xl ">Our History</h1>
              <p className="mt-2 text-left space-y-3">
                The Ministry of Environment was founded in 1985 as the
                Department of Environment under the Prime Minister’s Office. In
                1992, it was renamed as the Ministry of Environment and Forests.
                In 2014, it was restructured as the Ministry of Environment,
                Forests and Climate Change. In 2021, it was further reorganized
                as the Ministry of Environment with a focus on e-waste
                management and recycling. Some of our notable achievements
                include launching the National Action Plan on Climate Change in
                2008, hosting the Conference of Parties (COP) 14 of the United
                Nations Convention to Combat Desertification (UNCCD) in 2019,
                and initiating the E-Waste Facility Locator project in 2023.
              </p>
            </div>
            <div className="image">
              <img className="h-[20rem] w-[31.25rem] rounded-md" loading="lazy" src={history} alt="img" />
            </div>
          </div>
          <div className="values flex gap-x-5 justify-center items-center h-[28.125rem] bg-gradient-to-r from-[#d6f2f6] to-[#ccae92ab]">
            <div className="image">
              <img className="h-[23.125rem] w-[31.25rem] rounded-md" src={values} alt="img"/>
            </div>
            <div className="text w-1/2">
              <h1 className="font-bold text-4xl ">Our Values</h1>
              <p className="mt-2 text-left space-y-3">
                The Ministry of Environment is committed to fostering a culture
                of environmental stewardship among all citizens and
                stakeholders. We value innovation, collaboration, excellence,
                and sustainability in our work. We adhere to the highest
                standards of integrity, honesty, and professionalism in our
                dealings. We strive to be responsive to the needs and
                expectations of our customers and partners. We seek to make a
                positive difference in the lives of people and the planet.
              </p>
            </div>
          </div>
          <div className="website flex gap-x-5 justify-center items-center h-[500px]">
            <div className="text w-1/2">
              <h1 className="font-bold text-4xl ">About the Website</h1>
              <p className="mt-2 text-left">
                This website is a part of the E-Waste Facility Locator project,
                which is an initiative of the Ministry of Environment to promote
                e-waste management and recycling in India. We aim to provide a
                convenient and user-friendly platform for users to find the
                nearest e-waste collection and recycling facility in their area.
                We also offer educational pop-ups that inform users about the
                harmful components of their e-waste and their effects on the
                environment and human health if not disposed correctly. We also
                reward users for disposing their e-waste correctly by giving
                them credit points relative to the value of the precious metals
                recovered from their old devices, which they can redeem for
                coupons, vouchers, or donations to environmental causes. The
                website is designed and developed by a team of students, who
                participated in the Smart India Hackathon 2023, a nationwide
                competition organized by the Ministry of Education and the All
                India Council for Technical Education (AICTE) to solve various
                problems faced by different ministries and departments of the
                Government of India.
              </p>
            </div>
            <div className="image">
              <img className="h-[25rem] w-[31.25rem]" src={aboutWeb} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
}

export default About;
