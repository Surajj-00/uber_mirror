import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://img.freepik.com/premium-photo/yellow-ev-taxi-electric-vehicle-city_493806-16804.jpg')] bg-cover bg-center w-full h-screen flex flex-col justify-between">
        <img className='w-40' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="uber logo" />

        <div className="w-full bg-white p-8">
          <h2 className='font-bold text-3xl text-center'>Get Started with Uber</h2>
          <Link to='/login'
            className='flex items-center justify-center w-full bg-zinc-900 mt-2 p-2 rounded text-white'
          >
            Continue <IoMdArrowRoundForward className='ml-3' />
          </Link>

        </div>
        
      </div>
    </div>
  )
}

export default Home
