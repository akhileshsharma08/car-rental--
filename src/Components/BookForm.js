import React, { useEffect, useState } from 'react'

const BookForm = () => {
    const location = ['Agra', 'mathura', 'lucknow', 'delhi', 'ahmedabad', 'noida', 'dehradun']
    const cars = ['Tesla Malibu', 'Toyota Aventador', 'BMW X3', 'Nissan Mercielago', 'Ferrari Camry', 'Mercedes Benz XC90', 'Audi Fiesta', 'Rolls Royce Colorado']

    const [carType, setCarType] = useState('')
    const [pickup, setPickup] = useState('')
    const [drop, setDrop] = useState('')
    const [pickupdate, setPickUpdate] = useState('')
    const [dropDate, setDropDate] = useState('')

    const HandleBook = (e) => {
        // e.preventDefault()
        console.log(carType, pickup, drop, pickupdate, dropDate, "book form data")
    }
    useEffect(() => {
        HandleBook()
    }, [])



    return (
        <>
            <div className=" bookform my-4">
                <div className="formbox ">
                    <div className="lg:w-4/5 form-img bg-blue-100  mx-auto shadow-2xl rounded p-5">
                        <div className="    justify-center items-center mx-auto flex flex-wrap ">
                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm font-bold text-gray-800">Car Type</label>
                                    <div className="relative">
                                        <select onChange={(e) => { setCarType(e.target.value) }} className=" w-full  border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>Select Car Type</option>
                                            {cars.map((car) => (
                                                <option value={`${car}`} className='capitalize'>{car}</option>
                                            ))}


                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm font-bold text-gray-800">Pick Up</label>
                                    <div className="relative">
                                        <select onChange={(e) => { setPickup(e.target.value) }} className=" w-full  border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>Select Car Type</option>
                                            {location.map((item) => (
                                                <option value={`${item}`} className='capitalize'>{item}</option>
                                            ))}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm font-bold text-gray-800">Drop</label>
                                    <div className="relative">
                                        <select onChange={(e) => { setDrop(e.target.value) }} className=" w-full  border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>Select Car Type</option>
                                            {location.map((item) => (
                                                <option value={`${item}`} className='capitalize'>{item}</option>
                                            ))}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="pickupdate" className="leading-7 text-sm font-bold text-gray-800">Pick Up Date </label>
                                    <input type="date" onChange={(e) => { setPickUpdate(e.target.value) }} id="emailpickupdate" name="pickupdate" className="w-full p-2 bg-gray-100 bg-opacity-50  border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/3">
                                <div className="relative">
                                    <label htmlFor="dropDate" className="leading-7 text-sm font-bold text-gray-800">Drop Date </label>
                                    <input type="date" onChange={(e) => { setDropDate(e.target.value) }} id="dropdate" name="dropdate" className="w-full py-2 bg-white bg-opacity-50  border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className=" w-1/3 flex  mt-6">
                                <div className="w-full">
                                    <button type='submit' onClick={HandleBook} className='px-8 w-full text-white  font-semibold  bg-red-500 overflow-hidden text-Lg  py-3 hover:shadow-lg hover:bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookForm
