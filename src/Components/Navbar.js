import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [nav, setNav] = useState(false)


  const HandleNav = () => {
    setNav(!nav)
  }
  return (
    <>

      <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 mb-10  '>
        <div className="saleoffer bg-blue-500 text-white text-center py-2">
          <h5>Register Now And get  <span className='text-gray-800 font-bold'>10% Discount</span>  <span> 📞+91 8865029XXXX</span></h5>
        </div>
        <div className=' m-auto flex justify-between items-center p-2 text-gray-800 bg-white shadow-lg ' >
          <Link to='/'>
            <img src="../Logo.png" width={100} height={20} />
          </Link>
          <ul className='hidden sm:flex '>
            <li className='p-4 rounded-md text-gray-800 hover:text-red-500 font-semibold'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-4 rounded-lg text-gray-800 hover:text-red-500 font-semibold'>
              <Link to='/cars'>Cars</Link>
            </li>
            <li className='p-4 rounded-lg text-gray-800 hover:text-red-500 font-semibold'>
              <Link to='/about'>About</Link>
            </li>
            <li className='p-4 rounded-lg text-gray-800 hover:text-red-500 font-semibold'>
              <Link to='/contact'>Contact</Link>
            </li>
            {/* {user.displayName ? <li className=' p-4 rounded-lg text-gray-800 bg-red-500 text-white hover:text-red-500 hover:bg-yellow-400 font-semibold'>
              <Link to='/login'>Log in</Link>
            </li>:<li className=' p-4 rounded-lg text-gray-800 bg-red-500 text-white hover:text-red-500 hover:bg-yellow-400 font-semibold'>
              <Link to='/login'>Log Out</Link>
            </li> } */}
            {/* <li className=' p-4 rounded-lg  text-white bg-red-500  hover:text-white hover:bg-red-600 font-semibold'>
              <Link to='/login'>Log in</Link>
            </li> */}
            <div className="flex items-center">
            <a className="inline-block mr-4 text-sm font-semibold text-black hover:text-red-500" to="#">Sign In</a>
            <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-black hover:text-white border border-black-200 rounded-md overflow-hidden transition duration-300" to="#">
              <div className="absolute top-0 right-full w-full h-full bg-red-500 hover:text-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative">Register</span>
            </a>
          </div>
          </ul>


          {/* Mobile Button */}
          <div onClick={HandleNav} className='block sm:hidden z-10'>
            {nav ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
          {/* Mobile Menu */}
          <div className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }>
            <ul >
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-gray-800 p-2 '>
                <Link to='/'>Home </Link>
              </li>
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-gray-800 p-2 '>
                <Link to='/services'>Services</Link>
              </li>
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-gray-800 p-2 '>
                <Link to='/about'>About</Link>
              </li>
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-gray-800 p-2 '>
                <Link to='/contact'>Contact</Link>
              </li>

              <li onClick={HandleNav} className=' text-4xl text-white hover:text-gray-800 p-2 '>
                <Link to='/login'>Log in</Link>
              </li>


            </ul>
          </div>
        </div>

      </div>

    </>
  )
}

export default Navbar