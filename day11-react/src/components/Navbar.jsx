import React, {useContext} from 'react'
import { MyStore } from '../context/MyContext';

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore);
  return (
    <div className='bg-black rounded p-5 flex items-center justify-between'>
      <div className='text-white'>Logo</div>
      <div className='flex gap-10 text-xl'>
        <p className='cursor-pointer text-white'
        onClick={() => setIsCartOpen(false)}>Home</p>
        <p className='cursor-pointer text-white'
        onClick={() => setIsCartOpen(true)}>Cart</p>
      </div>
      <button className='text-white'>Login</button>
    </div>
  )
}

export default Navbar
