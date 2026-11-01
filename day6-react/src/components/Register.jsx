import React, {useState} from 'react'

const Register = ({setToggle}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    let {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  }

  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input onChange={handleChange} type="text" placeholder='name' className='p-2 border border-gray-400 rounded' name='name'/>
        <input onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder='email' name='email'/>
        <input onChange={handleChange} className='p-2 border border-gray-400 rounded' type="password" placeholder='password' name='password'/>
        <button className='p-2 bg-blue-600 text-white rounded'>Register</button>
      </form>
      <p>Already have an account?
         <span onClick={() => setToggle((prev) => !prev)} className='text-blue-600 cursor-pointer'>Login here
          </span>
      </p>
    </div>
  )
}

export default Register;
