import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainDetails, setCaptainDetails] = useState('');
  
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainDetails({
        email: email,
        password: password
      })
      setEmail('')
      setPassword('')
      // console.log(captainDetails);
    }

  return (

    <div className='p-7 h-screen flex flex-col justify-between'>

      <div className=''>
        <img className='w-24 mb-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="uber logo" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email address</h3>
          <input className='bg-[#eeeeee] p-2 border w-full text-lg placeholder:text-base rounded'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder='example@gmail.com'
          />

          <h3 className='text-lg font-medium mt-4 mb-2'>Enter Password</h3>
          <input className='bg-[#eeeeee] w-full p-2 border text-lg placeholder:text-base rounded'
            type="password"
            placeholder='******'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <button className='flex items-center justify-center w-full bg-zinc-900 mt-6 mb-2 p-2 rounded text-white'>Login</button>
        </form>

        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-700 font-semibold'>Register as a Captain</Link></p>

      </div>

      <div className="w-full text-center">
        <Link to='/login' className='bg-orange-500 w-full p-2 rounded text-white flex items-center justify-center'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
