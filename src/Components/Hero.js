import React from 'react'
import {Link} from 'react-router-dom'




const Hero = ({title,submenu}) => {
    return (
        <>
            <div className=" py-2 flex justify-center items-center    ">
                <div className="imgbox w-full flex justify-center heroimg items-center opacity-95   ">
                    <div className="text flex flex-col items-center ">
                        <h1 className='capitalize text-8xl text-white font-bold '> {title} </h1><br />
                        <div>

                        <h1 className='capitalize text-3xl text-white font-bold '><Link to={'/'} className='underline hover:text-red-600 text-red-500'>Home</Link> / {submenu}</h1>
                        </div>
                    </div>
                </div>
            </div>

  
           </>
    )
}

export default Hero
