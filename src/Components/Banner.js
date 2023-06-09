import React from 'react'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <div>
            <div className="herobox  flex justify-center items-center md:flex-row flex-col   ">
                <div className="content ml-4 md:w-1/2 w-full ">
                    <div className=" justify-center items-center p-4 mt-10">
                        <div >
                            <div className="spannn "><span className='text-xl font-bold mb-0 pt-10 '>Plan Your Trip Now</span></div>
                            <h1 className=" bannerHeading font-heading text-6xl  md:text-6xl  font-bold text-gray-900 mb-8 sm:mb-14">
                                <span>save <span className='text-red-500'> Big</span>  with Car Rental</span>
                                {/* <span className="font-serif italic"> Ever</span> */}
                            </h1>
                            <p className='text-gray-600 mb-4 font-semibold'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>

                            <Link className="relative px-4 group shadow-lg inline-block w-full sm:w-auto py-4  mb-24 text-white font-semibold rounded-md bg-red-500 overflow-hidden" href="#">
                                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                <div className="relative flex items-center justify-center">
                                    <span className="mr-4 px-8 text-2xl">Book Now</span>
                                    <span>
                                        <svg width="8" height="10" className="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z" fill="#FFF2EE"></path>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                                    
                        </div>

                    </div>
                </div>
                <div className="img-content   flex justify-end items-end  w-1/2">
                    <div className="boxbox  object-bottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Banner
