import React from 'react'

const Usercard = ({user, setToggle}) => {
  return (
    <div className='p-4 border border-white rounded flex flex-col gap-2 bg-black'>
      <div className='h-40 w-40'>
        <img src={user.image} alt="" className='object-cover h-full w-full rounded-l'/>
      </div>

      <div className='flex flex-col gap-1'>
        <h1 className='text-white'>{user.name}</h1>
        <p className='text-sm text-white'>{user.email}</p>
        <p className='text-sm text-white'>{user.contact}</p>
      </div>

      <div className='flex justify-between w-full gap-4'>
        <button className='bg-yellow-700 px-3 py-2 text-white rounded' onClick={() => setToggle(prev => !prev)}>Update</button>
        <button className='bg-red-600 px-3 py-2 text-white rounded'>Delete</button>
      </div>
    </div>
  );
};

export default Usercard;
