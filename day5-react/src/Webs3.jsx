import React, {useState} from 'react'

const Webs3 = () => {
  const [formData, setFormData] = useState({});
  console.log("formData->", formData);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };
  return (
    <div className='flex flex-col gap-5 w-60'>
      <input onChange={handleChange} className='border-2' type="text" placeholder='Name' name='name' />
      <input onChange={handleChange} className='border-2' type="text" placeholder='Email' name='email' />
      <input onChange={handleChange} className='border-2' type="text" placeholder='password' name='password' />
      
    </div>
  )
}

export default Webs3
