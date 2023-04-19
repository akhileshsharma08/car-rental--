import React from 'react'
import { BsFillCarFrontFill } from 'react-icons/bs'
import {MdSupportAgent} from 'react-icons/md'
import {FaCarSide} from 'react-icons/fa'
const Feature = () => {
    return (
        <div className='featurebox mt-10 py-20'>
            <div className="content">
                <h1 className='text-center text-gray-900 font-bold text-lg my-4'>PLAN YOUR TRIP NOW</h1>
                <h1 className='text-center text-gray-900 font-bold text-6xl my-4'>Quick & easy car rental</h1>
            </div>
            <div className="featureimgbox flex flex-col md:flex-row justify-center items-center my-5 pt-8 mx-4">
                <div className="md:w-1/3 bg-gray-100 shadow-lg p-4 rounded-lg  w-full my-4 mx-4">
                    <div className="featureicon flex justif-center items-center mx-auto bg-gray-900 rounded-full">
                        <h1 className='text-red-500 text-center mx-auto text-4xl'><BsFillCarFrontFill /></h1>

                    </div>
                    <h1 className='text-center text-3xl font-bold my-4'>Select Car</h1>
                    <p className='text-center text-gray-700 mx-4'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className="md:w-1/3 bg-gray-100 shadow-lg p-4 rounded-lg  w-full my-4 mx-4">
                    <div className="featureicon flex justif-center items-center mx-auto bg-gray-900 rounded-full">
                        <h1 className='text-red-500 text-center mx-auto text-4xl'><MdSupportAgent /></h1>

                    </div>
                    <h1 className='text-center text-3xl font-bold my-4'>Contact Operator</h1>
                    <p className='text-center text-gray-700 mx-4'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className="md:w-1/3 bg-gray-100 shadow-lg p-4 rounded-lg w-full m-4">
                    <div className="featureicon flex justif-center items-center mx-auto bg-gray-900 rounded-full">
                        <h1 className='text-red-500 text-center mx-auto text-4xl'><FaCarSide /></h1>

                    </div>
                    <h1 className='text-center text-3xl font-bold my-4'>Let's Drive</h1>
                    <p className='text-center text-gray-700 mx-4'>Whether you're hitting the open road, we've got you covered with our wide range of cars on single portal.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature
