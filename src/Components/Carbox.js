import React, { useEffect, useState } from 'react'
import { FleetCAR_DATA } from '../assets/data/Cars_data'
import { defaultCar } from '../assets/data/Cars_data'
import { Link } from 'react-router-dom'



const Carbox = ({ id }) => {
  const [car, setCar] = useState([])

  console.log(id, "fetched item")
  console.log(car.name, "fetched fuel")
  console.log(defaultCar[0].model, "default car")


  useEffect(() => {
     const mycar = FleetCAR_DATA.filter(item => item.id==id)
    // const result = FleetCAR_DATA.filter(word => word.id == id);
    setCar(mycar)
    console.log(mycar, "mycar")


  }, [])


  return (
    <div>
      <div className="flex justify-center flex-wrap items-center">
          <div className="carimgbox md:w-2/3 w-full flex  justify-between items-center p-2">
            <div className="imgbox container mx-auto">
              <img src={!car ? defaultCar[0].Golf6 : car.img} alt={car.name} width={400} height={300} key={car.id} />
            </div>
          </div>
          <div className=" md:w-1/3 w-full carList my-2">
            <ul>
              <div className=''>
                <h1 className='text-2xl bg-red-500 text-white  p-2'> <b className='font-extrabold'>${!car?defaultCar[0].price :car.price}</b> / rent per day</h1>
                <h5><span className='font-bold'>Model</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{!car ? defaultCar[0].model : car.model}</span></h5>
                <h5><span className='font-bold'>Brand</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{!car?defaultCar[0].mark :car.mark}</span></h5>
                <h5><span className='font-bold'>Year</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{!car?defaultCar[0].year :car.year}</span></h5>
                <h5><span className='font-bold'>Ac</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{!car?defaultCar[0].air :car.air}</span></h5>
                <h5><span className='font-bold'>Transmission</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{!car?defaultCar[0].transmission :car.transmission}</span></h5>
                <h5><span className='font-bold'>Fuel</span> <span className='text-lg text-center  text-black  border-b border-gray-100 p-2 text-center'>{!car?defaultCar[0].fuel :car.fuel}</span></h5>
              </div>
              <div className="bun flex justify-center items-center my-2">

                <button className='text-white shadow-lg px-4 py-2 text-white bg-red-500 text-2xl text-center hover:bg-gray-900'>Reserve Now</button>
              </div>
            </ul>
          </div>
      

      </div>
    </div>
  )
}

export default Carbox
