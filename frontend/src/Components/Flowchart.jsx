import React from 'react'
import arrow from "../assets/arrow.png"
import coin from "../assets/coin.jpeg"
import nearme from "../assets/nearme.jpeg"
import login1 from "../assets/loginimg.jpeg"
function Flowchart() {
    // edfbfd e6edb49d
    return (
        <div className='w-full min-h-[400px] bg-[#edfbfd] py-10'>
            <div class="wrapper w-9/12 mx-auto py-10 gap-12 flex justify-around items-center relative flex-col lg:flex-row lg:gap:8">
                <img src={arrow} className="absolute lg:w-[400px] transform lg:-rotate-45 opacity-100 rotate-45 w-[700px]"/>
                <div class="card  h-1/2 border-solid border-2 border-black bg-[#fce5d0] relative rounded-xl lg:w-1/4 w-[80%] min-h-[50%]">
                    <div class="step absolute text-center  inline left-[36%] -top-6 text-medium
                 border-solid border-2 px-4 py-1 border-black rounded-lg z-10 bg-white">Step 1</div>
                    <img src={login1} alt="login-image" class="w-full h-[10rem]  mx-auto rounded-lg" />
                    <div class="mid-content bg-[#d09e72] text-center text-sm font-[500] p-5">
                        Go to the login page. Enter username and password. Click 'Login' to access your account securely. Welcome back!
                    </div>
                    <div class="end-content text-center text-sm p-2">
                        How to login/SignUp The account securely on E-swachh?
                    </div>
                </div>

                <div class="card h-1/2 border-solid border-2 border-black bg-[#fce5d0] relative rounded-xl lg:w-1/4 w-[80%] min-h-[50%]">
                    <div class="step absolute text-center  inline left-[36%] -top-6 text-medium
                 border-solid border-2 px-4 py-1 border-black rounded-lg z-10 bg-white">Step 2</div>
                    <img src={nearme} alt="login-image" class="w-full h-[10rem] object-fill mx-auto rounded-xl " />
                    <div class="mid-content bg-[#d09e72] text-center text-sm font-[500] p-5">
                        Open app, use GPS, enter desired service, discover nearby options, explore details, make informed decisions, and enjoy convenience.
                    </div>
                    <div class="end-content text-center text-sm p-2">
                        Use website search bar or browse categories to find information and explore
                    </div>
                </div>


                <div class="card h-1/2 border-solid border-2 border-black bg-[#fce5d0] relative rounded-xl lg:w-1/4 w-[80%] min-h-[50%]">
                    <div class="step absolute text-center inline left-[36%] -top-6 text-medium
                 border-solid border-2 px-4 py-1 border-black rounded-lg z-10 bg-white">Step 3</div>
                    <img src={coin} alt="login-image" class="w-full h-[10rem]  mx-auto rounded-xl" />
                    <div class="mid-content bg-[#d09e72] text-center text-sm font-[500] p-5">
                        Earn credit coins by recycling e-waste accessories, promoting sustainability,receiving rewards for your eco-friendly actions.
                    </div>
                    <div class="end-content text-center text-sm p-2">
                        Acquire credit coins by recycling electronics, fostering sustainability and green practices.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Flowchart