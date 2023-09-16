/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import swachhBharat from "../assets/swachh-bharat.png"
import digitalIndia from "../assets/digital-india-logo.png"
import nicLogo from "../assets/nic_logo.png"
import indiaGov from "../assets/india-gov-logo.png"

const Footer = () => {
    return (
        <div>
            {/* <hr></hr> */}
            <div className='bg-gradient-to-r from-[#ccae92ab] via-[#d09e72] to-[#ccae92ab] mx-auto px-[100px] '>
                <div className='flex justify-left gap-x-[210px]'>
                    <div className=''>
                        <div className='flex-col justify-evenly mt-6 space-y-5'>
                            <div>
                                <a>Factory Login</a>
                            </div>
                            <div>
                                Terms of Service
                            </div>
                            <div>
                                Privacy Policy
                            </div>
                        </div>
                    </div>
                    <div className='flex-col justify-evenly mt-6 space-y-5'>
                        <div>
                            <a>Admin Login</a>
                        </div>
                        <div>
                            Contact:-
                        </div>
                    </div>
                    <div className='flex-col justify-evenly mt-6 space-y-5 translate-x-10'>
                        <div>
                            <a href='/informatory'>Informatory</a>
                        </div>
                        <div>
                            <a href='/about'>About</a>
                        </div>
                        <div>
                            <a href='/rewards'>Rewards</a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between my-7'>
                    <img src={swachhBharat} className='h-[40px] w-[80px]' />
                    <img src={digitalIndia} />
                    <img src={nicLogo} />
                    <img src={indiaGov} />
                </div>
                <div>
                    <div>
                        © 2023. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;