import React from 'react'
import BookMessage from './BookMessage'

const Contact = () => {
  return (
    <div className='bg-contact'>
      <div className="py-20 ">
        <div className="container  flex md:flex-row flex-col justify-around items-center py-4">
          <div className="tagline md:w-1/2 w-full bg-white p-4">
            <h1 className='md:text-6xl text-4xl font-bold' >Need additional information?</h1>
            <h2 className='text-2xl text-gray-600 my-4'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</h2>
            <div className="box text-gray-900 font-bold text-2xl my-2">
              <h2 className='hover:text-red-600 my-2 cursor'>📞(+91) 886-502-9818 </h2>
              <h2 className='hover:text-red-600 my-2 cursor'> 📧rentalcar@gmail.com</h2>
              <h2 className='hover:text-red-600 my-2 cursor'> 📍 Agra, India</h2>
            </div>

          </div>
          <div className="contact-form md:w-1/2 w-full bg-white p-4 shadow-lg mb-4 mt-8">
            <div className="  bg-white flex flex-col md:ml-auto w-full md:py-4 mt-8 md:mt-0 ">
              {/* <h2 className="text-gray-900 text-lg mb-1 font-medium title-font my-4">Contact</h2> */}
              {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-500  text-lg">📤 Send</button>
              <p className="text-xs text-white mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </div>
        <BookMessage/>
      </div>
    </div>
  )
}

export default Contact
