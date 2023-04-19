import React from 'react'
import { GiCrossroad } from 'react-icons/gi'
import { HiCurrencyDollar } from 'react-icons/hi'
import { RiCreativeCommonsZeroFill } from 'react-icons/ri'
const WhyUs = () => {
    return (
        <>
            <div className="section bg-gray-900 text-white py-8 mt-10">
                <div className="247box text-center">
                    <h1 className='md:text-5xl text-2xl p-2 font-bold my-4'>Save big with our cheap car rental!</h1>
                    <h2 className='my-4 text-xl font-bold'> <span className='text-red-500'>24/7 Support</span> </h2>
                </div>
            </div>
            <div className=''>
                <div className='py-15  chooseusbgimg'>
                    <div className="container flex justify-center items-center mx-auto  ">
                        <div className="mainchooseusimg py-10 "></div>
                    </div>
                </div>
            </div>
            <div className=" flex container justify-around items-center md:flex-row flex-col content   mx-auto p-4">
                <div className='md:w-2/5 w-full container '>
                    <h1 className='text-red-500 font-bold'>Why Choose Us ?</h1>
                    <h1 className='text-3xl font-bold my-4'>Save big with our cheap car rental!
                        Top Airports. Local Suppliers. 24/7 Support.</h1>
                    <p className='text-lg text-gray-600 '>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                    <button className='text-xl text-white bg-red-500 px-8 py-4 my-4 shadow-xl shadow-reg-500 hover:bg-gray-900'>Know More</button>
                </div>
                <div className="sidecontent md:w-2/5 w-full flex justify-center items-center flex-col ">
                    <div className="side mx-4 w-full flex justify-between items-center my-4">
                        <div className="icon mx-2">
                            <h1 className='text-black text-4xl bg-red-500 p-4 rounded-full'><GiCrossroad /></h1>
                        </div>
                        <div className="text">
                            <h1 className='text-xl font-bold'>Cross Country Drive</h1>
                            <p className='text-lg text-gray-600 '>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                    <div className="side mx-4 w-full flex justify-between items-center my-4">
                        <div className="icon mx-2">
                            <h1 className='text-black text-4xl bg-red-500 p-4 rounded-full'><HiCurrencyDollar /></h1>
                        </div>
                        <div className="text">
                            <h1 className='text-xl font-bold'>All Inclusive Pricing</h1>
                            <p className='text-lg text-gray-600 '>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>

                        </div>
                    </div>
                    <div className="side mx-4 w-full flex justify-between items-center my-4">
                        <div className="icon mx-2">
                            <h1 className='text-black text-4xl bg-red-500 p-4 rounded-full'><RiCreativeCommonsZeroFill /></h1>
                        </div>
                        <div className="text">
                            <h1 className='text-xl font-bold'>No Hidden Charges</h1>
                            <p className='text-lg text-gray-600 '>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>

                        </div>
                    </div>

                </div>
            </div>
            <div className="downloadbox bg-white">
                <div className="downloadcontent absolute flex justify-start items-center my-6">
                    <div className='w-1/2 pt-20 px-10'>
                        <h1 className='text-gray-900 md:text-3xl text-xl font-bold'>Download our app to get most out of it</h1>
                        <p className='text-gray-600 text-lg my-2'>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                        <div className="buttonbox absolute flex md:flex-row  pt-10  justify-start items-end mx-2 mb-2">
                        <div className='playstorebtn'></div>
                        <div className='applestorebtn'></div>
                    </div>
                    </div>
                    

                </div>
            </div>
        </>


    )
}

export default WhyUs
