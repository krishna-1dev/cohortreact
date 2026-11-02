import React from 'react'
import {useForm} from 'react-hook-form'

const RHF = () => {
  return (
    <div>
      <form 
      className='flex p-6 rounded bg-white flex-col gap-4'>

        <input 
        className='p-2 border border-gray-400 rounded' type="text" placeholder='product name' />

        <input 
        className='p-2 border border-gray-400 rounded' type="number" placeholder='price'/>

        <span>Select category</span>
        <select
        className='p-2 border border-gray-400 rounded'>
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>

        <input 
        type="url" placeholder='image' className='p-2 border border-gray-400 rounded'/>

        <button className='p-2 bg-blue-600 text-white border rounded'>CREATE</button>
      </form>
    </div>
  )
}

export default RHF
