import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex items-center justify-between bg-black rounded-xl'>
      <div>
        <img className='w-10 border rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXze31Ftkykf-vSbA9d2ajVmcIq96jNK2RW3OQRk8L-Q&s=10" alt="" />
      </div>
      <div className='flex gap-6 font-semibold'>
        <p className='text-white'>Home</p>
        <p className='text-white'>About</p>
        <p className='text-white'>Contact</p>
      </div>
      <button className='text-white p-2 bg-blue-800 rounded-xl cursor-pointer' onClick={() => setToggle(prev => !prev)}>Create user</button>
    </div>
  );
};

export default Navbar;
