import React from 'react'
import Hero from './Hero'
import BookMessage from './BookMessage'
import { CAR_DATA } from '../assets/data/Cars_data'


const Cars = () => {
  console.log(CAR_DATA, "car data")

  return (
    <div className='my-30'>
      hi akhilesh
      <Hero title={'Cars'} submenu={'cars'} />
      {/* <div className="carimgbox container my-10  flex md:flex-row flex-col justify-center items-center">
        {CAR_DATA.map((car) => (
          <div className="p-2 w-full  md:w-1/3 shadow-lg m-2 text-center">
            <img alt={car.name} className="flex-shrink-0 rounded-lg w-full md:h-42 h-62 object-contain  mb-4" src={car.img} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">{car.name}</h2>
              <h3 className="text-gray-600 mb-2">{car.mark}</h3>
              <p className="mb-4 flex justify-around items-center text-gray-600"><span>{car.price}</span> <span>{car.doors}⭐</span></p>
              <p className="mb-4 flex justify-around items-center text-gray-600"><span>{car.transmission}</span> <span>{car.fuel}</span></p>
              <div className="i">
                <button className='px-8 py-2 w-full bg-red-500 hover:bg-red-600 hover:shadow-lg text-white font-bold'>Book Now</button>
              </div>
            </div>
          </div>

        ))}
      </div> */}


      <div className="carimgbox my-10">
        <div className="container mx-auto">
          <div className="mainbocx flex justify-around md:flex-row flex-col mx-auto flex-wrap items-center">
            {CAR_DATA.map((car) => (
              <div className="carDetailbox md:w-1/4 w-full bg-white p-2 m-2 shadow-lg hover:shadow-2xl text-center" key={car.id}>
                <div className=" ">
                  <div className="h-full   rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-contain object-center" src={car.img} width={200} height={100} alt={car.name} />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{car.mark}</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{car.name}</h1>
                      <div className="flex justify-around items-center flex-wrap">
                        <p className='text-md font-semibold text-gray-600'>${car.price} /day</p>
                        <p className='text-md font-semibold text-gray-600'>{car.doors} ⭐</p>
                        
                        
                      </div>
                      <div className="flex justify-around items-center flex-wrap">
                        <p className='text-md font-semibold text-gray-600 mb-2'>{car.transmission} </p>
                        <p className='text-md font-semibold text-gray-600'>{car.fuel} ⛽</p>
                        
                        
                      </div>
                      <div className="butt my-2 w-full">
                        <button className='w-full bg-red-500 hover:shadow-xl px-8 py-2 hover:bg-red-600 text-white text-lg'>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <BookMessage />
    </div>
  )
}

export default Cars
