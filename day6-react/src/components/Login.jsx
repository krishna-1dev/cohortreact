import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
      <h1>Login</h1>
      <form action="" className='flex flex-col gap-4'>
        <input className='p-2 border border-gray-400 rounded' type="text" placeholder='email' />
        <input className='p-2 border border-gray-400 rounded' type="text" placeholder='password' />
        <button className='p-2 bg-blue-600 text-white rounded'>Login</button>
      </form>
      <p>Didn't have an account?
         <span onClick={() => {setToggle(false)}} className='text-blue-600 cursor-pointer'>Register here
        </span>
      </p>
    </div>
  )
}

export default Login
