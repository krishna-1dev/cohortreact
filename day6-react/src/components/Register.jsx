import React from 'react'

const Register = ({setToggle}) => {
  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
      <h1>Register</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='name' className='p-2 border border-gray-400 rounded' />
        <input className='p-2 border border-gray-400 rounded' type="text" placeholder='email' />
        <input className='p-2 border border-gray-400 rounded' type="text" placeholder='password' />
        <button className='p-2 bg-blue-600 text-white rounded'>Register</button>
      </form>
      <p>Already have an account?
         <span onClick={() => setToggle(true)} className='text-blue-600 cursor-pointer'>Login here
          </span>
      </p>
    </div>
  )
}

export default Register;
