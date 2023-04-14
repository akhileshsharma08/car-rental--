import React from 'react'
// import Hero from './Hero'
import Banner from './Banner'
import BookForm from './BookForm'
import Feature from './Feature'
import CarFleet from './CarFleet'
import WhyUs from './WhyUs'
const Home = () => {
  return (
    <div className=' pt-28 '>
     <Banner/>
     <BookForm/>
     <Feature/>
     <CarFleet/>
     <WhyUs/>
    </div>
  )
}

export default Home
