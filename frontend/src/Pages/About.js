import React from "react";
import Navbar from "../Components/Navbar";
import green from "../assets/img.jpg"

const About = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="mt-32 mx-10 flex-col gap-y-4">
                <div className="mission h-[23.75rem] flex gap-x-5 justify-center items-center my-3 ">
                    <div className="text w-1/2">
                        <h1 className="font-bold text-4xl ">Our Mission</h1>
                        <p className="mt-2 text-left w-[31.25rem] space-y-3">The Ministry of Environment is the central government body responsible for planning, promoting, coordinating, and overseeing the implementation of environmental policies and programs in India.
                            Our mission is to protect and improve the environment, conserve natural resources, and prevent and mitigate environmental pollution.
                        </p>
                    </div>
                    <div className="image">
                        <img className="h-[18.75rem] w-[25rem]" src={green} alt="img"/>
                    </div>
                </div>
                <div className="whatWeDo flex gap-x-8 justify-center items-center h-[480px] bg-gradient-to-r from-[#f4c8a2ab] to-[#d09e72]">
                    <div className="image">
                        <img className="h-[25rem] w-[31.25rem]" src= {green} alt="img" />
                    </div>
                    <div className="text w-1/2">
                        <h1 className="font-bold text-4xl ">What We Do</h1>
                        <p className="mt-2 text-left w-[37.5rem] pl-0 space-y-3">The Ministry of Environment provides guidance, technical assistance, and financial support to various stakeholders, such as state governments, local bodies, civil society organizations, and private sector entities, in implementing environmental laws and regulations. We also conduct research, monitoring, assessment, and evaluation of environmental issues and trends.
                            Some of our key focus areas are biodiversity conservation, climate change mitigation and adaptation, waste management and recycling, environmental education and awareness, and international cooperation.
                        </p>
                    </div>
                </div>
                <div className="history flex gap-x-5 justify-center items-center h-[30rem]">
                    <div className="text w-1/2">
                        <h1 className="font-bold text-4xl ">Our History</h1>
                        <p className="mt-2 text-left space-y-3">The Ministry of Environment was founded in 1985 as the Department of Environment under the Prime Minister’s Office.
                            In 1992, it was renamed as the Ministry of Environment and Forests.
                            In 2014, it was restructured as the Ministry of Environment, Forests and Climate Change.
                            In 2021, it was further reorganized as the Ministry of Environment with a focus on e-waste management and recycling. Some of our notable achievements include launching the National Action Plan on Climate Change in 2008,
                            hosting the Conference of Parties (COP) 14 of the United Nations Convention to Combat Desertification (UNCCD) in 2019, and initiating the E-Waste Facility Locator project in 2023.
                        </p>
                    </div>
                    <div className="image">
                        <img className="h-[25rem] w-[31.25rem]" src={green} alt="img" />
                    </div>
                </div>
                <div className="values flex gap-x-5 justify-center items-center h-[28.125rem] bg-gradient-to-r from-[#d09e72] to-[#ccae92ab]">
                    <div className="image">
                        <img className="h-[23.125rem] w-[31.25rem]" src={green} alt="img" />
                    </div>
                    <div className="text w-1/2">
                        <h1 className="font-bold text-4xl ">Our Values</h1>
                        <p className="mt-2 text-left space-y-3">The Ministry of Environment is committed to fostering a culture of environmental stewardship among all citizens and stakeholders.
                            We value innovation, collaboration, excellence, and sustainability in our work. We adhere to the highest standards of integrity, honesty, and professionalism in our dealings. We strive to be responsive to the needs and expectations of our customers and partners.
                            We seek to make a positive difference in the lives of people and the planet.
                        </p>
                    </div>
                </div>
                <div className="website flex gap-x-5 justify-center items-center h-[38.75rem]">
                    <div className="text w-1/2">
                        <h1 className="font-bold text-4xl ">About the Website</h1>
                        <p className="mt-2 text-left">This website is a part of the E-Waste Facility Locator project, which is an initiative of the Ministry of Environment to promote e-waste management and recycling in India.
                            We aim to provide a convenient and user-friendly platform for users to find the nearest e-waste collection and recycling facility in their area.
                            We also offer educational pop-ups that inform users about the harmful components of their e-waste and their effects on the environment and human health if not disposed correctly.
                            We also reward users for disposing their e-waste correctly by giving them credit points relative to the value of the precious metals recovered from their old devices, which they can redeem for coupons, vouchers, or donations to environmental causes.
                            The website is designed and developed by a team of students, who participated in the Smart India Hackathon 2023,
                        a nationwide competition organized by the Ministry of Education and the All India Council for Technical Education (AICTE) to solve various problems faced by different ministries and departments of the Government of India.
                        </p>
                    </div>
                    <div className="image">
                        <img className="h-[25rem] w-[31.25rem]" src={green} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;