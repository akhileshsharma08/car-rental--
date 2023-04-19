import React from 'react'
// import Hero from './Hero'
import Banner from './Banner'
import BookForm from './BookForm'
import Feature from './Feature'
import CarFleet from './CarFleet'
import WhyUs from './WhyUs'
import Testimonials from './Testimonials'
import Faq from './Faq'
const Home = () => {
  return (
    <div className=' pt-28 '>
     <Banner/>
     <BookForm/>
     <Feature/>
     <CarFleet/>
     <WhyUs/>
     <Faq/>
     <Testimonials/>
    </div>
  )
}

export default Home
