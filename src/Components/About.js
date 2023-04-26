import React from 'react'
import BookMessage from './BookMessage'
import Feature from './Feature'

const About = () => {
  return (
    <div className='mt-40'>
      <div className="abtContainer">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" className="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500"/>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="abtContent">
          <h1>About Company</h1>
          <h1>You start the engine and your adventure begins</h1>
          <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
          <div className="abticonbox">

          <div className="car-icon">
            <h1>20 Car Types</h1>
          </div>
          <div className="car-icon">
            <h1>85 Rental Outlets</h1>
          </div>
          <div className="car-icon">
            <h1>75 Repair Shop</h1>
          </div>

          </div>
        </div>
</div>
    </div>
  </div>
</section>
      </div>
      <Feature/>
     <BookMessage className='mb-0 pb-0'/>
    </div>
  )
}

export default About
