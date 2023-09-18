import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import pic1 from "../assets/gift1.png";
import gift1 from '../assets/gift1-1.png';
const Rewards = () => {
    const [value, setValue] = useState(100);
    const [reward, setReward] = useState(1000);
    const [formData, setFormData] = useState({ device: "", Medium: "" });
    function changeHandler(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }
    function remaningcoins() {
        setReward(reward - 50);
    }
    function onClickHandler(event) {
        event.preventDefault();
        //print
        console.log("Finally printing the entireform ka data ........")
        console.log(formData);
        const device = formData.device;
        const medium = formData.Medium;
        let coins = 0;
        if (device === 'Mobile phone') {
            if (medium < 2010) {
                coins = 100;
            }
            else {
                coins = 50;
            }
        }
        else if (device === 'Laptops') {
            if (medium < 2010) {
                coins = 50;
            }
            else {
                coins = 20;
            }
        }
        else if (device === 'Printers') {
            coins = 20;
        }
        else if (device === 'XRay Machine') {
            coins = 50;
        }
        else if (device === 'Medical Device') {
            coins = 10;
        }
        else if (device === 'TV') {
            coins = 10;
        }
        else if (device === 'Camera') {
            coins = 10;
        }
        else if (device === 'gadget') {
            coins = 10;
        }
        else if (device === 'appliance') {
            coins = 5;
        }
        setValue(coins);
    }
    function submitHandler(event) {
        event.preventDefault();
        //print
        console.log("Finally printing the entireform ka data ........ ")
        console.log(formData);
    }
    return (
        <div className=' min-h-[100vh] w-full overflow-x-hidden'>
            <div className="w-[100%] mx-auto flex items-center space-x-96 ml-96 mt-60 overflow-x-hidden ">
                <div>
                    <img
                        className='absolute top-44 -left-12'
                        src={pic1} width={950}></img>
                </div>
                {/* w-[80%] */}
                <div className='flex flex-col space-y-10'>
                    <form onSubmit={submitHandler} className='flex flex-col justify-evenly h-1/2  gap-[2rem]'>
                        <div className='flex space-x-4 mt-11'>
                            <div className="">
                                <label htmlFor='device' className="font-bold"> Type of device  </label><br />
                                <select className="... ring-2  ring-inset w-44 rounded-md mt-3 px-3 py-2 text-center"
                                    name="device"
                                    id="device"
                                    value={formData.device}
                                    onChange={changeHandler}
                                >
                                    <option value="Mobile phone">Mobile phone</option>
                                    <option value="Laptops">Laptops</option>
                                    <option value="Printers">Printers</option>
                                    <option value="X-ray Machine">X-ray Machine</option>
                                    <option value="Medical devices">Medical devices</option>
                                    <option value="TV">TV</option>
                                    <option value="Camera">Camera</option>
                                    <option value="gadget">Electronic Gadget</option>
                                    <option value="appliance">Small Home Appliance</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor='Medium' className='font-bold '> Manufacturing Year</label><br />
                                <select className="... ring-2  ring-inset  rounded  w-36 -md mt-3 px-3 py-2 text-center"
                                    name="Medium"
                                    id="Medium"
                                    value={formData.Medium}
                                    onChange={changeHandler}
                                >
                                    <option value="2000-2005">2000-2005</option>
                                    <option value="2005-2010">2005-2010</option>
                                    <option value="2010-2015">2010-2015</option>
                                    <option value="2015-2020">2015-2020</option>
                                    <option value="2020-2015">2020-2015</option>
                                </select>
                            </div>
                        </div>
                        <div className='my-3 flex space-x-3'>
                            <button  onClick={onClickHandler} className='flex items-center space-x-3 px-4 py-2 font-bold bg-[#cce1e4]'>
                                <div>  Calculate Coins  </div>
                                <div className='font-bold'><AiOutlineArrowRight /></div>
                            </button>
                            <input className="... ring-2  ring-inset w-40 rounded-md ml-40 px-3 py-2 text-center"
                                    type='text'
                                    name='value'
                                    value={value}
                                >
                            </input>
                        </div>
                        <div className='my-3 flex space-x-3' >
                            <button  className='flex items-center space-x-3 px-4 py-2 font-bold bg-[#cce1e4]'>
                                <div>  Coin Balance :   </div>
                            </button>
                            <span className='ml-5'>
                                <input className="... ring-2  ring-inset  rounded-md px-3 py-2 text-center"
                                    type='text'
                                    name='value'
                                    value={reward}
                                >
                                </input>
                            </span>

                        </div> 

                    </form>
                </div>
            </div>
            <div className='mt-56'>
                <h3 className='flex justify-center text-[40px] text-[#1a6350e2] font-semibold font-serif mt-6 mb-3'>REWARDS</h3>
            </div>
            <div className='w-[90%] mx-auto flex flex-col space-y-10'>
                <div className='flex flex-row space-x-10 mt-8'>
                    {/* flip card1 1 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front  bg-[#c1e9e9] flex items-center justify-center">
                                <div className='text-xl font-bold px-2'> Unwrap , Shop, Smile !!! </div>
                            </div>
                            <div class="flip-card1-back bg-[#c2fdfd] h-full w-full flex flex-col items-center justify-center">
                                <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'Coupons'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'AMZ Seller Ghz'</div>
                                        <div>Price: 1999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#7ce5e5] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* flipcard12 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front bg-[#e7d2e5] flex items-center justify-center">
                                <div className='text-xl font-bold px-2'> Unlock your retail dreams with this card !!!</div>
                            </div>
                            <div class="flip-card1-back bg-[#fdccf8] flex items-center justify-center">
                                <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'LOREM Watch Black'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'Watch Ltd Siyana'</div>
                                        <div>Price: 2999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#f396e9] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* flipcard13 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front bg-[#cbebc4] flex items-center justify-center">
                                <div className='text-xl font-bold px-2'> It's not a card; it's a shopping wand !!! </div>
                            </div>
                            <div class="flip-card1-back bg-[#befbc6] flex items-center justify-center">
                                <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'LOREM Watch Black'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'Watch Ltd Siyana'</div>
                                        <div>Price: 2999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#89ee96] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* flipcard14 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front bg-[#e9ebc4] flex items-center justify-center">
                                <div className='text-xl font-bold px-2'> Gifts? Nah, I got you a shopping spree !!! </div>
                            </div>
                            <div class="flip-card1-back bg-[#f8fbbe] flex items-center justify-center">
                            <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'LOREM Watch Black'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'Watch Ltd Siyana'</div>
                                        <div>Price: 2999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#ecf090] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-10 mt-8'>
                    {/* flip card1 1 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front  bg-[#e9cfc1] flex items-center justify-center">
                                <div className='text-xl font-bold px-2'> Dress it up, pick it out, make it yours !!!</div>
                            </div>
                            <div class="flip-card1-back bg-[#fdedc2] flex items-center justify-center">
                            <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'LOREM Watch Black'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'Watch Ltd Siyana'</div>
                                        <div>Price: 2999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#e9d293] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* flipcard12 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front bg-[#d2d3e7] flex items-center justify-center">
                                <div className='text-xl font-bold px-2'> The gift of choice, wrapped up in a card !!!</div>
                            </div>
                            <div class="flip-card1-back bg-[#d2ccfd] flex items-center justify-center">
                            <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'LOREM Watch Black'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'Watch Ltd Siyana'</div>
                                        <div>Price: 2999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#9f94ef] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* flipcard13 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front bg-[#ebc4e5] flex items-center justify-center">
                                <div className='text-xl font-bold px-2'> Surprise! Your shopping genie is here !!! </div>
                            </div>
                            <div class="flip-card1-back bg-[#fbbee5] flex items-center justify-center">
                            <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'LOREM Watch Black'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'Watch Ltd Siyana'</div>
                                        <div>Price: 2999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#dd7fba] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* flipcard14 */}
                    <div className='flip-card1'>
                        <div class="flip-card1-inner shadow-xl">
                            <div class="flip-card1-front bg-[#c4ebdb] flex items-center justify-center">
                                <div className='text-xl font-bold  px-2'> Get ready to splurge,<br/> it's on us !!!</div>
                            </div>
                            <div class="flip-card1-back bg-[#befbeb] flex items-center justify-center">
                            <div className='font-semibold px-2 flex flex-col items-center '>
                                    <div>
                                        <img src={gift1} width={300}></img>
                                    </div>
                                    <div className='flex flex-col -mt-10'>
                                        <div>Name: 'LOREM Watch Black'</div>
                                        <div>Category: 'Voucher'</div>
                                        <div>Seller: 'Watch Ltd Siyana'</div>
                                        <div>Price: 2999</div>
                                    </div>
                                    <button className='my-2 rounded-md px-2 py-1 bg-[#65d5b7] w-fit' onClick={remaningcoins}>Redeem Voucher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rewards;