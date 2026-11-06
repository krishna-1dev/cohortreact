import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const Form = ({setUsers,setToggle, users}) => {

  let {register, handleSubmit, reset, formState: {errors}, } = useForm({mode: "onChange"});

  let formSubmit = (data) => {
    console.log(data);
    let updatedData = [...users, data];
    setUsers(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData));
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className='text-xl font-bold'>Create User</h1>

      <form className='w-90 flex flex-col gap-4 p-4 rounded border border-white bg-black' onSubmit={handleSubmit(formSubmit)}>

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="text" placeholder='name' 
        {...register("name", {required: 'name is required'})} />
        {errors.name &&         
        <p className='text-red-700'>{errors.name.message}</p>}

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="email" placeholder='email'  
        {...register("email", {required: 'email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'please enter a valid email address'
          }
        })} />
        {errors.email && 
        <p className='text-red-700'>{errors.email.message}</p>}

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="Number" placeholder='number'  
        {...register("mobile", {required: 'mobile is required',
          minLength: {value: 10,
            message: "minimum 10 digits are required"
          },
          maxLength: {
            value: 10,
            message: "maximum 10 digits are required"
          }
        })} />
        {errors.mobile &&
        <p className='text-red-700'>{errors.mobile.message}</p>}

        <input className='p-2 rounded outline-0 border-2 border-white text-white' type="url" placeholder='image' 
        {...register("image", {required: 'image is required'})} />
        {errors.image &&
        <p className='text-red-700'>{errors.image.message}</p>}

        <button className='text-white bg-blue-700 p-2 rounded-xl cursor-pointer'>Add User</button>
      </form>
    </div>
  );
};

export default Form;
