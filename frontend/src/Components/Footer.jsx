import React from 'react'
import swachhBharat from "../assets/swachh-bharat.png"
import digitalIndia from "../assets/digital-india-logo.png"
import nicLogo from "../assets/nic_logo.png"
import indiaGov from "../assets/india-gov-logo.png"

const Footer = () => {
    return (
        <div>
            {/* <hr></hr> */}
            <div className='bg-gradient-to-r from-[#ccae92ab] via-[#d09e72] to-[#ccae92ab] mx-auto px-[100px] flex-col gap-y-2'>
                <div className='flex-col gap-y-6'>
                    <div className=''>
                        <div className='flex justify-evenly '>
                            <div>
                                <a>Factory Login</a>
                            </div>
                            <div>
                                <a>Admin Login</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-evenly mt-6'>
                        <div>
                            Terms of Service
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                        <div>
                            Contact:-
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