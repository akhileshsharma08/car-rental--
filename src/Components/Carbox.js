import React, { useState } from 'react'
import {CAR_DATA} from '../assets/data//Cars_data'

const Carbox = (id) => {
    const [car,setCar] = useState([])

        // const mysingledata = CAR_DATA.filter(item => item.id === id);
        // setCar(mysingledata)
    
    console.log(car,"fetched item")




  return (
    <div>
      <div className="flex justify-center items-center">
      <div className="carimgbox w-1/2  justify-around items-center">
                       {CAR_DATA.map((carimg)=>(
                        <div className="imgbox container mx-auto">
                            <img src={carimg.img} alt={carimg.name} width={300} height={300} key={carimg.id} />
                        </div>
                       ))}
              </div>
                <div className=" w-1/4 carList px-4">
                    <ul>
                    {CAR_DATA.map((caritem)=>(
                        <div>
                            <h1 className='text-2xl bg-red-500 text-white  p-2'> <b className='font-extrabold'>${caritem.price}</b> / rent per day</h1>
                          <h5><span className='font-bold'>Model</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{caritem.model}</span></h5> 
                          <h5><span className='font-bold'>Brand</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{caritem.mark}</span></h5> 
                          <h5><span className='font-bold'>Year</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{caritem.year}</span></h5> 
                          <h5><span className='font-bold'>Ac</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{caritem.air}</span></h5> 
                          <h5><span className='font-bold'>Transmission</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{caritem.transmission}</span></h5> 
                          <h5><span className='font-bold'>Fuel</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{caritem.fuel}</span></h5> 
                        </div>
                    ))}
                    <button className='text-white shadow-lg px-4 py-2 text-white bg-red-500 text-2xl text-center hover:bg-gray-900'>Reserve Now</button>
              </ul>  
              </div>
      </div>
    </div>
  )
}

export default Carbox
