import React from 'react'

const ScrollText = () => {
    return (
        <div>
            {/* d6f2f6 d09e72 */}
            <hr></hr>
            <div className="bg-[#d6f2f6] w-[100vw] h-[40px] text-white p-1">
                <div className='flex justify-center'>
                    <marquee width="60%" direction="left" height="100px">
                        <a href='/map' className='text-xl my-auto'>Find your Nearby E-waste Facility....</a>
                    </marquee>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default ScrollText