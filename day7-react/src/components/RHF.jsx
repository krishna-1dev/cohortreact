import React from 'react'
import {useForm} from 'react-hook-form'

const RHF = () => {
  let {register, handleSubmit, reset, formState: {errors},} = useForm();

  const formSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}
      className='flex p-6 rounded bg-white flex-col gap-4'>

        <input 
        {...register('productName')}
        className='p-2 border border-gray-400 rounded' type="text" placeholder='product name' />

        <input 
        {...register('price')}
        className='p-2 border border-gray-400 rounded' type="number" placeholder='price'/>

        <span>Select category</span>
        <select
        {...register('category')}
        className='p-2 border border-gray-400 rounded'>
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>

        <input 
        {...register('image')}
        type="url" placeholder='image' className='p-2 border border-gray-400 rounded'/>

        <button className='p-2 bg-blue-600 text-white border rounded'>CREATE</button>
      </form>
    </div>
  );
};

export default RHF
