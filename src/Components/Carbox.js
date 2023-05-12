import React, { useEffect, useState } from 'react'
import { data } from '../assets/data/Cars_data'
import { defaultCar } from '../assets/data/Cars_data'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, setProducts } from '../store/productSlice'


const Carbox = ({ id }) => {
  const [car, setCar] = useState({})
  // const { data: mycars, status } = useSelector((state) => state.car)

// const dispatch = useDispatch()
  /
  console.log( data,"data")
  


  useEffect(() => {
    console.log(id, "use id")
    // dispatch(fetchProducts())
     const singleCar = data.find(item => item.id==id)
    setCar(singleCar)
    console.log(car, "mycar---")
  }, [id])


  return (
    <div>
      {/* {<p>{car.name}</p>  } */}
      <div className="flex justify-center flex-wrap items-center">
          <div className="carimgbox md:w-2/4 w-full flex justify-center items-center">
            <div className="imgbox container ">
              <img src={ !car?defaultCar.img:car.img } alt={!car?defaultCar.name: car.name} width={400} height={300} key={!car?defaultCar.id: car.id} />
            </div>
          </div>
          <div className=" md:w-1/3 w-full carList my-2 mx-2">
            <ul>
              <div className=''>
                <h1 className='text-2xl bg-red-500 text-white  p-2'> <b className='font-extrabold'>${!car? defaultCar.price: car.price}</b> / rent per day</h1>
                <h5 className='border-b border-gray-100 py-2'><span className='font-bold'>Model : </span> <span className='text-lg text-center  text-black  2 '>{!car?defaultCar.model :  car.model }</span></h5>
                <h5 className='border-b border-gray-100 py-2'><span className='font-bold'>Brand : </span> <span className='text-lg text-center  text-black  2 '>{!car?defaultCar.mark : car.mark }</span></h5>
                <h5 className='border-b border-gray-100 py-2'><span className='font-bold'>Year : </span> <span className='text-lg text-center  text-black  2 '>{!car?defaultCar.year : car.year }</span></h5>
                <h5 className='border-b border-gray-100 py-2'><span className='font-bold'>Ac : </span> <span className='text-lg text-center  text-black  2 '>{!car?defaultCar.air : car.air }</span></h5>
                <h5 className='border-b border-gray-100 py-2'><span className='font-bold'>Transmission : </span> <span className='text-lg text-center  text-black  2 '>{!car?defaultCar.transmission : car.transmission }</span></h5>
                <h5 className='border-b border-gray-100 py-2'><span className='font-bold'>Fuel : </span> <span className='text-lg text-center  text-black  2 '>{!car?defaultCar.fuel : car.fuel }</span></h5>
             </div> 
              <div className="bun flex justify-center items-center my-2">
                <button className='shadow-lg px-4 py-2 text-white bg-red-500 text-2xl text-center hover:bg-gray-900'>Reserve Now </button>
              </div>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Carbox
