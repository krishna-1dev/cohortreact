import React from 'react'
import {useForm} from 'react-hook-form'

const Form = () => {
  let {register, handleSubmit, reset, formState: {errors}, } = useForm();

  let formSubmit = (data) => {
    console.log(data)
  };

  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className='text-xl font-bold'>Create User</h1>

      <form className='w-90 flex flex-col gap-4 p-4 rounded border border-white bg-black' onSubmit={handleSubmit(formSubmit)}>

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="text" placeholder='name' {...register("name", {required: 'name is required'})} />
        {errors.name &&         
        <p className='text-red-700'>add name</p>}

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="email" placeholder='email'  {...register("email", {required: 'email is required'})} />
        {errors.email && 
        <p className='text-red-700'>add email</p>}

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="Number" placeholder='number'  {...register("mobile", {required: 'mobile number is required'})} />
        {errors.mobile &&
        <p className='text-red-700'>add number</p>}

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="url" placeholder='image'  {...register("image", {required: 'image is required'})} />
        {errors.image &&
        <p className='text-red-700'>add image</p>}

        <button className='text-white bg-blue-700 p-2 rounded-xl cursor-pointer'>Add User</button>
      </form>
    </div>
  );
};

export default Form;
