import React from 'react'

const Navbar = ({setIsCartOpen}) => {
  return (
    <div className='p-5 flex items-center justify-between bg-black rounded'>
      <div className='text-white'>logo</div>
      <div className='flex gap-10 text-xl'>
        <p className='text-white cursor-pointer' onClick={() => setIsCartOpen(false)}>Home</p>
        <p className='text-white cursor-pointer' onClick={() => setIsCartOpen(true)}>Cart</p>
      </div>
      <button className='text-white'>login</button>
    </div>
  )
}

export default Navbar
