import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className='text-xl font-bold'>Create User</h1>
      <form className='w-60 flex flex-col gap-3 rounded border-2 border-white p-4 bg-black'>
        <input className='p-2 rounded outline-0  border border-white text-white' type="text" placeholder='name' />
        <input className='p-2 rounded outline-0  border border-white text-white' type="text" placeholder='email' />
        <input className='p-2 rounded outline-0  border border-white text-white' type="number" placeholder='number' />
        <input className='p-2 rounded outline-0  border border-white text-white' type="url" placeholder='image' />
        <button className='text-white bg-blue-700 p-2 rounded-xl cursor pointer'>Add User</button>
      </form>
    </div>
  );
};

export default Form;
