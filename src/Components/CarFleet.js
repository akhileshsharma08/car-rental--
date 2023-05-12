import React, {  useState } from 'react'
import { data } from '../assets/data/Cars_data'
import Cartbox from './Carbox'
import { Link } from 'react-router-dom'

const CarFleet = () => {
    const [id, setId] = useState('')

    // const HandleIdClick = (e) => {
    //     e.preventDefault()
    //     setId(e.target.id)


    // }

    return (
        <div>
            <div className="textcontainer py-20 text-center">
                <h2 className='text-xl font-bold my-4'>Vehicle Models</h2>
                <h1 className='text-5xl font-bold my-4'>Our rental fleet</h1>
                <p className='text-lg text-gray-600 my-4'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className="carbox flex justify-around items-center  ">
                <div className="listboxx w-1/4 mx-2 mb-2">
                    <ul>
                        {data.map((car) => (
                            <Link onClick={() => {setId(car.id); console.log(car.id)}} key={car.id}> <li className='text-lg font-bold bg-gray-200 mb-2  hover:text-black hover:bg-red-500 border-b border-gray-100 py-3 text-center'>{car.name}</li></Link>
                        ))}
                    </ul>
                </div>
                <div className="contentbox w-3/4">
                    <Cartbox id={id} />
                </div>




            </div>
        </div>
    )
}

export default CarFleet
