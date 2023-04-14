import React, { useEffect, useState } from 'react'
import { CAR_DATA } from '../assets/data//Cars_data'
import Cartbox from './Carbox'
import { Link } from 'react-router-dom'

const CarFleet = () => {
    console.log(CAR_DATA, "hjjh")
    const [id, setId] = useState('')

    const HandleIdClick = (e) => {
        e.preventDefault()
        // let myid= e.target.id
        setId(e.target.id)


    }

    return (
        <div>
            <div className="textcontainer py-20 text-center">
                <h2 className='text-xl font-bold my-4'>Vehicle Models</h2>
                <h1 className='text-5xl font-bold my-4'>Our rental fleet</h1>
                <p className='text-lg text-gray-600 my-4'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className="carbox flex flex-wrap justify-center items-center  ">
                <div className=" w-1/4 carList px-4">
                    <ul>
                        {CAR_DATA.map((caritem) => (
                            <Link key={caritem.id}>
                                <li className='text-xl font-bold bg-gray-200 hover:text-black hover:bg-red-500 border-b border-gray-100 py-4 text-center'> {caritem.name}</li></Link>
                        ))}
                    </ul>
                </div>
                <div className="box w-3/4">
                    <Cartbox  />
                </div>

            </div>
        </div>
    )
}

export default CarFleet
