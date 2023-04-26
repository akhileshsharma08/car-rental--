import React from 'react'
import BookMessage from './BookMessage'
import Feature from './Feature'

const About = () => {
  return (
    <div className='mt-40'>
      <div className="abtContainer container">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt="feature" className="object-cover object-center h-full w-full" src="/img/abt.jpg" />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left ">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="abtContent">
                  <h1 className='text-2xl font-bold text-gray-800'>About Company</h1>
                  <h1 className='md:text-5xl text-4xl font-bold text-gray-800 my-4'>You start the engine and your adventure begins</h1>
                  <p className='text-lg text-gray-600 my-4'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                  <div className="abticonbox flex justify-center items-center flex-wrap my-4">

                    <div className="car-icon ml-2 mb-4" >
                      <h1 className='  text-lg font-bold text-gray-800'><span className='text-4xl w-12 h-10 rounded-full bg-red-500 px-2 py-1'>20</span>  Car Types</h1>
                    </div>
                    <div className="car-icon ml-2 mb-4">
                      <h1 className=' text-lg  font-bold text-gray-800'><span className='text-4xl w-12 h-10 rounded-full bg-red-500 px-2 py-1'>85</span>  Rental Outlets</h1>
                    </div>
                    <div className="car-icon ml-2 mb-4">
                      <h1 className=' text-lg  font-bold text-gray-800'><span className='text-4xl w-12 h-10 rounded-full bg-red-500 px-2 py-1'>75</span>  Repair Shop</h1>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Feature />
      <BookMessage className='mb-0 pb-0' />
    </div>
  )
}

export default About
